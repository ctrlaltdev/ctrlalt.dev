terraform {
  required_version = "~> 0.13"

  required_providers {
    aws = "~> 3.10"
  }
}

resource "aws_acm_certificate" "cert" {
  domain_name = "ctrlalt.dev"
  subject_alternative_names = [
    "*.ctrlalt.dev",
  ]

  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
