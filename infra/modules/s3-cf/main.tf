terraform {
  required_version = "~> 0.13"

  required_providers {
    aws = "~> 3.10"
  }
}

resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = var.name
}

resource "aws_s3_bucket" "b" {
  bucket = var.name
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = ["*"]
    expose_headers  = []
    max_age_seconds = 3000
  }
}

resource "aws_s3_bucket_policy" "b" {
  bucket = aws_s3_bucket.b.id

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Id": "BucketPolicy-${var.name}",
  "Statement": [
    {
      "Sid": "CFRead",
      "Effect": "Allow",
      "Principal": {
        "AWS": "${aws_cloudfront_origin_access_identity.oai.iam_arn}"
      },
      "Action": "s3:GetObject",
      "Resource": "${aws_s3_bucket.b.arn}/*"
    },
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "${aws_s3_bucket.b.arn}/*"
    }
  ]
}
POLICY
}

resource "aws_cloudfront_distribution" "d" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = var.name
  default_root_object = "index.html"

  aliases = [
    "ctrlalt.dev",
    "www.ctrlalt.dev"
  ]

  origin {
    # domain_name = aws_s3_bucket.b.bucket_domain_name
    domain_name = aws_s3_bucket.b.website_endpoint
    origin_id   = "s3-${var.name}"

    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_read_timeout      = 30
      origin_ssl_protocols = [
        "TLSv1",
        "TLSv1.1",
        "TLSv1.2"
      ]
    }

    # s3_origin_config {
    #   origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    # }
  }

  # custom_error_response {
  #   error_code         = 403
  #   response_code      = 200
  #   response_page_path = "/404.html"
  # }

  # custom_error_response {
  #   error_code         = 404
  #   response_code      = 200
  #   response_page_path = "/404.html"
  # }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3-${var.name}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn            = var.cert_arn
    ssl_support_method             = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  depends_on = [aws_s3_bucket.b]
}
