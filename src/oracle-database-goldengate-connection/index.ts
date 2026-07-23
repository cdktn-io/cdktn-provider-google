/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OracleDatabaseGoldengateConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#deletion_policy OracleDatabaseGoldengateConnection#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Whether or not to allow Terraform to destroy the instance. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#deletion_protection OracleDatabaseGoldengateConnection#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  * The GCP Oracle zone where Oracle GoldengateConnection is hosted.
  * Example: us-east4-b-r2.
  * If not specified, the system will pick a zone based on availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#gcp_oracle_zone OracleDatabaseGoldengateConnection#gcp_oracle_zone}
  */
  readonly gcpOracleZone?: string;
  /**
  * The ID of the GoldengateConnection to create. This value is
  * restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of
  * 63 characters in length. The value must start with a letter and end with a
  * letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#goldengate_connection_id OracleDatabaseGoldengateConnection#goldengate_connection_id}
  */
  readonly goldengateConnectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#id OracleDatabaseGoldengateConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels or tags associated with the GoldengateConnection.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#labels OracleDatabaseGoldengateConnection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#location OracleDatabaseGoldengateConnection#location}
  */
  readonly location: string;
  /**
  * The name of the OdbNetwork associated with the GoldengateConnection.
  * The format is
  * projects/{project}/locations/{location}/odbNetworks/{odb_network}.
  * It is optional but if specified, this should match the parent ODBNetwork
  * of the OdbSubnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#odb_network OracleDatabaseGoldengateConnection#odb_network}
  */
  readonly odbNetwork?: string;
  /**
  * The name of the OdbSubnet associated with the GoldengateConnection for IP
  * allocation.
  * Format:
  * projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#odb_subnet OracleDatabaseGoldengateConnection#odb_subnet}
  */
  readonly odbSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#project OracleDatabaseGoldengateConnection#project}
  */
  readonly project?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#properties OracleDatabaseGoldengateConnection#properties}
  */
  readonly properties: OracleDatabaseGoldengateConnectionProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#timeouts OracleDatabaseGoldengateConnection#timeouts}
  */
  readonly timeouts?: OracleDatabaseGoldengateConnectionTimeouts;
}
export interface OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionProperties {
  /**
  * Access key ID to access the Amazon Kinesis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#access_key_id OracleDatabaseGoldengateConnection#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The name of the AWS region.
  * If not provided, Goldengate will default to 'us-west-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#aws_region OracleDatabaseGoldengateConnection#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The endpoint URL of the Amazon Kinesis service.
  * e.g.: 'https://kinesis.us-east-1.amazonaws.com'
  * If not provided, Goldengate will default to
  * 'https://kinesis..amazonaws.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#endpoint OracleDatabaseGoldengateConnection#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Secret access key to access the Amazon Kinesis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#secret_access_key_secret OracleDatabaseGoldengateConnection#secret_access_key_secret}
  */
  readonly secretAccessKeySecret?: string;
  /**
  * The technology type of AmazonKinesisConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    aws_region: cdktn.stringToTerraform(struct!.awsRegion),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    secret_access_key_secret: cdktn.stringToTerraform(struct!.secretAccessKeySecret),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_key_id: {
      value: cdktn.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktn.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key_secret: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._secretAccessKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeySecret = this._secretAccessKeySecret;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._awsRegion = undefined;
      this._endpoint = undefined;
      this._secretAccessKeySecret = undefined;
      this._technologyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._awsRegion = value.awsRegion;
      this._endpoint = value.endpoint;
      this._secretAccessKeySecret = value.secretAccessKeySecret;
      this._technologyType = value.technologyType;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // secret_access_key_secret - computed: false, optional: true, required: false
  private _secretAccessKeySecret?: string; 
  public get secretAccessKeySecret() {
    return this.getStringAttribute('secret_access_key_secret');
  }
  public set secretAccessKeySecret(value: string) {
    this._secretAccessKeySecret = value;
  }
  public resetSecretAccessKeySecret() {
    this._secretAccessKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretInput() {
    return this._secretAccessKeySecret;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionProperties {
  /**
  * Connection URL.
  * e.g.:
  * 'jdbc:redshift://aws-redshift-instance.aaaaaaaaaaaa.us-east-2.redshift.amazonaws.com:5439/mydb'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#connection_url OracleDatabaseGoldengateConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Input only. The password Oracle Goldengate uses for Amazon Redshift connection
  * in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses for Amazon Redshift connection.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The technology type of AmazonRedshiftConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The username Oracle Goldengate uses to connect the associated system of
  * the given technology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_url: cdktn.stringToTerraform(struct!.connectionUrl),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_url: {
      value: cdktn.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._technologyType = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._technologyType = value.technologyType;
      this._username = value.username;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionProperties {
  /**
  * Access key ID to access the Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#access_key_id OracleDatabaseGoldengateConnection#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The Amazon Endpoint for S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#endpoint OracleDatabaseGoldengateConnection#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The name of the AWS region where the bucket is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#region OracleDatabaseGoldengateConnection#region}
  */
  readonly region?: string;
  /**
  * Secret access key to access the Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#secret_access_key_secret OracleDatabaseGoldengateConnection#secret_access_key_secret}
  */
  readonly secretAccessKeySecret?: string;
  /**
  * The technology type of AmazonS3Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    region: cdktn.stringToTerraform(struct!.region),
    secret_access_key_secret: cdktn.stringToTerraform(struct!.secretAccessKeySecret),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_key_id: {
      value: cdktn.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key_secret: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeySecret = this._secretAccessKeySecret;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._endpoint = undefined;
      this._region = undefined;
      this._secretAccessKeySecret = undefined;
      this._technologyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._endpoint = value.endpoint;
      this._region = value.region;
      this._secretAccessKeySecret = value.secretAccessKeySecret;
      this._technologyType = value.technologyType;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key_secret - computed: false, optional: true, required: false
  private _secretAccessKeySecret?: string; 
  public get secretAccessKeySecret() {
    return this.getStringAttribute('secret_access_key_secret');
  }
  public set secretAccessKeySecret(value: string) {
    this._secretAccessKeySecret = value;
  }
  public resetSecretAccessKeySecret() {
    this._secretAccessKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretInput() {
    return this._secretAccessKeySecret;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionProperties {
  /**
  * Sets the Azure storage account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#account OracleDatabaseGoldengateConnection#account}
  */
  readonly account?: string;
  /**
  * Azure storage account key. This property is required when
  * 'authentication_type' is set to 'SHARED_KEY'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#account_key_secret OracleDatabaseGoldengateConnection#account_key_secret}
  */
  readonly accountKeySecret?: string;
  /**
  * Authentication mechanism to access Azure Data Lake Storage.
  * Possible values:
  * SHARED_KEY
  * SHARED_ACCESS_SIGNATURE
  * AZURE_ACTIVE_DIRECTORY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#authentication_type OracleDatabaseGoldengateConnection#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * The endpoint used for authentication with Microsoft Entra ID (formerly
  * Azure Active Directory). Default value:
  * https://login.microsoftonline.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#azure_authority_host OracleDatabaseGoldengateConnection#azure_authority_host}
  */
  readonly azureAuthorityHost?: string;
  /**
  * Azure tenant ID of the application. This property is required when
  * 'authentication_type' is set to 'AZURE_ACTIVE_DIRECTORY'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#azure_tenant_id OracleDatabaseGoldengateConnection#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Azure client ID of the application. This property is required when
  * 'authentication_type' is set to 'AZURE_ACTIVE_DIRECTORY'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#client_id OracleDatabaseGoldengateConnection#client_id}
  */
  readonly clientId?: string;
  /**
  * Azure client secret (aka application password) for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#client_secret OracleDatabaseGoldengateConnection#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Azure Storage service endpoint.
  * e.g: https://test.blob.core.windows.net
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#endpoint OracleDatabaseGoldengateConnection#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Credential that uses a shared access signature (SAS) to authenticate to
  * an Azure Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#sas_token_secret OracleDatabaseGoldengateConnection#sas_token_secret}
  */
  readonly sasTokenSecret?: string;
  /**
  * The technology type of AzureDataLakeStorageConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account: cdktn.stringToTerraform(struct!.account),
    account_key_secret: cdktn.stringToTerraform(struct!.accountKeySecret),
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    azure_authority_host: cdktn.stringToTerraform(struct!.azureAuthorityHost),
    azure_tenant_id: cdktn.stringToTerraform(struct!.azureTenantId),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    sas_token_secret: cdktn.stringToTerraform(struct!.sasTokenSecret),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account: {
      value: cdktn.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_key_secret: {
      value: cdktn.stringToHclTerraform(struct!.accountKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_authority_host: {
      value: cdktn.stringToHclTerraform(struct!.azureAuthorityHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.azureTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sas_token_secret: {
      value: cdktn.stringToHclTerraform(struct!.sasTokenSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._accountKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKeySecret = this._accountKeySecret;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._azureAuthorityHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAuthorityHost = this._azureAuthorityHost;
    }
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._sasTokenSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasTokenSecret = this._sasTokenSecret;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._accountKeySecret = undefined;
      this._authenticationType = undefined;
      this._azureAuthorityHost = undefined;
      this._azureTenantId = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._endpoint = undefined;
      this._sasTokenSecret = undefined;
      this._technologyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._accountKeySecret = value.accountKeySecret;
      this._authenticationType = value.authenticationType;
      this._azureAuthorityHost = value.azureAuthorityHost;
      this._azureTenantId = value.azureTenantId;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._endpoint = value.endpoint;
      this._sasTokenSecret = value.sasTokenSecret;
      this._technologyType = value.technologyType;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // account_key_secret - computed: false, optional: true, required: false
  private _accountKeySecret?: string; 
  public get accountKeySecret() {
    return this.getStringAttribute('account_key_secret');
  }
  public set accountKeySecret(value: string) {
    this._accountKeySecret = value;
  }
  public resetAccountKeySecret() {
    this._accountKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeySecretInput() {
    return this._accountKeySecret;
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // azure_authority_host - computed: true, optional: true, required: false
  private _azureAuthorityHost?: string; 
  public get azureAuthorityHost() {
    return this.getStringAttribute('azure_authority_host');
  }
  public set azureAuthorityHost(value: string) {
    this._azureAuthorityHost = value;
  }
  public resetAzureAuthorityHost() {
    this._azureAuthorityHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAuthorityHostInput() {
    return this._azureAuthorityHost;
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // sas_token_secret - computed: false, optional: true, required: false
  private _sasTokenSecret?: string; 
  public get sasTokenSecret() {
    return this.getStringAttribute('sas_token_secret');
  }
  public set sasTokenSecret(value: string) {
    this._sasTokenSecret = value;
  }
  public resetSasTokenSecret() {
    this._sasTokenSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenSecretInput() {
    return this._sasTokenSecret;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionProperties {
  /**
  * JDBC connection string.
  * e.g.:
  * 'jdbc:sqlserver://.sql.azuresynapse.net:1433;database=;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.sql.azuresynapse.net;loginTimeout=300;'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#connection_string OracleDatabaseGoldengateConnection#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Input only. The password Oracle Goldengate uses for Azure Synapse Analytics
  * connection in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses for Azure Synapse Analytics
  * connection.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The technology type of AzureSynapseAnalyticsConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The username Oracle Goldengate uses to connect the associated system of
  * the given technology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_string: cdktn.stringToTerraform(struct!.connectionString),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_string: {
      value: cdktn.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionString = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._technologyType = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionString = value.connectionString;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._technologyType = value.technologyType;
      this._username = value.username;
    }
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionProperties {
  /**
  * Authentication type for Databricks.
  * Possible values:
  * PERSONAL_ACCESS_TOKEN
  * OAUTH_M2M
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#authentication_type OracleDatabaseGoldengateConnection#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * OAuth client id, only applicable for authentication_type == OAUTH_M2M
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#client_id OracleDatabaseGoldengateConnection#client_id}
  */
  readonly clientId?: string;
  /**
  * OAuth client secret, only applicable for authentication_type == OAUTH_M2M
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#client_secret OracleDatabaseGoldengateConnection#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Connection URL.
  * e.g.:
  * 'jdbc:databricks://adb-33934.4.azuredatabricks.net:443/default;transportMode=http;ssl=1;httpPath=sql/protocolv1/o/3393########44/0##3-7-hlrb'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#connection_url OracleDatabaseGoldengateConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Input only. The password used to connect to Databricks in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password used to connect to Databricks.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * External storage credential name to access files on object
  * storage such as ADLS Gen2, S3 or Cloud Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#storage_credential OracleDatabaseGoldengateConnection#storage_credential}
  */
  readonly storageCredential?: string;
  /**
  * The technology type of DatabricksConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    connection_url: cdktn.stringToTerraform(struct!.connectionUrl),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    storage_credential: cdktn.stringToTerraform(struct!.storageCredential),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_url: {
      value: cdktn.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_credential: {
      value: cdktn.stringToHclTerraform(struct!.storageCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._storageCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCredential = this._storageCredential;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._connectionUrl = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._storageCredential = undefined;
      this._technologyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._connectionUrl = value.connectionUrl;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._storageCredential = value.storageCredential;
      this._technologyType = value.technologyType;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // storage_credential - computed: false, optional: true, required: false
  private _storageCredential?: string; 
  public get storageCredential() {
    return this.getStringAttribute('storage_credential');
  }
  public set storageCredential(value: string) {
    this._storageCredential = value;
  }
  public resetStorageCredential() {
    this._storageCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCredentialInput() {
    return this._storageCredential;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributes {
  /**
  * The name of the property entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key OracleDatabaseGoldengateConnection#key}
  */
  readonly key: string;
  /**
  * The value of the property entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#value OracleDatabaseGoldengateConnection#value}
  */
  readonly value: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributesList extends cdktn.ComplexList {
  public internalValue? : OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributesOutputReference {
    return new OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionProperties {
  /**
  * The name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#database OracleDatabaseGoldengateConnection#database}
  */
  readonly database?: string;
  /**
  * The name or address of a host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#host OracleDatabaseGoldengateConnection#host}
  */
  readonly host?: string;
  /**
  * Input only. The password Oracle Goldengate uses for Db2 connection in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses for Db2 connection.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The port of an endpoint usually specified for a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#port OracleDatabaseGoldengateConnection#port}
  */
  readonly port?: number;
  /**
  * Security protocol for the DB2 database.
  * Possible values:
  * PLAIN
  * TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#security_protocol OracleDatabaseGoldengateConnection#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * The keystash file which contains the encrypted password to
  * the key database file. Not supported for IBM Db2 for i.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_client_keystash_file OracleDatabaseGoldengateConnection#ssl_client_keystash_file}
  */
  readonly sslClientKeystashFile?: string;
  /**
  * The keystore file created at the client containing the
  * server certificate / CA root certificate. Not supported for IBM Db2 for i.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_client_keystoredb_file OracleDatabaseGoldengateConnection#ssl_client_keystoredb_file}
  */
  readonly sslClientKeystoredbFile?: string;
  /**
  * The file which contains the self-signed server certificate
  * / Certificate Authority (CA) certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_server_certificate_file OracleDatabaseGoldengateConnection#ssl_server_certificate_file}
  */
  readonly sslServerCertificateFile?: string;
  /**
  * The technology type of Db2Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The username Oracle Goldengate uses to connect to the DB2 database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
  /**
  * additional_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#additional_attributes OracleDatabaseGoldengateConnection#additional_attributes}
  */
  readonly additionalAttributes?: OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable;
}

export function oracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    port: cdktn.numberToTerraform(struct!.port),
    security_protocol: cdktn.stringToTerraform(struct!.securityProtocol),
    ssl_client_keystash_file: cdktn.stringToTerraform(struct!.sslClientKeystashFile),
    ssl_client_keystoredb_file: cdktn.stringToTerraform(struct!.sslClientKeystoredbFile),
    ssl_server_certificate_file: cdktn.stringToTerraform(struct!.sslServerCertificateFile),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    username: cdktn.stringToTerraform(struct!.username),
    additional_attributes: cdktn.listMapper(oracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributesToTerraform, true)(struct!.additionalAttributes),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_protocol: {
      value: cdktn.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_keystash_file: {
      value: cdktn.stringToHclTerraform(struct!.sslClientKeystashFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_keystoredb_file: {
      value: cdktn.stringToHclTerraform(struct!.sslClientKeystoredbFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_server_certificate_file: {
      value: cdktn.stringToHclTerraform(struct!.sslServerCertificateFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_attributes: {
      value: cdktn.listMapperHcl(oracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributesToHclTerraform, true)(struct!.additionalAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sslClientKeystashFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientKeystashFile = this._sslClientKeystashFile;
    }
    if (this._sslClientKeystoredbFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientKeystoredbFile = this._sslClientKeystoredbFile;
    }
    if (this._sslServerCertificateFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerCertificateFile = this._sslServerCertificateFile;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._additionalAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAttributes = this._additionalAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._port = undefined;
      this._securityProtocol = undefined;
      this._sslClientKeystashFile = undefined;
      this._sslClientKeystoredbFile = undefined;
      this._sslServerCertificateFile = undefined;
      this._technologyType = undefined;
      this._username = undefined;
      this._additionalAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._port = value.port;
      this._securityProtocol = value.securityProtocol;
      this._sslClientKeystashFile = value.sslClientKeystashFile;
      this._sslClientKeystoredbFile = value.sslClientKeystoredbFile;
      this._sslServerCertificateFile = value.sslServerCertificateFile;
      this._technologyType = value.technologyType;
      this._username = value.username;
      this._additionalAttributes.internalValue = value.additionalAttributes;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // ssl_client_keystash_file - computed: false, optional: true, required: false
  private _sslClientKeystashFile?: string; 
  public get sslClientKeystashFile() {
    return this.getStringAttribute('ssl_client_keystash_file');
  }
  public set sslClientKeystashFile(value: string) {
    this._sslClientKeystashFile = value;
  }
  public resetSslClientKeystashFile() {
    this._sslClientKeystashFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeystashFileInput() {
    return this._sslClientKeystashFile;
  }

  // ssl_client_keystoredb_file - computed: false, optional: true, required: false
  private _sslClientKeystoredbFile?: string; 
  public get sslClientKeystoredbFile() {
    return this.getStringAttribute('ssl_client_keystoredb_file');
  }
  public set sslClientKeystoredbFile(value: string) {
    this._sslClientKeystoredbFile = value;
  }
  public resetSslClientKeystoredbFile() {
    this._sslClientKeystoredbFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeystoredbFileInput() {
    return this._sslClientKeystoredbFile;
  }

  // ssl_server_certificate_file - computed: false, optional: true, required: false
  private _sslServerCertificateFile?: string; 
  public get sslServerCertificateFile() {
    return this.getStringAttribute('ssl_server_certificate_file');
  }
  public set sslServerCertificateFile(value: string) {
    this._sslServerCertificateFile = value;
  }
  public resetSslServerCertificateFile() {
    this._sslServerCertificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerCertificateFileInput() {
    return this._sslServerCertificateFile;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes = new OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }
  public putAdditionalAttributes(value: OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable) {
    this._additionalAttributes.internalValue = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes.internalValue;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionProperties {
  /**
  * Authentication type for Elasticsearch.
  * Possible values:
  * NONE
  * BASIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#authentication_type OracleDatabaseGoldengateConnection#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Fingerprint required by TLS security protocol.
  * Eg.: '6152b2dfbff200f973c5074a5b91d06ab3b472c07c09a1ea57bb7fd406cdce9c'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#fingerprint OracleDatabaseGoldengateConnection#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Input only. The password Oracle Goldengate uses for Elastic Search connection
  * in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses for Elastic Search connection.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * Security protocol for Elasticsearch.
  * Possible values:
  * PLAIN
  * TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#security_protocol OracleDatabaseGoldengateConnection#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Comma separated list of Elasticsearch server addresses, specified as
  * host:port entries, where :port is optional. If port is not specified, it
  * defaults to 9200. Example:
  * "server1.example.com:4000,server2.example.com:4000"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#servers OracleDatabaseGoldengateConnection#servers}
  */
  readonly servers?: string;
  /**
  * The technology type of ElasticsearchConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The username Oracle Goldengate uses to connect the associated system of
  * the given technology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    fingerprint: cdktn.stringToTerraform(struct!.fingerprint),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    security_protocol: cdktn.stringToTerraform(struct!.securityProtocol),
    servers: cdktn.stringToTerraform(struct!.servers),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint: {
      value: cdktn.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktn.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktn.stringToHclTerraform(struct!.servers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._fingerprint = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._securityProtocol = undefined;
      this._servers = undefined;
      this._technologyType = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._fingerprint = value.fingerprint;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._securityProtocol = value.securityProtocol;
      this._servers = value.servers;
      this._technologyType = value.technologyType;
      this._username = value.username;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string; 
  public get servers() {
    return this.getStringAttribute('servers');
  }
  public set servers(value: string) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesGenericConnectionProperties {
  /**
  * The host of the GenericConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#host OracleDatabaseGoldengateConnection#host}
  */
  readonly host?: string;
  /**
  * The technology type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesGenericConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesGenericConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesGenericConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesGenericConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesGenericConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesGenericConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesGenericConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesGenericConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesGenericConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._technologyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._technologyType = value.technologyType;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionProperties {
  /**
  * The name of the GoldengateDeployment associated with the
  * GoldengateConnection.
  * Format:
  * projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#goldengate_deployment_id OracleDatabaseGoldengateConnection#goldengate_deployment_id}
  */
  readonly goldengateDeploymentId?: string;
  /**
  * The host of the GoldengateConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#host OracleDatabaseGoldengateConnection#host}
  */
  readonly host?: string;
  /**
  * Input only. The password used to connect to the Oracle Goldengate in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password used to connect to the Oracle Goldengate.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The port of the GoldengateConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#port OracleDatabaseGoldengateConnection#port}
  */
  readonly port?: number;
  /**
  * The technology type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The username credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    goldengate_deployment_id: cdktn.stringToTerraform(struct!.goldengateDeploymentId),
    host: cdktn.stringToTerraform(struct!.host),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    port: cdktn.numberToTerraform(struct!.port),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    goldengate_deployment_id: {
      value: cdktn.stringToHclTerraform(struct!.goldengateDeploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._goldengateDeploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.goldengateDeploymentId = this._goldengateDeploymentId;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._goldengateDeploymentId = undefined;
      this._host = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._port = undefined;
      this._technologyType = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._goldengateDeploymentId = value.goldengateDeploymentId;
      this._host = value.host;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._port = value.port;
      this._technologyType = value.technologyType;
      this._username = value.username;
    }
  }

  // goldengate_deployment_id - computed: false, optional: true, required: false
  private _goldengateDeploymentId?: string; 
  public get goldengateDeploymentId() {
    return this.getStringAttribute('goldengate_deployment_id');
  }
  public set goldengateDeploymentId(value: string) {
    this._goldengateDeploymentId = value;
  }
  public resetGoldengateDeploymentId() {
    this._goldengateDeploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goldengateDeploymentIdInput() {
    return this._goldengateDeploymentId;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionProperties {
  /**
  * The service account key file Cloud Storage containing the
  * credentials required to use Google BigQuery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#service_account_key_file OracleDatabaseGoldengateConnection#service_account_key_file}
  */
  readonly serviceAccountKeyFile?: string;
  /**
  * The technology type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_account_key_file: cdktn.stringToTerraform(struct!.serviceAccountKeyFile),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_account_key_file: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyFile = this._serviceAccountKeyFile;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccountKeyFile = undefined;
      this._technologyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccountKeyFile = value.serviceAccountKeyFile;
      this._technologyType = value.technologyType;
    }
  }

  // service_account_key_file - computed: false, optional: true, required: false
  private _serviceAccountKeyFile?: string; 
  public get serviceAccountKeyFile() {
    return this.getStringAttribute('service_account_key_file');
  }
  public set serviceAccountKeyFile(value: string) {
    this._serviceAccountKeyFile = value;
  }
  public resetServiceAccountKeyFile() {
    this._serviceAccountKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyFileInput() {
    return this._serviceAccountKeyFile;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionProperties {
  /**
  * The service account key Cloud Storage file containing the
  * credentials required to use Google Cloud Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#service_account_key_file OracleDatabaseGoldengateConnection#service_account_key_file}
  */
  readonly serviceAccountKeyFile?: string;
  /**
  * The technology type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_account_key_file: cdktn.stringToTerraform(struct!.serviceAccountKeyFile),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_account_key_file: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyFile = this._serviceAccountKeyFile;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccountKeyFile = undefined;
      this._technologyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccountKeyFile = value.serviceAccountKeyFile;
      this._technologyType = value.technologyType;
    }
  }

  // service_account_key_file - computed: false, optional: true, required: false
  private _serviceAccountKeyFile?: string; 
  public get serviceAccountKeyFile() {
    return this.getStringAttribute('service_account_key_file');
  }
  public set serviceAccountKeyFile(value: string) {
    this._serviceAccountKeyFile = value;
  }
  public resetServiceAccountKeyFile() {
    this._serviceAccountKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyFileInput() {
    return this._serviceAccountKeyFile;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionProperties {
  /**
  * The content of the service account key file containing the
  * credentials required to use Google Pub/Sub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#service_account_key_file OracleDatabaseGoldengateConnection#service_account_key_file}
  */
  readonly serviceAccountKeyFile?: string;
  /**
  * The technology type of GooglePubsubConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_account_key_file: cdktn.stringToTerraform(struct!.serviceAccountKeyFile),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_account_key_file: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyFile = this._serviceAccountKeyFile;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccountKeyFile = undefined;
      this._technologyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccountKeyFile = value.serviceAccountKeyFile;
      this._technologyType = value.technologyType;
    }
  }

  // service_account_key_file - computed: false, optional: true, required: false
  private _serviceAccountKeyFile?: string; 
  public get serviceAccountKeyFile() {
    return this.getStringAttribute('service_account_key_file');
  }
  public set serviceAccountKeyFile(value: string) {
    this._serviceAccountKeyFile = value;
  }
  public resetServiceAccountKeyFile() {
    this._serviceAccountKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyFileInput() {
    return this._serviceAccountKeyFile;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionProperties {
  /**
  * The content of the Hadoop Distributed File System
  * configuration file (core-site.xml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#core_site_xml OracleDatabaseGoldengateConnection#core_site_xml}
  */
  readonly coreSiteXml?: string;
  /**
  * The technology type of HdfsConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesHdfsConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    core_site_xml: cdktn.stringToTerraform(struct!.coreSiteXml),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesHdfsConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    core_site_xml: {
      value: cdktn.stringToHclTerraform(struct!.coreSiteXml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreSiteXml !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreSiteXml = this._coreSiteXml;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreSiteXml = undefined;
      this._technologyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreSiteXml = value.coreSiteXml;
      this._technologyType = value.technologyType;
    }
  }

  // core_site_xml - computed: false, optional: true, required: false
  private _coreSiteXml?: string; 
  public get coreSiteXml() {
    return this.getStringAttribute('core_site_xml');
  }
  public set coreSiteXml(value: string) {
    this._coreSiteXml = value;
  }
  public resetCoreSiteXml() {
    this._coreSiteXml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreSiteXmlInput() {
    return this._coreSiteXml;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalog {
  /**
  * The catalog ID of Glue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#glue_id OracleDatabaseGoldengateConnection#glue_id}
  */
  readonly glueId: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalogToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalogOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    glue_id: cdktn.stringToTerraform(struct!.glueId),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalogToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalogOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    glue_id: {
      value: cdktn.stringToHclTerraform(struct!.glueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueId = this._glueId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._glueId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._glueId = value.glueId;
    }
  }

  // glue_id - computed: false, optional: false, required: true
  private _glueId?: string; 
  public get glueId() {
    return this.getStringAttribute('glue_id');
  }
  public set glueId(value: string) {
    this._glueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get glueIdInput() {
    return this._glueId;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalog {
  /**
  * The Nessie branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#branch OracleDatabaseGoldengateConnection#branch}
  */
  readonly branch: string;
  /**
  * The Nessie uri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#uri OracleDatabaseGoldengateConnection#uri}
  */
  readonly uri: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalogToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalogOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    branch: cdktn.stringToTerraform(struct!.branch),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalogToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalogOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    branch: {
      value: cdktn.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._uri = value.uri;
    }
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalog {
  /**
  * The Polaris client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#client_id OracleDatabaseGoldengateConnection#client_id}
  */
  readonly clientId: string;
  /**
  * The Polaris client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#client_secret OracleDatabaseGoldengateConnection#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The catalog name within Polaris.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#polaris_catalog OracleDatabaseGoldengateConnection#polaris_catalog}
  */
  readonly polarisCatalog: string;
  /**
  * The Polaris principal role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#principal_role OracleDatabaseGoldengateConnection#principal_role}
  */
  readonly principalRole: string;
  /**
  * The Polaris uri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#uri OracleDatabaseGoldengateConnection#uri}
  */
  readonly uri: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalogToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalogOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    polaris_catalog: cdktn.stringToTerraform(struct!.polarisCatalog),
    principal_role: cdktn.stringToTerraform(struct!.principalRole),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalogToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalogOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polaris_catalog: {
      value: cdktn.stringToHclTerraform(struct!.polarisCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_role: {
      value: cdktn.stringToHclTerraform(struct!.principalRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._polarisCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.polarisCatalog = this._polarisCatalog;
    }
    if (this._principalRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalRole = this._principalRole;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._polarisCatalog = undefined;
      this._principalRole = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._polarisCatalog = value.polarisCatalog;
      this._principalRole = value.principalRole;
      this._uri = value.uri;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // polaris_catalog - computed: false, optional: false, required: true
  private _polarisCatalog?: string; 
  public get polarisCatalog() {
    return this.getStringAttribute('polaris_catalog');
  }
  public set polarisCatalog(value: string) {
    this._polarisCatalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get polarisCatalogInput() {
    return this._polarisCatalog;
  }

  // principal_role - computed: false, optional: false, required: true
  private _principalRole?: string; 
  public get principalRole() {
    return this.getStringAttribute('principal_role');
  }
  public set principalRole(value: string) {
    this._principalRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalRoleInput() {
    return this._principalRole;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalog {
  /**
  * The content of the configuration file containing additional properties for
  * the REST catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#properties OracleDatabaseGoldengateConnection#properties}
  */
  readonly properties?: string;
  /**
  * The REST uri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#uri OracleDatabaseGoldengateConnection#uri}
  */
  readonly uri: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalogToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalogOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    properties: cdktn.stringToTerraform(struct!.properties),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalogToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalogOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    properties: {
      value: cdktn.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties = value.properties;
      this._uri = value.uri;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalog {
  /**
  * The type of Iceberg catalog.
  * Possible values:
  * GLUE
  * HADOOP
  * NESSIE
  * POLARIS
  * REST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#catalog_type OracleDatabaseGoldengateConnection#catalog_type}
  */
  readonly catalogType: string;
  /**
  * glue_iceberg_catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#glue_iceberg_catalog OracleDatabaseGoldengateConnection#glue_iceberg_catalog}
  */
  readonly glueIcebergCatalog?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalog;
  /**
  * nessie_iceberg_catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#nessie_iceberg_catalog OracleDatabaseGoldengateConnection#nessie_iceberg_catalog}
  */
  readonly nessieIcebergCatalog?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalog;
  /**
  * polaris_iceberg_catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#polaris_iceberg_catalog OracleDatabaseGoldengateConnection#polaris_iceberg_catalog}
  */
  readonly polarisIcebergCatalog?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalog;
  /**
  * rest_iceberg_catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#rest_iceberg_catalog OracleDatabaseGoldengateConnection#rest_iceberg_catalog}
  */
  readonly restIcebergCatalog?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalog;
}

export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_type: cdktn.stringToTerraform(struct!.catalogType),
    glue_iceberg_catalog: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalogToTerraform(struct!.glueIcebergCatalog),
    nessie_iceberg_catalog: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalogToTerraform(struct!.nessieIcebergCatalog),
    polaris_iceberg_catalog: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalogToTerraform(struct!.polarisIcebergCatalog),
    rest_iceberg_catalog: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalogToTerraform(struct!.restIcebergCatalog),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_type: {
      value: cdktn.stringToHclTerraform(struct!.catalogType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glue_iceberg_catalog: {
      value: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalogToHclTerraform(struct!.glueIcebergCatalog),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalogList",
    },
    nessie_iceberg_catalog: {
      value: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalogToHclTerraform(struct!.nessieIcebergCatalog),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalogList",
    },
    polaris_iceberg_catalog: {
      value: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalogToHclTerraform(struct!.polarisIcebergCatalog),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalogList",
    },
    rest_iceberg_catalog: {
      value: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalogToHclTerraform(struct!.restIcebergCatalog),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogType !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogType = this._catalogType;
    }
    if (this._glueIcebergCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueIcebergCatalog = this._glueIcebergCatalog?.internalValue;
    }
    if (this._nessieIcebergCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nessieIcebergCatalog = this._nessieIcebergCatalog?.internalValue;
    }
    if (this._polarisIcebergCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polarisIcebergCatalog = this._polarisIcebergCatalog?.internalValue;
    }
    if (this._restIcebergCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restIcebergCatalog = this._restIcebergCatalog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogType = undefined;
      this._glueIcebergCatalog.internalValue = undefined;
      this._nessieIcebergCatalog.internalValue = undefined;
      this._polarisIcebergCatalog.internalValue = undefined;
      this._restIcebergCatalog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogType = value.catalogType;
      this._glueIcebergCatalog.internalValue = value.glueIcebergCatalog;
      this._nessieIcebergCatalog.internalValue = value.nessieIcebergCatalog;
      this._polarisIcebergCatalog.internalValue = value.polarisIcebergCatalog;
      this._restIcebergCatalog.internalValue = value.restIcebergCatalog;
    }
  }

  // catalog_type - computed: false, optional: false, required: true
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // glue_iceberg_catalog - computed: false, optional: true, required: false
  private _glueIcebergCatalog = new OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalogOutputReference(this, "glue_iceberg_catalog");
  public get glueIcebergCatalog() {
    return this._glueIcebergCatalog;
  }
  public putGlueIcebergCatalog(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogGlueIcebergCatalog) {
    this._glueIcebergCatalog.internalValue = value;
  }
  public resetGlueIcebergCatalog() {
    this._glueIcebergCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueIcebergCatalogInput() {
    return this._glueIcebergCatalog.internalValue;
  }

  // nessie_iceberg_catalog - computed: false, optional: true, required: false
  private _nessieIcebergCatalog = new OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalogOutputReference(this, "nessie_iceberg_catalog");
  public get nessieIcebergCatalog() {
    return this._nessieIcebergCatalog;
  }
  public putNessieIcebergCatalog(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogNessieIcebergCatalog) {
    this._nessieIcebergCatalog.internalValue = value;
  }
  public resetNessieIcebergCatalog() {
    this._nessieIcebergCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nessieIcebergCatalogInput() {
    return this._nessieIcebergCatalog.internalValue;
  }

  // polaris_iceberg_catalog - computed: false, optional: true, required: false
  private _polarisIcebergCatalog = new OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalogOutputReference(this, "polaris_iceberg_catalog");
  public get polarisIcebergCatalog() {
    return this._polarisIcebergCatalog;
  }
  public putPolarisIcebergCatalog(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogPolarisIcebergCatalog) {
    this._polarisIcebergCatalog.internalValue = value;
  }
  public resetPolarisIcebergCatalog() {
    this._polarisIcebergCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polarisIcebergCatalogInput() {
    return this._polarisIcebergCatalog.internalValue;
  }

  // rest_iceberg_catalog - computed: false, optional: true, required: false
  private _restIcebergCatalog = new OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalogOutputReference(this, "rest_iceberg_catalog");
  public get restIcebergCatalog() {
    return this._restIcebergCatalog;
  }
  public putRestIcebergCatalog(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogRestIcebergCatalog) {
    this._restIcebergCatalog.internalValue = value;
  }
  public resetRestIcebergCatalog() {
    this._restIcebergCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restIcebergCatalogInput() {
    return this._restIcebergCatalog.internalValue;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorage {
  /**
  * The access key ID of Amazon S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#access_key_id OracleDatabaseGoldengateConnection#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * The bucket of Amazon S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#bucket OracleDatabaseGoldengateConnection#bucket}
  */
  readonly bucket: string;
  /**
  * The endpoint of Amazon S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#endpoint OracleDatabaseGoldengateConnection#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The region of Amazon S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#region OracleDatabaseGoldengateConnection#region}
  */
  readonly region: string;
  /**
  * The scheme type of Amazon S3.
  * Possible values:
  * S3
  * S3A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#scheme_type OracleDatabaseGoldengateConnection#scheme_type}
  */
  readonly schemeType: string;
  /**
  * The secret access key of Amazon S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#secret_access_key_secret OracleDatabaseGoldengateConnection#secret_access_key_secret}
  */
  readonly secretAccessKeySecret?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorageToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorageOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    bucket: cdktn.stringToTerraform(struct!.bucket),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    region: cdktn.stringToTerraform(struct!.region),
    scheme_type: cdktn.stringToTerraform(struct!.schemeType),
    secret_access_key_secret: cdktn.stringToTerraform(struct!.secretAccessKeySecret),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorageToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorageOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_key_id: {
      value: cdktn.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme_type: {
      value: cdktn.stringToHclTerraform(struct!.schemeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key_secret: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._schemeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeType = this._schemeType;
    }
    if (this._secretAccessKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeySecret = this._secretAccessKeySecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._bucket = undefined;
      this._endpoint = undefined;
      this._region = undefined;
      this._schemeType = undefined;
      this._secretAccessKeySecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._bucket = value.bucket;
      this._endpoint = value.endpoint;
      this._region = value.region;
      this._schemeType = value.schemeType;
      this._secretAccessKeySecret = value.secretAccessKeySecret;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // scheme_type - computed: false, optional: false, required: true
  private _schemeType?: string; 
  public get schemeType() {
    return this.getStringAttribute('scheme_type');
  }
  public set schemeType(value: string) {
    this._schemeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeTypeInput() {
    return this._schemeType;
  }

  // secret_access_key_secret - computed: false, optional: true, required: false
  private _secretAccessKeySecret?: string; 
  public get secretAccessKeySecret() {
    return this.getStringAttribute('secret_access_key_secret');
  }
  public set secretAccessKeySecret(value: string) {
    this._secretAccessKeySecret = value;
  }
  public resetSecretAccessKeySecret() {
    this._secretAccessKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretInput() {
    return this._secretAccessKeySecret;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorage {
  /**
  * The account key of Azure Data Lake Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#account_key_secret OracleDatabaseGoldengateConnection#account_key_secret}
  */
  readonly accountKeySecret?: string;
  /**
  * The account of Azure Data Lake Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#azure_account OracleDatabaseGoldengateConnection#azure_account}
  */
  readonly azureAccount: string;
  /**
  * The container of Azure Data Lake Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#container OracleDatabaseGoldengateConnection#container}
  */
  readonly container: string;
  /**
  * The endpoint of Azure Data Lake Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#endpoint OracleDatabaseGoldengateConnection#endpoint}
  */
  readonly endpoint?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorageToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorageOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_key_secret: cdktn.stringToTerraform(struct!.accountKeySecret),
    azure_account: cdktn.stringToTerraform(struct!.azureAccount),
    container: cdktn.stringToTerraform(struct!.container),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorageToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorageOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_key_secret: {
      value: cdktn.stringToHclTerraform(struct!.accountKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_account: {
      value: cdktn.stringToHclTerraform(struct!.azureAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: cdktn.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKeySecret = this._accountKeySecret;
    }
    if (this._azureAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAccount = this._azureAccount;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountKeySecret = undefined;
      this._azureAccount = undefined;
      this._container = undefined;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountKeySecret = value.accountKeySecret;
      this._azureAccount = value.azureAccount;
      this._container = value.container;
      this._endpoint = value.endpoint;
    }
  }

  // account_key_secret - computed: false, optional: true, required: false
  private _accountKeySecret?: string; 
  public get accountKeySecret() {
    return this.getStringAttribute('account_key_secret');
  }
  public set accountKeySecret(value: string) {
    this._accountKeySecret = value;
  }
  public resetAccountKeySecret() {
    this._accountKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeySecretInput() {
    return this._accountKeySecret;
  }

  // azure_account - computed: false, optional: false, required: true
  private _azureAccount?: string; 
  public get azureAccount() {
    return this.getStringAttribute('azure_account');
  }
  public set azureAccount(value: string) {
    this._azureAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAccountInput() {
    return this._azureAccount;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorage {
  /**
  * The bucket of Google Cloud Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#bucket OracleDatabaseGoldengateConnection#bucket}
  */
  readonly bucket: string;
  /**
  * The project ID of Google Cloud Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#project_id OracleDatabaseGoldengateConnection#project_id}
  */
  readonly projectId: string;
  /**
  * The service account key file of Google Cloud Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#service_account_key_file OracleDatabaseGoldengateConnection#service_account_key_file}
  */
  readonly serviceAccountKeyFile?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorageToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorageOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    service_account_key_file: cdktn.stringToTerraform(struct!.serviceAccountKeyFile),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorageToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorageOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_key_file: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._serviceAccountKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyFile = this._serviceAccountKeyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._projectId = undefined;
      this._serviceAccountKeyFile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._projectId = value.projectId;
      this._serviceAccountKeyFile = value.serviceAccountKeyFile;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_account_key_file - computed: false, optional: true, required: false
  private _serviceAccountKeyFile?: string; 
  public get serviceAccountKeyFile() {
    return this.getStringAttribute('service_account_key_file');
  }
  public set serviceAccountKeyFile(value: string) {
    this._serviceAccountKeyFile = value;
  }
  public resetServiceAccountKeyFile() {
    this._serviceAccountKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyFileInput() {
    return this._serviceAccountKeyFile;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorage {
  /**
  * The type of Iceberg storage.
  * Possible values:
  * AMAZON_S3
  * GOOGLE_CLOUD_STORAGE
  * AZURE_DATA_LAKE_STORAGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#storage_type OracleDatabaseGoldengateConnection#storage_type}
  */
  readonly storageType: string;
  /**
  * amazon_s3_iceberg_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#amazon_s3_iceberg_storage OracleDatabaseGoldengateConnection#amazon_s3_iceberg_storage}
  */
  readonly amazonS3IcebergStorage?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorage;
  /**
  * azure_data_lake_storage_iceberg_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#azure_data_lake_storage_iceberg_storage OracleDatabaseGoldengateConnection#azure_data_lake_storage_iceberg_storage}
  */
  readonly azureDataLakeStorageIcebergStorage?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorage;
  /**
  * google_cloud_storage_iceberg_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#google_cloud_storage_iceberg_storage OracleDatabaseGoldengateConnection#google_cloud_storage_iceberg_storage}
  */
  readonly googleCloudStorageIcebergStorage?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorage;
}

export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    storage_type: cdktn.stringToTerraform(struct!.storageType),
    amazon_s3_iceberg_storage: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorageToTerraform(struct!.amazonS3IcebergStorage),
    azure_data_lake_storage_iceberg_storage: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorageToTerraform(struct!.azureDataLakeStorageIcebergStorage),
    google_cloud_storage_iceberg_storage: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorageToTerraform(struct!.googleCloudStorageIcebergStorage),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    storage_type: {
      value: cdktn.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amazon_s3_iceberg_storage: {
      value: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorageToHclTerraform(struct!.amazonS3IcebergStorage),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorageList",
    },
    azure_data_lake_storage_iceberg_storage: {
      value: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorageToHclTerraform(struct!.azureDataLakeStorageIcebergStorage),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorageList",
    },
    google_cloud_storage_iceberg_storage: {
      value: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorageToHclTerraform(struct!.googleCloudStorageIcebergStorage),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._amazonS3IcebergStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonS3IcebergStorage = this._amazonS3IcebergStorage?.internalValue;
    }
    if (this._azureDataLakeStorageIcebergStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDataLakeStorageIcebergStorage = this._azureDataLakeStorageIcebergStorage?.internalValue;
    }
    if (this._googleCloudStorageIcebergStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageIcebergStorage = this._googleCloudStorageIcebergStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageType = undefined;
      this._amazonS3IcebergStorage.internalValue = undefined;
      this._azureDataLakeStorageIcebergStorage.internalValue = undefined;
      this._googleCloudStorageIcebergStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageType = value.storageType;
      this._amazonS3IcebergStorage.internalValue = value.amazonS3IcebergStorage;
      this._azureDataLakeStorageIcebergStorage.internalValue = value.azureDataLakeStorageIcebergStorage;
      this._googleCloudStorageIcebergStorage.internalValue = value.googleCloudStorageIcebergStorage;
    }
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // amazon_s3_iceberg_storage - computed: false, optional: true, required: false
  private _amazonS3IcebergStorage = new OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorageOutputReference(this, "amazon_s3_iceberg_storage");
  public get amazonS3IcebergStorage() {
    return this._amazonS3IcebergStorage;
  }
  public putAmazonS3IcebergStorage(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAmazonS3IcebergStorage) {
    this._amazonS3IcebergStorage.internalValue = value;
  }
  public resetAmazonS3IcebergStorage() {
    this._amazonS3IcebergStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonS3IcebergStorageInput() {
    return this._amazonS3IcebergStorage.internalValue;
  }

  // azure_data_lake_storage_iceberg_storage - computed: false, optional: true, required: false
  private _azureDataLakeStorageIcebergStorage = new OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorageOutputReference(this, "azure_data_lake_storage_iceberg_storage");
  public get azureDataLakeStorageIcebergStorage() {
    return this._azureDataLakeStorageIcebergStorage;
  }
  public putAzureDataLakeStorageIcebergStorage(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageAzureDataLakeStorageIcebergStorage) {
    this._azureDataLakeStorageIcebergStorage.internalValue = value;
  }
  public resetAzureDataLakeStorageIcebergStorage() {
    this._azureDataLakeStorageIcebergStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDataLakeStorageIcebergStorageInput() {
    return this._azureDataLakeStorageIcebergStorage.internalValue;
  }

  // google_cloud_storage_iceberg_storage - computed: false, optional: true, required: false
  private _googleCloudStorageIcebergStorage = new OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorageOutputReference(this, "google_cloud_storage_iceberg_storage");
  public get googleCloudStorageIcebergStorage() {
    return this._googleCloudStorageIcebergStorage;
  }
  public putGoogleCloudStorageIcebergStorage(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageGoogleCloudStorageIcebergStorage) {
    this._googleCloudStorageIcebergStorage.internalValue = value;
  }
  public resetGoogleCloudStorageIcebergStorage() {
    this._googleCloudStorageIcebergStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageIcebergStorageInput() {
    return this._googleCloudStorageIcebergStorage.internalValue;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionProperties {
  /**
  * The technology type of Iceberg connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType: string;
  /**
  * catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#catalog OracleDatabaseGoldengateConnection#catalog}
  */
  readonly catalog: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalog;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#storage OracleDatabaseGoldengateConnection#storage}
  */
  readonly storage: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorage;
}

export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    catalog: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogToTerraform(struct!.catalog),
    storage: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageToTerraform(struct!.storage),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogToHclTerraform(struct!.catalog),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogList",
    },
    storage: {
      value: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._technologyType = undefined;
      this._catalog.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._technologyType = value.technologyType;
      this._catalog.internalValue = value.catalog;
      this._storage.internalValue = value.storage;
    }
  }

  // technology_type - computed: false, optional: false, required: true
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog = new OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesCatalog) {
    this._catalog.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionProperties {
  /**
  * Authentication type for Java Message Service.
  * Possible values:
  * NONE
  * BASIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#authentication_type OracleDatabaseGoldengateConnection#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * The Java class implementing javax.jms.ConnectionFactory interface supplied
  * by the JMS provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#connection_factory OracleDatabaseGoldengateConnection#connection_factory}
  */
  readonly connectionFactory?: string;
  /**
  * Connection URL of the Java Message Service, specifying the protocol, host,
  * and port. e.g.: 'mq://myjms.host.domain:7676'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#connection_url OracleDatabaseGoldengateConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * The Connection Factory can be looked up using this name.
  * e.g.: 'ConnectionFactory'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#jndi_connection_factory OracleDatabaseGoldengateConnection#jndi_connection_factory}
  */
  readonly jndiConnectionFactory?: string;
  /**
  * The implementation of javax.naming.spi.InitialContextFactory interface
  * used to obtain initial naming context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#jndi_initial_context_factory OracleDatabaseGoldengateConnection#jndi_initial_context_factory}
  */
  readonly jndiInitialContextFactory?: string;
  /**
  * The URL that Java Message Service will use to contact the JNDI provider.
  * e.g.: 'tcp://myjms.host.domain:61616?jms.prefetchPolicy.all=1000'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#jndi_provider_url OracleDatabaseGoldengateConnection#jndi_provider_url}
  */
  readonly jndiProviderUrl?: string;
  /**
  * The password associated to the principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#jndi_security_credentials_secret OracleDatabaseGoldengateConnection#jndi_security_credentials_secret}
  */
  readonly jndiSecurityCredentialsSecret?: string;
  /**
  * Specifies the identity of the principal (user) to be authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#jndi_security_principal OracleDatabaseGoldengateConnection#jndi_security_principal}
  */
  readonly jndiSecurityPrincipal?: string;
  /**
  * The content of the KeyStore file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_file OracleDatabaseGoldengateConnection#key_store_file}
  */
  readonly keyStoreFile?: string;
  /**
  * Input only. The KeyStore password in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_password OracleDatabaseGoldengateConnection#key_store_password}
  */
  readonly keyStorePassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the KeyStore password.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_password_secret_version OracleDatabaseGoldengateConnection#key_store_password_secret_version}
  */
  readonly keyStorePasswordSecretVersion?: string;
  /**
  * Input only. The password Oracle Goldengate uses to connect the Java Message Service
  * in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses to connect the associated Java
  * Message Service.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * Security protocol for Java Message Service.
  * Possible values:
  * PLAIN
  * TLS
  * MTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#security_protocol OracleDatabaseGoldengateConnection#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Input only. The password for the cert inside of the KeyStore in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_key_password OracleDatabaseGoldengateConnection#ssl_key_password}
  */
  readonly sslKeyPassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password for the cert inside of the KeyStore.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_key_password_secret_version OracleDatabaseGoldengateConnection#ssl_key_password_secret_version}
  */
  readonly sslKeyPasswordSecretVersion?: string;
  /**
  * The technology type of JavaMessageServiceConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The content of the TrustStore file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_file OracleDatabaseGoldengateConnection#trust_store_file}
  */
  readonly trustStoreFile?: string;
  /**
  * Input only. The TrustStore password in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_password OracleDatabaseGoldengateConnection#trust_store_password}
  */
  readonly trustStorePassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the TrustStore password.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_password_secret_version OracleDatabaseGoldengateConnection#trust_store_password_secret_version}
  */
  readonly trustStorePasswordSecretVersion?: string;
  /**
  * If set to true, Java Naming and Directory Interface (JNDI) properties
  * should be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#use_jndi OracleDatabaseGoldengateConnection#use_jndi}
  */
  readonly useJndi?: boolean | cdktn.IResolvable;
  /**
  * The username Oracle Goldengate uses to connect to the Java Message
  * Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    connection_factory: cdktn.stringToTerraform(struct!.connectionFactory),
    connection_url: cdktn.stringToTerraform(struct!.connectionUrl),
    jndi_connection_factory: cdktn.stringToTerraform(struct!.jndiConnectionFactory),
    jndi_initial_context_factory: cdktn.stringToTerraform(struct!.jndiInitialContextFactory),
    jndi_provider_url: cdktn.stringToTerraform(struct!.jndiProviderUrl),
    jndi_security_credentials_secret: cdktn.stringToTerraform(struct!.jndiSecurityCredentialsSecret),
    jndi_security_principal: cdktn.stringToTerraform(struct!.jndiSecurityPrincipal),
    key_store_file: cdktn.stringToTerraform(struct!.keyStoreFile),
    key_store_password: cdktn.stringToTerraform(struct!.keyStorePassword),
    key_store_password_secret_version: cdktn.stringToTerraform(struct!.keyStorePasswordSecretVersion),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    security_protocol: cdktn.stringToTerraform(struct!.securityProtocol),
    ssl_key_password: cdktn.stringToTerraform(struct!.sslKeyPassword),
    ssl_key_password_secret_version: cdktn.stringToTerraform(struct!.sslKeyPasswordSecretVersion),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    trust_store_file: cdktn.stringToTerraform(struct!.trustStoreFile),
    trust_store_password: cdktn.stringToTerraform(struct!.trustStorePassword),
    trust_store_password_secret_version: cdktn.stringToTerraform(struct!.trustStorePasswordSecretVersion),
    use_jndi: cdktn.booleanToTerraform(struct!.useJndi),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_factory: {
      value: cdktn.stringToHclTerraform(struct!.connectionFactory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_url: {
      value: cdktn.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jndi_connection_factory: {
      value: cdktn.stringToHclTerraform(struct!.jndiConnectionFactory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jndi_initial_context_factory: {
      value: cdktn.stringToHclTerraform(struct!.jndiInitialContextFactory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jndi_provider_url: {
      value: cdktn.stringToHclTerraform(struct!.jndiProviderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jndi_security_credentials_secret: {
      value: cdktn.stringToHclTerraform(struct!.jndiSecurityCredentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jndi_security_principal: {
      value: cdktn.stringToHclTerraform(struct!.jndiSecurityPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_file: {
      value: cdktn.stringToHclTerraform(struct!.keyStoreFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_password: {
      value: cdktn.stringToHclTerraform(struct!.keyStorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.keyStorePasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktn.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_password: {
      value: cdktn.stringToHclTerraform(struct!.sslKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.sslKeyPasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_file: {
      value: cdktn.stringToHclTerraform(struct!.trustStoreFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_password: {
      value: cdktn.stringToHclTerraform(struct!.trustStorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.trustStorePasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_jndi: {
      value: cdktn.booleanToHclTerraform(struct!.useJndi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._connectionFactory !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionFactory = this._connectionFactory;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._jndiConnectionFactory !== undefined) {
      hasAnyValues = true;
      internalValueResult.jndiConnectionFactory = this._jndiConnectionFactory;
    }
    if (this._jndiInitialContextFactory !== undefined) {
      hasAnyValues = true;
      internalValueResult.jndiInitialContextFactory = this._jndiInitialContextFactory;
    }
    if (this._jndiProviderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.jndiProviderUrl = this._jndiProviderUrl;
    }
    if (this._jndiSecurityCredentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.jndiSecurityCredentialsSecret = this._jndiSecurityCredentialsSecret;
    }
    if (this._jndiSecurityPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.jndiSecurityPrincipal = this._jndiSecurityPrincipal;
    }
    if (this._keyStoreFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStoreFile = this._keyStoreFile;
    }
    if (this._keyStorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStorePassword = this._keyStorePassword;
    }
    if (this._keyStorePasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStorePasswordSecretVersion = this._keyStorePasswordSecretVersion;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sslKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyPassword = this._sslKeyPassword;
    }
    if (this._sslKeyPasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyPasswordSecretVersion = this._sslKeyPasswordSecretVersion;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._trustStoreFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreFile = this._trustStoreFile;
    }
    if (this._trustStorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStorePassword = this._trustStorePassword;
    }
    if (this._trustStorePasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStorePasswordSecretVersion = this._trustStorePasswordSecretVersion;
    }
    if (this._useJndi !== undefined) {
      hasAnyValues = true;
      internalValueResult.useJndi = this._useJndi;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._connectionFactory = undefined;
      this._connectionUrl = undefined;
      this._jndiConnectionFactory = undefined;
      this._jndiInitialContextFactory = undefined;
      this._jndiProviderUrl = undefined;
      this._jndiSecurityCredentialsSecret = undefined;
      this._jndiSecurityPrincipal = undefined;
      this._keyStoreFile = undefined;
      this._keyStorePassword = undefined;
      this._keyStorePasswordSecretVersion = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._securityProtocol = undefined;
      this._sslKeyPassword = undefined;
      this._sslKeyPasswordSecretVersion = undefined;
      this._technologyType = undefined;
      this._trustStoreFile = undefined;
      this._trustStorePassword = undefined;
      this._trustStorePasswordSecretVersion = undefined;
      this._useJndi = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._connectionFactory = value.connectionFactory;
      this._connectionUrl = value.connectionUrl;
      this._jndiConnectionFactory = value.jndiConnectionFactory;
      this._jndiInitialContextFactory = value.jndiInitialContextFactory;
      this._jndiProviderUrl = value.jndiProviderUrl;
      this._jndiSecurityCredentialsSecret = value.jndiSecurityCredentialsSecret;
      this._jndiSecurityPrincipal = value.jndiSecurityPrincipal;
      this._keyStoreFile = value.keyStoreFile;
      this._keyStorePassword = value.keyStorePassword;
      this._keyStorePasswordSecretVersion = value.keyStorePasswordSecretVersion;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._securityProtocol = value.securityProtocol;
      this._sslKeyPassword = value.sslKeyPassword;
      this._sslKeyPasswordSecretVersion = value.sslKeyPasswordSecretVersion;
      this._technologyType = value.technologyType;
      this._trustStoreFile = value.trustStoreFile;
      this._trustStorePassword = value.trustStorePassword;
      this._trustStorePasswordSecretVersion = value.trustStorePasswordSecretVersion;
      this._useJndi = value.useJndi;
      this._username = value.username;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // connection_factory - computed: false, optional: true, required: false
  private _connectionFactory?: string; 
  public get connectionFactory() {
    return this.getStringAttribute('connection_factory');
  }
  public set connectionFactory(value: string) {
    this._connectionFactory = value;
  }
  public resetConnectionFactory() {
    this._connectionFactory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFactoryInput() {
    return this._connectionFactory;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // jndi_connection_factory - computed: false, optional: true, required: false
  private _jndiConnectionFactory?: string; 
  public get jndiConnectionFactory() {
    return this.getStringAttribute('jndi_connection_factory');
  }
  public set jndiConnectionFactory(value: string) {
    this._jndiConnectionFactory = value;
  }
  public resetJndiConnectionFactory() {
    this._jndiConnectionFactory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiConnectionFactoryInput() {
    return this._jndiConnectionFactory;
  }

  // jndi_initial_context_factory - computed: false, optional: true, required: false
  private _jndiInitialContextFactory?: string; 
  public get jndiInitialContextFactory() {
    return this.getStringAttribute('jndi_initial_context_factory');
  }
  public set jndiInitialContextFactory(value: string) {
    this._jndiInitialContextFactory = value;
  }
  public resetJndiInitialContextFactory() {
    this._jndiInitialContextFactory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiInitialContextFactoryInput() {
    return this._jndiInitialContextFactory;
  }

  // jndi_provider_url - computed: false, optional: true, required: false
  private _jndiProviderUrl?: string; 
  public get jndiProviderUrl() {
    return this.getStringAttribute('jndi_provider_url');
  }
  public set jndiProviderUrl(value: string) {
    this._jndiProviderUrl = value;
  }
  public resetJndiProviderUrl() {
    this._jndiProviderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiProviderUrlInput() {
    return this._jndiProviderUrl;
  }

  // jndi_security_credentials_secret - computed: false, optional: true, required: false
  private _jndiSecurityCredentialsSecret?: string; 
  public get jndiSecurityCredentialsSecret() {
    return this.getStringAttribute('jndi_security_credentials_secret');
  }
  public set jndiSecurityCredentialsSecret(value: string) {
    this._jndiSecurityCredentialsSecret = value;
  }
  public resetJndiSecurityCredentialsSecret() {
    this._jndiSecurityCredentialsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiSecurityCredentialsSecretInput() {
    return this._jndiSecurityCredentialsSecret;
  }

  // jndi_security_principal - computed: false, optional: true, required: false
  private _jndiSecurityPrincipal?: string; 
  public get jndiSecurityPrincipal() {
    return this.getStringAttribute('jndi_security_principal');
  }
  public set jndiSecurityPrincipal(value: string) {
    this._jndiSecurityPrincipal = value;
  }
  public resetJndiSecurityPrincipal() {
    this._jndiSecurityPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jndiSecurityPrincipalInput() {
    return this._jndiSecurityPrincipal;
  }

  // key_store_file - computed: false, optional: true, required: false
  private _keyStoreFile?: string; 
  public get keyStoreFile() {
    return this.getStringAttribute('key_store_file');
  }
  public set keyStoreFile(value: string) {
    this._keyStoreFile = value;
  }
  public resetKeyStoreFile() {
    this._keyStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreFileInput() {
    return this._keyStoreFile;
  }

  // key_store_password - computed: false, optional: true, required: false
  private _keyStorePassword?: string; 
  public get keyStorePassword() {
    return this.getStringAttribute('key_store_password');
  }
  public set keyStorePassword(value: string) {
    this._keyStorePassword = value;
  }
  public resetKeyStorePassword() {
    this._keyStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordInput() {
    return this._keyStorePassword;
  }

  // key_store_password_secret_version - computed: false, optional: true, required: false
  private _keyStorePasswordSecretVersion?: string; 
  public get keyStorePasswordSecretVersion() {
    return this.getStringAttribute('key_store_password_secret_version');
  }
  public set keyStorePasswordSecretVersion(value: string) {
    this._keyStorePasswordSecretVersion = value;
  }
  public resetKeyStorePasswordSecretVersion() {
    this._keyStorePasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordSecretVersionInput() {
    return this._keyStorePasswordSecretVersion;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // ssl_key_password - computed: false, optional: true, required: false
  private _sslKeyPassword?: string; 
  public get sslKeyPassword() {
    return this.getStringAttribute('ssl_key_password');
  }
  public set sslKeyPassword(value: string) {
    this._sslKeyPassword = value;
  }
  public resetSslKeyPassword() {
    this._sslKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyPasswordInput() {
    return this._sslKeyPassword;
  }

  // ssl_key_password_secret_version - computed: false, optional: true, required: false
  private _sslKeyPasswordSecretVersion?: string; 
  public get sslKeyPasswordSecretVersion() {
    return this.getStringAttribute('ssl_key_password_secret_version');
  }
  public set sslKeyPasswordSecretVersion(value: string) {
    this._sslKeyPasswordSecretVersion = value;
  }
  public resetSslKeyPasswordSecretVersion() {
    this._sslKeyPasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyPasswordSecretVersionInput() {
    return this._sslKeyPasswordSecretVersion;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // trust_store_file - computed: false, optional: true, required: false
  private _trustStoreFile?: string; 
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }
  public set trustStoreFile(value: string) {
    this._trustStoreFile = value;
  }
  public resetTrustStoreFile() {
    this._trustStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreFileInput() {
    return this._trustStoreFile;
  }

  // trust_store_password - computed: false, optional: true, required: false
  private _trustStorePassword?: string; 
  public get trustStorePassword() {
    return this.getStringAttribute('trust_store_password');
  }
  public set trustStorePassword(value: string) {
    this._trustStorePassword = value;
  }
  public resetTrustStorePassword() {
    this._trustStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePasswordInput() {
    return this._trustStorePassword;
  }

  // trust_store_password_secret_version - computed: false, optional: true, required: false
  private _trustStorePasswordSecretVersion?: string; 
  public get trustStorePasswordSecretVersion() {
    return this.getStringAttribute('trust_store_password_secret_version');
  }
  public set trustStorePasswordSecretVersion(value: string) {
    this._trustStorePasswordSecretVersion = value;
  }
  public resetTrustStorePasswordSecretVersion() {
    this._trustStorePasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePasswordSecretVersionInput() {
    return this._trustStorePasswordSecretVersion;
  }

  // use_jndi - computed: false, optional: true, required: false
  private _useJndi?: boolean | cdktn.IResolvable; 
  public get useJndi() {
    return this.getBooleanAttribute('use_jndi');
  }
  public set useJndi(value: boolean | cdktn.IResolvable) {
    this._useJndi = value;
  }
  public resetUseJndi() {
    this._useJndi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useJndiInput() {
    return this._useJndi;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServers {
  /**
  * The name or address of a host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#host OracleDatabaseGoldengateConnection#host}
  */
  readonly host: string;
  /**
  * The port of an endpoint usually specified for a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#port OracleDatabaseGoldengateConnection#port}
  */
  readonly port?: number;
  /**
  * The private IP address of the connection's endpoint in the customer's VCN,
  * typically a database endpoint or a big data endpoint (e.g. Kafka bootstrap
  * server). In case the privateIp is provided, the subnetId must also be
  * provided. In case the privateIp (and the subnetId) is not provided it is
  * assumed the datasource is publicly accessible. In case the connection is
  * accessible only privately, the lack of privateIp will result in not being
  * able to access the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#private_ip_address OracleDatabaseGoldengateConnection#private_ip_address}
  */
  readonly privateIpAddress?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServersToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
    private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServersToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_ip_address: {
      value: cdktn.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._privateIpAddress = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._privateIpAddress = value.privateIpAddress;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }
}

export class OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServersList extends cdktn.ComplexList {
  public internalValue? : OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServers[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServersOutputReference {
    return new OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionProperties {
  /**
  * The OCID of the Kafka cluster being referenced from OCI Streaming with
  * Apache Kafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#cluster_id OracleDatabaseGoldengateConnection#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The content of the consumer.properties file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#consumer_properties_file OracleDatabaseGoldengateConnection#consumer_properties_file}
  */
  readonly consumerPropertiesFile?: string;
  /**
  * The content of the KeyStore file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_file OracleDatabaseGoldengateConnection#key_store_file}
  */
  readonly keyStoreFile?: string;
  /**
  * Input only. The KeyStore password in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_password OracleDatabaseGoldengateConnection#key_store_password}
  */
  readonly keyStorePassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the KeyStore password.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_password_secret_version OracleDatabaseGoldengateConnection#key_store_password_secret_version}
  */
  readonly keyStorePasswordSecretVersion?: string;
  /**
  * Input only. The password for Kafka basic/SASL auth in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password for Kafka basic/SASL auth.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The content of the producer.properties file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#producer_properties_file OracleDatabaseGoldengateConnection#producer_properties_file}
  */
  readonly producerPropertiesFile?: string;
  /**
  * Security Type for Kafka.
  * Possible values:
  * SSL
  * SASL_SSL
  * PLAINTEXT
  * SASL_PLAINTEXT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#security_protocol OracleDatabaseGoldengateConnection#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Input only. The password for the cert inside of the KeyStore in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_key_password OracleDatabaseGoldengateConnection#ssl_key_password}
  */
  readonly sslKeyPassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password for the cert inside of the KeyStore.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_key_password_secret_version OracleDatabaseGoldengateConnection#ssl_key_password_secret_version}
  */
  readonly sslKeyPasswordSecretVersion?: string;
  /**
  * The OCID of the stream pool being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#stream_pool_id OracleDatabaseGoldengateConnection#stream_pool_id}
  */
  readonly streamPoolId?: string;
  /**
  * The technology type of KafkaConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The content of the TrustStore file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_file OracleDatabaseGoldengateConnection#trust_store_file}
  */
  readonly trustStoreFile?: string;
  /**
  * Input only. The TrustStore password in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_password OracleDatabaseGoldengateConnection#trust_store_password}
  */
  readonly trustStorePassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the TrustStore password.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_password_secret_version OracleDatabaseGoldengateConnection#trust_store_password_secret_version}
  */
  readonly trustStorePasswordSecretVersion?: string;
  /**
  * Specifies that the user intends to authenticate to the instance using a
  * resource principal. Applicable only for OCI Streaming connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#use_resource_principal OracleDatabaseGoldengateConnection#use_resource_principal}
  */
  readonly useResourcePrincipal?: boolean | cdktn.IResolvable;
  /**
  * The username Oracle Goldengate uses to connect the associated system of
  * the given technology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
  /**
  * bootstrap_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#bootstrap_servers OracleDatabaseGoldengateConnection#bootstrap_servers}
  */
  readonly bootstrapServers?: OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServers[] | cdktn.IResolvable;
}

export function oracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
    consumer_properties_file: cdktn.stringToTerraform(struct!.consumerPropertiesFile),
    key_store_file: cdktn.stringToTerraform(struct!.keyStoreFile),
    key_store_password: cdktn.stringToTerraform(struct!.keyStorePassword),
    key_store_password_secret_version: cdktn.stringToTerraform(struct!.keyStorePasswordSecretVersion),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    producer_properties_file: cdktn.stringToTerraform(struct!.producerPropertiesFile),
    security_protocol: cdktn.stringToTerraform(struct!.securityProtocol),
    ssl_key_password: cdktn.stringToTerraform(struct!.sslKeyPassword),
    ssl_key_password_secret_version: cdktn.stringToTerraform(struct!.sslKeyPasswordSecretVersion),
    stream_pool_id: cdktn.stringToTerraform(struct!.streamPoolId),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    trust_store_file: cdktn.stringToTerraform(struct!.trustStoreFile),
    trust_store_password: cdktn.stringToTerraform(struct!.trustStorePassword),
    trust_store_password_secret_version: cdktn.stringToTerraform(struct!.trustStorePasswordSecretVersion),
    use_resource_principal: cdktn.booleanToTerraform(struct!.useResourcePrincipal),
    username: cdktn.stringToTerraform(struct!.username),
    bootstrap_servers: cdktn.listMapper(oracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServersToTerraform, true)(struct!.bootstrapServers),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_properties_file: {
      value: cdktn.stringToHclTerraform(struct!.consumerPropertiesFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_file: {
      value: cdktn.stringToHclTerraform(struct!.keyStoreFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_password: {
      value: cdktn.stringToHclTerraform(struct!.keyStorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.keyStorePasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    producer_properties_file: {
      value: cdktn.stringToHclTerraform(struct!.producerPropertiesFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktn.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_password: {
      value: cdktn.stringToHclTerraform(struct!.sslKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.sslKeyPasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.streamPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_file: {
      value: cdktn.stringToHclTerraform(struct!.trustStoreFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_password: {
      value: cdktn.stringToHclTerraform(struct!.trustStorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.trustStorePasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_resource_principal: {
      value: cdktn.booleanToHclTerraform(struct!.useResourcePrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootstrap_servers: {
      value: cdktn.listMapperHcl(oracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServersToHclTerraform, true)(struct!.bootstrapServers),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._consumerPropertiesFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerPropertiesFile = this._consumerPropertiesFile;
    }
    if (this._keyStoreFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStoreFile = this._keyStoreFile;
    }
    if (this._keyStorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStorePassword = this._keyStorePassword;
    }
    if (this._keyStorePasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStorePasswordSecretVersion = this._keyStorePasswordSecretVersion;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._producerPropertiesFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerPropertiesFile = this._producerPropertiesFile;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sslKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyPassword = this._sslKeyPassword;
    }
    if (this._sslKeyPasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyPasswordSecretVersion = this._sslKeyPasswordSecretVersion;
    }
    if (this._streamPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamPoolId = this._streamPoolId;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._trustStoreFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreFile = this._trustStoreFile;
    }
    if (this._trustStorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStorePassword = this._trustStorePassword;
    }
    if (this._trustStorePasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStorePasswordSecretVersion = this._trustStorePasswordSecretVersion;
    }
    if (this._useResourcePrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.useResourcePrincipal = this._useResourcePrincipal;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._bootstrapServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._consumerPropertiesFile = undefined;
      this._keyStoreFile = undefined;
      this._keyStorePassword = undefined;
      this._keyStorePasswordSecretVersion = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._producerPropertiesFile = undefined;
      this._securityProtocol = undefined;
      this._sslKeyPassword = undefined;
      this._sslKeyPasswordSecretVersion = undefined;
      this._streamPoolId = undefined;
      this._technologyType = undefined;
      this._trustStoreFile = undefined;
      this._trustStorePassword = undefined;
      this._trustStorePasswordSecretVersion = undefined;
      this._useResourcePrincipal = undefined;
      this._username = undefined;
      this._bootstrapServers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._consumerPropertiesFile = value.consumerPropertiesFile;
      this._keyStoreFile = value.keyStoreFile;
      this._keyStorePassword = value.keyStorePassword;
      this._keyStorePasswordSecretVersion = value.keyStorePasswordSecretVersion;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._producerPropertiesFile = value.producerPropertiesFile;
      this._securityProtocol = value.securityProtocol;
      this._sslKeyPassword = value.sslKeyPassword;
      this._sslKeyPasswordSecretVersion = value.sslKeyPasswordSecretVersion;
      this._streamPoolId = value.streamPoolId;
      this._technologyType = value.technologyType;
      this._trustStoreFile = value.trustStoreFile;
      this._trustStorePassword = value.trustStorePassword;
      this._trustStorePasswordSecretVersion = value.trustStorePasswordSecretVersion;
      this._useResourcePrincipal = value.useResourcePrincipal;
      this._username = value.username;
      this._bootstrapServers.internalValue = value.bootstrapServers;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // consumer_properties_file - computed: false, optional: true, required: false
  private _consumerPropertiesFile?: string; 
  public get consumerPropertiesFile() {
    return this.getStringAttribute('consumer_properties_file');
  }
  public set consumerPropertiesFile(value: string) {
    this._consumerPropertiesFile = value;
  }
  public resetConsumerPropertiesFile() {
    this._consumerPropertiesFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerPropertiesFileInput() {
    return this._consumerPropertiesFile;
  }

  // key_store_file - computed: false, optional: true, required: false
  private _keyStoreFile?: string; 
  public get keyStoreFile() {
    return this.getStringAttribute('key_store_file');
  }
  public set keyStoreFile(value: string) {
    this._keyStoreFile = value;
  }
  public resetKeyStoreFile() {
    this._keyStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreFileInput() {
    return this._keyStoreFile;
  }

  // key_store_password - computed: false, optional: true, required: false
  private _keyStorePassword?: string; 
  public get keyStorePassword() {
    return this.getStringAttribute('key_store_password');
  }
  public set keyStorePassword(value: string) {
    this._keyStorePassword = value;
  }
  public resetKeyStorePassword() {
    this._keyStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordInput() {
    return this._keyStorePassword;
  }

  // key_store_password_secret_version - computed: false, optional: true, required: false
  private _keyStorePasswordSecretVersion?: string; 
  public get keyStorePasswordSecretVersion() {
    return this.getStringAttribute('key_store_password_secret_version');
  }
  public set keyStorePasswordSecretVersion(value: string) {
    this._keyStorePasswordSecretVersion = value;
  }
  public resetKeyStorePasswordSecretVersion() {
    this._keyStorePasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordSecretVersionInput() {
    return this._keyStorePasswordSecretVersion;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // producer_properties_file - computed: false, optional: true, required: false
  private _producerPropertiesFile?: string; 
  public get producerPropertiesFile() {
    return this.getStringAttribute('producer_properties_file');
  }
  public set producerPropertiesFile(value: string) {
    this._producerPropertiesFile = value;
  }
  public resetProducerPropertiesFile() {
    this._producerPropertiesFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerPropertiesFileInput() {
    return this._producerPropertiesFile;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // ssl_key_password - computed: false, optional: true, required: false
  private _sslKeyPassword?: string; 
  public get sslKeyPassword() {
    return this.getStringAttribute('ssl_key_password');
  }
  public set sslKeyPassword(value: string) {
    this._sslKeyPassword = value;
  }
  public resetSslKeyPassword() {
    this._sslKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyPasswordInput() {
    return this._sslKeyPassword;
  }

  // ssl_key_password_secret_version - computed: false, optional: true, required: false
  private _sslKeyPasswordSecretVersion?: string; 
  public get sslKeyPasswordSecretVersion() {
    return this.getStringAttribute('ssl_key_password_secret_version');
  }
  public set sslKeyPasswordSecretVersion(value: string) {
    this._sslKeyPasswordSecretVersion = value;
  }
  public resetSslKeyPasswordSecretVersion() {
    this._sslKeyPasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyPasswordSecretVersionInput() {
    return this._sslKeyPasswordSecretVersion;
  }

  // stream_pool_id - computed: false, optional: true, required: false
  private _streamPoolId?: string; 
  public get streamPoolId() {
    return this.getStringAttribute('stream_pool_id');
  }
  public set streamPoolId(value: string) {
    this._streamPoolId = value;
  }
  public resetStreamPoolId() {
    this._streamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamPoolIdInput() {
    return this._streamPoolId;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // trust_store_file - computed: false, optional: true, required: false
  private _trustStoreFile?: string; 
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }
  public set trustStoreFile(value: string) {
    this._trustStoreFile = value;
  }
  public resetTrustStoreFile() {
    this._trustStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreFileInput() {
    return this._trustStoreFile;
  }

  // trust_store_password - computed: false, optional: true, required: false
  private _trustStorePassword?: string; 
  public get trustStorePassword() {
    return this.getStringAttribute('trust_store_password');
  }
  public set trustStorePassword(value: string) {
    this._trustStorePassword = value;
  }
  public resetTrustStorePassword() {
    this._trustStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePasswordInput() {
    return this._trustStorePassword;
  }

  // trust_store_password_secret_version - computed: false, optional: true, required: false
  private _trustStorePasswordSecretVersion?: string; 
  public get trustStorePasswordSecretVersion() {
    return this.getStringAttribute('trust_store_password_secret_version');
  }
  public set trustStorePasswordSecretVersion(value: string) {
    this._trustStorePasswordSecretVersion = value;
  }
  public resetTrustStorePasswordSecretVersion() {
    this._trustStorePasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePasswordSecretVersionInput() {
    return this._trustStorePasswordSecretVersion;
  }

  // use_resource_principal - computed: false, optional: true, required: false
  private _useResourcePrincipal?: boolean | cdktn.IResolvable; 
  public get useResourcePrincipal() {
    return this.getBooleanAttribute('use_resource_principal');
  }
  public set useResourcePrincipal(value: boolean | cdktn.IResolvable) {
    this._useResourcePrincipal = value;
  }
  public resetUseResourcePrincipal() {
    this._useResourcePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useResourcePrincipalInput() {
    return this._useResourcePrincipal;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // bootstrap_servers - computed: false, optional: true, required: false
  private _bootstrapServers = new OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServersList(this, "bootstrap_servers", false);
  public get bootstrapServers() {
    return this._bootstrapServers;
  }
  public putBootstrapServers(value: OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesBootstrapServers[] | cdktn.IResolvable) {
    this._bootstrapServers.internalValue = value;
  }
  public resetBootstrapServers() {
    this._bootstrapServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers.internalValue;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionProperties {
  /**
  * Used authentication mechanism to access Schema Registry.
  * Possible values:
  * NONE
  * BASIC
  * MUTUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#authentication_type OracleDatabaseGoldengateConnection#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * The content of the KeyStore file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_file OracleDatabaseGoldengateConnection#key_store_file}
  */
  readonly keyStoreFile?: string;
  /**
  * Input only. The KeyStore password in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_password OracleDatabaseGoldengateConnection#key_store_password}
  */
  readonly keyStorePassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the KeyStore password.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_password_secret_version OracleDatabaseGoldengateConnection#key_store_password_secret_version}
  */
  readonly keyStorePasswordSecretVersion?: string;
  /**
  * Input only. The password to access Schema Registry in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password to access Schema Registry using basic authentication.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * Input only. The password for the cert inside the KeyStore in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_key_password OracleDatabaseGoldengateConnection#ssl_key_password}
  */
  readonly sslKeyPassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password for the cert inside the KeyStore.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_key_password_secret_version OracleDatabaseGoldengateConnection#ssl_key_password_secret_version}
  */
  readonly sslKeyPasswordSecretVersion?: string;
  /**
  * The technology type of KafkaSchemaRegistryConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The content of the TrustStore file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_file OracleDatabaseGoldengateConnection#trust_store_file}
  */
  readonly trustStoreFile?: string;
  /**
  * Input only. The TrustStore password in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_password OracleDatabaseGoldengateConnection#trust_store_password}
  */
  readonly trustStorePassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the TrustStore password.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_password_secret_version OracleDatabaseGoldengateConnection#trust_store_password_secret_version}
  */
  readonly trustStorePasswordSecretVersion?: string;
  /**
  * Kafka Schema Registry URL.
  * e.g.: 'https://server1.us.oracle.com:8081'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#url OracleDatabaseGoldengateConnection#url}
  */
  readonly url?: string;
  /**
  * The username to access Schema Registry using basic authentication.
  * This value is injected into
  * 'schema.registry.basic.auth.user.info=user:password' configuration
  * property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    key_store_file: cdktn.stringToTerraform(struct!.keyStoreFile),
    key_store_password: cdktn.stringToTerraform(struct!.keyStorePassword),
    key_store_password_secret_version: cdktn.stringToTerraform(struct!.keyStorePasswordSecretVersion),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    ssl_key_password: cdktn.stringToTerraform(struct!.sslKeyPassword),
    ssl_key_password_secret_version: cdktn.stringToTerraform(struct!.sslKeyPasswordSecretVersion),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    trust_store_file: cdktn.stringToTerraform(struct!.trustStoreFile),
    trust_store_password: cdktn.stringToTerraform(struct!.trustStorePassword),
    trust_store_password_secret_version: cdktn.stringToTerraform(struct!.trustStorePasswordSecretVersion),
    url: cdktn.stringToTerraform(struct!.url),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_file: {
      value: cdktn.stringToHclTerraform(struct!.keyStoreFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_password: {
      value: cdktn.stringToHclTerraform(struct!.keyStorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.keyStorePasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_password: {
      value: cdktn.stringToHclTerraform(struct!.sslKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.sslKeyPasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_file: {
      value: cdktn.stringToHclTerraform(struct!.trustStoreFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_password: {
      value: cdktn.stringToHclTerraform(struct!.trustStorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.trustStorePasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._keyStoreFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStoreFile = this._keyStoreFile;
    }
    if (this._keyStorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStorePassword = this._keyStorePassword;
    }
    if (this._keyStorePasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStorePasswordSecretVersion = this._keyStorePasswordSecretVersion;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._sslKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyPassword = this._sslKeyPassword;
    }
    if (this._sslKeyPasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyPasswordSecretVersion = this._sslKeyPasswordSecretVersion;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._trustStoreFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreFile = this._trustStoreFile;
    }
    if (this._trustStorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStorePassword = this._trustStorePassword;
    }
    if (this._trustStorePasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStorePasswordSecretVersion = this._trustStorePasswordSecretVersion;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._keyStoreFile = undefined;
      this._keyStorePassword = undefined;
      this._keyStorePasswordSecretVersion = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._sslKeyPassword = undefined;
      this._sslKeyPasswordSecretVersion = undefined;
      this._technologyType = undefined;
      this._trustStoreFile = undefined;
      this._trustStorePassword = undefined;
      this._trustStorePasswordSecretVersion = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._keyStoreFile = value.keyStoreFile;
      this._keyStorePassword = value.keyStorePassword;
      this._keyStorePasswordSecretVersion = value.keyStorePasswordSecretVersion;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._sslKeyPassword = value.sslKeyPassword;
      this._sslKeyPasswordSecretVersion = value.sslKeyPasswordSecretVersion;
      this._technologyType = value.technologyType;
      this._trustStoreFile = value.trustStoreFile;
      this._trustStorePassword = value.trustStorePassword;
      this._trustStorePasswordSecretVersion = value.trustStorePasswordSecretVersion;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // key_store_file - computed: false, optional: true, required: false
  private _keyStoreFile?: string; 
  public get keyStoreFile() {
    return this.getStringAttribute('key_store_file');
  }
  public set keyStoreFile(value: string) {
    this._keyStoreFile = value;
  }
  public resetKeyStoreFile() {
    this._keyStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreFileInput() {
    return this._keyStoreFile;
  }

  // key_store_password - computed: false, optional: true, required: false
  private _keyStorePassword?: string; 
  public get keyStorePassword() {
    return this.getStringAttribute('key_store_password');
  }
  public set keyStorePassword(value: string) {
    this._keyStorePassword = value;
  }
  public resetKeyStorePassword() {
    this._keyStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordInput() {
    return this._keyStorePassword;
  }

  // key_store_password_secret_version - computed: false, optional: true, required: false
  private _keyStorePasswordSecretVersion?: string; 
  public get keyStorePasswordSecretVersion() {
    return this.getStringAttribute('key_store_password_secret_version');
  }
  public set keyStorePasswordSecretVersion(value: string) {
    this._keyStorePasswordSecretVersion = value;
  }
  public resetKeyStorePasswordSecretVersion() {
    this._keyStorePasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordSecretVersionInput() {
    return this._keyStorePasswordSecretVersion;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // ssl_key_password - computed: false, optional: true, required: false
  private _sslKeyPassword?: string; 
  public get sslKeyPassword() {
    return this.getStringAttribute('ssl_key_password');
  }
  public set sslKeyPassword(value: string) {
    this._sslKeyPassword = value;
  }
  public resetSslKeyPassword() {
    this._sslKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyPasswordInput() {
    return this._sslKeyPassword;
  }

  // ssl_key_password_secret_version - computed: false, optional: true, required: false
  private _sslKeyPasswordSecretVersion?: string; 
  public get sslKeyPasswordSecretVersion() {
    return this.getStringAttribute('ssl_key_password_secret_version');
  }
  public set sslKeyPasswordSecretVersion(value: string) {
    this._sslKeyPasswordSecretVersion = value;
  }
  public resetSslKeyPasswordSecretVersion() {
    this._sslKeyPasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyPasswordSecretVersionInput() {
    return this._sslKeyPasswordSecretVersion;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // trust_store_file - computed: false, optional: true, required: false
  private _trustStoreFile?: string; 
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }
  public set trustStoreFile(value: string) {
    this._trustStoreFile = value;
  }
  public resetTrustStoreFile() {
    this._trustStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreFileInput() {
    return this._trustStoreFile;
  }

  // trust_store_password - computed: false, optional: true, required: false
  private _trustStorePassword?: string; 
  public get trustStorePassword() {
    return this.getStringAttribute('trust_store_password');
  }
  public set trustStorePassword(value: string) {
    this._trustStorePassword = value;
  }
  public resetTrustStorePassword() {
    this._trustStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePasswordInput() {
    return this._trustStorePassword;
  }

  // trust_store_password_secret_version - computed: false, optional: true, required: false
  private _trustStorePasswordSecretVersion?: string; 
  public get trustStorePasswordSecretVersion() {
    return this.getStringAttribute('trust_store_password_secret_version');
  }
  public set trustStorePasswordSecretVersion(value: string) {
    this._trustStorePasswordSecretVersion = value;
  }
  public resetTrustStorePasswordSecretVersion() {
    this._trustStorePasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePasswordSecretVersionInput() {
    return this._trustStorePasswordSecretVersion;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionProperties {
  /**
  * Azure client ID of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#client_id OracleDatabaseGoldengateConnection#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret associated with the client id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#client_secret OracleDatabaseGoldengateConnection#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Optional Microsoft Fabric service endpoint.
  * Default value: https://onelake.dfs.fabric.microsoft.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#endpoint OracleDatabaseGoldengateConnection#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The technology type of MicrosoftFabricConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * Azure tenant ID of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#tenant_id OracleDatabaseGoldengateConnection#tenant_id}
  */
  readonly tenantId?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._endpoint = undefined;
      this._technologyType = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._endpoint = value.endpoint;
      this._technologyType = value.technologyType;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributes {
  /**
  * The name of the property entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key OracleDatabaseGoldengateConnection#key}
  */
  readonly key: string;
  /**
  * The value of the property entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#value OracleDatabaseGoldengateConnection#value}
  */
  readonly value: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributesList extends cdktn.ComplexList {
  public internalValue? : OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributesOutputReference {
    return new OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionProperties {
  /**
  * The name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#database OracleDatabaseGoldengateConnection#database}
  */
  readonly database?: string;
  /**
  * The name or address of a host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#host OracleDatabaseGoldengateConnection#host}
  */
  readonly host?: string;
  /**
  * Input only. The password Oracle Goldengate uses for Microsoft SQL Server connection
  * in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses for Microsoft SQL Server
  * connection.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The port of an endpoint usually specified for a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#port OracleDatabaseGoldengateConnection#port}
  */
  readonly port?: number;
  /**
  * Security Type for Microsoft SQL Server.
  * Possible values:
  * PLAIN
  * TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#security_protocol OracleDatabaseGoldengateConnection#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * If set to true, the driver validates the certificate that is sent by the
  * database server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#server_certificate_validation_required OracleDatabaseGoldengateConnection#server_certificate_validation_required}
  */
  readonly serverCertificateValidationRequired?: boolean | cdktn.IResolvable;
  /**
  * Database Certificate - The content of a .pem or .crt file
  * containing the server public key (for 1-way SSL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_ca_file OracleDatabaseGoldengateConnection#ssl_ca_file}
  */
  readonly sslCaFile?: string;
  /**
  * The technology type of MicrosoftSqlserverConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The username Oracle Goldengate uses to connect to the Microsoft SQL
  * Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
  /**
  * additional_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#additional_attributes OracleDatabaseGoldengateConnection#additional_attributes}
  */
  readonly additionalAttributes?: OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable;
}

export function oracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    port: cdktn.numberToTerraform(struct!.port),
    security_protocol: cdktn.stringToTerraform(struct!.securityProtocol),
    server_certificate_validation_required: cdktn.booleanToTerraform(struct!.serverCertificateValidationRequired),
    ssl_ca_file: cdktn.stringToTerraform(struct!.sslCaFile),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    username: cdktn.stringToTerraform(struct!.username),
    additional_attributes: cdktn.listMapper(oracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributesToTerraform, true)(struct!.additionalAttributes),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_protocol: {
      value: cdktn.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate_validation_required: {
      value: cdktn.booleanToHclTerraform(struct!.serverCertificateValidationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_ca_file: {
      value: cdktn.stringToHclTerraform(struct!.sslCaFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_attributes: {
      value: cdktn.listMapperHcl(oracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributesToHclTerraform, true)(struct!.additionalAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._serverCertificateValidationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateValidationRequired = this._serverCertificateValidationRequired;
    }
    if (this._sslCaFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaFile = this._sslCaFile;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._additionalAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAttributes = this._additionalAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._port = undefined;
      this._securityProtocol = undefined;
      this._serverCertificateValidationRequired = undefined;
      this._sslCaFile = undefined;
      this._technologyType = undefined;
      this._username = undefined;
      this._additionalAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._port = value.port;
      this._securityProtocol = value.securityProtocol;
      this._serverCertificateValidationRequired = value.serverCertificateValidationRequired;
      this._sslCaFile = value.sslCaFile;
      this._technologyType = value.technologyType;
      this._username = value.username;
      this._additionalAttributes.internalValue = value.additionalAttributes;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // server_certificate_validation_required - computed: false, optional: true, required: false
  private _serverCertificateValidationRequired?: boolean | cdktn.IResolvable; 
  public get serverCertificateValidationRequired() {
    return this.getBooleanAttribute('server_certificate_validation_required');
  }
  public set serverCertificateValidationRequired(value: boolean | cdktn.IResolvable) {
    this._serverCertificateValidationRequired = value;
  }
  public resetServerCertificateValidationRequired() {
    this._serverCertificateValidationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateValidationRequiredInput() {
    return this._serverCertificateValidationRequired;
  }

  // ssl_ca_file - computed: false, optional: true, required: false
  private _sslCaFile?: string; 
  public get sslCaFile() {
    return this.getStringAttribute('ssl_ca_file');
  }
  public set sslCaFile(value: string) {
    this._sslCaFile = value;
  }
  public resetSslCaFile() {
    this._sslCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaFileInput() {
    return this._sslCaFile;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes = new OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }
  public putAdditionalAttributes(value: OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable) {
    this._additionalAttributes.internalValue = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes.internalValue;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionProperties {
  /**
  * MongoDB connection string.
  * e.g.: 'mongodb://mongodb0.example.com:27017/recordsrecords'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#connection_string OracleDatabaseGoldengateConnection#connection_string}
  */
  readonly connectionString?: string;
  /**
  * The OCID of the Oracle Autonomous Json Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#database_id OracleDatabaseGoldengateConnection#database_id}
  */
  readonly databaseId?: string;
  /**
  * Input only. The password Oracle Goldengate uses to connect the Mongodb connection in
  * plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses to connect the Mongodb connection.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * Security Type for MongoDB.
  * Possible values:
  * PLAIN
  * TLS
  * MTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#security_protocol OracleDatabaseGoldengateConnection#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * The technology type of MongodbConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * Database Certificate - The content of a .pem file,
  * containing the server public key (for 1 and 2-way SSL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#tls_ca_file OracleDatabaseGoldengateConnection#tls_ca_file}
  */
  readonly tlsCaFile?: string;
  /**
  * Client Certificate - The content of a .pem file, containing
  * the client public key (for 2-way SSL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#tls_certificate_key_file OracleDatabaseGoldengateConnection#tls_certificate_key_file}
  */
  readonly tlsCertificateKeyFile?: string;
  /**
  * Input only. The Client Certificate key file password in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#tls_certificate_key_file_password OracleDatabaseGoldengateConnection#tls_certificate_key_file_password}
  */
  readonly tlsCertificateKeyFilePassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the Client Certificate key file password in Secret Manager.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#tls_certificate_key_file_password_secret_version OracleDatabaseGoldengateConnection#tls_certificate_key_file_password_secret_version}
  */
  readonly tlsCertificateKeyFilePasswordSecretVersion?: string;
  /**
  * The username Oracle Goldengate uses to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesMongodbConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_string: cdktn.stringToTerraform(struct!.connectionString),
    database_id: cdktn.stringToTerraform(struct!.databaseId),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    security_protocol: cdktn.stringToTerraform(struct!.securityProtocol),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    tls_ca_file: cdktn.stringToTerraform(struct!.tlsCaFile),
    tls_certificate_key_file: cdktn.stringToTerraform(struct!.tlsCertificateKeyFile),
    tls_certificate_key_file_password: cdktn.stringToTerraform(struct!.tlsCertificateKeyFilePassword),
    tls_certificate_key_file_password_secret_version: cdktn.stringToTerraform(struct!.tlsCertificateKeyFilePasswordSecretVersion),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesMongodbConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_string: {
      value: cdktn.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_id: {
      value: cdktn.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktn.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca_file: {
      value: cdktn.stringToHclTerraform(struct!.tlsCaFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate_key_file: {
      value: cdktn.stringToHclTerraform(struct!.tlsCertificateKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate_key_file_password: {
      value: cdktn.stringToHclTerraform(struct!.tlsCertificateKeyFilePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate_key_file_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.tlsCertificateKeyFilePasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._tlsCaFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaFile = this._tlsCaFile;
    }
    if (this._tlsCertificateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificateKeyFile = this._tlsCertificateKeyFile;
    }
    if (this._tlsCertificateKeyFilePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificateKeyFilePassword = this._tlsCertificateKeyFilePassword;
    }
    if (this._tlsCertificateKeyFilePasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificateKeyFilePasswordSecretVersion = this._tlsCertificateKeyFilePasswordSecretVersion;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionString = undefined;
      this._databaseId = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._securityProtocol = undefined;
      this._technologyType = undefined;
      this._tlsCaFile = undefined;
      this._tlsCertificateKeyFile = undefined;
      this._tlsCertificateKeyFilePassword = undefined;
      this._tlsCertificateKeyFilePasswordSecretVersion = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionString = value.connectionString;
      this._databaseId = value.databaseId;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._securityProtocol = value.securityProtocol;
      this._technologyType = value.technologyType;
      this._tlsCaFile = value.tlsCaFile;
      this._tlsCertificateKeyFile = value.tlsCertificateKeyFile;
      this._tlsCertificateKeyFilePassword = value.tlsCertificateKeyFilePassword;
      this._tlsCertificateKeyFilePasswordSecretVersion = value.tlsCertificateKeyFilePasswordSecretVersion;
      this._username = value.username;
    }
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // database_id - computed: false, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // tls_ca_file - computed: false, optional: true, required: false
  private _tlsCaFile?: string; 
  public get tlsCaFile() {
    return this.getStringAttribute('tls_ca_file');
  }
  public set tlsCaFile(value: string) {
    this._tlsCaFile = value;
  }
  public resetTlsCaFile() {
    this._tlsCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaFileInput() {
    return this._tlsCaFile;
  }

  // tls_certificate_key_file - computed: false, optional: true, required: false
  private _tlsCertificateKeyFile?: string; 
  public get tlsCertificateKeyFile() {
    return this.getStringAttribute('tls_certificate_key_file');
  }
  public set tlsCertificateKeyFile(value: string) {
    this._tlsCertificateKeyFile = value;
  }
  public resetTlsCertificateKeyFile() {
    this._tlsCertificateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateKeyFileInput() {
    return this._tlsCertificateKeyFile;
  }

  // tls_certificate_key_file_password - computed: false, optional: true, required: false
  private _tlsCertificateKeyFilePassword?: string; 
  public get tlsCertificateKeyFilePassword() {
    return this.getStringAttribute('tls_certificate_key_file_password');
  }
  public set tlsCertificateKeyFilePassword(value: string) {
    this._tlsCertificateKeyFilePassword = value;
  }
  public resetTlsCertificateKeyFilePassword() {
    this._tlsCertificateKeyFilePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateKeyFilePasswordInput() {
    return this._tlsCertificateKeyFilePassword;
  }

  // tls_certificate_key_file_password_secret_version - computed: false, optional: true, required: false
  private _tlsCertificateKeyFilePasswordSecretVersion?: string; 
  public get tlsCertificateKeyFilePasswordSecretVersion() {
    return this.getStringAttribute('tls_certificate_key_file_password_secret_version');
  }
  public set tlsCertificateKeyFilePasswordSecretVersion(value: string) {
    this._tlsCertificateKeyFilePasswordSecretVersion = value;
  }
  public resetTlsCertificateKeyFilePasswordSecretVersion() {
    this._tlsCertificateKeyFilePasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateKeyFilePasswordSecretVersionInput() {
    return this._tlsCertificateKeyFilePasswordSecretVersion;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributes {
  /**
  * The name of the property entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key OracleDatabaseGoldengateConnection#key}
  */
  readonly key: string;
  /**
  * The value of the property entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#value OracleDatabaseGoldengateConnection#value}
  */
  readonly value: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributesList extends cdktn.ComplexList {
  public internalValue? : OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributesOutputReference {
    return new OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionProperties {
  /**
  * The name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#database OracleDatabaseGoldengateConnection#database}
  */
  readonly database?: string;
  /**
  * The OCID of the database system being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#db_system_id OracleDatabaseGoldengateConnection#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * The name or address of a host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#host OracleDatabaseGoldengateConnection#host}
  */
  readonly host?: string;
  /**
  * Input only. The password Oracle Goldengate uses to connect to MySQL in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses to connect to MySQL.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The port of an endpoint usually specified for a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#port OracleDatabaseGoldengateConnection#port}
  */
  readonly port?: number;
  /**
  * Security Type for MySQL.
  * Possible values:
  * PLAIN
  * TLS
  * MTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#security_protocol OracleDatabaseGoldengateConnection#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Database Certificate - The content of a .pem or .crt file
  * containing the server public key (for 1 and 2-way SSL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_ca_file OracleDatabaseGoldengateConnection#ssl_ca_file}
  */
  readonly sslCaFile?: string;
  /**
  * Client Certificate - The content of a .pem or .crt file
  * containing the client public key (for 2-way SSL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_cert_file OracleDatabaseGoldengateConnection#ssl_cert_file}
  */
  readonly sslCertFile?: string;
  /**
  * The list of certificates revoked by the trusted
  * certificate authorities (Trusted CA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_crl_file OracleDatabaseGoldengateConnection#ssl_crl_file}
  */
  readonly sslCrlFile?: string;
  /**
  * Client Key - The content of a .pem or .crt file containing
  * the client private key (for 2-way SSL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_key_file OracleDatabaseGoldengateConnection#ssl_key_file}
  */
  readonly sslKeyFile?: string;
  /**
  * SSL modes for MySQL.
  * Possible values:
  * DISABLED
  * PREFERRED
  * REQUIRED
  * VERIFY_CA
  * VERIFY_IDENTITY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_mode OracleDatabaseGoldengateConnection#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * The technology type of MysqlConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The username Oracle Goldengate uses to connect the associated system of
  * the given technology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
  /**
  * additional_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#additional_attributes OracleDatabaseGoldengateConnection#additional_attributes}
  */
  readonly additionalAttributes?: OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable;
}

export function oracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    db_system_id: cdktn.stringToTerraform(struct!.dbSystemId),
    host: cdktn.stringToTerraform(struct!.host),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    port: cdktn.numberToTerraform(struct!.port),
    security_protocol: cdktn.stringToTerraform(struct!.securityProtocol),
    ssl_ca_file: cdktn.stringToTerraform(struct!.sslCaFile),
    ssl_cert_file: cdktn.stringToTerraform(struct!.sslCertFile),
    ssl_crl_file: cdktn.stringToTerraform(struct!.sslCrlFile),
    ssl_key_file: cdktn.stringToTerraform(struct!.sslKeyFile),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    username: cdktn.stringToTerraform(struct!.username),
    additional_attributes: cdktn.listMapper(oracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributesToTerraform, true)(struct!.additionalAttributes),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_system_id: {
      value: cdktn.stringToHclTerraform(struct!.dbSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_protocol: {
      value: cdktn.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_file: {
      value: cdktn.stringToHclTerraform(struct!.sslCaFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_file: {
      value: cdktn.stringToHclTerraform(struct!.sslCertFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_crl_file: {
      value: cdktn.stringToHclTerraform(struct!.sslCrlFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_file: {
      value: cdktn.stringToHclTerraform(struct!.sslKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_attributes: {
      value: cdktn.listMapperHcl(oracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributesToHclTerraform, true)(struct!.additionalAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._dbSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSystemId = this._dbSystemId;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sslCaFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaFile = this._sslCaFile;
    }
    if (this._sslCertFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertFile = this._sslCertFile;
    }
    if (this._sslCrlFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCrlFile = this._sslCrlFile;
    }
    if (this._sslKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyFile = this._sslKeyFile;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._additionalAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAttributes = this._additionalAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._dbSystemId = undefined;
      this._host = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._port = undefined;
      this._securityProtocol = undefined;
      this._sslCaFile = undefined;
      this._sslCertFile = undefined;
      this._sslCrlFile = undefined;
      this._sslKeyFile = undefined;
      this._sslMode = undefined;
      this._technologyType = undefined;
      this._username = undefined;
      this._additionalAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._dbSystemId = value.dbSystemId;
      this._host = value.host;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._port = value.port;
      this._securityProtocol = value.securityProtocol;
      this._sslCaFile = value.sslCaFile;
      this._sslCertFile = value.sslCertFile;
      this._sslCrlFile = value.sslCrlFile;
      this._sslKeyFile = value.sslKeyFile;
      this._sslMode = value.sslMode;
      this._technologyType = value.technologyType;
      this._username = value.username;
      this._additionalAttributes.internalValue = value.additionalAttributes;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // db_system_id - computed: false, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // ssl_ca_file - computed: false, optional: true, required: false
  private _sslCaFile?: string; 
  public get sslCaFile() {
    return this.getStringAttribute('ssl_ca_file');
  }
  public set sslCaFile(value: string) {
    this._sslCaFile = value;
  }
  public resetSslCaFile() {
    this._sslCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaFileInput() {
    return this._sslCaFile;
  }

  // ssl_cert_file - computed: false, optional: true, required: false
  private _sslCertFile?: string; 
  public get sslCertFile() {
    return this.getStringAttribute('ssl_cert_file');
  }
  public set sslCertFile(value: string) {
    this._sslCertFile = value;
  }
  public resetSslCertFile() {
    this._sslCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertFileInput() {
    return this._sslCertFile;
  }

  // ssl_crl_file - computed: false, optional: true, required: false
  private _sslCrlFile?: string; 
  public get sslCrlFile() {
    return this.getStringAttribute('ssl_crl_file');
  }
  public set sslCrlFile(value: string) {
    this._sslCrlFile = value;
  }
  public resetSslCrlFile() {
    this._sslCrlFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCrlFileInput() {
    return this._sslCrlFile;
  }

  // ssl_key_file - computed: false, optional: true, required: false
  private _sslKeyFile?: string; 
  public get sslKeyFile() {
    return this.getStringAttribute('ssl_key_file');
  }
  public set sslKeyFile(value: string) {
    this._sslKeyFile = value;
  }
  public resetSslKeyFile() {
    this._sslKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyFileInput() {
    return this._sslKeyFile;
  }

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes = new OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }
  public putAdditionalAttributes(value: OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable) {
    this._additionalAttributes.internalValue = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes.internalValue;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionProperties {
  /**
  * The content of the private key file (PEM file)
  * corresponding to the API key of the fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#private_key_file OracleDatabaseGoldengateConnection#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * The passphrase of the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#private_key_passphrase_secret OracleDatabaseGoldengateConnection#private_key_passphrase_secret}
  */
  readonly privateKeyPassphraseSecret?: string;
  /**
  * The fingerprint of the API Key of the user specified by the userId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#public_key_fingerprint OracleDatabaseGoldengateConnection#public_key_fingerprint}
  */
  readonly publicKeyFingerprint?: string;
  /**
  * The name of the region of OCI Object Storage. e.g.: us-ashburn-1
  * If the region is not provided, backend will default to the default region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#region OracleDatabaseGoldengateConnection#region}
  */
  readonly region?: string;
  /**
  * The technology type of OciObjectStorageConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The OCID of the related OCI tenancy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#tenancy_id OracleDatabaseGoldengateConnection#tenancy_id}
  */
  readonly tenancyId?: string;
  /**
  * Specifies that the user intends to authenticate to the instance using a
  * resource principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#use_resource_principal OracleDatabaseGoldengateConnection#use_resource_principal}
  */
  readonly useResourcePrincipal?: boolean | cdktn.IResolvable;
  /**
  * The OCID of the OCI user who will access the Object Storage.
  * The user must have write access to the bucket they want to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#user_id OracleDatabaseGoldengateConnection#user_id}
  */
  readonly userId?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key_file: cdktn.stringToTerraform(struct!.privateKeyFile),
    private_key_passphrase_secret: cdktn.stringToTerraform(struct!.privateKeyPassphraseSecret),
    public_key_fingerprint: cdktn.stringToTerraform(struct!.publicKeyFingerprint),
    region: cdktn.stringToTerraform(struct!.region),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    tenancy_id: cdktn.stringToTerraform(struct!.tenancyId),
    use_resource_principal: cdktn.booleanToTerraform(struct!.useResourcePrincipal),
    user_id: cdktn.stringToTerraform(struct!.userId),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key_file: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_passphrase_secret: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyPassphraseSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key_fingerprint: {
      value: cdktn.stringToHclTerraform(struct!.publicKeyFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenancy_id: {
      value: cdktn.stringToHclTerraform(struct!.tenancyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_resource_principal: {
      value: cdktn.booleanToHclTerraform(struct!.useResourcePrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_id: {
      value: cdktn.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFile = this._privateKeyFile;
    }
    if (this._privateKeyPassphraseSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphraseSecret = this._privateKeyPassphraseSecret;
    }
    if (this._publicKeyFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyFingerprint = this._publicKeyFingerprint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._tenancyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancyId = this._tenancyId;
    }
    if (this._useResourcePrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.useResourcePrincipal = this._useResourcePrincipal;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKeyFile = undefined;
      this._privateKeyPassphraseSecret = undefined;
      this._publicKeyFingerprint = undefined;
      this._region = undefined;
      this._technologyType = undefined;
      this._tenancyId = undefined;
      this._useResourcePrincipal = undefined;
      this._userId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKeyFile = value.privateKeyFile;
      this._privateKeyPassphraseSecret = value.privateKeyPassphraseSecret;
      this._publicKeyFingerprint = value.publicKeyFingerprint;
      this._region = value.region;
      this._technologyType = value.technologyType;
      this._tenancyId = value.tenancyId;
      this._useResourcePrincipal = value.useResourcePrincipal;
      this._userId = value.userId;
    }
  }

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }

  // private_key_passphrase_secret - computed: false, optional: true, required: false
  private _privateKeyPassphraseSecret?: string; 
  public get privateKeyPassphraseSecret() {
    return this.getStringAttribute('private_key_passphrase_secret');
  }
  public set privateKeyPassphraseSecret(value: string) {
    this._privateKeyPassphraseSecret = value;
  }
  public resetPrivateKeyPassphraseSecret() {
    this._privateKeyPassphraseSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseSecretInput() {
    return this._privateKeyPassphraseSecret;
  }

  // public_key_fingerprint - computed: false, optional: true, required: false
  private _publicKeyFingerprint?: string; 
  public get publicKeyFingerprint() {
    return this.getStringAttribute('public_key_fingerprint');
  }
  public set publicKeyFingerprint(value: string) {
    this._publicKeyFingerprint = value;
  }
  public resetPublicKeyFingerprint() {
    this._publicKeyFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyFingerprintInput() {
    return this._publicKeyFingerprint;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // tenancy_id - computed: false, optional: true, required: false
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  public resetTenancyId() {
    this._tenancyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // use_resource_principal - computed: false, optional: true, required: false
  private _useResourcePrincipal?: boolean | cdktn.IResolvable; 
  public get useResourcePrincipal() {
    return this.getBooleanAttribute('use_resource_principal');
  }
  public set useResourcePrincipal(value: boolean | cdktn.IResolvable) {
    this._useResourcePrincipal = value;
  }
  public resetUseResourcePrincipal() {
    this._useResourcePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useResourcePrincipalInput() {
    return this._useResourcePrincipal;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionProperties {
  /**
  * Connection URL. It must start with 'jdbc:spark://'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#connection_url OracleDatabaseGoldengateConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * The content of the private key file (PEM file)
  * corresponding to the API key of the fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#private_key_file OracleDatabaseGoldengateConnection#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * The passphrase of the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#private_key_passphrase_secret OracleDatabaseGoldengateConnection#private_key_passphrase_secret}
  */
  readonly privateKeyPassphraseSecret?: string;
  /**
  * The fingerprint of the API Key of the user specified by the user_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#public_key_fingerprint OracleDatabaseGoldengateConnection#public_key_fingerprint}
  */
  readonly publicKeyFingerprint?: string;
  /**
  * The name of the region. e.g.: us-ashburn-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#region OracleDatabaseGoldengateConnection#region}
  */
  readonly region?: string;
  /**
  * The technology type of OracleAiDataPlatformConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The OCID of the related OCI tenancy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#tenancy_id OracleDatabaseGoldengateConnection#tenancy_id}
  */
  readonly tenancyId?: string;
  /**
  * Specifies that the user intends to authenticate to the instance using a
  * resource principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#use_resource_principal OracleDatabaseGoldengateConnection#use_resource_principal}
  */
  readonly useResourcePrincipal?: boolean | cdktn.IResolvable;
  /**
  * The OCID of the OCI user who will access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#user_id OracleDatabaseGoldengateConnection#user_id}
  */
  readonly userId?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_url: cdktn.stringToTerraform(struct!.connectionUrl),
    private_key_file: cdktn.stringToTerraform(struct!.privateKeyFile),
    private_key_passphrase_secret: cdktn.stringToTerraform(struct!.privateKeyPassphraseSecret),
    public_key_fingerprint: cdktn.stringToTerraform(struct!.publicKeyFingerprint),
    region: cdktn.stringToTerraform(struct!.region),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    tenancy_id: cdktn.stringToTerraform(struct!.tenancyId),
    use_resource_principal: cdktn.booleanToTerraform(struct!.useResourcePrincipal),
    user_id: cdktn.stringToTerraform(struct!.userId),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_url: {
      value: cdktn.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_file: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_passphrase_secret: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyPassphraseSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key_fingerprint: {
      value: cdktn.stringToHclTerraform(struct!.publicKeyFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenancy_id: {
      value: cdktn.stringToHclTerraform(struct!.tenancyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_resource_principal: {
      value: cdktn.booleanToHclTerraform(struct!.useResourcePrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_id: {
      value: cdktn.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._privateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFile = this._privateKeyFile;
    }
    if (this._privateKeyPassphraseSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphraseSecret = this._privateKeyPassphraseSecret;
    }
    if (this._publicKeyFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyFingerprint = this._publicKeyFingerprint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._tenancyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancyId = this._tenancyId;
    }
    if (this._useResourcePrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.useResourcePrincipal = this._useResourcePrincipal;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionUrl = undefined;
      this._privateKeyFile = undefined;
      this._privateKeyPassphraseSecret = undefined;
      this._publicKeyFingerprint = undefined;
      this._region = undefined;
      this._technologyType = undefined;
      this._tenancyId = undefined;
      this._useResourcePrincipal = undefined;
      this._userId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionUrl = value.connectionUrl;
      this._privateKeyFile = value.privateKeyFile;
      this._privateKeyPassphraseSecret = value.privateKeyPassphraseSecret;
      this._publicKeyFingerprint = value.publicKeyFingerprint;
      this._region = value.region;
      this._technologyType = value.technologyType;
      this._tenancyId = value.tenancyId;
      this._useResourcePrincipal = value.useResourcePrincipal;
      this._userId = value.userId;
    }
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }

  // private_key_passphrase_secret - computed: false, optional: true, required: false
  private _privateKeyPassphraseSecret?: string; 
  public get privateKeyPassphraseSecret() {
    return this.getStringAttribute('private_key_passphrase_secret');
  }
  public set privateKeyPassphraseSecret(value: string) {
    this._privateKeyPassphraseSecret = value;
  }
  public resetPrivateKeyPassphraseSecret() {
    this._privateKeyPassphraseSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseSecretInput() {
    return this._privateKeyPassphraseSecret;
  }

  // public_key_fingerprint - computed: false, optional: true, required: false
  private _publicKeyFingerprint?: string; 
  public get publicKeyFingerprint() {
    return this.getStringAttribute('public_key_fingerprint');
  }
  public set publicKeyFingerprint(value: string) {
    this._publicKeyFingerprint = value;
  }
  public resetPublicKeyFingerprint() {
    this._publicKeyFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyFingerprintInput() {
    return this._publicKeyFingerprint;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // tenancy_id - computed: false, optional: true, required: false
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  public resetTenancyId() {
    this._tenancyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // use_resource_principal - computed: false, optional: true, required: false
  private _useResourcePrincipal?: boolean | cdktn.IResolvable; 
  public get useResourcePrincipal() {
    return this.getBooleanAttribute('use_resource_principal');
  }
  public set useResourcePrincipal(value: boolean | cdktn.IResolvable) {
    this._useResourcePrincipal = value;
  }
  public resetUseResourcePrincipal() {
    this._useResourcePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useResourcePrincipalInput() {
    return this._useResourcePrincipal;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesOracleConnectionProperties {
  /**
  * Authentication mode.
  * Possible values:
  * TLS
  * MTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#authentication_mode OracleDatabaseGoldengateConnection#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * Connect descriptor or Easy Connect Naming method used to connect to a
  * database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#connection_string OracleDatabaseGoldengateConnection#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Database instance id of database in Oracle Database @ Google Cloud.
  * If gcp_oracle_database_id is provided, connection_string must be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#gcp_oracle_database_id OracleDatabaseGoldengateConnection#gcp_oracle_database_id}
  */
  readonly gcpOracleDatabaseId?: string;
  /**
  * Input only. The password Oracle Goldengate uses in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The mode of the database connection session to be established by the data
  * client.
  * Possible values:
  * DIRECT
  * REDIRECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#session_mode OracleDatabaseGoldengateConnection#session_mode}
  */
  readonly sessionMode?: string;
  /**
  * The technology type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The username Oracle Goldengate uses to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
  /**
  * The wallet contents Oracle Goldengate uses to make connections to a
  * database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#wallet_file OracleDatabaseGoldengateConnection#wallet_file}
  */
  readonly walletFile?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesOracleConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesOracleConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesOracleConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_mode: cdktn.stringToTerraform(struct!.authenticationMode),
    connection_string: cdktn.stringToTerraform(struct!.connectionString),
    gcp_oracle_database_id: cdktn.stringToTerraform(struct!.gcpOracleDatabaseId),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    session_mode: cdktn.stringToTerraform(struct!.sessionMode),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    username: cdktn.stringToTerraform(struct!.username),
    wallet_file: cdktn.stringToTerraform(struct!.walletFile),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesOracleConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesOracleConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesOracleConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_mode: {
      value: cdktn.stringToHclTerraform(struct!.authenticationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string: {
      value: cdktn.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_oracle_database_id: {
      value: cdktn.stringToHclTerraform(struct!.gcpOracleDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_mode: {
      value: cdktn.stringToHclTerraform(struct!.sessionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_file: {
      value: cdktn.stringToHclTerraform(struct!.walletFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesOracleConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesOracleConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMode = this._authenticationMode;
    }
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._gcpOracleDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpOracleDatabaseId = this._gcpOracleDatabaseId;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._sessionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMode = this._sessionMode;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._walletFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletFile = this._walletFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesOracleConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationMode = undefined;
      this._connectionString = undefined;
      this._gcpOracleDatabaseId = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._sessionMode = undefined;
      this._technologyType = undefined;
      this._username = undefined;
      this._walletFile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationMode = value.authenticationMode;
      this._connectionString = value.connectionString;
      this._gcpOracleDatabaseId = value.gcpOracleDatabaseId;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._sessionMode = value.sessionMode;
      this._technologyType = value.technologyType;
      this._username = value.username;
      this._walletFile = value.walletFile;
    }
  }

  // authentication_mode - computed: true, optional: true, required: false
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // gcp_oracle_database_id - computed: false, optional: true, required: false
  private _gcpOracleDatabaseId?: string; 
  public get gcpOracleDatabaseId() {
    return this.getStringAttribute('gcp_oracle_database_id');
  }
  public set gcpOracleDatabaseId(value: string) {
    this._gcpOracleDatabaseId = value;
  }
  public resetGcpOracleDatabaseId() {
    this._gcpOracleDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpOracleDatabaseIdInput() {
    return this._gcpOracleDatabaseId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // session_mode - computed: true, optional: true, required: false
  private _sessionMode?: string; 
  public get sessionMode() {
    return this.getStringAttribute('session_mode');
  }
  public set sessionMode(value: string) {
    this._sessionMode = value;
  }
  public resetSessionMode() {
    this._sessionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionModeInput() {
    return this._sessionMode;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // wallet_file - computed: false, optional: true, required: false
  private _walletFile?: string; 
  public get walletFile() {
    return this.getStringAttribute('wallet_file');
  }
  public set walletFile(value: string) {
    this._walletFile = value;
  }
  public resetWalletFile() {
    this._walletFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletFileInput() {
    return this._walletFile;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionProperties {
  /**
  * The content of the private key file (PEM file)
  * corresponding to the API key of the fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#private_key_file OracleDatabaseGoldengateConnection#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * The passphrase of the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#private_key_passphrase_secret OracleDatabaseGoldengateConnection#private_key_passphrase_secret}
  */
  readonly privateKeyPassphraseSecret?: string;
  /**
  * The fingerprint of the API Key of the user specified by the userId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#public_key_fingerprint OracleDatabaseGoldengateConnection#public_key_fingerprint}
  */
  readonly publicKeyFingerprint?: string;
  /**
  * The name of the region. e.g.: us-ashburn-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#region OracleDatabaseGoldengateConnection#region}
  */
  readonly region?: string;
  /**
  * The technology type of OracleNosqlConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The OCID of the OCI tenancy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#tenancy_id OracleDatabaseGoldengateConnection#tenancy_id}
  */
  readonly tenancyId?: string;
  /**
  * Specifies that the user intends to authenticate to the instance using a
  * resource principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#use_resource_principal OracleDatabaseGoldengateConnection#use_resource_principal}
  */
  readonly useResourcePrincipal?: boolean | cdktn.IResolvable;
  /**
  * The OCID of the OCI user who will access the Oracle NoSQL database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#user_id OracleDatabaseGoldengateConnection#user_id}
  */
  readonly userId?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key_file: cdktn.stringToTerraform(struct!.privateKeyFile),
    private_key_passphrase_secret: cdktn.stringToTerraform(struct!.privateKeyPassphraseSecret),
    public_key_fingerprint: cdktn.stringToTerraform(struct!.publicKeyFingerprint),
    region: cdktn.stringToTerraform(struct!.region),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    tenancy_id: cdktn.stringToTerraform(struct!.tenancyId),
    use_resource_principal: cdktn.booleanToTerraform(struct!.useResourcePrincipal),
    user_id: cdktn.stringToTerraform(struct!.userId),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key_file: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_passphrase_secret: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyPassphraseSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key_fingerprint: {
      value: cdktn.stringToHclTerraform(struct!.publicKeyFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenancy_id: {
      value: cdktn.stringToHclTerraform(struct!.tenancyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_resource_principal: {
      value: cdktn.booleanToHclTerraform(struct!.useResourcePrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_id: {
      value: cdktn.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFile = this._privateKeyFile;
    }
    if (this._privateKeyPassphraseSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphraseSecret = this._privateKeyPassphraseSecret;
    }
    if (this._publicKeyFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyFingerprint = this._publicKeyFingerprint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._tenancyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancyId = this._tenancyId;
    }
    if (this._useResourcePrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.useResourcePrincipal = this._useResourcePrincipal;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKeyFile = undefined;
      this._privateKeyPassphraseSecret = undefined;
      this._publicKeyFingerprint = undefined;
      this._region = undefined;
      this._technologyType = undefined;
      this._tenancyId = undefined;
      this._useResourcePrincipal = undefined;
      this._userId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKeyFile = value.privateKeyFile;
      this._privateKeyPassphraseSecret = value.privateKeyPassphraseSecret;
      this._publicKeyFingerprint = value.publicKeyFingerprint;
      this._region = value.region;
      this._technologyType = value.technologyType;
      this._tenancyId = value.tenancyId;
      this._useResourcePrincipal = value.useResourcePrincipal;
      this._userId = value.userId;
    }
  }

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }

  // private_key_passphrase_secret - computed: false, optional: true, required: false
  private _privateKeyPassphraseSecret?: string; 
  public get privateKeyPassphraseSecret() {
    return this.getStringAttribute('private_key_passphrase_secret');
  }
  public set privateKeyPassphraseSecret(value: string) {
    this._privateKeyPassphraseSecret = value;
  }
  public resetPrivateKeyPassphraseSecret() {
    this._privateKeyPassphraseSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseSecretInput() {
    return this._privateKeyPassphraseSecret;
  }

  // public_key_fingerprint - computed: false, optional: true, required: false
  private _publicKeyFingerprint?: string; 
  public get publicKeyFingerprint() {
    return this.getStringAttribute('public_key_fingerprint');
  }
  public set publicKeyFingerprint(value: string) {
    this._publicKeyFingerprint = value;
  }
  public resetPublicKeyFingerprint() {
    this._publicKeyFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyFingerprintInput() {
    return this._publicKeyFingerprint;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // tenancy_id - computed: false, optional: true, required: false
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  public resetTenancyId() {
    this._tenancyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // use_resource_principal - computed: false, optional: true, required: false
  private _useResourcePrincipal?: boolean | cdktn.IResolvable; 
  public get useResourcePrincipal() {
    return this.getBooleanAttribute('use_resource_principal');
  }
  public set useResourcePrincipal(value: boolean | cdktn.IResolvable) {
    this._useResourcePrincipal = value;
  }
  public resetUseResourcePrincipal() {
    this._useResourcePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useResourcePrincipalInput() {
    return this._useResourcePrincipal;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributes {
  /**
  * The name of the property entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key OracleDatabaseGoldengateConnection#key}
  */
  readonly key: string;
  /**
  * The value of the property entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#value OracleDatabaseGoldengateConnection#value}
  */
  readonly value: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributesList extends cdktn.ComplexList {
  public internalValue? : OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributesOutputReference {
    return new OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionProperties {
  /**
  * The name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#database OracleDatabaseGoldengateConnection#database}
  */
  readonly database?: string;
  /**
  * The OCID of the database system being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#db_system_id OracleDatabaseGoldengateConnection#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * The name or address of a host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#host OracleDatabaseGoldengateConnection#host}
  */
  readonly host?: string;
  /**
  * Input only. The password Oracle Goldengate uses for PostgreSQL connection in plain
  * text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses for PostgreSQL connection.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The port of an endpoint usually specified for a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#port OracleDatabaseGoldengateConnection#port}
  */
  readonly port?: number;
  /**
  * Security protocol for PostgreSQL.
  * Possible values:
  * PLAIN
  * TLS
  * MTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#security_protocol OracleDatabaseGoldengateConnection#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * The certificate of the trusted certificate authorities
  * (Trusted CA) for PostgreSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_ca_file OracleDatabaseGoldengateConnection#ssl_ca_file}
  */
  readonly sslCaFile?: string;
  /**
  * The certificate of the PostgreSQL server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_cert_file OracleDatabaseGoldengateConnection#ssl_cert_file}
  */
  readonly sslCertFile?: string;
  /**
  * The list of certificates revoked by the trusted
  * certificate authorities (Trusted CA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_crl_file OracleDatabaseGoldengateConnection#ssl_crl_file}
  */
  readonly sslCrlFile?: string;
  /**
  * The private key of the PostgreSQL server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_key_file OracleDatabaseGoldengateConnection#ssl_key_file}
  */
  readonly sslKeyFile?: string;
  /**
  * SSL modes for PostgreSQL.
  * Possible values:
  * PREFER
  * REQUIRE
  * VERIFY_CA
  * VERIFY_FULL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#ssl_mode OracleDatabaseGoldengateConnection#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * The technology type of PostgresqlConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The username Oracle Goldengate uses to connect the associated system of
  * the given technology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
  /**
  * additional_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#additional_attributes OracleDatabaseGoldengateConnection#additional_attributes}
  */
  readonly additionalAttributes?: OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable;
}

export function oracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    db_system_id: cdktn.stringToTerraform(struct!.dbSystemId),
    host: cdktn.stringToTerraform(struct!.host),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    port: cdktn.numberToTerraform(struct!.port),
    security_protocol: cdktn.stringToTerraform(struct!.securityProtocol),
    ssl_ca_file: cdktn.stringToTerraform(struct!.sslCaFile),
    ssl_cert_file: cdktn.stringToTerraform(struct!.sslCertFile),
    ssl_crl_file: cdktn.stringToTerraform(struct!.sslCrlFile),
    ssl_key_file: cdktn.stringToTerraform(struct!.sslKeyFile),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    username: cdktn.stringToTerraform(struct!.username),
    additional_attributes: cdktn.listMapper(oracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributesToTerraform, true)(struct!.additionalAttributes),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_system_id: {
      value: cdktn.stringToHclTerraform(struct!.dbSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_protocol: {
      value: cdktn.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_file: {
      value: cdktn.stringToHclTerraform(struct!.sslCaFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_file: {
      value: cdktn.stringToHclTerraform(struct!.sslCertFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_crl_file: {
      value: cdktn.stringToHclTerraform(struct!.sslCrlFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_file: {
      value: cdktn.stringToHclTerraform(struct!.sslKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_attributes: {
      value: cdktn.listMapperHcl(oracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributesToHclTerraform, true)(struct!.additionalAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._dbSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSystemId = this._dbSystemId;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sslCaFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaFile = this._sslCaFile;
    }
    if (this._sslCertFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertFile = this._sslCertFile;
    }
    if (this._sslCrlFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCrlFile = this._sslCrlFile;
    }
    if (this._sslKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyFile = this._sslKeyFile;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._additionalAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAttributes = this._additionalAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._dbSystemId = undefined;
      this._host = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._port = undefined;
      this._securityProtocol = undefined;
      this._sslCaFile = undefined;
      this._sslCertFile = undefined;
      this._sslCrlFile = undefined;
      this._sslKeyFile = undefined;
      this._sslMode = undefined;
      this._technologyType = undefined;
      this._username = undefined;
      this._additionalAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._dbSystemId = value.dbSystemId;
      this._host = value.host;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._port = value.port;
      this._securityProtocol = value.securityProtocol;
      this._sslCaFile = value.sslCaFile;
      this._sslCertFile = value.sslCertFile;
      this._sslCrlFile = value.sslCrlFile;
      this._sslKeyFile = value.sslKeyFile;
      this._sslMode = value.sslMode;
      this._technologyType = value.technologyType;
      this._username = value.username;
      this._additionalAttributes.internalValue = value.additionalAttributes;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // db_system_id - computed: false, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // ssl_ca_file - computed: false, optional: true, required: false
  private _sslCaFile?: string; 
  public get sslCaFile() {
    return this.getStringAttribute('ssl_ca_file');
  }
  public set sslCaFile(value: string) {
    this._sslCaFile = value;
  }
  public resetSslCaFile() {
    this._sslCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaFileInput() {
    return this._sslCaFile;
  }

  // ssl_cert_file - computed: false, optional: true, required: false
  private _sslCertFile?: string; 
  public get sslCertFile() {
    return this.getStringAttribute('ssl_cert_file');
  }
  public set sslCertFile(value: string) {
    this._sslCertFile = value;
  }
  public resetSslCertFile() {
    this._sslCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertFileInput() {
    return this._sslCertFile;
  }

  // ssl_crl_file - computed: false, optional: true, required: false
  private _sslCrlFile?: string; 
  public get sslCrlFile() {
    return this.getStringAttribute('ssl_crl_file');
  }
  public set sslCrlFile(value: string) {
    this._sslCrlFile = value;
  }
  public resetSslCrlFile() {
    this._sslCrlFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCrlFileInput() {
    return this._sslCrlFile;
  }

  // ssl_key_file - computed: false, optional: true, required: false
  private _sslKeyFile?: string; 
  public get sslKeyFile() {
    return this.getStringAttribute('ssl_key_file');
  }
  public set sslKeyFile(value: string) {
    this._sslKeyFile = value;
  }
  public resetSslKeyFile() {
    this._sslKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyFileInput() {
    return this._sslKeyFile;
  }

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes = new OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }
  public putAdditionalAttributes(value: OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesAdditionalAttributes[] | cdktn.IResolvable) {
    this._additionalAttributes.internalValue = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes.internalValue;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesRedisConnectionProperties {
  /**
  * Authentication type for Redis.
  * Possible values:
  * NONE
  * BASIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#authentication_type OracleDatabaseGoldengateConnection#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * The content of the KeyStore file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_file OracleDatabaseGoldengateConnection#key_store_file}
  */
  readonly keyStoreFile?: string;
  /**
  * Input only. The KeyStore password in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_password OracleDatabaseGoldengateConnection#key_store_password}
  */
  readonly keyStorePassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the KeyStore password.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#key_store_password_secret_version OracleDatabaseGoldengateConnection#key_store_password_secret_version}
  */
  readonly keyStorePasswordSecretVersion?: string;
  /**
  * Input only. The password Oracle Goldengate uses for Redis connection in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses for Redis connection.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The OCID of the Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#redis_cluster_id OracleDatabaseGoldengateConnection#redis_cluster_id}
  */
  readonly redisClusterId?: string;
  /**
  * Security protocol for Redis.
  * Possible values:
  * PLAIN
  * TLS
  * MTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#security_protocol OracleDatabaseGoldengateConnection#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Comma separated list of Redis server addresses, specified as host:port
  * entries, where :port is optional. If port is not specified, it defaults
  * to 6379. Example: "server1.example.com:6379,server2.example.com:6379"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#servers OracleDatabaseGoldengateConnection#servers}
  */
  readonly servers?: string;
  /**
  * The technology type of RedisConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The content of the TrustStore file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_file OracleDatabaseGoldengateConnection#trust_store_file}
  */
  readonly trustStoreFile?: string;
  /**
  * Input only. The TrustStore password in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_password OracleDatabaseGoldengateConnection#trust_store_password}
  */
  readonly trustStorePassword?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the TrustStore password.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#trust_store_password_secret_version OracleDatabaseGoldengateConnection#trust_store_password_secret_version}
  */
  readonly trustStorePasswordSecretVersion?: string;
  /**
  * The username Oracle Goldengate uses to connect the associated system of
  * the given technology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesRedisConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesRedisConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesRedisConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    key_store_file: cdktn.stringToTerraform(struct!.keyStoreFile),
    key_store_password: cdktn.stringToTerraform(struct!.keyStorePassword),
    key_store_password_secret_version: cdktn.stringToTerraform(struct!.keyStorePasswordSecretVersion),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    redis_cluster_id: cdktn.stringToTerraform(struct!.redisClusterId),
    security_protocol: cdktn.stringToTerraform(struct!.securityProtocol),
    servers: cdktn.stringToTerraform(struct!.servers),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    trust_store_file: cdktn.stringToTerraform(struct!.trustStoreFile),
    trust_store_password: cdktn.stringToTerraform(struct!.trustStorePassword),
    trust_store_password_secret_version: cdktn.stringToTerraform(struct!.trustStorePasswordSecretVersion),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesRedisConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesRedisConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesRedisConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_file: {
      value: cdktn.stringToHclTerraform(struct!.keyStoreFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_password: {
      value: cdktn.stringToHclTerraform(struct!.keyStorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.keyStorePasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redis_cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.redisClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktn.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktn.stringToHclTerraform(struct!.servers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_file: {
      value: cdktn.stringToHclTerraform(struct!.trustStoreFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_password: {
      value: cdktn.stringToHclTerraform(struct!.trustStorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.trustStorePasswordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesRedisConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesRedisConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._keyStoreFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStoreFile = this._keyStoreFile;
    }
    if (this._keyStorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStorePassword = this._keyStorePassword;
    }
    if (this._keyStorePasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStorePasswordSecretVersion = this._keyStorePasswordSecretVersion;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._redisClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisClusterId = this._redisClusterId;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._trustStoreFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreFile = this._trustStoreFile;
    }
    if (this._trustStorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStorePassword = this._trustStorePassword;
    }
    if (this._trustStorePasswordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStorePasswordSecretVersion = this._trustStorePasswordSecretVersion;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesRedisConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._keyStoreFile = undefined;
      this._keyStorePassword = undefined;
      this._keyStorePasswordSecretVersion = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._redisClusterId = undefined;
      this._securityProtocol = undefined;
      this._servers = undefined;
      this._technologyType = undefined;
      this._trustStoreFile = undefined;
      this._trustStorePassword = undefined;
      this._trustStorePasswordSecretVersion = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._keyStoreFile = value.keyStoreFile;
      this._keyStorePassword = value.keyStorePassword;
      this._keyStorePasswordSecretVersion = value.keyStorePasswordSecretVersion;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._redisClusterId = value.redisClusterId;
      this._securityProtocol = value.securityProtocol;
      this._servers = value.servers;
      this._technologyType = value.technologyType;
      this._trustStoreFile = value.trustStoreFile;
      this._trustStorePassword = value.trustStorePassword;
      this._trustStorePasswordSecretVersion = value.trustStorePasswordSecretVersion;
      this._username = value.username;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // key_store_file - computed: false, optional: true, required: false
  private _keyStoreFile?: string; 
  public get keyStoreFile() {
    return this.getStringAttribute('key_store_file');
  }
  public set keyStoreFile(value: string) {
    this._keyStoreFile = value;
  }
  public resetKeyStoreFile() {
    this._keyStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreFileInput() {
    return this._keyStoreFile;
  }

  // key_store_password - computed: false, optional: true, required: false
  private _keyStorePassword?: string; 
  public get keyStorePassword() {
    return this.getStringAttribute('key_store_password');
  }
  public set keyStorePassword(value: string) {
    this._keyStorePassword = value;
  }
  public resetKeyStorePassword() {
    this._keyStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordInput() {
    return this._keyStorePassword;
  }

  // key_store_password_secret_version - computed: false, optional: true, required: false
  private _keyStorePasswordSecretVersion?: string; 
  public get keyStorePasswordSecretVersion() {
    return this.getStringAttribute('key_store_password_secret_version');
  }
  public set keyStorePasswordSecretVersion(value: string) {
    this._keyStorePasswordSecretVersion = value;
  }
  public resetKeyStorePasswordSecretVersion() {
    this._keyStorePasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordSecretVersionInput() {
    return this._keyStorePasswordSecretVersion;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // redis_cluster_id - computed: false, optional: true, required: false
  private _redisClusterId?: string; 
  public get redisClusterId() {
    return this.getStringAttribute('redis_cluster_id');
  }
  public set redisClusterId(value: string) {
    this._redisClusterId = value;
  }
  public resetRedisClusterId() {
    this._redisClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisClusterIdInput() {
    return this._redisClusterId;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string; 
  public get servers() {
    return this.getStringAttribute('servers');
  }
  public set servers(value: string) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // trust_store_file - computed: false, optional: true, required: false
  private _trustStoreFile?: string; 
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }
  public set trustStoreFile(value: string) {
    this._trustStoreFile = value;
  }
  public resetTrustStoreFile() {
    this._trustStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreFileInput() {
    return this._trustStoreFile;
  }

  // trust_store_password - computed: false, optional: true, required: false
  private _trustStorePassword?: string; 
  public get trustStorePassword() {
    return this.getStringAttribute('trust_store_password');
  }
  public set trustStorePassword(value: string) {
    this._trustStorePassword = value;
  }
  public resetTrustStorePassword() {
    this._trustStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePasswordInput() {
    return this._trustStorePassword;
  }

  // trust_store_password_secret_version - computed: false, optional: true, required: false
  private _trustStorePasswordSecretVersion?: string; 
  public get trustStorePasswordSecretVersion() {
    return this.getStringAttribute('trust_store_password_secret_version');
  }
  public set trustStorePasswordSecretVersion(value: string) {
    this._trustStorePasswordSecretVersion = value;
  }
  public resetTrustStorePasswordSecretVersion() {
    this._trustStorePasswordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePasswordSecretVersionInput() {
    return this._trustStorePasswordSecretVersion;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionProperties {
  /**
  * Used authentication mechanism to access Snowflake.
  * Possible values:
  * BASIC
  * KEY_PAIR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#authentication_type OracleDatabaseGoldengateConnection#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * JDBC connection URL.
  * e.g.:
  * 'jdbc:snowflake://.snowflakecomputing.com/?warehouse=&db='
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#connection_url OracleDatabaseGoldengateConnection#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Input only. The password Oracle Goldengate uses to connect to Snowflake platform
  * in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password OracleDatabaseGoldengateConnection#password}
  */
  readonly password?: string;
  /**
  * Input only. The resource name of a secret version in Secret Manager which contains
  * the password Oracle Goldengate uses to connect to Snowflake platform.
  * Format: projects/{project}/secrets/{secret}/versions/{version}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#password_secret_version OracleDatabaseGoldengateConnection#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The content of private key file in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#private_key_file OracleDatabaseGoldengateConnection#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * Password if the private key file is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#private_key_passphrase_secret OracleDatabaseGoldengateConnection#private_key_passphrase_secret}
  */
  readonly privateKeyPassphraseSecret?: string;
  /**
  * The technology type of SnowflakeConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#technology_type OracleDatabaseGoldengateConnection#technology_type}
  */
  readonly technologyType?: string;
  /**
  * The username Oracle Goldengate uses to connect to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#username OracleDatabaseGoldengateConnection#username}
  */
  readonly username?: string;
}

export function oracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    connection_url: cdktn.stringToTerraform(struct!.connectionUrl),
    password: cdktn.stringToTerraform(struct!.password),
    password_secret_version: cdktn.stringToTerraform(struct!.passwordSecretVersion),
    private_key_file: cdktn.stringToTerraform(struct!.privateKeyFile),
    private_key_passphrase_secret: cdktn.stringToTerraform(struct!.privateKeyPassphraseSecret),
    technology_type: cdktn.stringToTerraform(struct!.technologyType),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_url: {
      value: cdktn.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_file: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_passphrase_secret: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyPassphraseSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_type: {
      value: cdktn.stringToHclTerraform(struct!.technologyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._privateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFile = this._privateKeyFile;
    }
    if (this._privateKeyPassphraseSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphraseSecret = this._privateKeyPassphraseSecret;
    }
    if (this._technologyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyType = this._technologyType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._connectionUrl = undefined;
      this._password = undefined;
      this._passwordSecretVersion = undefined;
      this._privateKeyFile = undefined;
      this._privateKeyPassphraseSecret = undefined;
      this._technologyType = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._connectionUrl = value.connectionUrl;
      this._password = value.password;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._privateKeyFile = value.privateKeyFile;
      this._privateKeyPassphraseSecret = value.privateKeyPassphraseSecret;
      this._technologyType = value.technologyType;
      this._username = value.username;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }

  // private_key_passphrase_secret - computed: false, optional: true, required: false
  private _privateKeyPassphraseSecret?: string; 
  public get privateKeyPassphraseSecret() {
    return this.getStringAttribute('private_key_passphrase_secret');
  }
  public set privateKeyPassphraseSecret(value: string) {
    this._privateKeyPassphraseSecret = value;
  }
  public resetPrivateKeyPassphraseSecret() {
    this._privateKeyPassphraseSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseSecretInput() {
    return this._privateKeyPassphraseSecret;
  }

  // technology_type - computed: false, optional: true, required: false
  private _technologyType?: string; 
  public get technologyType() {
    return this.getStringAttribute('technology_type');
  }
  public set technologyType(value: string) {
    this._technologyType = value;
  }
  public resetTechnologyType() {
    this._technologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyTypeInput() {
    return this._technologyType;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OracleDatabaseGoldengateConnectionProperties {
  /**
  * The connection type.
  * Possible values:
  * GOLDENGATE
  * KAFKA
  * KAFKA_SCHEMA_REGISTRY
  * MYSQL
  * JAVA_MESSAGE_SERVICE
  * MICROSOFT_SQLSERVER
  * OCI_OBJECT_STORAGE
  * ORACLE
  * AZURE_DATA_LAKE_STORAGE
  * POSTGRESQL
  * AZURE_SYNAPSE_ANALYTICS
  * SNOWFLAKE
  * AMAZON_S3
  * HDFS
  * ORACLE_AI_DATA_PLATFORM
  * ORACLE_NOSQL
  * MONGODB
  * AMAZON_KINESIS
  * AMAZON_REDSHIFT
  * DB2
  * REDIS
  * ELASTICSEARCH
  * GENERIC
  * GOOGLE_CLOUD_STORAGE
  * GOOGLE_BIGQUERY
  * DATABRICKS
  * GOOGLE_PUBSUB
  * MICROSOFT_FABRIC
  * ICEBERG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#connection_type OracleDatabaseGoldengateConnection#connection_type}
  */
  readonly connectionType: string;
  /**
  * Metadata about this specific object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#description OracleDatabaseGoldengateConnection#description}
  */
  readonly description?: string;
  /**
  * An object's Display Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#display_name OracleDatabaseGoldengateConnection#display_name}
  */
  readonly displayName: string;
  /**
  * The routing method for the GoldengateConnection.
  * Possible values:
  * SHARED_DEPLOYMENT_ENDPOINT
  * DEDICATED_ENDPOINT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#routing_method OracleDatabaseGoldengateConnection#routing_method}
  */
  readonly routingMethod?: string;
  /**
  * amazon_kinesis_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#amazon_kinesis_connection_properties OracleDatabaseGoldengateConnection#amazon_kinesis_connection_properties}
  */
  readonly amazonKinesisConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionProperties;
  /**
  * amazon_redshift_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#amazon_redshift_connection_properties OracleDatabaseGoldengateConnection#amazon_redshift_connection_properties}
  */
  readonly amazonRedshiftConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionProperties;
  /**
  * amazon_s3_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#amazon_s3_connection_properties OracleDatabaseGoldengateConnection#amazon_s3_connection_properties}
  */
  readonly amazonS3ConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionProperties;
  /**
  * azure_data_lake_storage_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#azure_data_lake_storage_connection_properties OracleDatabaseGoldengateConnection#azure_data_lake_storage_connection_properties}
  */
  readonly azureDataLakeStorageConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionProperties;
  /**
  * azure_synapse_analytics_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#azure_synapse_analytics_connection_properties OracleDatabaseGoldengateConnection#azure_synapse_analytics_connection_properties}
  */
  readonly azureSynapseAnalyticsConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionProperties;
  /**
  * databricks_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#databricks_connection_properties OracleDatabaseGoldengateConnection#databricks_connection_properties}
  */
  readonly databricksConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionProperties;
  /**
  * db2_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#db2_connection_properties OracleDatabaseGoldengateConnection#db2_connection_properties}
  */
  readonly db2ConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionProperties;
  /**
  * elasticsearch_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#elasticsearch_connection_properties OracleDatabaseGoldengateConnection#elasticsearch_connection_properties}
  */
  readonly elasticsearchConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionProperties;
  /**
  * generic_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#generic_connection_properties OracleDatabaseGoldengateConnection#generic_connection_properties}
  */
  readonly genericConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesGenericConnectionProperties;
  /**
  * goldengate_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#goldengate_connection_properties OracleDatabaseGoldengateConnection#goldengate_connection_properties}
  */
  readonly goldengateConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionProperties;
  /**
  * google_big_query_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#google_big_query_connection_properties OracleDatabaseGoldengateConnection#google_big_query_connection_properties}
  */
  readonly googleBigQueryConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionProperties;
  /**
  * google_cloud_storage_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#google_cloud_storage_connection_properties OracleDatabaseGoldengateConnection#google_cloud_storage_connection_properties}
  */
  readonly googleCloudStorageConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionProperties;
  /**
  * google_pubsub_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#google_pubsub_connection_properties OracleDatabaseGoldengateConnection#google_pubsub_connection_properties}
  */
  readonly googlePubsubConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionProperties;
  /**
  * hdfs_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#hdfs_connection_properties OracleDatabaseGoldengateConnection#hdfs_connection_properties}
  */
  readonly hdfsConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionProperties;
  /**
  * iceberg_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#iceberg_connection_properties OracleDatabaseGoldengateConnection#iceberg_connection_properties}
  */
  readonly icebergConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionProperties;
  /**
  * java_message_service_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#java_message_service_connection_properties OracleDatabaseGoldengateConnection#java_message_service_connection_properties}
  */
  readonly javaMessageServiceConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionProperties;
  /**
  * kafka_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#kafka_connection_properties OracleDatabaseGoldengateConnection#kafka_connection_properties}
  */
  readonly kafkaConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionProperties;
  /**
  * kafka_schema_registry_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#kafka_schema_registry_connection_properties OracleDatabaseGoldengateConnection#kafka_schema_registry_connection_properties}
  */
  readonly kafkaSchemaRegistryConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionProperties;
  /**
  * microsoft_fabric_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#microsoft_fabric_connection_properties OracleDatabaseGoldengateConnection#microsoft_fabric_connection_properties}
  */
  readonly microsoftFabricConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionProperties;
  /**
  * microsoft_sqlserver_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#microsoft_sqlserver_connection_properties OracleDatabaseGoldengateConnection#microsoft_sqlserver_connection_properties}
  */
  readonly microsoftSqlserverConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionProperties;
  /**
  * mongodb_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#mongodb_connection_properties OracleDatabaseGoldengateConnection#mongodb_connection_properties}
  */
  readonly mongodbConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionProperties;
  /**
  * mysql_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#mysql_connection_properties OracleDatabaseGoldengateConnection#mysql_connection_properties}
  */
  readonly mysqlConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionProperties;
  /**
  * oci_object_storage_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#oci_object_storage_connection_properties OracleDatabaseGoldengateConnection#oci_object_storage_connection_properties}
  */
  readonly ociObjectStorageConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionProperties;
  /**
  * oracle_ai_data_platform_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#oracle_ai_data_platform_connection_properties OracleDatabaseGoldengateConnection#oracle_ai_data_platform_connection_properties}
  */
  readonly oracleAiDataPlatformConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionProperties;
  /**
  * oracle_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#oracle_connection_properties OracleDatabaseGoldengateConnection#oracle_connection_properties}
  */
  readonly oracleConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesOracleConnectionProperties;
  /**
  * oracle_nosql_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#oracle_nosql_connection_properties OracleDatabaseGoldengateConnection#oracle_nosql_connection_properties}
  */
  readonly oracleNosqlConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionProperties;
  /**
  * postgresql_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#postgresql_connection_properties OracleDatabaseGoldengateConnection#postgresql_connection_properties}
  */
  readonly postgresqlConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionProperties;
  /**
  * redis_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#redis_connection_properties OracleDatabaseGoldengateConnection#redis_connection_properties}
  */
  readonly redisConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesRedisConnectionProperties;
  /**
  * snowflake_connection_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#snowflake_connection_properties OracleDatabaseGoldengateConnection#snowflake_connection_properties}
  */
  readonly snowflakeConnectionProperties?: OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionProperties;
}

export function oracleDatabaseGoldengateConnectionPropertiesToTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_type: cdktn.stringToTerraform(struct!.connectionType),
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    routing_method: cdktn.stringToTerraform(struct!.routingMethod),
    amazon_kinesis_connection_properties: oracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionPropertiesToTerraform(struct!.amazonKinesisConnectionProperties),
    amazon_redshift_connection_properties: oracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionPropertiesToTerraform(struct!.amazonRedshiftConnectionProperties),
    amazon_s3_connection_properties: oracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionPropertiesToTerraform(struct!.amazonS3ConnectionProperties),
    azure_data_lake_storage_connection_properties: oracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionPropertiesToTerraform(struct!.azureDataLakeStorageConnectionProperties),
    azure_synapse_analytics_connection_properties: oracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionPropertiesToTerraform(struct!.azureSynapseAnalyticsConnectionProperties),
    databricks_connection_properties: oracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionPropertiesToTerraform(struct!.databricksConnectionProperties),
    db2_connection_properties: oracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesToTerraform(struct!.db2ConnectionProperties),
    elasticsearch_connection_properties: oracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionPropertiesToTerraform(struct!.elasticsearchConnectionProperties),
    generic_connection_properties: oracleDatabaseGoldengateConnectionPropertiesGenericConnectionPropertiesToTerraform(struct!.genericConnectionProperties),
    goldengate_connection_properties: oracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionPropertiesToTerraform(struct!.goldengateConnectionProperties),
    google_big_query_connection_properties: oracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionPropertiesToTerraform(struct!.googleBigQueryConnectionProperties),
    google_cloud_storage_connection_properties: oracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionPropertiesToTerraform(struct!.googleCloudStorageConnectionProperties),
    google_pubsub_connection_properties: oracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionPropertiesToTerraform(struct!.googlePubsubConnectionProperties),
    hdfs_connection_properties: oracleDatabaseGoldengateConnectionPropertiesHdfsConnectionPropertiesToTerraform(struct!.hdfsConnectionProperties),
    iceberg_connection_properties: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesToTerraform(struct!.icebergConnectionProperties),
    java_message_service_connection_properties: oracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionPropertiesToTerraform(struct!.javaMessageServiceConnectionProperties),
    kafka_connection_properties: oracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesToTerraform(struct!.kafkaConnectionProperties),
    kafka_schema_registry_connection_properties: oracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionPropertiesToTerraform(struct!.kafkaSchemaRegistryConnectionProperties),
    microsoft_fabric_connection_properties: oracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionPropertiesToTerraform(struct!.microsoftFabricConnectionProperties),
    microsoft_sqlserver_connection_properties: oracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesToTerraform(struct!.microsoftSqlserverConnectionProperties),
    mongodb_connection_properties: oracleDatabaseGoldengateConnectionPropertiesMongodbConnectionPropertiesToTerraform(struct!.mongodbConnectionProperties),
    mysql_connection_properties: oracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesToTerraform(struct!.mysqlConnectionProperties),
    oci_object_storage_connection_properties: oracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionPropertiesToTerraform(struct!.ociObjectStorageConnectionProperties),
    oracle_ai_data_platform_connection_properties: oracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionPropertiesToTerraform(struct!.oracleAiDataPlatformConnectionProperties),
    oracle_connection_properties: oracleDatabaseGoldengateConnectionPropertiesOracleConnectionPropertiesToTerraform(struct!.oracleConnectionProperties),
    oracle_nosql_connection_properties: oracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionPropertiesToTerraform(struct!.oracleNosqlConnectionProperties),
    postgresql_connection_properties: oracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesToTerraform(struct!.postgresqlConnectionProperties),
    redis_connection_properties: oracleDatabaseGoldengateConnectionPropertiesRedisConnectionPropertiesToTerraform(struct!.redisConnectionProperties),
    snowflake_connection_properties: oracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionPropertiesToTerraform(struct!.snowflakeConnectionProperties),
  }
}


export function oracleDatabaseGoldengateConnectionPropertiesToHclTerraform(struct?: OracleDatabaseGoldengateConnectionPropertiesOutputReference | OracleDatabaseGoldengateConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_type: {
      value: cdktn.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_method: {
      value: cdktn.stringToHclTerraform(struct!.routingMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amazon_kinesis_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionPropertiesToHclTerraform(struct!.amazonKinesisConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionPropertiesList",
    },
    amazon_redshift_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionPropertiesToHclTerraform(struct!.amazonRedshiftConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionPropertiesList",
    },
    amazon_s3_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionPropertiesToHclTerraform(struct!.amazonS3ConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionPropertiesList",
    },
    azure_data_lake_storage_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionPropertiesToHclTerraform(struct!.azureDataLakeStorageConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionPropertiesList",
    },
    azure_synapse_analytics_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionPropertiesToHclTerraform(struct!.azureSynapseAnalyticsConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionPropertiesList",
    },
    databricks_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionPropertiesToHclTerraform(struct!.databricksConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionPropertiesList",
    },
    db2_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesToHclTerraform(struct!.db2ConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesList",
    },
    elasticsearch_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionPropertiesToHclTerraform(struct!.elasticsearchConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionPropertiesList",
    },
    generic_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesGenericConnectionPropertiesToHclTerraform(struct!.genericConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesGenericConnectionPropertiesList",
    },
    goldengate_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionPropertiesToHclTerraform(struct!.goldengateConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionPropertiesList",
    },
    google_big_query_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionPropertiesToHclTerraform(struct!.googleBigQueryConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionPropertiesList",
    },
    google_cloud_storage_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionPropertiesToHclTerraform(struct!.googleCloudStorageConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionPropertiesList",
    },
    google_pubsub_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionPropertiesToHclTerraform(struct!.googlePubsubConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionPropertiesList",
    },
    hdfs_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesHdfsConnectionPropertiesToHclTerraform(struct!.hdfsConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionPropertiesList",
    },
    iceberg_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesToHclTerraform(struct!.icebergConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesList",
    },
    java_message_service_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionPropertiesToHclTerraform(struct!.javaMessageServiceConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionPropertiesList",
    },
    kafka_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesToHclTerraform(struct!.kafkaConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesList",
    },
    kafka_schema_registry_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionPropertiesToHclTerraform(struct!.kafkaSchemaRegistryConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionPropertiesList",
    },
    microsoft_fabric_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionPropertiesToHclTerraform(struct!.microsoftFabricConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionPropertiesList",
    },
    microsoft_sqlserver_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesToHclTerraform(struct!.microsoftSqlserverConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesList",
    },
    mongodb_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesMongodbConnectionPropertiesToHclTerraform(struct!.mongodbConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionPropertiesList",
    },
    mysql_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesToHclTerraform(struct!.mysqlConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesList",
    },
    oci_object_storage_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionPropertiesToHclTerraform(struct!.ociObjectStorageConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionPropertiesList",
    },
    oracle_ai_data_platform_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionPropertiesToHclTerraform(struct!.oracleAiDataPlatformConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionPropertiesList",
    },
    oracle_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesOracleConnectionPropertiesToHclTerraform(struct!.oracleConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesOracleConnectionPropertiesList",
    },
    oracle_nosql_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionPropertiesToHclTerraform(struct!.oracleNosqlConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionPropertiesList",
    },
    postgresql_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesToHclTerraform(struct!.postgresqlConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesList",
    },
    redis_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesRedisConnectionPropertiesToHclTerraform(struct!.redisConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesRedisConnectionPropertiesList",
    },
    snowflake_connection_properties: {
      value: oracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionPropertiesToHclTerraform(struct!.snowflakeConnectionProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._routingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingMethod = this._routingMethod;
    }
    if (this._amazonKinesisConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonKinesisConnectionProperties = this._amazonKinesisConnectionProperties?.internalValue;
    }
    if (this._amazonRedshiftConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonRedshiftConnectionProperties = this._amazonRedshiftConnectionProperties?.internalValue;
    }
    if (this._amazonS3ConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonS3ConnectionProperties = this._amazonS3ConnectionProperties?.internalValue;
    }
    if (this._azureDataLakeStorageConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDataLakeStorageConnectionProperties = this._azureDataLakeStorageConnectionProperties?.internalValue;
    }
    if (this._azureSynapseAnalyticsConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSynapseAnalyticsConnectionProperties = this._azureSynapseAnalyticsConnectionProperties?.internalValue;
    }
    if (this._databricksConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksConnectionProperties = this._databricksConnectionProperties?.internalValue;
    }
    if (this._db2ConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.db2ConnectionProperties = this._db2ConnectionProperties?.internalValue;
    }
    if (this._elasticsearchConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchConnectionProperties = this._elasticsearchConnectionProperties?.internalValue;
    }
    if (this._genericConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericConnectionProperties = this._genericConnectionProperties?.internalValue;
    }
    if (this._goldengateConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goldengateConnectionProperties = this._goldengateConnectionProperties?.internalValue;
    }
    if (this._googleBigQueryConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleBigQueryConnectionProperties = this._googleBigQueryConnectionProperties?.internalValue;
    }
    if (this._googleCloudStorageConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageConnectionProperties = this._googleCloudStorageConnectionProperties?.internalValue;
    }
    if (this._googlePubsubConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googlePubsubConnectionProperties = this._googlePubsubConnectionProperties?.internalValue;
    }
    if (this._hdfsConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfsConnectionProperties = this._hdfsConnectionProperties?.internalValue;
    }
    if (this._icebergConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergConnectionProperties = this._icebergConnectionProperties?.internalValue;
    }
    if (this._javaMessageServiceConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaMessageServiceConnectionProperties = this._javaMessageServiceConnectionProperties?.internalValue;
    }
    if (this._kafkaConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnectionProperties = this._kafkaConnectionProperties?.internalValue;
    }
    if (this._kafkaSchemaRegistryConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaSchemaRegistryConnectionProperties = this._kafkaSchemaRegistryConnectionProperties?.internalValue;
    }
    if (this._microsoftFabricConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftFabricConnectionProperties = this._microsoftFabricConnectionProperties?.internalValue;
    }
    if (this._microsoftSqlserverConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftSqlserverConnectionProperties = this._microsoftSqlserverConnectionProperties?.internalValue;
    }
    if (this._mongodbConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongodbConnectionProperties = this._mongodbConnectionProperties?.internalValue;
    }
    if (this._mysqlConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlConnectionProperties = this._mysqlConnectionProperties?.internalValue;
    }
    if (this._ociObjectStorageConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ociObjectStorageConnectionProperties = this._ociObjectStorageConnectionProperties?.internalValue;
    }
    if (this._oracleAiDataPlatformConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleAiDataPlatformConnectionProperties = this._oracleAiDataPlatformConnectionProperties?.internalValue;
    }
    if (this._oracleConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleConnectionProperties = this._oracleConnectionProperties?.internalValue;
    }
    if (this._oracleNosqlConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleNosqlConnectionProperties = this._oracleNosqlConnectionProperties?.internalValue;
    }
    if (this._postgresqlConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlConnectionProperties = this._postgresqlConnectionProperties?.internalValue;
    }
    if (this._redisConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisConnectionProperties = this._redisConnectionProperties?.internalValue;
    }
    if (this._snowflakeConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeConnectionProperties = this._snowflakeConnectionProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionType = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._routingMethod = undefined;
      this._amazonKinesisConnectionProperties.internalValue = undefined;
      this._amazonRedshiftConnectionProperties.internalValue = undefined;
      this._amazonS3ConnectionProperties.internalValue = undefined;
      this._azureDataLakeStorageConnectionProperties.internalValue = undefined;
      this._azureSynapseAnalyticsConnectionProperties.internalValue = undefined;
      this._databricksConnectionProperties.internalValue = undefined;
      this._db2ConnectionProperties.internalValue = undefined;
      this._elasticsearchConnectionProperties.internalValue = undefined;
      this._genericConnectionProperties.internalValue = undefined;
      this._goldengateConnectionProperties.internalValue = undefined;
      this._googleBigQueryConnectionProperties.internalValue = undefined;
      this._googleCloudStorageConnectionProperties.internalValue = undefined;
      this._googlePubsubConnectionProperties.internalValue = undefined;
      this._hdfsConnectionProperties.internalValue = undefined;
      this._icebergConnectionProperties.internalValue = undefined;
      this._javaMessageServiceConnectionProperties.internalValue = undefined;
      this._kafkaConnectionProperties.internalValue = undefined;
      this._kafkaSchemaRegistryConnectionProperties.internalValue = undefined;
      this._microsoftFabricConnectionProperties.internalValue = undefined;
      this._microsoftSqlserverConnectionProperties.internalValue = undefined;
      this._mongodbConnectionProperties.internalValue = undefined;
      this._mysqlConnectionProperties.internalValue = undefined;
      this._ociObjectStorageConnectionProperties.internalValue = undefined;
      this._oracleAiDataPlatformConnectionProperties.internalValue = undefined;
      this._oracleConnectionProperties.internalValue = undefined;
      this._oracleNosqlConnectionProperties.internalValue = undefined;
      this._postgresqlConnectionProperties.internalValue = undefined;
      this._redisConnectionProperties.internalValue = undefined;
      this._snowflakeConnectionProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionType = value.connectionType;
      this._description = value.description;
      this._displayName = value.displayName;
      this._routingMethod = value.routingMethod;
      this._amazonKinesisConnectionProperties.internalValue = value.amazonKinesisConnectionProperties;
      this._amazonRedshiftConnectionProperties.internalValue = value.amazonRedshiftConnectionProperties;
      this._amazonS3ConnectionProperties.internalValue = value.amazonS3ConnectionProperties;
      this._azureDataLakeStorageConnectionProperties.internalValue = value.azureDataLakeStorageConnectionProperties;
      this._azureSynapseAnalyticsConnectionProperties.internalValue = value.azureSynapseAnalyticsConnectionProperties;
      this._databricksConnectionProperties.internalValue = value.databricksConnectionProperties;
      this._db2ConnectionProperties.internalValue = value.db2ConnectionProperties;
      this._elasticsearchConnectionProperties.internalValue = value.elasticsearchConnectionProperties;
      this._genericConnectionProperties.internalValue = value.genericConnectionProperties;
      this._goldengateConnectionProperties.internalValue = value.goldengateConnectionProperties;
      this._googleBigQueryConnectionProperties.internalValue = value.googleBigQueryConnectionProperties;
      this._googleCloudStorageConnectionProperties.internalValue = value.googleCloudStorageConnectionProperties;
      this._googlePubsubConnectionProperties.internalValue = value.googlePubsubConnectionProperties;
      this._hdfsConnectionProperties.internalValue = value.hdfsConnectionProperties;
      this._icebergConnectionProperties.internalValue = value.icebergConnectionProperties;
      this._javaMessageServiceConnectionProperties.internalValue = value.javaMessageServiceConnectionProperties;
      this._kafkaConnectionProperties.internalValue = value.kafkaConnectionProperties;
      this._kafkaSchemaRegistryConnectionProperties.internalValue = value.kafkaSchemaRegistryConnectionProperties;
      this._microsoftFabricConnectionProperties.internalValue = value.microsoftFabricConnectionProperties;
      this._microsoftSqlserverConnectionProperties.internalValue = value.microsoftSqlserverConnectionProperties;
      this._mongodbConnectionProperties.internalValue = value.mongodbConnectionProperties;
      this._mysqlConnectionProperties.internalValue = value.mysqlConnectionProperties;
      this._ociObjectStorageConnectionProperties.internalValue = value.ociObjectStorageConnectionProperties;
      this._oracleAiDataPlatformConnectionProperties.internalValue = value.oracleAiDataPlatformConnectionProperties;
      this._oracleConnectionProperties.internalValue = value.oracleConnectionProperties;
      this._oracleNosqlConnectionProperties.internalValue = value.oracleNosqlConnectionProperties;
      this._postgresqlConnectionProperties.internalValue = value.postgresqlConnectionProperties;
      this._redisConnectionProperties.internalValue = value.redisConnectionProperties;
      this._snowflakeConnectionProperties.internalValue = value.snowflakeConnectionProperties;
    }
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ingress_ip_addresses - computed: true, optional: false, required: false
  public get ingressIpAddresses() {
    return this.getListAttribute('ingress_ip_addresses');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // routing_method - computed: true, optional: true, required: false
  private _routingMethod?: string; 
  public get routingMethod() {
    return this.getStringAttribute('routing_method');
  }
  public set routingMethod(value: string) {
    this._routingMethod = value;
  }
  public resetRoutingMethod() {
    this._routingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingMethodInput() {
    return this._routingMethod;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // amazon_kinesis_connection_properties - computed: false, optional: true, required: false
  private _amazonKinesisConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionPropertiesOutputReference(this, "amazon_kinesis_connection_properties");
  public get amazonKinesisConnectionProperties() {
    return this._amazonKinesisConnectionProperties;
  }
  public putAmazonKinesisConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesAmazonKinesisConnectionProperties) {
    this._amazonKinesisConnectionProperties.internalValue = value;
  }
  public resetAmazonKinesisConnectionProperties() {
    this._amazonKinesisConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonKinesisConnectionPropertiesInput() {
    return this._amazonKinesisConnectionProperties.internalValue;
  }

  // amazon_redshift_connection_properties - computed: false, optional: true, required: false
  private _amazonRedshiftConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionPropertiesOutputReference(this, "amazon_redshift_connection_properties");
  public get amazonRedshiftConnectionProperties() {
    return this._amazonRedshiftConnectionProperties;
  }
  public putAmazonRedshiftConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesAmazonRedshiftConnectionProperties) {
    this._amazonRedshiftConnectionProperties.internalValue = value;
  }
  public resetAmazonRedshiftConnectionProperties() {
    this._amazonRedshiftConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonRedshiftConnectionPropertiesInput() {
    return this._amazonRedshiftConnectionProperties.internalValue;
  }

  // amazon_s3_connection_properties - computed: false, optional: true, required: false
  private _amazonS3ConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionPropertiesOutputReference(this, "amazon_s3_connection_properties");
  public get amazonS3ConnectionProperties() {
    return this._amazonS3ConnectionProperties;
  }
  public putAmazonS3ConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesAmazonS3ConnectionProperties) {
    this._amazonS3ConnectionProperties.internalValue = value;
  }
  public resetAmazonS3ConnectionProperties() {
    this._amazonS3ConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonS3ConnectionPropertiesInput() {
    return this._amazonS3ConnectionProperties.internalValue;
  }

  // azure_data_lake_storage_connection_properties - computed: false, optional: true, required: false
  private _azureDataLakeStorageConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionPropertiesOutputReference(this, "azure_data_lake_storage_connection_properties");
  public get azureDataLakeStorageConnectionProperties() {
    return this._azureDataLakeStorageConnectionProperties;
  }
  public putAzureDataLakeStorageConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesAzureDataLakeStorageConnectionProperties) {
    this._azureDataLakeStorageConnectionProperties.internalValue = value;
  }
  public resetAzureDataLakeStorageConnectionProperties() {
    this._azureDataLakeStorageConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDataLakeStorageConnectionPropertiesInput() {
    return this._azureDataLakeStorageConnectionProperties.internalValue;
  }

  // azure_synapse_analytics_connection_properties - computed: false, optional: true, required: false
  private _azureSynapseAnalyticsConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionPropertiesOutputReference(this, "azure_synapse_analytics_connection_properties");
  public get azureSynapseAnalyticsConnectionProperties() {
    return this._azureSynapseAnalyticsConnectionProperties;
  }
  public putAzureSynapseAnalyticsConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesAzureSynapseAnalyticsConnectionProperties) {
    this._azureSynapseAnalyticsConnectionProperties.internalValue = value;
  }
  public resetAzureSynapseAnalyticsConnectionProperties() {
    this._azureSynapseAnalyticsConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSynapseAnalyticsConnectionPropertiesInput() {
    return this._azureSynapseAnalyticsConnectionProperties.internalValue;
  }

  // databricks_connection_properties - computed: false, optional: true, required: false
  private _databricksConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionPropertiesOutputReference(this, "databricks_connection_properties");
  public get databricksConnectionProperties() {
    return this._databricksConnectionProperties;
  }
  public putDatabricksConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesDatabricksConnectionProperties) {
    this._databricksConnectionProperties.internalValue = value;
  }
  public resetDatabricksConnectionProperties() {
    this._databricksConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksConnectionPropertiesInput() {
    return this._databricksConnectionProperties.internalValue;
  }

  // db2_connection_properties - computed: false, optional: true, required: false
  private _db2ConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionPropertiesOutputReference(this, "db2_connection_properties");
  public get db2ConnectionProperties() {
    return this._db2ConnectionProperties;
  }
  public putDb2ConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesDb2ConnectionProperties) {
    this._db2ConnectionProperties.internalValue = value;
  }
  public resetDb2ConnectionProperties() {
    this._db2ConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get db2ConnectionPropertiesInput() {
    return this._db2ConnectionProperties.internalValue;
  }

  // elasticsearch_connection_properties - computed: false, optional: true, required: false
  private _elasticsearchConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionPropertiesOutputReference(this, "elasticsearch_connection_properties");
  public get elasticsearchConnectionProperties() {
    return this._elasticsearchConnectionProperties;
  }
  public putElasticsearchConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesElasticsearchConnectionProperties) {
    this._elasticsearchConnectionProperties.internalValue = value;
  }
  public resetElasticsearchConnectionProperties() {
    this._elasticsearchConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConnectionPropertiesInput() {
    return this._elasticsearchConnectionProperties.internalValue;
  }

  // generic_connection_properties - computed: false, optional: true, required: false
  private _genericConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesGenericConnectionPropertiesOutputReference(this, "generic_connection_properties");
  public get genericConnectionProperties() {
    return this._genericConnectionProperties;
  }
  public putGenericConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesGenericConnectionProperties) {
    this._genericConnectionProperties.internalValue = value;
  }
  public resetGenericConnectionProperties() {
    this._genericConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericConnectionPropertiesInput() {
    return this._genericConnectionProperties.internalValue;
  }

  // goldengate_connection_properties - computed: false, optional: true, required: false
  private _goldengateConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionPropertiesOutputReference(this, "goldengate_connection_properties");
  public get goldengateConnectionProperties() {
    return this._goldengateConnectionProperties;
  }
  public putGoldengateConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesGoldengateConnectionProperties) {
    this._goldengateConnectionProperties.internalValue = value;
  }
  public resetGoldengateConnectionProperties() {
    this._goldengateConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goldengateConnectionPropertiesInput() {
    return this._goldengateConnectionProperties.internalValue;
  }

  // google_big_query_connection_properties - computed: false, optional: true, required: false
  private _googleBigQueryConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionPropertiesOutputReference(this, "google_big_query_connection_properties");
  public get googleBigQueryConnectionProperties() {
    return this._googleBigQueryConnectionProperties;
  }
  public putGoogleBigQueryConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesGoogleBigQueryConnectionProperties) {
    this._googleBigQueryConnectionProperties.internalValue = value;
  }
  public resetGoogleBigQueryConnectionProperties() {
    this._googleBigQueryConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleBigQueryConnectionPropertiesInput() {
    return this._googleBigQueryConnectionProperties.internalValue;
  }

  // google_cloud_storage_connection_properties - computed: false, optional: true, required: false
  private _googleCloudStorageConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionPropertiesOutputReference(this, "google_cloud_storage_connection_properties");
  public get googleCloudStorageConnectionProperties() {
    return this._googleCloudStorageConnectionProperties;
  }
  public putGoogleCloudStorageConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesGoogleCloudStorageConnectionProperties) {
    this._googleCloudStorageConnectionProperties.internalValue = value;
  }
  public resetGoogleCloudStorageConnectionProperties() {
    this._googleCloudStorageConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageConnectionPropertiesInput() {
    return this._googleCloudStorageConnectionProperties.internalValue;
  }

  // google_pubsub_connection_properties - computed: false, optional: true, required: false
  private _googlePubsubConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionPropertiesOutputReference(this, "google_pubsub_connection_properties");
  public get googlePubsubConnectionProperties() {
    return this._googlePubsubConnectionProperties;
  }
  public putGooglePubsubConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesGooglePubsubConnectionProperties) {
    this._googlePubsubConnectionProperties.internalValue = value;
  }
  public resetGooglePubsubConnectionProperties() {
    this._googlePubsubConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googlePubsubConnectionPropertiesInput() {
    return this._googlePubsubConnectionProperties.internalValue;
  }

  // hdfs_connection_properties - computed: false, optional: true, required: false
  private _hdfsConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionPropertiesOutputReference(this, "hdfs_connection_properties");
  public get hdfsConnectionProperties() {
    return this._hdfsConnectionProperties;
  }
  public putHdfsConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesHdfsConnectionProperties) {
    this._hdfsConnectionProperties.internalValue = value;
  }
  public resetHdfsConnectionProperties() {
    this._hdfsConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsConnectionPropertiesInput() {
    return this._hdfsConnectionProperties.internalValue;
  }

  // iceberg_connection_properties - computed: false, optional: true, required: false
  private _icebergConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionPropertiesOutputReference(this, "iceberg_connection_properties");
  public get icebergConnectionProperties() {
    return this._icebergConnectionProperties;
  }
  public putIcebergConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesIcebergConnectionProperties) {
    this._icebergConnectionProperties.internalValue = value;
  }
  public resetIcebergConnectionProperties() {
    this._icebergConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergConnectionPropertiesInput() {
    return this._icebergConnectionProperties.internalValue;
  }

  // java_message_service_connection_properties - computed: false, optional: true, required: false
  private _javaMessageServiceConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionPropertiesOutputReference(this, "java_message_service_connection_properties");
  public get javaMessageServiceConnectionProperties() {
    return this._javaMessageServiceConnectionProperties;
  }
  public putJavaMessageServiceConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesJavaMessageServiceConnectionProperties) {
    this._javaMessageServiceConnectionProperties.internalValue = value;
  }
  public resetJavaMessageServiceConnectionProperties() {
    this._javaMessageServiceConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaMessageServiceConnectionPropertiesInput() {
    return this._javaMessageServiceConnectionProperties.internalValue;
  }

  // kafka_connection_properties - computed: false, optional: true, required: false
  private _kafkaConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionPropertiesOutputReference(this, "kafka_connection_properties");
  public get kafkaConnectionProperties() {
    return this._kafkaConnectionProperties;
  }
  public putKafkaConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesKafkaConnectionProperties) {
    this._kafkaConnectionProperties.internalValue = value;
  }
  public resetKafkaConnectionProperties() {
    this._kafkaConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectionPropertiesInput() {
    return this._kafkaConnectionProperties.internalValue;
  }

  // kafka_schema_registry_connection_properties - computed: false, optional: true, required: false
  private _kafkaSchemaRegistryConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionPropertiesOutputReference(this, "kafka_schema_registry_connection_properties");
  public get kafkaSchemaRegistryConnectionProperties() {
    return this._kafkaSchemaRegistryConnectionProperties;
  }
  public putKafkaSchemaRegistryConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesKafkaSchemaRegistryConnectionProperties) {
    this._kafkaSchemaRegistryConnectionProperties.internalValue = value;
  }
  public resetKafkaSchemaRegistryConnectionProperties() {
    this._kafkaSchemaRegistryConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSchemaRegistryConnectionPropertiesInput() {
    return this._kafkaSchemaRegistryConnectionProperties.internalValue;
  }

  // microsoft_fabric_connection_properties - computed: false, optional: true, required: false
  private _microsoftFabricConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionPropertiesOutputReference(this, "microsoft_fabric_connection_properties");
  public get microsoftFabricConnectionProperties() {
    return this._microsoftFabricConnectionProperties;
  }
  public putMicrosoftFabricConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesMicrosoftFabricConnectionProperties) {
    this._microsoftFabricConnectionProperties.internalValue = value;
  }
  public resetMicrosoftFabricConnectionProperties() {
    this._microsoftFabricConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftFabricConnectionPropertiesInput() {
    return this._microsoftFabricConnectionProperties.internalValue;
  }

  // microsoft_sqlserver_connection_properties - computed: false, optional: true, required: false
  private _microsoftSqlserverConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionPropertiesOutputReference(this, "microsoft_sqlserver_connection_properties");
  public get microsoftSqlserverConnectionProperties() {
    return this._microsoftSqlserverConnectionProperties;
  }
  public putMicrosoftSqlserverConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesMicrosoftSqlserverConnectionProperties) {
    this._microsoftSqlserverConnectionProperties.internalValue = value;
  }
  public resetMicrosoftSqlserverConnectionProperties() {
    this._microsoftSqlserverConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftSqlserverConnectionPropertiesInput() {
    return this._microsoftSqlserverConnectionProperties.internalValue;
  }

  // mongodb_connection_properties - computed: false, optional: true, required: false
  private _mongodbConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionPropertiesOutputReference(this, "mongodb_connection_properties");
  public get mongodbConnectionProperties() {
    return this._mongodbConnectionProperties;
  }
  public putMongodbConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesMongodbConnectionProperties) {
    this._mongodbConnectionProperties.internalValue = value;
  }
  public resetMongodbConnectionProperties() {
    this._mongodbConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbConnectionPropertiesInput() {
    return this._mongodbConnectionProperties.internalValue;
  }

  // mysql_connection_properties - computed: false, optional: true, required: false
  private _mysqlConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionPropertiesOutputReference(this, "mysql_connection_properties");
  public get mysqlConnectionProperties() {
    return this._mysqlConnectionProperties;
  }
  public putMysqlConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesMysqlConnectionProperties) {
    this._mysqlConnectionProperties.internalValue = value;
  }
  public resetMysqlConnectionProperties() {
    this._mysqlConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlConnectionPropertiesInput() {
    return this._mysqlConnectionProperties.internalValue;
  }

  // oci_object_storage_connection_properties - computed: false, optional: true, required: false
  private _ociObjectStorageConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionPropertiesOutputReference(this, "oci_object_storage_connection_properties");
  public get ociObjectStorageConnectionProperties() {
    return this._ociObjectStorageConnectionProperties;
  }
  public putOciObjectStorageConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesOciObjectStorageConnectionProperties) {
    this._ociObjectStorageConnectionProperties.internalValue = value;
  }
  public resetOciObjectStorageConnectionProperties() {
    this._ociObjectStorageConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociObjectStorageConnectionPropertiesInput() {
    return this._ociObjectStorageConnectionProperties.internalValue;
  }

  // oracle_ai_data_platform_connection_properties - computed: false, optional: true, required: false
  private _oracleAiDataPlatformConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionPropertiesOutputReference(this, "oracle_ai_data_platform_connection_properties");
  public get oracleAiDataPlatformConnectionProperties() {
    return this._oracleAiDataPlatformConnectionProperties;
  }
  public putOracleAiDataPlatformConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesOracleAiDataPlatformConnectionProperties) {
    this._oracleAiDataPlatformConnectionProperties.internalValue = value;
  }
  public resetOracleAiDataPlatformConnectionProperties() {
    this._oracleAiDataPlatformConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleAiDataPlatformConnectionPropertiesInput() {
    return this._oracleAiDataPlatformConnectionProperties.internalValue;
  }

  // oracle_connection_properties - computed: false, optional: true, required: false
  private _oracleConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesOracleConnectionPropertiesOutputReference(this, "oracle_connection_properties");
  public get oracleConnectionProperties() {
    return this._oracleConnectionProperties;
  }
  public putOracleConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesOracleConnectionProperties) {
    this._oracleConnectionProperties.internalValue = value;
  }
  public resetOracleConnectionProperties() {
    this._oracleConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleConnectionPropertiesInput() {
    return this._oracleConnectionProperties.internalValue;
  }

  // oracle_nosql_connection_properties - computed: false, optional: true, required: false
  private _oracleNosqlConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionPropertiesOutputReference(this, "oracle_nosql_connection_properties");
  public get oracleNosqlConnectionProperties() {
    return this._oracleNosqlConnectionProperties;
  }
  public putOracleNosqlConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesOracleNosqlConnectionProperties) {
    this._oracleNosqlConnectionProperties.internalValue = value;
  }
  public resetOracleNosqlConnectionProperties() {
    this._oracleNosqlConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleNosqlConnectionPropertiesInput() {
    return this._oracleNosqlConnectionProperties.internalValue;
  }

  // postgresql_connection_properties - computed: false, optional: true, required: false
  private _postgresqlConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionPropertiesOutputReference(this, "postgresql_connection_properties");
  public get postgresqlConnectionProperties() {
    return this._postgresqlConnectionProperties;
  }
  public putPostgresqlConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesPostgresqlConnectionProperties) {
    this._postgresqlConnectionProperties.internalValue = value;
  }
  public resetPostgresqlConnectionProperties() {
    this._postgresqlConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlConnectionPropertiesInput() {
    return this._postgresqlConnectionProperties.internalValue;
  }

  // redis_connection_properties - computed: false, optional: true, required: false
  private _redisConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesRedisConnectionPropertiesOutputReference(this, "redis_connection_properties");
  public get redisConnectionProperties() {
    return this._redisConnectionProperties;
  }
  public putRedisConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesRedisConnectionProperties) {
    this._redisConnectionProperties.internalValue = value;
  }
  public resetRedisConnectionProperties() {
    this._redisConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisConnectionPropertiesInput() {
    return this._redisConnectionProperties.internalValue;
  }

  // snowflake_connection_properties - computed: false, optional: true, required: false
  private _snowflakeConnectionProperties = new OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionPropertiesOutputReference(this, "snowflake_connection_properties");
  public get snowflakeConnectionProperties() {
    return this._snowflakeConnectionProperties;
  }
  public putSnowflakeConnectionProperties(value: OracleDatabaseGoldengateConnectionPropertiesSnowflakeConnectionProperties) {
    this._snowflakeConnectionProperties.internalValue = value;
  }
  public resetSnowflakeConnectionProperties() {
    this._snowflakeConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeConnectionPropertiesInput() {
    return this._snowflakeConnectionProperties.internalValue;
  }
}
export interface OracleDatabaseGoldengateConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#create OracleDatabaseGoldengateConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#delete OracleDatabaseGoldengateConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#update OracleDatabaseGoldengateConnection#update}
  */
  readonly update?: string;
}

export function oracleDatabaseGoldengateConnectionTimeoutsToTerraform(struct?: OracleDatabaseGoldengateConnectionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function oracleDatabaseGoldengateConnectionTimeoutsToHclTerraform(struct?: OracleDatabaseGoldengateConnectionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseGoldengateConnectionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OracleDatabaseGoldengateConnectionTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseGoldengateConnectionTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection google_oracle_database_goldengate_connection}
*/
export class OracleDatabaseGoldengateConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_goldengate_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OracleDatabaseGoldengateConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleDatabaseGoldengateConnection to import
  * @param importFromId The id of the existing OracleDatabaseGoldengateConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleDatabaseGoldengateConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_goldengate_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection google_oracle_database_goldengate_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleDatabaseGoldengateConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: OracleDatabaseGoldengateConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_oracle_database_goldengate_connection',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.41.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._deletionProtection = config.deletionProtection;
    this._gcpOracleZone = config.gcpOracleZone;
    this._goldengateConnectionId = config.goldengateConnectionId;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._odbNetwork = config.odbNetwork;
    this._odbSubnet = config.odbSubnet;
    this._project = config.project;
    this._properties.internalValue = config.properties;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktn.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktn.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // entitlement_id - computed: true, optional: false, required: false
  public get entitlementId() {
    return this.getStringAttribute('entitlement_id');
  }

  // gcp_oracle_zone - computed: true, optional: true, required: false
  private _gcpOracleZone?: string; 
  public get gcpOracleZone() {
    return this.getStringAttribute('gcp_oracle_zone');
  }
  public set gcpOracleZone(value: string) {
    this._gcpOracleZone = value;
  }
  public resetGcpOracleZone() {
    this._gcpOracleZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpOracleZoneInput() {
    return this._gcpOracleZone;
  }

  // goldengate_connection_id - computed: false, optional: false, required: true
  private _goldengateConnectionId?: string; 
  public get goldengateConnectionId() {
    return this.getStringAttribute('goldengate_connection_id');
  }
  public set goldengateConnectionId(value: string) {
    this._goldengateConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goldengateConnectionIdInput() {
    return this._goldengateConnectionId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // odb_network - computed: false, optional: true, required: false
  private _odbNetwork?: string; 
  public get odbNetwork() {
    return this.getStringAttribute('odb_network');
  }
  public set odbNetwork(value: string) {
    this._odbNetwork = value;
  }
  public resetOdbNetwork() {
    this._odbNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbNetworkInput() {
    return this._odbNetwork;
  }

  // odb_subnet - computed: false, optional: true, required: false
  private _odbSubnet?: string; 
  public get odbSubnet() {
    return this.getStringAttribute('odb_subnet');
  }
  public set odbSubnet(value: string) {
    this._odbSubnet = value;
  }
  public resetOdbSubnet() {
    this._odbSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbSubnetInput() {
    return this._odbSubnet;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new OracleDatabaseGoldengateConnectionPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OracleDatabaseGoldengateConnectionProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OracleDatabaseGoldengateConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OracleDatabaseGoldengateConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
      gcp_oracle_zone: cdktn.stringToTerraform(this._gcpOracleZone),
      goldengate_connection_id: cdktn.stringToTerraform(this._goldengateConnectionId),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      odb_network: cdktn.stringToTerraform(this._odbNetwork),
      odb_subnet: cdktn.stringToTerraform(this._odbSubnet),
      project: cdktn.stringToTerraform(this._project),
      properties: oracleDatabaseGoldengateConnectionPropertiesToTerraform(this._properties.internalValue),
      timeouts: oracleDatabaseGoldengateConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktn.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gcp_oracle_zone: {
        value: cdktn.stringToHclTerraform(this._gcpOracleZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      goldengate_connection_id: {
        value: cdktn.stringToHclTerraform(this._goldengateConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      odb_network: {
        value: cdktn.stringToHclTerraform(this._odbNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      odb_subnet: {
        value: cdktn.stringToHclTerraform(this._odbSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: oracleDatabaseGoldengateConnectionPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDatabaseGoldengateConnectionPropertiesList",
      },
      timeouts: {
        value: oracleDatabaseGoldengateConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OracleDatabaseGoldengateConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
