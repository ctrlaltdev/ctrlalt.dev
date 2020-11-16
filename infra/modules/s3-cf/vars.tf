variable "prefix" {
  description = "Prefix for all the resources"
  type        = string
}

variable "env" {
  description = "Which env the resource is created in"
  type        = string
}

variable "name" {
  description = "The name of the resources"
  type        = string
}

variable "cert_arn" {
  description = "The Cert ARN to use"
  type        = string
}
