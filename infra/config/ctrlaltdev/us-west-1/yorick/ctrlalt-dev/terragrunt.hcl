locals {
  # Automatically load environment-level variables
  environment_vars = read_terragrunt_config(find_in_parent_folders("env.hcl"))

  # Extract out common variables for reuse
  env = local.environment_vars.locals.env
}

# Terragrunt will copy the Terraform configurations specified by the source parameter, along with any files in the
# working directory, into a temporary folder, and execute your Terraform commands in that folder.
terraform {
  source = "../../../../../modules//s3-cf/"
}

# Include all settings from the root terragrunt.hcl file
include {
  path = find_in_parent_folders()
}

# Dependencies
dependency "cert" {
  config_path = "../../../us-east-1/yorick/ctrlalt-cert"

  mock_outputs = {
    cert_arn = "arn:aws:acm:us-east-1:277596378320:certificate/48765d3c-5807-4ccf-aa7d-29ec08da1301"
  }
  mock_outputs_allowed_terraform_commands = ["validate", "plan"]
}

# These are the variables we have to pass in to use the module specified in the terragrunt configuration above
inputs = {
  name     = "ctrlalt.dev"
  cert_arn = dependency.cert.outputs.cert_arn
}
