output "bucket_arn" {
  value = aws_s3_bucket.b.arn
}

output "bucket_fqdn" {
  value = aws_s3_bucket.b.bucket_domain_name
}

output "cf_fqdn" {
  value = aws_cloudfront_distribution.d.domain_name
}
