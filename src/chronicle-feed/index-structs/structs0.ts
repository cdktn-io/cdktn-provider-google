/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface ChronicleFeedDetailsAmazonKinesisFirehoseSettings {
}

export function chronicleFeedDetailsAmazonKinesisFirehoseSettingsToTerraform(struct?: ChronicleFeedDetailsAmazonKinesisFirehoseSettingsOutputReference | ChronicleFeedDetailsAmazonKinesisFirehoseSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function chronicleFeedDetailsAmazonKinesisFirehoseSettingsToHclTerraform(struct?: ChronicleFeedDetailsAmazonKinesisFirehoseSettingsOutputReference | ChronicleFeedDetailsAmazonKinesisFirehoseSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ChronicleFeedDetailsAmazonKinesisFirehoseSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonKinesisFirehoseSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonKinesisFirehoseSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ChronicleFeedDetailsAmazonS3SettingsAuthentication {
  /**
  * Access key ID. Used when using access key auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#access_key_id ChronicleFeed#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Client ID. Used when using OAuth auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret. Used when using OAuth auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Refresh URI. Used when using OAuth auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#refresh_uri ChronicleFeed#refresh_uri}
  */
  readonly refreshUri?: string;
  /**
  * Possible values:
  * US_EAST_1
  * US_EAST_2
  * US_WEST_1
  * US_WEST_2
  * US_GOV_CLOUD
  * US_GOV_EAST_1
  * EU_WEST_1
  * EU_WEST_2
  * EU_WEST_3
  * EU_CENTRAL_1
  * EU_NORTH_1
  * EU_SOUTH_1
  * AP_SOUTH_1
  * AP_SOUTHEAST_1
  * AP_SOUTHEAST_2
  * AP_SOUTHEAST_3
  * AP_NORTHEAST_1
  * AP_NORTHEAST_2
  * AP_NORTHEAST_3
  * AP_EAST_1
  * SA_EAST_1
  * CN_NORTH_1
  * CN_NORTHWEST_1
  * CA_CENTRAL_1
  * AF_SOUTH_1
  * ME_SOUTH_1
  * AP_SOUTH_2
  * AP_SOUTHEAST_4
  * CA_WEST_1
  * EU_SOUTH_2
  * EU_CENTRAL_2
  * IL_CENTRAL_1
  * ME_CENTRAL_1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#region ChronicleFeed#region}
  */
  readonly region: string;
  /**
  * Secret access key. Used when using access key auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret_access_key ChronicleFeed#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function chronicleFeedDetailsAmazonS3SettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAmazonS3SettingsAuthenticationOutputReference | ChronicleFeedDetailsAmazonS3SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    refresh_uri: cdktn.stringToTerraform(struct!.refreshUri),
    region: cdktn.stringToTerraform(struct!.region),
    secret_access_key: cdktn.stringToTerraform(struct!.secretAccessKey),
  }
}


export function chronicleFeedDetailsAmazonS3SettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAmazonS3SettingsAuthenticationOutputReference | ChronicleFeedDetailsAmazonS3SettingsAuthentication): any {
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
    refresh_uri: {
      value: cdktn.stringToHclTerraform(struct!.refreshUri),
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
    secret_access_key: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonS3SettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonS3SettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._refreshUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshUri = this._refreshUri;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonS3SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshUri = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshUri = value.refreshUri;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
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

  // refresh_uri - computed: false, optional: true, required: false
  private _refreshUri?: string; 
  public get refreshUri() {
    return this.getStringAttribute('refresh_uri');
  }
  public set refreshUri(value: string) {
    this._refreshUri = value;
  }
  public resetRefreshUri() {
    this._refreshUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshUriInput() {
    return this._refreshUri;
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

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface ChronicleFeedDetailsAmazonS3Settings {
  /**
  * S3 URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#s3_uri ChronicleFeed#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * Possible values:
  * SOURCE_DELETION_NEVER
  * SOURCE_DELETION_ON_SUCCESS
  * SOURCE_DELETION_ON_SUCCESS_FILES_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_deletion_option ChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption: string;
  /**
  * Possible values:
  * FILES
  * FOLDERS
  * FOLDERS_RECURSIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_type ChronicleFeed#source_type}
  */
  readonly sourceType: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAmazonS3SettingsAuthentication;
}

export function chronicleFeedDetailsAmazonS3SettingsToTerraform(struct?: ChronicleFeedDetailsAmazonS3SettingsOutputReference | ChronicleFeedDetailsAmazonS3Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    source_deletion_option: cdktn.stringToTerraform(struct!.sourceDeletionOption),
    source_type: cdktn.stringToTerraform(struct!.sourceType),
    authentication: chronicleFeedDetailsAmazonS3SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAmazonS3SettingsToHclTerraform(struct?: ChronicleFeedDetailsAmazonS3SettingsOutputReference | ChronicleFeedDetailsAmazonS3Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktn.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsAmazonS3SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonS3SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonS3SettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonS3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonS3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Uri = undefined;
      this._sourceDeletionOption = undefined;
      this._sourceType = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Uri = value.s3Uri;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._sourceType = value.sourceType;
      this._authentication.internalValue = value.authentication;
    }
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // source_deletion_option - computed: false, optional: false, required: true
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAmazonS3SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAmazonS3SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth {
  /**
  * Access Key ID for an AWS account (a 20-character, alphanumeric string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#access_key_id ChronicleFeed#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Secret Access Key for an AWS account (a 40-character string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret_access_key ChronicleFeed#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function chronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthToTerraform(struct?: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthOutputReference | ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktn.stringToTerraform(struct!.secretAccessKey),
  }
}


export function chronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthToHclTerraform(struct?: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthOutputReference | ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth): any {
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
    secret_access_key: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
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

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth {
  /**
  * AWS IAM Role for Identity Federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#aws_iam_role_arn ChronicleFeed#aws_iam_role_arn}
  */
  readonly awsIamRoleArn?: string;
  /**
  * Subject ID to use for S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#subject_id ChronicleFeed#subject_id}
  */
  readonly subjectId?: string;
}

export function chronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthToTerraform(struct?: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthOutputReference | ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_iam_role_arn: cdktn.stringToTerraform(struct!.awsIamRoleArn),
    subject_id: cdktn.stringToTerraform(struct!.subjectId),
  }
}


export function chronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthToHclTerraform(struct?: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthOutputReference | ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_iam_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.awsIamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_id: {
      value: cdktn.stringToHclTerraform(struct!.subjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRoleArn = this._awsIamRoleArn;
    }
    if (this._subjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectId = this._subjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsIamRoleArn = undefined;
      this._subjectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsIamRoleArn = value.awsIamRoleArn;
      this._subjectId = value.subjectId;
    }
  }

  // aws_iam_role_arn - computed: false, optional: true, required: false
  private _awsIamRoleArn?: string; 
  public get awsIamRoleArn() {
    return this.getStringAttribute('aws_iam_role_arn');
  }
  public set awsIamRoleArn(value: string) {
    this._awsIamRoleArn = value;
  }
  public resetAwsIamRoleArn() {
    this._awsIamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleArnInput() {
    return this._awsIamRoleArn;
  }

  // subject_id - computed: false, optional: true, required: false
  private _subjectId?: string; 
  public get subjectId() {
    return this.getStringAttribute('subject_id');
  }
  public set subjectId(value: string) {
    this._subjectId = value;
  }
  public resetSubjectId() {
    this._subjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectIdInput() {
    return this._subjectId;
  }
}
export interface ChronicleFeedDetailsAmazonS3V2SettingsAuthentication {
  /**
  * access_key_secret_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#access_key_secret_auth ChronicleFeed#access_key_secret_auth}
  */
  readonly accessKeySecretAuth?: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth;
  /**
  * aws_iam_role_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#aws_iam_role_auth ChronicleFeed#aws_iam_role_auth}
  */
  readonly awsIamRoleAuth?: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth;
}

export function chronicleFeedDetailsAmazonS3V2SettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationOutputReference | ChronicleFeedDetailsAmazonS3V2SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_secret_auth: chronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthToTerraform(struct!.accessKeySecretAuth),
    aws_iam_role_auth: chronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthToTerraform(struct!.awsIamRoleAuth),
  }
}


export function chronicleFeedDetailsAmazonS3V2SettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationOutputReference | ChronicleFeedDetailsAmazonS3V2SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_key_secret_auth: {
      value: chronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthToHclTerraform(struct!.accessKeySecretAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthList",
    },
    aws_iam_role_auth: {
      value: chronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthToHclTerraform(struct!.awsIamRoleAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonS3V2SettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeySecretAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeySecretAuth = this._accessKeySecretAuth?.internalValue;
    }
    if (this._awsIamRoleAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRoleAuth = this._awsIamRoleAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonS3V2SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeySecretAuth.internalValue = undefined;
      this._awsIamRoleAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeySecretAuth.internalValue = value.accessKeySecretAuth;
      this._awsIamRoleAuth.internalValue = value.awsIamRoleAuth;
    }
  }

  // access_key_secret_auth - computed: false, optional: true, required: false
  private _accessKeySecretAuth = new ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuthOutputReference(this, "access_key_secret_auth");
  public get accessKeySecretAuth() {
    return this._accessKeySecretAuth;
  }
  public putAccessKeySecretAuth(value: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAccessKeySecretAuth) {
    this._accessKeySecretAuth.internalValue = value;
  }
  public resetAccessKeySecretAuth() {
    this._accessKeySecretAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeySecretAuthInput() {
    return this._accessKeySecretAuth.internalValue;
  }

  // aws_iam_role_auth - computed: false, optional: true, required: false
  private _awsIamRoleAuth = new ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuthOutputReference(this, "aws_iam_role_auth");
  public get awsIamRoleAuth() {
    return this._awsIamRoleAuth;
  }
  public putAwsIamRoleAuth(value: ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationAwsIamRoleAuth) {
    this._awsIamRoleAuth.internalValue = value;
  }
  public resetAwsIamRoleAuth() {
    this._awsIamRoleAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleAuthInput() {
    return this._awsIamRoleAuth.internalValue;
  }
}
export interface ChronicleFeedDetailsAmazonS3V2Settings {
  /**
  * Maximum File Age to ingest in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#max_lookback_days ChronicleFeed#max_lookback_days}
  */
  readonly maxLookbackDays?: number;
  /**
  * S3 URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#s3_uri ChronicleFeed#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * Possible values:
  * NEVER
  * ON_SUCCESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_deletion_option ChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication: ChronicleFeedDetailsAmazonS3V2SettingsAuthentication;
}

export function chronicleFeedDetailsAmazonS3V2SettingsToTerraform(struct?: ChronicleFeedDetailsAmazonS3V2SettingsOutputReference | ChronicleFeedDetailsAmazonS3V2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_lookback_days: cdktn.numberToTerraform(struct!.maxLookbackDays),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    source_deletion_option: cdktn.stringToTerraform(struct!.sourceDeletionOption),
    authentication: chronicleFeedDetailsAmazonS3V2SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAmazonS3V2SettingsToHclTerraform(struct?: ChronicleFeedDetailsAmazonS3V2SettingsOutputReference | ChronicleFeedDetailsAmazonS3V2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_lookback_days: {
      value: cdktn.numberToHclTerraform(struct!.maxLookbackDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktn.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsAmazonS3V2SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonS3V2SettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonS3V2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLookbackDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLookbackDays = this._maxLookbackDays;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonS3V2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxLookbackDays = undefined;
      this._s3Uri = undefined;
      this._sourceDeletionOption = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxLookbackDays = value.maxLookbackDays;
      this._s3Uri = value.s3Uri;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._authentication.internalValue = value.authentication;
    }
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // max_lookback_days - computed: false, optional: true, required: false
  private _maxLookbackDays?: number; 
  public get maxLookbackDays() {
    return this.getNumberAttribute('max_lookback_days');
  }
  public set maxLookbackDays(value: number) {
    this._maxLookbackDays = value;
  }
  public resetMaxLookbackDays() {
    this._maxLookbackDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLookbackDaysInput() {
    return this._maxLookbackDays;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new ChronicleFeedDetailsAmazonS3V2SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAmazonS3V2SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth {
  /**
  * Access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#access_key_id ChronicleFeed#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret_access_key ChronicleFeed#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function chronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthToTerraform(struct?: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthOutputReference | ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktn.stringToTerraform(struct!.secretAccessKey),
  }
}


export function chronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthToHclTerraform(struct?: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthOutputReference | ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth): any {
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
    secret_access_key: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
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

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth {
  /**
  * Access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#access_key_id ChronicleFeed#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret_access_key ChronicleFeed#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function chronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthToTerraform(struct?: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthOutputReference | ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktn.stringToTerraform(struct!.secretAccessKey),
  }
}


export function chronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthToHclTerraform(struct?: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthOutputReference | ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth): any {
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
    secret_access_key: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
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

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface ChronicleFeedDetailsAmazonSqsSettingsAuthentication {
  /**
  * additional_s3_access_key_secret_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#additional_s3_access_key_secret_auth ChronicleFeed#additional_s3_access_key_secret_auth}
  */
  readonly additionalS3AccessKeySecretAuth?: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth;
  /**
  * sqs_access_key_secret_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#sqs_access_key_secret_auth ChronicleFeed#sqs_access_key_secret_auth}
  */
  readonly sqsAccessKeySecretAuth?: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth;
}

export function chronicleFeedDetailsAmazonSqsSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationOutputReference | ChronicleFeedDetailsAmazonSqsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_s3_access_key_secret_auth: chronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthToTerraform(struct!.additionalS3AccessKeySecretAuth),
    sqs_access_key_secret_auth: chronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthToTerraform(struct!.sqsAccessKeySecretAuth),
  }
}


export function chronicleFeedDetailsAmazonSqsSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationOutputReference | ChronicleFeedDetailsAmazonSqsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_s3_access_key_secret_auth: {
      value: chronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthToHclTerraform(struct!.additionalS3AccessKeySecretAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthList",
    },
    sqs_access_key_secret_auth: {
      value: chronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthToHclTerraform(struct!.sqsAccessKeySecretAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonSqsSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonSqsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalS3AccessKeySecretAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalS3AccessKeySecretAuth = this._additionalS3AccessKeySecretAuth?.internalValue;
    }
    if (this._sqsAccessKeySecretAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsAccessKeySecretAuth = this._sqsAccessKeySecretAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonSqsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalS3AccessKeySecretAuth.internalValue = undefined;
      this._sqsAccessKeySecretAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalS3AccessKeySecretAuth.internalValue = value.additionalS3AccessKeySecretAuth;
      this._sqsAccessKeySecretAuth.internalValue = value.sqsAccessKeySecretAuth;
    }
  }

  // additional_s3_access_key_secret_auth - computed: false, optional: true, required: false
  private _additionalS3AccessKeySecretAuth = new ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuthOutputReference(this, "additional_s3_access_key_secret_auth");
  public get additionalS3AccessKeySecretAuth() {
    return this._additionalS3AccessKeySecretAuth;
  }
  public putAdditionalS3AccessKeySecretAuth(value: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationAdditionalS3AccessKeySecretAuth) {
    this._additionalS3AccessKeySecretAuth.internalValue = value;
  }
  public resetAdditionalS3AccessKeySecretAuth() {
    this._additionalS3AccessKeySecretAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalS3AccessKeySecretAuthInput() {
    return this._additionalS3AccessKeySecretAuth.internalValue;
  }

  // sqs_access_key_secret_auth - computed: false, optional: true, required: false
  private _sqsAccessKeySecretAuth = new ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuthOutputReference(this, "sqs_access_key_secret_auth");
  public get sqsAccessKeySecretAuth() {
    return this._sqsAccessKeySecretAuth;
  }
  public putSqsAccessKeySecretAuth(value: ChronicleFeedDetailsAmazonSqsSettingsAuthenticationSqsAccessKeySecretAuth) {
    this._sqsAccessKeySecretAuth.internalValue = value;
  }
  public resetSqsAccessKeySecretAuth() {
    this._sqsAccessKeySecretAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsAccessKeySecretAuthInput() {
    return this._sqsAccessKeySecretAuth.internalValue;
  }
}
export interface ChronicleFeedDetailsAmazonSqsSettings {
  /**
  * Account number of the owner of the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#account_number ChronicleFeed#account_number}
  */
  readonly accountNumber?: string;
  /**
  * Name of the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#queue ChronicleFeed#queue}
  */
  readonly queue?: string;
  /**
  * Possible values:
  * US_EAST_1
  * US_EAST_2
  * US_WEST_1
  * US_WEST_2
  * US_GOV_CLOUD
  * US_GOV_EAST_1
  * EU_WEST_1
  * EU_WEST_2
  * EU_WEST_3
  * EU_CENTRAL_1
  * EU_NORTH_1
  * EU_SOUTH_1
  * AP_SOUTH_1
  * AP_SOUTHEAST_1
  * AP_SOUTHEAST_2
  * AP_SOUTHEAST_3
  * AP_NORTHEAST_1
  * AP_NORTHEAST_2
  * AP_NORTHEAST_3
  * AP_EAST_1
  * SA_EAST_1
  * CN_NORTH_1
  * CN_NORTHWEST_1
  * CA_CENTRAL_1
  * AF_SOUTH_1
  * ME_SOUTH_1
  * AP_SOUTH_2
  * AP_SOUTHEAST_4
  * CA_WEST_1
  * EU_SOUTH_2
  * EU_CENTRAL_2
  * IL_CENTRAL_1
  * ME_CENTRAL_1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#region ChronicleFeed#region}
  */
  readonly region?: string;
  /**
  * Possible values:
  * SOURCE_DELETION_NEVER
  * SOURCE_DELETION_ON_SUCCESS
  * SOURCE_DELETION_ON_SUCCESS_FILES_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_deletion_option ChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAmazonSqsSettingsAuthentication;
}

export function chronicleFeedDetailsAmazonSqsSettingsToTerraform(struct?: ChronicleFeedDetailsAmazonSqsSettingsOutputReference | ChronicleFeedDetailsAmazonSqsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_number: cdktn.stringToTerraform(struct!.accountNumber),
    queue: cdktn.stringToTerraform(struct!.queue),
    region: cdktn.stringToTerraform(struct!.region),
    source_deletion_option: cdktn.stringToTerraform(struct!.sourceDeletionOption),
    authentication: chronicleFeedDetailsAmazonSqsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAmazonSqsSettingsToHclTerraform(struct?: ChronicleFeedDetailsAmazonSqsSettingsOutputReference | ChronicleFeedDetailsAmazonSqsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_number: {
      value: cdktn.stringToHclTerraform(struct!.accountNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue: {
      value: cdktn.stringToHclTerraform(struct!.queue),
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
    source_deletion_option: {
      value: cdktn.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsAmazonSqsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonSqsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonSqsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonSqsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNumber = this._accountNumber;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonSqsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountNumber = undefined;
      this._queue = undefined;
      this._region = undefined;
      this._sourceDeletionOption = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountNumber = value.accountNumber;
      this._queue = value.queue;
      this._region = value.region;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._authentication.internalValue = value.authentication;
    }
  }

  // account_number - computed: false, optional: true, required: false
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  public resetAccountNumber() {
    this._accountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
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

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAmazonSqsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAmazonSqsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth {
  /**
  * AWS IAM Role for Identity Federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#aws_iam_role_arn ChronicleFeed#aws_iam_role_arn}
  */
  readonly awsIamRoleArn?: string;
  /**
  * Subject ID to use for SQS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#subject_id ChronicleFeed#subject_id}
  */
  readonly subjectId?: string;
}

export function chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthToTerraform(struct?: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthOutputReference | ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_iam_role_arn: cdktn.stringToTerraform(struct!.awsIamRoleArn),
    subject_id: cdktn.stringToTerraform(struct!.subjectId),
  }
}


export function chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthToHclTerraform(struct?: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthOutputReference | ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_iam_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.awsIamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_id: {
      value: cdktn.stringToHclTerraform(struct!.subjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRoleArn = this._awsIamRoleArn;
    }
    if (this._subjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectId = this._subjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsIamRoleArn = undefined;
      this._subjectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsIamRoleArn = value.awsIamRoleArn;
      this._subjectId = value.subjectId;
    }
  }

  // aws_iam_role_arn - computed: false, optional: true, required: false
  private _awsIamRoleArn?: string; 
  public get awsIamRoleArn() {
    return this.getStringAttribute('aws_iam_role_arn');
  }
  public set awsIamRoleArn(value: string) {
    this._awsIamRoleArn = value;
  }
  public resetAwsIamRoleArn() {
    this._awsIamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleArnInput() {
    return this._awsIamRoleArn;
  }

  // subject_id - computed: false, optional: true, required: false
  private _subjectId?: string; 
  public get subjectId() {
    return this.getStringAttribute('subject_id');
  }
  public set subjectId(value: string) {
    this._subjectId = value;
  }
  public resetSubjectId() {
    this._subjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectIdInput() {
    return this._subjectId;
  }
}
export interface ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth {
  /**
  * Access key ID of the S3 bucket.  Ex: AKIABCDEFGHIJKL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#access_key_id ChronicleFeed#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Secret access key to access the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret_access_key ChronicleFeed#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthToTerraform(struct?: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthOutputReference | ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktn.stringToTerraform(struct!.secretAccessKey),
  }
}


export function chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthToHclTerraform(struct?: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthOutputReference | ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth): any {
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
    secret_access_key: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
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

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface ChronicleFeedDetailsAmazonSqsV2SettingsAuthentication {
  /**
  * aws_iam_role_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#aws_iam_role_auth ChronicleFeed#aws_iam_role_auth}
  */
  readonly awsIamRoleAuth: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth;
  /**
  * sqs_v2_access_key_secret_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#sqs_v2_access_key_secret_auth ChronicleFeed#sqs_v2_access_key_secret_auth}
  */
  readonly sqsV2AccessKeySecretAuth: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth;
}

export function chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationOutputReference | ChronicleFeedDetailsAmazonSqsV2SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_iam_role_auth: chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthToTerraform(struct!.awsIamRoleAuth),
    sqs_v2_access_key_secret_auth: chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthToTerraform(struct!.sqsV2AccessKeySecretAuth),
  }
}


export function chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationOutputReference | ChronicleFeedDetailsAmazonSqsV2SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_iam_role_auth: {
      value: chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthToHclTerraform(struct!.awsIamRoleAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthList",
    },
    sqs_v2_access_key_secret_auth: {
      value: chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthToHclTerraform(struct!.sqsV2AccessKeySecretAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonSqsV2SettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIamRoleAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRoleAuth = this._awsIamRoleAuth?.internalValue;
    }
    if (this._sqsV2AccessKeySecretAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsV2AccessKeySecretAuth = this._sqsV2AccessKeySecretAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonSqsV2SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsIamRoleAuth.internalValue = undefined;
      this._sqsV2AccessKeySecretAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsIamRoleAuth.internalValue = value.awsIamRoleAuth;
      this._sqsV2AccessKeySecretAuth.internalValue = value.sqsV2AccessKeySecretAuth;
    }
  }

  // aws_iam_role_auth - computed: false, optional: false, required: true
  private _awsIamRoleAuth = new ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuthOutputReference(this, "aws_iam_role_auth");
  public get awsIamRoleAuth() {
    return this._awsIamRoleAuth;
  }
  public putAwsIamRoleAuth(value: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationAwsIamRoleAuth) {
    this._awsIamRoleAuth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleAuthInput() {
    return this._awsIamRoleAuth.internalValue;
  }

  // sqs_v2_access_key_secret_auth - computed: false, optional: false, required: true
  private _sqsV2AccessKeySecretAuth = new ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuthOutputReference(this, "sqs_v2_access_key_secret_auth");
  public get sqsV2AccessKeySecretAuth() {
    return this._sqsV2AccessKeySecretAuth;
  }
  public putSqsV2AccessKeySecretAuth(value: ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationSqsV2AccessKeySecretAuth) {
    this._sqsV2AccessKeySecretAuth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsV2AccessKeySecretAuthInput() {
    return this._sqsV2AccessKeySecretAuth.internalValue;
  }
}
export interface ChronicleFeedDetailsAmazonSqsV2Settings {
  /**
  * Maximum File Age to ingest in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#max_lookback_days ChronicleFeed#max_lookback_days}
  */
  readonly maxLookbackDays?: number;
  /**
  * Amazon Resource Name(ARN) of the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#queue ChronicleFeed#queue}
  */
  readonly queue: string;
  /**
  * S3 URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#s3_uri ChronicleFeed#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * Possible values:
  * NEVER
  * ON_SUCCESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_deletion_option ChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication: ChronicleFeedDetailsAmazonSqsV2SettingsAuthentication;
}

export function chronicleFeedDetailsAmazonSqsV2SettingsToTerraform(struct?: ChronicleFeedDetailsAmazonSqsV2SettingsOutputReference | ChronicleFeedDetailsAmazonSqsV2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_lookback_days: cdktn.numberToTerraform(struct!.maxLookbackDays),
    queue: cdktn.stringToTerraform(struct!.queue),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    source_deletion_option: cdktn.stringToTerraform(struct!.sourceDeletionOption),
    authentication: chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAmazonSqsV2SettingsToHclTerraform(struct?: ChronicleFeedDetailsAmazonSqsV2SettingsOutputReference | ChronicleFeedDetailsAmazonSqsV2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_lookback_days: {
      value: cdktn.numberToHclTerraform(struct!.maxLookbackDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue: {
      value: cdktn.stringToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktn.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsAmazonSqsV2SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAmazonSqsV2SettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAmazonSqsV2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLookbackDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLookbackDays = this._maxLookbackDays;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAmazonSqsV2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxLookbackDays = undefined;
      this._queue = undefined;
      this._s3Uri = undefined;
      this._sourceDeletionOption = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxLookbackDays = value.maxLookbackDays;
      this._queue = value.queue;
      this._s3Uri = value.s3Uri;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._authentication.internalValue = value.authentication;
    }
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // max_lookback_days - computed: false, optional: true, required: false
  private _maxLookbackDays?: number; 
  public get maxLookbackDays() {
    return this.getNumberAttribute('max_lookback_days');
  }
  public set maxLookbackDays(value: number) {
    this._maxLookbackDays = value;
  }
  public resetMaxLookbackDays() {
    this._maxLookbackDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLookbackDaysInput() {
    return this._maxLookbackDays;
  }

  // queue - computed: false, optional: false, required: true
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new ChronicleFeedDetailsAmazonSqsV2SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAmazonSqsV2SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAnomaliSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsAnomaliSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAnomaliSettingsAuthenticationOutputReference | ChronicleFeedDetailsAnomaliSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsAnomaliSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAnomaliSettingsAuthenticationOutputReference | ChronicleFeedDetailsAnomaliSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAnomaliSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAnomaliSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAnomaliSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsAnomaliSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAnomaliSettingsAuthentication;
}

export function chronicleFeedDetailsAnomaliSettingsToTerraform(struct?: ChronicleFeedDetailsAnomaliSettingsOutputReference | ChronicleFeedDetailsAnomaliSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: chronicleFeedDetailsAnomaliSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAnomaliSettingsToHclTerraform(struct?: ChronicleFeedDetailsAnomaliSettingsOutputReference | ChronicleFeedDetailsAnomaliSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: chronicleFeedDetailsAnomaliSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAnomaliSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAnomaliSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAnomaliSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAnomaliSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAnomaliSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAnomaliSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAwsEc2HostsSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsAwsEc2HostsSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationOutputReference | ChronicleFeedDetailsAwsEc2HostsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsAwsEc2HostsSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationOutputReference | ChronicleFeedDetailsAwsEc2HostsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAwsEc2HostsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAwsEc2HostsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsAwsEc2HostsSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAwsEc2HostsSettingsAuthentication;
}

export function chronicleFeedDetailsAwsEc2HostsSettingsToTerraform(struct?: ChronicleFeedDetailsAwsEc2HostsSettingsOutputReference | ChronicleFeedDetailsAwsEc2HostsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: chronicleFeedDetailsAwsEc2HostsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAwsEc2HostsSettingsToHclTerraform(struct?: ChronicleFeedDetailsAwsEc2HostsSettingsOutputReference | ChronicleFeedDetailsAwsEc2HostsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: chronicleFeedDetailsAwsEc2HostsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAwsEc2HostsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAwsEc2HostsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAwsEc2HostsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAwsEc2HostsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAwsEc2HostsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationOutputReference | ChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationOutputReference | ChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsAwsEc2InstancesSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication;
}

export function chronicleFeedDetailsAwsEc2InstancesSettingsToTerraform(struct?: ChronicleFeedDetailsAwsEc2InstancesSettingsOutputReference | ChronicleFeedDetailsAwsEc2InstancesSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: chronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAwsEc2InstancesSettingsToHclTerraform(struct?: ChronicleFeedDetailsAwsEc2InstancesSettingsOutputReference | ChronicleFeedDetailsAwsEc2InstancesSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: chronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAwsEc2InstancesSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAwsEc2InstancesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAwsEc2InstancesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAwsEc2InstancesSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAwsEc2InstancesSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationOutputReference | ChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationOutputReference | ChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsAwsEc2VpcsSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication;
}

export function chronicleFeedDetailsAwsEc2VpcsSettingsToTerraform(struct?: ChronicleFeedDetailsAwsEc2VpcsSettingsOutputReference | ChronicleFeedDetailsAwsEc2VpcsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: chronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAwsEc2VpcsSettingsToHclTerraform(struct?: ChronicleFeedDetailsAwsEc2VpcsSettingsOutputReference | ChronicleFeedDetailsAwsEc2VpcsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: chronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAwsEc2VpcsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAwsEc2VpcsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAwsEc2VpcsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAwsEc2VpcsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAwsEc2VpcsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAwsIamSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsAwsIamSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAwsIamSettingsAuthenticationOutputReference | ChronicleFeedDetailsAwsIamSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsAwsIamSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAwsIamSettingsAuthenticationOutputReference | ChronicleFeedDetailsAwsIamSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAwsIamSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAwsIamSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAwsIamSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsAwsIamSettings {
  /**
  * Supported AWS IAM api type.
  * Possible values:
  * USERS
  * ROLES
  * GROUPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#api_type ChronicleFeed#api_type}
  */
  readonly apiType?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAwsIamSettingsAuthentication;
}

export function chronicleFeedDetailsAwsIamSettingsToTerraform(struct?: ChronicleFeedDetailsAwsIamSettingsOutputReference | ChronicleFeedDetailsAwsIamSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_type: cdktn.stringToTerraform(struct!.apiType),
    authentication: chronicleFeedDetailsAwsIamSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAwsIamSettingsToHclTerraform(struct?: ChronicleFeedDetailsAwsIamSettingsOutputReference | ChronicleFeedDetailsAwsIamSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_type: {
      value: cdktn.stringToHclTerraform(struct!.apiType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsAwsIamSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAwsIamSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAwsIamSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAwsIamSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiType !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiType = this._apiType;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAwsIamSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiType = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiType = value.apiType;
      this._authentication.internalValue = value.authentication;
    }
  }

  // api_type - computed: false, optional: true, required: false
  private _apiType?: string; 
  public get apiType() {
    return this.getStringAttribute('api_type');
  }
  public set apiType(value: string) {
    this._apiType = value;
  }
  public resetApiType() {
    this._apiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTypeInput() {
    return this._apiType;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAwsIamSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAwsIamSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAzureAdAuditSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function chronicleFeedDetailsAzureAdAuditSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAzureAdAuditSettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureAdAuditSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function chronicleFeedDetailsAzureAdAuditSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAzureAdAuditSettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureAdAuditSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureAdAuditSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureAdAuditSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureAdAuditSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface ChronicleFeedDetailsAzureAdAuditSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#auth_endpoint ChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#tenant_id ChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAzureAdAuditSettingsAuthentication;
}

export function chronicleFeedDetailsAzureAdAuditSettingsToTerraform(struct?: ChronicleFeedDetailsAzureAdAuditSettingsOutputReference | ChronicleFeedDetailsAzureAdAuditSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_endpoint: cdktn.stringToTerraform(struct!.authEndpoint),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    authentication: chronicleFeedDetailsAzureAdAuditSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAzureAdAuditSettingsToHclTerraform(struct?: ChronicleFeedDetailsAzureAdAuditSettingsOutputReference | ChronicleFeedDetailsAzureAdAuditSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
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
    authentication: {
      value: chronicleFeedDetailsAzureAdAuditSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureAdAuditSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureAdAuditSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureAdAuditSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureAdAuditSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAzureAdAuditSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAzureAdAuditSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAzureAdContextSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function chronicleFeedDetailsAzureAdContextSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAzureAdContextSettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureAdContextSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function chronicleFeedDetailsAzureAdContextSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAzureAdContextSettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureAdContextSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureAdContextSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureAdContextSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureAdContextSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface ChronicleFeedDetailsAzureAdContextSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#auth_endpoint ChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Whether to retrieve device information in user context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#retrieve_devices ChronicleFeed#retrieve_devices}
  */
  readonly retrieveDevices?: boolean | cdktn.IResolvable;
  /**
  * Whether to retrieve group information in user context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#retrieve_groups ChronicleFeed#retrieve_groups}
  */
  readonly retrieveGroups?: boolean | cdktn.IResolvable;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#tenant_id ChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAzureAdContextSettingsAuthentication;
}

export function chronicleFeedDetailsAzureAdContextSettingsToTerraform(struct?: ChronicleFeedDetailsAzureAdContextSettingsOutputReference | ChronicleFeedDetailsAzureAdContextSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_endpoint: cdktn.stringToTerraform(struct!.authEndpoint),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    retrieve_devices: cdktn.booleanToTerraform(struct!.retrieveDevices),
    retrieve_groups: cdktn.booleanToTerraform(struct!.retrieveGroups),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    authentication: chronicleFeedDetailsAzureAdContextSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAzureAdContextSettingsToHclTerraform(struct?: ChronicleFeedDetailsAzureAdContextSettingsOutputReference | ChronicleFeedDetailsAzureAdContextSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retrieve_devices: {
      value: cdktn.booleanToHclTerraform(struct!.retrieveDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retrieve_groups: {
      value: cdktn.booleanToHclTerraform(struct!.retrieveGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsAzureAdContextSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureAdContextSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureAdContextSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureAdContextSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._retrieveDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveDevices = this._retrieveDevices;
    }
    if (this._retrieveGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveGroups = this._retrieveGroups;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureAdContextSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._retrieveDevices = undefined;
      this._retrieveGroups = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._retrieveDevices = value.retrieveDevices;
      this._retrieveGroups = value.retrieveGroups;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // retrieve_devices - computed: false, optional: true, required: false
  private _retrieveDevices?: boolean | cdktn.IResolvable; 
  public get retrieveDevices() {
    return this.getBooleanAttribute('retrieve_devices');
  }
  public set retrieveDevices(value: boolean | cdktn.IResolvable) {
    this._retrieveDevices = value;
  }
  public resetRetrieveDevices() {
    this._retrieveDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveDevicesInput() {
    return this._retrieveDevices;
  }

  // retrieve_groups - computed: false, optional: true, required: false
  private _retrieveGroups?: boolean | cdktn.IResolvable; 
  public get retrieveGroups() {
    return this.getBooleanAttribute('retrieve_groups');
  }
  public set retrieveGroups(value: boolean | cdktn.IResolvable) {
    this._retrieveGroups = value;
  }
  public resetRetrieveGroups() {
    this._retrieveGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveGroupsInput() {
    return this._retrieveGroups;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAzureAdContextSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAzureAdContextSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAzureAdSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function chronicleFeedDetailsAzureAdSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAzureAdSettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureAdSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function chronicleFeedDetailsAzureAdSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAzureAdSettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureAdSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureAdSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureAdSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureAdSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface ChronicleFeedDetailsAzureAdSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#auth_endpoint ChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#tenant_id ChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAzureAdSettingsAuthentication;
}

export function chronicleFeedDetailsAzureAdSettingsToTerraform(struct?: ChronicleFeedDetailsAzureAdSettingsOutputReference | ChronicleFeedDetailsAzureAdSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_endpoint: cdktn.stringToTerraform(struct!.authEndpoint),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    authentication: chronicleFeedDetailsAzureAdSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAzureAdSettingsToHclTerraform(struct?: ChronicleFeedDetailsAzureAdSettingsOutputReference | ChronicleFeedDetailsAzureAdSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
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
    authentication: {
      value: chronicleFeedDetailsAzureAdSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureAdSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureAdSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureAdSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureAdSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAzureAdSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAzureAdSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAzureBlobStoreSettingsAuthentication {
  /**
  * SAS Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#sas_token ChronicleFeed#sas_token}
  */
  readonly sasToken?: string;
  /**
  * Shared Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#shared_key ChronicleFeed#shared_key}
  */
  readonly sharedKey?: string;
}

export function chronicleFeedDetailsAzureBlobStoreSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureBlobStoreSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sas_token: cdktn.stringToTerraform(struct!.sasToken),
    shared_key: cdktn.stringToTerraform(struct!.sharedKey),
  }
}


export function chronicleFeedDetailsAzureBlobStoreSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureBlobStoreSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sas_token: {
      value: cdktn.stringToHclTerraform(struct!.sasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_key: {
      value: cdktn.stringToHclTerraform(struct!.sharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureBlobStoreSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureBlobStoreSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sasToken = undefined;
      this._sharedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sasToken = value.sasToken;
      this._sharedKey = value.sharedKey;
    }
  }

  // sas_token - computed: false, optional: true, required: false
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  public resetSasToken() {
    this._sasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }
}
export interface ChronicleFeedDetailsAzureBlobStoreSettings {
  /**
  * Azure URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#azure_uri ChronicleFeed#azure_uri}
  */
  readonly azureUri?: string;
  /**
  * Possible values:
  * SOURCE_DELETION_NEVER
  * SOURCE_DELETION_ON_SUCCESS
  * SOURCE_DELETION_ON_SUCCESS_FILES_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_deletion_option ChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * Possible values:
  * FILES
  * FOLDERS
  * FOLDERS_RECURSIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_type ChronicleFeed#source_type}
  */
  readonly sourceType?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAzureBlobStoreSettingsAuthentication;
}

export function chronicleFeedDetailsAzureBlobStoreSettingsToTerraform(struct?: ChronicleFeedDetailsAzureBlobStoreSettingsOutputReference | ChronicleFeedDetailsAzureBlobStoreSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    azure_uri: cdktn.stringToTerraform(struct!.azureUri),
    source_deletion_option: cdktn.stringToTerraform(struct!.sourceDeletionOption),
    source_type: cdktn.stringToTerraform(struct!.sourceType),
    authentication: chronicleFeedDetailsAzureBlobStoreSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAzureBlobStoreSettingsToHclTerraform(struct?: ChronicleFeedDetailsAzureBlobStoreSettingsOutputReference | ChronicleFeedDetailsAzureBlobStoreSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    azure_uri: {
      value: cdktn.stringToHclTerraform(struct!.azureUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktn.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsAzureBlobStoreSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureBlobStoreSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureBlobStoreSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureUri = this._azureUri;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureBlobStoreSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureUri = undefined;
      this._sourceDeletionOption = undefined;
      this._sourceType = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureUri = value.azureUri;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._sourceType = value.sourceType;
      this._authentication.internalValue = value.authentication;
    }
  }

  // azure_uri - computed: false, optional: true, required: false
  private _azureUri?: string; 
  public get azureUri() {
    return this.getStringAttribute('azure_uri');
  }
  public set azureUri(value: string) {
    this._azureUri = value;
  }
  public resetAzureUri() {
    this._azureUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUriInput() {
    return this._azureUri;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAzureBlobStoreSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAzureBlobStoreSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation {
  /**
  * OAuth client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId: string;
  /**
  * Subject ID of the Azure subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#subject_id ChronicleFeed#subject_id}
  */
  readonly subjectId: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#tenant_id ChronicleFeed#tenant_id}
  */
  readonly tenantId: string;
}

export function chronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationToTerraform(struct?: ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationOutputReference | ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    subject_id: cdktn.stringToTerraform(struct!.subjectId),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function chronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationToHclTerraform(struct?: ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationOutputReference | ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation): any {
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
    subject_id: {
      value: cdktn.stringToHclTerraform(struct!.subjectId),
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

export class ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._subjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectId = this._subjectId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._subjectId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._subjectId = value.subjectId;
      this._tenantId = value.tenantId;
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

  // subject_id - computed: false, optional: false, required: true
  private _subjectId?: string; 
  public get subjectId() {
    return this.getStringAttribute('subject_id');
  }
  public set subjectId(value: string) {
    this._subjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectIdInput() {
    return this._subjectId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication {
  /**
  * Access Key also known as shared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#access_key ChronicleFeed#access_key}
  */
  readonly accessKey: string;
  /**
  * SAS Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#sas_token ChronicleFeed#sas_token}
  */
  readonly sasToken: string;
  /**
  * azure_v2_workload_identity_federation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#azure_v2_workload_identity_federation ChronicleFeed#azure_v2_workload_identity_federation}
  */
  readonly azureV2WorkloadIdentityFederation: ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation;
}

export function chronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key: cdktn.stringToTerraform(struct!.accessKey),
    sas_token: cdktn.stringToTerraform(struct!.sasToken),
    azure_v2_workload_identity_federation: chronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationToTerraform(struct!.azureV2WorkloadIdentityFederation),
  }
}


export function chronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_key: {
      value: cdktn.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sas_token: {
      value: cdktn.stringToHclTerraform(struct!.sasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_v2_workload_identity_federation: {
      value: chronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationToHclTerraform(struct!.azureV2WorkloadIdentityFederation),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    if (this._azureV2WorkloadIdentityFederation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureV2WorkloadIdentityFederation = this._azureV2WorkloadIdentityFederation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._sasToken = undefined;
      this._azureV2WorkloadIdentityFederation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._sasToken = value.sasToken;
      this._azureV2WorkloadIdentityFederation.internalValue = value.azureV2WorkloadIdentityFederation;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // sas_token - computed: false, optional: false, required: true
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }

  // azure_v2_workload_identity_federation - computed: false, optional: false, required: true
  private _azureV2WorkloadIdentityFederation = new ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederationOutputReference(this, "azure_v2_workload_identity_federation");
  public get azureV2WorkloadIdentityFederation() {
    return this._azureV2WorkloadIdentityFederation;
  }
  public putAzureV2WorkloadIdentityFederation(value: ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationAzureV2WorkloadIdentityFederation) {
    this._azureV2WorkloadIdentityFederation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureV2WorkloadIdentityFederationInput() {
    return this._azureV2WorkloadIdentityFederation.internalValue;
  }
}
export interface ChronicleFeedDetailsAzureBlobStoreV2Settings {
  /**
  * Azure URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#azure_uri ChronicleFeed#azure_uri}
  */
  readonly azureUri: string;
  /**
  * Maximum File Age to ingest in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#max_lookback_days ChronicleFeed#max_lookback_days}
  */
  readonly maxLookbackDays?: number;
  /**
  * Possible values:
  * NEVER
  * ON_SUCCESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_deletion_option ChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication: ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication;
}

export function chronicleFeedDetailsAzureBlobStoreV2SettingsToTerraform(struct?: ChronicleFeedDetailsAzureBlobStoreV2SettingsOutputReference | ChronicleFeedDetailsAzureBlobStoreV2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    azure_uri: cdktn.stringToTerraform(struct!.azureUri),
    max_lookback_days: cdktn.numberToTerraform(struct!.maxLookbackDays),
    source_deletion_option: cdktn.stringToTerraform(struct!.sourceDeletionOption),
    authentication: chronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAzureBlobStoreV2SettingsToHclTerraform(struct?: ChronicleFeedDetailsAzureBlobStoreV2SettingsOutputReference | ChronicleFeedDetailsAzureBlobStoreV2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    azure_uri: {
      value: cdktn.stringToHclTerraform(struct!.azureUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lookback_days: {
      value: cdktn.numberToHclTerraform(struct!.maxLookbackDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_deletion_option: {
      value: cdktn.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureBlobStoreV2SettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureBlobStoreV2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureUri = this._azureUri;
    }
    if (this._maxLookbackDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLookbackDays = this._maxLookbackDays;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureBlobStoreV2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureUri = undefined;
      this._maxLookbackDays = undefined;
      this._sourceDeletionOption = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureUri = value.azureUri;
      this._maxLookbackDays = value.maxLookbackDays;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._authentication.internalValue = value.authentication;
    }
  }

  // azure_uri - computed: false, optional: false, required: true
  private _azureUri?: string; 
  public get azureUri() {
    return this.getStringAttribute('azure_uri');
  }
  public set azureUri(value: string) {
    this._azureUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUriInput() {
    return this._azureUri;
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // max_lookback_days - computed: false, optional: true, required: false
  private _maxLookbackDays?: number; 
  public get maxLookbackDays() {
    return this.getNumberAttribute('max_lookback_days');
  }
  public set maxLookbackDays(value: number) {
    this._maxLookbackDays = value;
  }
  public resetMaxLookbackDays() {
    this._maxLookbackDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLookbackDaysInput() {
    return this._maxLookbackDays;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAzureBlobStoreV2SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsAzureEventHubSettings {
  /**
  * SAS token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#azure_sas_token ChronicleFeed#azure_sas_token}
  */
  readonly azureSasToken?: string;
  /**
  * Blob store connection string for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#azure_storage_connection_string ChronicleFeed#azure_storage_connection_string}
  */
  readonly azureStorageConnectionString?: string;
  /**
  * Blob storage container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#azure_storage_container ChronicleFeed#azure_storage_container}
  */
  readonly azureStorageContainer?: string;
  /**
  * Event hub consumer group to read from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#consumer_group ChronicleFeed#consumer_group}
  */
  readonly consumerGroup: string;
  /**
  * Event hub connection string for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#event_hub_connection_string ChronicleFeed#event_hub_connection_string}
  */
  readonly eventHubConnectionString: string;
  /**
  * Event hub to read from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#name ChronicleFeed#name}
  */
  readonly name: string;
}

export function chronicleFeedDetailsAzureEventHubSettingsToTerraform(struct?: ChronicleFeedDetailsAzureEventHubSettingsOutputReference | ChronicleFeedDetailsAzureEventHubSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    azure_sas_token: cdktn.stringToTerraform(struct!.azureSasToken),
    azure_storage_connection_string: cdktn.stringToTerraform(struct!.azureStorageConnectionString),
    azure_storage_container: cdktn.stringToTerraform(struct!.azureStorageContainer),
    consumer_group: cdktn.stringToTerraform(struct!.consumerGroup),
    event_hub_connection_string: cdktn.stringToTerraform(struct!.eventHubConnectionString),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function chronicleFeedDetailsAzureEventHubSettingsToHclTerraform(struct?: ChronicleFeedDetailsAzureEventHubSettingsOutputReference | ChronicleFeedDetailsAzureEventHubSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    azure_sas_token: {
      value: cdktn.stringToHclTerraform(struct!.azureSasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_storage_connection_string: {
      value: cdktn.stringToHclTerraform(struct!.azureStorageConnectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_storage_container: {
      value: cdktn.stringToHclTerraform(struct!.azureStorageContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_group: {
      value: cdktn.stringToHclTerraform(struct!.consumerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_hub_connection_string: {
      value: cdktn.stringToHclTerraform(struct!.eventHubConnectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureEventHubSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureEventHubSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureSasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSasToken = this._azureSasToken;
    }
    if (this._azureStorageConnectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageConnectionString = this._azureStorageConnectionString;
    }
    if (this._azureStorageContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageContainer = this._azureStorageContainer;
    }
    if (this._consumerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroup = this._consumerGroup;
    }
    if (this._eventHubConnectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventHubConnectionString = this._eventHubConnectionString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureEventHubSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureSasToken = undefined;
      this._azureStorageConnectionString = undefined;
      this._azureStorageContainer = undefined;
      this._consumerGroup = undefined;
      this._eventHubConnectionString = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureSasToken = value.azureSasToken;
      this._azureStorageConnectionString = value.azureStorageConnectionString;
      this._azureStorageContainer = value.azureStorageContainer;
      this._consumerGroup = value.consumerGroup;
      this._eventHubConnectionString = value.eventHubConnectionString;
      this._name = value.name;
    }
  }

  // azure_sas_token - computed: false, optional: true, required: false
  private _azureSasToken?: string; 
  public get azureSasToken() {
    return this.getStringAttribute('azure_sas_token');
  }
  public set azureSasToken(value: string) {
    this._azureSasToken = value;
  }
  public resetAzureSasToken() {
    this._azureSasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSasTokenInput() {
    return this._azureSasToken;
  }

  // azure_storage_connection_string - computed: false, optional: true, required: false
  private _azureStorageConnectionString?: string; 
  public get azureStorageConnectionString() {
    return this.getStringAttribute('azure_storage_connection_string');
  }
  public set azureStorageConnectionString(value: string) {
    this._azureStorageConnectionString = value;
  }
  public resetAzureStorageConnectionString() {
    this._azureStorageConnectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageConnectionStringInput() {
    return this._azureStorageConnectionString;
  }

  // azure_storage_container - computed: false, optional: true, required: false
  private _azureStorageContainer?: string; 
  public get azureStorageContainer() {
    return this.getStringAttribute('azure_storage_container');
  }
  public set azureStorageContainer(value: string) {
    this._azureStorageContainer = value;
  }
  public resetAzureStorageContainer() {
    this._azureStorageContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageContainerInput() {
    return this._azureStorageContainer;
  }

  // consumer_group - computed: false, optional: false, required: true
  private _consumerGroup?: string; 
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }
  public set consumerGroup(value: string) {
    this._consumerGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup;
  }

  // event_hub_connection_string - computed: false, optional: false, required: true
  private _eventHubConnectionString?: string; 
  public get eventHubConnectionString() {
    return this.getStringAttribute('event_hub_connection_string');
  }
  public set eventHubConnectionString(value: string) {
    this._eventHubConnectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubConnectionStringInput() {
    return this._eventHubConnectionString;
  }

  // event_hub_namespace - computed: true, optional: false, required: false
  public get eventHubNamespace() {
    return this.getStringAttribute('event_hub_namespace');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface ChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function chronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function chronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationOutputReference | ChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface ChronicleFeedDetailsAzureMdmIntuneSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#auth_endpoint ChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#tenant_id ChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication;
}

export function chronicleFeedDetailsAzureMdmIntuneSettingsToTerraform(struct?: ChronicleFeedDetailsAzureMdmIntuneSettingsOutputReference | ChronicleFeedDetailsAzureMdmIntuneSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_endpoint: cdktn.stringToTerraform(struct!.authEndpoint),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    authentication: chronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsAzureMdmIntuneSettingsToHclTerraform(struct?: ChronicleFeedDetailsAzureMdmIntuneSettingsOutputReference | ChronicleFeedDetailsAzureMdmIntuneSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
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
    authentication: {
      value: chronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsAzureMdmIntuneSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsAzureMdmIntuneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsAzureMdmIntuneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsAzureMdmIntuneSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsAzureMdmIntuneSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsCloudPassageSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsCloudPassageSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsCloudPassageSettingsAuthenticationOutputReference | ChronicleFeedDetailsCloudPassageSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsCloudPassageSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsCloudPassageSettingsAuthenticationOutputReference | ChronicleFeedDetailsCloudPassageSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsCloudPassageSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsCloudPassageSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsCloudPassageSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsCloudPassageSettings {
  /**
  * Event types filter for the events API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#event_types ChronicleFeed#event_types}
  */
  readonly eventTypes?: string[];
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsCloudPassageSettingsAuthentication;
}

export function chronicleFeedDetailsCloudPassageSettingsToTerraform(struct?: ChronicleFeedDetailsCloudPassageSettingsOutputReference | ChronicleFeedDetailsCloudPassageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventTypes),
    authentication: chronicleFeedDetailsCloudPassageSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsCloudPassageSettingsToHclTerraform(struct?: ChronicleFeedDetailsCloudPassageSettingsOutputReference | ChronicleFeedDetailsCloudPassageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authentication: {
      value: chronicleFeedDetailsCloudPassageSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsCloudPassageSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsCloudPassageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsCloudPassageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTypes = this._eventTypes;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsCloudPassageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventTypes = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventTypes = value.eventTypes;
      this._authentication.internalValue = value.authentication;
    }
  }

  // event_types - computed: false, optional: true, required: false
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return this.getListAttribute('event_types');
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  public resetEventTypes() {
    this._eventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsCloudPassageSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsCloudPassageSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsCortexXdrSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsCortexXdrSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsCortexXdrSettingsAuthenticationOutputReference | ChronicleFeedDetailsCortexXdrSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsCortexXdrSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsCortexXdrSettingsAuthenticationOutputReference | ChronicleFeedDetailsCortexXdrSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsCortexXdrSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsCortexXdrSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsCortexXdrSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsCortexXdrSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsCortexXdrSettings {
  /**
  * API Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#endpoint ChronicleFeed#endpoint}
  */
  readonly endpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsCortexXdrSettingsAuthentication;
}

export function chronicleFeedDetailsCortexXdrSettingsToTerraform(struct?: ChronicleFeedDetailsCortexXdrSettingsOutputReference | ChronicleFeedDetailsCortexXdrSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsCortexXdrSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsCortexXdrSettingsToHclTerraform(struct?: ChronicleFeedDetailsCortexXdrSettingsOutputReference | ChronicleFeedDetailsCortexXdrSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsCortexXdrSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsCortexXdrSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsCortexXdrSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsCortexXdrSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsCortexXdrSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsCortexXdrSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsCortexXdrSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function chronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationOutputReference | ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function chronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationOutputReference | ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication): any {
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
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication | undefined {
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
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
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

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface ChronicleFeedDetailsCrowdstrikeAlertsSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname: string;
  /**
  * Ingestion Type.
  * Possible values:
  * BRING_ALL_ALERTS
  * BRING_ONLY_NEW_ALERTS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#ingestion_type ChronicleFeed#ingestion_type}
  */
  readonly ingestionType?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication: ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication;
}

export function chronicleFeedDetailsCrowdstrikeAlertsSettingsToTerraform(struct?: ChronicleFeedDetailsCrowdstrikeAlertsSettingsOutputReference | ChronicleFeedDetailsCrowdstrikeAlertsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    ingestion_type: cdktn.stringToTerraform(struct!.ingestionType),
    authentication: chronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsCrowdstrikeAlertsSettingsToHclTerraform(struct?: ChronicleFeedDetailsCrowdstrikeAlertsSettingsOutputReference | ChronicleFeedDetailsCrowdstrikeAlertsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingestion_type: {
      value: cdktn.stringToHclTerraform(struct!.ingestionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsCrowdstrikeAlertsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsCrowdstrikeAlertsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ingestionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionType = this._ingestionType;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsCrowdstrikeAlertsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._ingestionType = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._ingestionType = value.ingestionType;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ingestion_type - computed: false, optional: true, required: false
  private _ingestionType?: string; 
  public get ingestionType() {
    return this.getStringAttribute('ingestion_type');
  }
  public set ingestionType(value: string) {
    this._ingestionType = value;
  }
  public resetIngestionType() {
    this._ingestionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionTypeInput() {
    return this._ingestionType;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsCrowdstrikeAlertsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function chronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationOutputReference | ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function chronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationOutputReference | ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication): any {
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
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication | undefined {
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
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
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

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface ChronicleFeedDetailsCrowdstrikeDetectsSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Ingestion Type.
  * Possible values:
  * BRING_ONLY_NEW_DETECTIONS
  * BRING_ALL_DETECTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#ingestion_type ChronicleFeed#ingestion_type}
  */
  readonly ingestionType?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication;
}

export function chronicleFeedDetailsCrowdstrikeDetectsSettingsToTerraform(struct?: ChronicleFeedDetailsCrowdstrikeDetectsSettingsOutputReference | ChronicleFeedDetailsCrowdstrikeDetectsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    ingestion_type: cdktn.stringToTerraform(struct!.ingestionType),
    authentication: chronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsCrowdstrikeDetectsSettingsToHclTerraform(struct?: ChronicleFeedDetailsCrowdstrikeDetectsSettingsOutputReference | ChronicleFeedDetailsCrowdstrikeDetectsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingestion_type: {
      value: cdktn.stringToHclTerraform(struct!.ingestionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsCrowdstrikeDetectsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsCrowdstrikeDetectsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ingestionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionType = this._ingestionType;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsCrowdstrikeDetectsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._ingestionType = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._ingestionType = value.ingestionType;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ingestion_type - computed: false, optional: true, required: false
  private _ingestionType?: string; 
  public get ingestionType() {
    return this.getStringAttribute('ingestion_type');
  }
  public set ingestionType(value: string) {
    this._ingestionType = value;
  }
  public resetIngestionType() {
    this._ingestionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionTypeInput() {
    return this._ingestionType;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsCrowdstrikeDetectsSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsDummyLogTypeSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsDummyLogTypeSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationOutputReference | ChronicleFeedDetailsDummyLogTypeSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsDummyLogTypeSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationOutputReference | ChronicleFeedDetailsDummyLogTypeSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsDummyLogTypeSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsDummyLogTypeSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsDummyLogTypeSettings {
  /**
  * Full API Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#api_endpoint ChronicleFeed#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsDummyLogTypeSettingsAuthentication;
}

export function chronicleFeedDetailsDummyLogTypeSettingsToTerraform(struct?: ChronicleFeedDetailsDummyLogTypeSettingsOutputReference | ChronicleFeedDetailsDummyLogTypeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_endpoint: cdktn.stringToTerraform(struct!.apiEndpoint),
    authentication: chronicleFeedDetailsDummyLogTypeSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsDummyLogTypeSettingsToHclTerraform(struct?: ChronicleFeedDetailsDummyLogTypeSettingsOutputReference | ChronicleFeedDetailsDummyLogTypeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.apiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsDummyLogTypeSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsDummyLogTypeSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsDummyLogTypeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsDummyLogTypeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpoint = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpoint = value.apiEndpoint;
      this._authentication.internalValue = value.authentication;
    }
  }

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsDummyLogTypeSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsDummyLogTypeSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsDuoAuthSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsDuoAuthSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsDuoAuthSettingsAuthenticationOutputReference | ChronicleFeedDetailsDuoAuthSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsDuoAuthSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsDuoAuthSettingsAuthenticationOutputReference | ChronicleFeedDetailsDuoAuthSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsDuoAuthSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsDuoAuthSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsDuoAuthSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsDuoAuthSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsDuoAuthSettingsAuthentication;
}

export function chronicleFeedDetailsDuoAuthSettingsToTerraform(struct?: ChronicleFeedDetailsDuoAuthSettingsOutputReference | ChronicleFeedDetailsDuoAuthSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsDuoAuthSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsDuoAuthSettingsToHclTerraform(struct?: ChronicleFeedDetailsDuoAuthSettingsOutputReference | ChronicleFeedDetailsDuoAuthSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsDuoAuthSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsDuoAuthSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsDuoAuthSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsDuoAuthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsDuoAuthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsDuoAuthSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsDuoAuthSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsDuoUserContextSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsDuoUserContextSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsDuoUserContextSettingsAuthenticationOutputReference | ChronicleFeedDetailsDuoUserContextSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsDuoUserContextSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsDuoUserContextSettingsAuthenticationOutputReference | ChronicleFeedDetailsDuoUserContextSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsDuoUserContextSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsDuoUserContextSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsDuoUserContextSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsDuoUserContextSettings {
  /**
  * API hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsDuoUserContextSettingsAuthentication;
}

export function chronicleFeedDetailsDuoUserContextSettingsToTerraform(struct?: ChronicleFeedDetailsDuoUserContextSettingsOutputReference | ChronicleFeedDetailsDuoUserContextSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsDuoUserContextSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsDuoUserContextSettingsToHclTerraform(struct?: ChronicleFeedDetailsDuoUserContextSettingsOutputReference | ChronicleFeedDetailsDuoUserContextSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsDuoUserContextSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsDuoUserContextSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsDuoUserContextSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsDuoUserContextSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsDuoUserContextSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsDuoUserContextSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsDuoUserContextSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsFoxItStixSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsFoxItStixSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsFoxItStixSettingsAuthenticationOutputReference | ChronicleFeedDetailsFoxItStixSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsFoxItStixSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsFoxItStixSettingsAuthenticationOutputReference | ChronicleFeedDetailsFoxItStixSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsFoxItStixSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsFoxItStixSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsFoxItStixSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsFoxItStixSettingsSsl {
  /**
  * The encoded private key. The string should be a private key in PEM format,
  * and should include the begin header and end footer lines. It may also
  * include newlines.
  * 
  * Example:
  * -----BEGIN RSA PRIVATE KEY-----
  * Proc-Type: 4,ENCRYPTED
  * DEK-Info: DES-EDE3-CBC,F23074E02CF47304
  * 
  * -----END RSA PRIVATE KEY-----
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#encoded_private_key ChronicleFeed#encoded_private_key}
  */
  readonly encodedPrivateKey?: string;
  /**
  * The encoded SSL certificate. The string should be an SSL certificate in
  * PEM format, and should include the begin header and end footer lines. It
  * may also include newlines.
  * 
  * Example:
  * -----BEGIN CERTIFICATE-----
  * 
  * -----END CERTIFICATE-----
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#ssl_certificate ChronicleFeed#ssl_certificate}
  */
  readonly sslCertificate?: string;
}

export function chronicleFeedDetailsFoxItStixSettingsSslToTerraform(struct?: ChronicleFeedDetailsFoxItStixSettingsSslOutputReference | ChronicleFeedDetailsFoxItStixSettingsSsl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encoded_private_key: cdktn.stringToTerraform(struct!.encodedPrivateKey),
    ssl_certificate: cdktn.stringToTerraform(struct!.sslCertificate),
  }
}


export function chronicleFeedDetailsFoxItStixSettingsSslToHclTerraform(struct?: ChronicleFeedDetailsFoxItStixSettingsSslOutputReference | ChronicleFeedDetailsFoxItStixSettingsSsl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encoded_private_key: {
      value: cdktn.stringToHclTerraform(struct!.encodedPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_certificate: {
      value: cdktn.stringToHclTerraform(struct!.sslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsFoxItStixSettingsSslOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsFoxItStixSettingsSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encodedPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodedPrivateKey = this._encodedPrivateKey;
    }
    if (this._sslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificate = this._sslCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsFoxItStixSettingsSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encodedPrivateKey = undefined;
      this._sslCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encodedPrivateKey = value.encodedPrivateKey;
      this._sslCertificate = value.sslCertificate;
    }
  }

  // encoded_private_key - computed: false, optional: true, required: false
  private _encodedPrivateKey?: string; 
  public get encodedPrivateKey() {
    return this.getStringAttribute('encoded_private_key');
  }
  public set encodedPrivateKey(value: string) {
    this._encodedPrivateKey = value;
  }
  public resetEncodedPrivateKey() {
    this._encodedPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedPrivateKeyInput() {
    return this._encodedPrivateKey;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }
}
export interface ChronicleFeedDetailsFoxItStixSettings {
  /**
  * Collection available at the poll service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#collection ChronicleFeed#collection}
  */
  readonly collection?: string;
  /**
  * TAXII poll service URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#poll_service_uri ChronicleFeed#poll_service_uri}
  */
  readonly pollServiceUri?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsFoxItStixSettingsAuthentication;
  /**
  * ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#ssl ChronicleFeed#ssl}
  */
  readonly ssl?: ChronicleFeedDetailsFoxItStixSettingsSsl;
}

export function chronicleFeedDetailsFoxItStixSettingsToTerraform(struct?: ChronicleFeedDetailsFoxItStixSettingsOutputReference | ChronicleFeedDetailsFoxItStixSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection: cdktn.stringToTerraform(struct!.collection),
    poll_service_uri: cdktn.stringToTerraform(struct!.pollServiceUri),
    authentication: chronicleFeedDetailsFoxItStixSettingsAuthenticationToTerraform(struct!.authentication),
    ssl: chronicleFeedDetailsFoxItStixSettingsSslToTerraform(struct!.ssl),
  }
}


export function chronicleFeedDetailsFoxItStixSettingsToHclTerraform(struct?: ChronicleFeedDetailsFoxItStixSettingsOutputReference | ChronicleFeedDetailsFoxItStixSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collection: {
      value: cdktn.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poll_service_uri: {
      value: cdktn.stringToHclTerraform(struct!.pollServiceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsFoxItStixSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsFoxItStixSettingsAuthenticationList",
    },
    ssl: {
      value: chronicleFeedDetailsFoxItStixSettingsSslToHclTerraform(struct!.ssl),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsFoxItStixSettingsSslList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsFoxItStixSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsFoxItStixSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._pollServiceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollServiceUri = this._pollServiceUri;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._ssl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsFoxItStixSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collection = undefined;
      this._pollServiceUri = undefined;
      this._authentication.internalValue = undefined;
      this._ssl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collection = value.collection;
      this._pollServiceUri = value.pollServiceUri;
      this._authentication.internalValue = value.authentication;
      this._ssl.internalValue = value.ssl;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // poll_service_uri - computed: false, optional: true, required: false
  private _pollServiceUri?: string; 
  public get pollServiceUri() {
    return this.getStringAttribute('poll_service_uri');
  }
  public set pollServiceUri(value: string) {
    this._pollServiceUri = value;
  }
  public resetPollServiceUri() {
    this._pollServiceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollServiceUriInput() {
    return this._pollServiceUri;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsFoxItStixSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsFoxItStixSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl = new ChronicleFeedDetailsFoxItStixSettingsSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: ChronicleFeedDetailsFoxItStixSettingsSsl) {
    this._ssl.internalValue = value;
  }
  public resetSsl() {
    this._ssl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }
}
export interface ChronicleFeedDetailsGcsSettings {
  /**
  * Bucket URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#bucket_uri ChronicleFeed#bucket_uri}
  */
  readonly bucketUri?: string;
  /**
  * Possible values:
  * SOURCE_DELETION_NEVER
  * SOURCE_DELETION_ON_SUCCESS
  * SOURCE_DELETION_ON_SUCCESS_FILES_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_deletion_option ChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * Possible values:
  * FILES
  * FOLDERS
  * FOLDERS_RECURSIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_type ChronicleFeed#source_type}
  */
  readonly sourceType?: string;
}

export function chronicleFeedDetailsGcsSettingsToTerraform(struct?: ChronicleFeedDetailsGcsSettingsOutputReference | ChronicleFeedDetailsGcsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_uri: cdktn.stringToTerraform(struct!.bucketUri),
    source_deletion_option: cdktn.stringToTerraform(struct!.sourceDeletionOption),
    source_type: cdktn.stringToTerraform(struct!.sourceType),
  }
}


export function chronicleFeedDetailsGcsSettingsToHclTerraform(struct?: ChronicleFeedDetailsGcsSettingsOutputReference | ChronicleFeedDetailsGcsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_uri: {
      value: cdktn.stringToHclTerraform(struct!.bucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktn.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsGcsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsGcsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUri = this._bucketUri;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsGcsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketUri = undefined;
      this._sourceDeletionOption = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketUri = value.bucketUri;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._sourceType = value.sourceType;
    }
  }

  // bucket_uri - computed: false, optional: true, required: false
  private _bucketUri?: string; 
  public get bucketUri() {
    return this.getStringAttribute('bucket_uri');
  }
  public set bucketUri(value: string) {
    this._bucketUri = value;
  }
  public resetBucketUri() {
    this._bucketUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUriInput() {
    return this._bucketUri;
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface ChronicleFeedDetailsGcsV2Settings {
  /**
  * Google Cloud Storage Bucket URI for the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#bucket_uri ChronicleFeed#bucket_uri}
  */
  readonly bucketUri: string;
  /**
  * Maximum File Age to ingest in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#max_lookback_days ChronicleFeed#max_lookback_days}
  */
  readonly maxLookbackDays?: number;
  /**
  * Possible values:
  * NEVER
  * ON_SUCCESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_deletion_option ChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
}

export function chronicleFeedDetailsGcsV2SettingsToTerraform(struct?: ChronicleFeedDetailsGcsV2SettingsOutputReference | ChronicleFeedDetailsGcsV2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_uri: cdktn.stringToTerraform(struct!.bucketUri),
    max_lookback_days: cdktn.numberToTerraform(struct!.maxLookbackDays),
    source_deletion_option: cdktn.stringToTerraform(struct!.sourceDeletionOption),
  }
}


export function chronicleFeedDetailsGcsV2SettingsToHclTerraform(struct?: ChronicleFeedDetailsGcsV2SettingsOutputReference | ChronicleFeedDetailsGcsV2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_uri: {
      value: cdktn.stringToHclTerraform(struct!.bucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lookback_days: {
      value: cdktn.numberToHclTerraform(struct!.maxLookbackDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_deletion_option: {
      value: cdktn.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsGcsV2SettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsGcsV2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUri = this._bucketUri;
    }
    if (this._maxLookbackDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLookbackDays = this._maxLookbackDays;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsGcsV2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketUri = undefined;
      this._maxLookbackDays = undefined;
      this._sourceDeletionOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketUri = value.bucketUri;
      this._maxLookbackDays = value.maxLookbackDays;
      this._sourceDeletionOption = value.sourceDeletionOption;
    }
  }

  // bucket_uri - computed: false, optional: false, required: true
  private _bucketUri?: string; 
  public get bucketUri() {
    return this.getStringAttribute('bucket_uri');
  }
  public set bucketUri(value: string) {
    this._bucketUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUriInput() {
    return this._bucketUri;
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // max_lookback_days - computed: false, optional: true, required: false
  private _maxLookbackDays?: number; 
  public get maxLookbackDays() {
    return this.getNumberAttribute('max_lookback_days');
  }
  public set maxLookbackDays(value: number) {
    this._maxLookbackDays = value;
  }
  public resetMaxLookbackDays() {
    this._maxLookbackDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLookbackDaysInput() {
    return this._maxLookbackDays;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }
}
export interface ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#audience ChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#issuer ChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#subject ChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsToTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsToHclTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#private_key ChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsToTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsToHclTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#claims ChronicleFeed#claims}
  */
  readonly claims?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#rs_credentials ChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials;
}

export function chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    claims: chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication;
}

export function chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsToHclTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: chronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsGoogleCloudIdentityDeviceUsersSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#audience ChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#issuer ChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#subject ChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsToTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsToHclTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#private_key ChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsToTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsToHclTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#claims ChronicleFeed#claims}
  */
  readonly claims?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#rs_credentials ChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials;
}

export function chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    claims: chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsToTerraform(struct!.claims),
    rs_credentials: chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsList",
    },
    rs_credentials: {
      value: chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface ChronicleFeedDetailsGoogleCloudIdentityDevicesSettings {
  /**
  * API Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#api_version ChronicleFeed#api_version}
  */
  readonly apiVersion?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication;
}

export function chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDevicesSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_version: cdktn.stringToTerraform(struct!.apiVersion),
    authentication: chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsToHclTerraform(struct?: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsOutputReference | ChronicleFeedDetailsGoogleCloudIdentityDevicesSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_version: {
      value: cdktn.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsGoogleCloudIdentityDevicesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._authentication.internalValue = value.authentication;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsGoogleCloudIdentityDevicesSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings {
  /**
  * Google Cloud Storage Bucket URI for the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#bucket_uri ChronicleFeed#bucket_uri}
  */
  readonly bucketUri: string;
  /**
  * Maximum File Age to ingest in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#max_lookback_days ChronicleFeed#max_lookback_days}
  */
  readonly maxLookbackDays?: number;
  /**
  * Subscription name for pubsub topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#pubsub_subscription ChronicleFeed#pubsub_subscription}
  */
  readonly pubsubSubscription: string;
  /**
  * Possible values:
  * NEVER
  * ON_SUCCESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_deletion_option ChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
}

export function chronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToTerraform(struct?: ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsOutputReference | ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_uri: cdktn.stringToTerraform(struct!.bucketUri),
    max_lookback_days: cdktn.numberToTerraform(struct!.maxLookbackDays),
    pubsub_subscription: cdktn.stringToTerraform(struct!.pubsubSubscription),
    source_deletion_option: cdktn.stringToTerraform(struct!.sourceDeletionOption),
  }
}


export function chronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsToHclTerraform(struct?: ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsOutputReference | ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_uri: {
      value: cdktn.stringToHclTerraform(struct!.bucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lookback_days: {
      value: cdktn.numberToHclTerraform(struct!.maxLookbackDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pubsub_subscription: {
      value: cdktn.stringToHclTerraform(struct!.pubsubSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_deletion_option: {
      value: cdktn.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUri = this._bucketUri;
    }
    if (this._maxLookbackDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLookbackDays = this._maxLookbackDays;
    }
    if (this._pubsubSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubSubscription = this._pubsubSubscription;
    }
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsGoogleCloudStorageEventDrivenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketUri = undefined;
      this._maxLookbackDays = undefined;
      this._pubsubSubscription = undefined;
      this._sourceDeletionOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketUri = value.bucketUri;
      this._maxLookbackDays = value.maxLookbackDays;
      this._pubsubSubscription = value.pubsubSubscription;
      this._sourceDeletionOption = value.sourceDeletionOption;
    }
  }

  // bucket_uri - computed: false, optional: false, required: true
  private _bucketUri?: string; 
  public get bucketUri() {
    return this.getStringAttribute('bucket_uri');
  }
  public set bucketUri(value: string) {
    this._bucketUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUriInput() {
    return this._bucketUri;
  }

  // chronicle_service_account - computed: true, optional: false, required: false
  public get chronicleServiceAccount() {
    return this.getStringAttribute('chronicle_service_account');
  }

  // max_lookback_days - computed: false, optional: true, required: false
  private _maxLookbackDays?: number; 
  public get maxLookbackDays() {
    return this.getNumberAttribute('max_lookback_days');
  }
  public set maxLookbackDays(value: number) {
    this._maxLookbackDays = value;
  }
  public resetMaxLookbackDays() {
    this._maxLookbackDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLookbackDaysInput() {
    return this._maxLookbackDays;
  }

  // pubsub_subscription - computed: false, optional: false, required: true
  private _pubsubSubscription?: string; 
  public get pubsubSubscription() {
    return this.getStringAttribute('pubsub_subscription');
  }
  public set pubsubSubscription(value: string) {
    this._pubsubSubscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubSubscriptionInput() {
    return this._pubsubSubscription;
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }
}
export interface ChronicleFeedDetailsHttpSettings {
  /**
  * Possible values:
  * SOURCE_DELETION_NEVER
  * SOURCE_DELETION_ON_SUCCESS
  * SOURCE_DELETION_ON_SUCCESS_FILES_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_deletion_option ChronicleFeed#source_deletion_option}
  */
  readonly sourceDeletionOption?: string;
  /**
  * Possible values:
  * FILES
  * FOLDERS
  * FOLDERS_RECURSIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#source_type ChronicleFeed#source_type}
  */
  readonly sourceType?: string;
  /**
  * HTTP URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#uri ChronicleFeed#uri}
  */
  readonly uri?: string;
}

export function chronicleFeedDetailsHttpSettingsToTerraform(struct?: ChronicleFeedDetailsHttpSettingsOutputReference | ChronicleFeedDetailsHttpSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_deletion_option: cdktn.stringToTerraform(struct!.sourceDeletionOption),
    source_type: cdktn.stringToTerraform(struct!.sourceType),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function chronicleFeedDetailsHttpSettingsToHclTerraform(struct?: ChronicleFeedDetailsHttpSettingsOutputReference | ChronicleFeedDetailsHttpSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_deletion_option: {
      value: cdktn.stringToHclTerraform(struct!.sourceDeletionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
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

export class ChronicleFeedDetailsHttpSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsHttpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceDeletionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDeletionOption = this._sourceDeletionOption;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsHttpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceDeletionOption = undefined;
      this._sourceType = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceDeletionOption = value.sourceDeletionOption;
      this._sourceType = value.sourceType;
      this._uri = value.uri;
    }
  }

  // source_deletion_option - computed: false, optional: true, required: false
  private _sourceDeletionOption?: string; 
  public get sourceDeletionOption() {
    return this.getStringAttribute('source_deletion_option');
  }
  public set sourceDeletionOption(value: string) {
    this._sourceDeletionOption = value;
  }
  public resetSourceDeletionOption() {
    this._sourceDeletionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDeletionOptionInput() {
    return this._sourceDeletionOption;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings {
  /**
  * Delimiter to split on for the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#split_delimiter ChronicleFeed#split_delimiter}
  */
  readonly splitDelimiter?: string;
}

export function chronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToTerraform(struct?: ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsOutputReference | ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    split_delimiter: cdktn.stringToTerraform(struct!.splitDelimiter),
  }
}


export function chronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsToHclTerraform(struct?: ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsOutputReference | ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    split_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.splitDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitDelimiter = this._splitDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsHttpsPushAmazonKinesisFirehoseSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._splitDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._splitDelimiter = value.splitDelimiter;
    }
  }

  // split_delimiter - computed: false, optional: true, required: false
  private _splitDelimiter?: string; 
  public get splitDelimiter() {
    return this.getStringAttribute('split_delimiter');
  }
  public set splitDelimiter(value: string) {
    this._splitDelimiter = value;
  }
  public resetSplitDelimiter() {
    this._splitDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDelimiterInput() {
    return this._splitDelimiter;
  }
}
export interface ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings {
  /**
  * Delimiter to split on for the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#split_delimiter ChronicleFeed#split_delimiter}
  */
  readonly splitDelimiter?: string;
}

export function chronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToTerraform(struct?: ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsOutputReference | ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    split_delimiter: cdktn.stringToTerraform(struct!.splitDelimiter),
  }
}


export function chronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsToHclTerraform(struct?: ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsOutputReference | ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    split_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.splitDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitDelimiter = this._splitDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsHttpsPushGoogleCloudPubsubSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._splitDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._splitDelimiter = value.splitDelimiter;
    }
  }

  // split_delimiter - computed: false, optional: true, required: false
  private _splitDelimiter?: string; 
  public get splitDelimiter() {
    return this.getStringAttribute('split_delimiter');
  }
  public set splitDelimiter(value: string) {
    this._splitDelimiter = value;
  }
  public resetSplitDelimiter() {
    this._splitDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDelimiterInput() {
    return this._splitDelimiter;
  }
}
export interface ChronicleFeedDetailsHttpsPushWebhookSettings {
  /**
  * Delimiter to split on for the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#split_delimiter ChronicleFeed#split_delimiter}
  */
  readonly splitDelimiter?: string;
}

export function chronicleFeedDetailsHttpsPushWebhookSettingsToTerraform(struct?: ChronicleFeedDetailsHttpsPushWebhookSettingsOutputReference | ChronicleFeedDetailsHttpsPushWebhookSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    split_delimiter: cdktn.stringToTerraform(struct!.splitDelimiter),
  }
}


export function chronicleFeedDetailsHttpsPushWebhookSettingsToHclTerraform(struct?: ChronicleFeedDetailsHttpsPushWebhookSettingsOutputReference | ChronicleFeedDetailsHttpsPushWebhookSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    split_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.splitDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsHttpsPushWebhookSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsHttpsPushWebhookSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitDelimiter = this._splitDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsHttpsPushWebhookSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._splitDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._splitDelimiter = value.splitDelimiter;
    }
  }

  // split_delimiter - computed: false, optional: true, required: false
  private _splitDelimiter?: string; 
  public get splitDelimiter() {
    return this.getStringAttribute('split_delimiter');
  }
  public set splitDelimiter(value: string) {
    this._splitDelimiter = value;
  }
  public resetSplitDelimiter() {
    this._splitDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDelimiterInput() {
    return this._splitDelimiter;
  }
}
export interface ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsImpervaWafSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsImpervaWafSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsImpervaWafSettingsAuthenticationOutputReference | ChronicleFeedDetailsImpervaWafSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsImpervaWafSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsImpervaWafSettingsAuthenticationOutputReference | ChronicleFeedDetailsImpervaWafSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsImpervaWafSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsImpervaWafSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsImpervaWafSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsImpervaWafSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsImpervaWafSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsImpervaWafSettingsAuthentication;
}

export function chronicleFeedDetailsImpervaWafSettingsToTerraform(struct?: ChronicleFeedDetailsImpervaWafSettingsOutputReference | ChronicleFeedDetailsImpervaWafSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: chronicleFeedDetailsImpervaWafSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsImpervaWafSettingsToHclTerraform(struct?: ChronicleFeedDetailsImpervaWafSettingsOutputReference | ChronicleFeedDetailsImpervaWafSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: chronicleFeedDetailsImpervaWafSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsImpervaWafSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsImpervaWafSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsImpervaWafSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsImpervaWafSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsImpervaWafSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsImpervaWafSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsMandiantIocSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsMandiantIocSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsMandiantIocSettingsAuthenticationOutputReference | ChronicleFeedDetailsMandiantIocSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsMandiantIocSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsMandiantIocSettingsAuthenticationOutputReference | ChronicleFeedDetailsMandiantIocSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsMandiantIocSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsMandiantIocSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsMandiantIocSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsMandiantIocSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsMandiantIocSettings {
  /**
  * time since when to start fetching the IOCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#start_time ChronicleFeed#start_time}
  */
  readonly startTime?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsMandiantIocSettingsAuthentication;
}

export function chronicleFeedDetailsMandiantIocSettingsToTerraform(struct?: ChronicleFeedDetailsMandiantIocSettingsOutputReference | ChronicleFeedDetailsMandiantIocSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    start_time: cdktn.stringToTerraform(struct!.startTime),
    authentication: chronicleFeedDetailsMandiantIocSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsMandiantIocSettingsToHclTerraform(struct?: ChronicleFeedDetailsMandiantIocSettingsOutputReference | ChronicleFeedDetailsMandiantIocSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsMandiantIocSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMandiantIocSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsMandiantIocSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsMandiantIocSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsMandiantIocSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime = value.startTime;
      this._authentication.internalValue = value.authentication;
    }
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsMandiantIocSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsMandiantIocSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function chronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationOutputReference | ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function chronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationOutputReference | ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface ChronicleFeedDetailsMicrosoftGraphAlertSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#auth_endpoint ChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#tenant_id ChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication;
}

export function chronicleFeedDetailsMicrosoftGraphAlertSettingsToTerraform(struct?: ChronicleFeedDetailsMicrosoftGraphAlertSettingsOutputReference | ChronicleFeedDetailsMicrosoftGraphAlertSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_endpoint: cdktn.stringToTerraform(struct!.authEndpoint),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    authentication: chronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsMicrosoftGraphAlertSettingsToHclTerraform(struct?: ChronicleFeedDetailsMicrosoftGraphAlertSettingsOutputReference | ChronicleFeedDetailsMicrosoftGraphAlertSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
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
    authentication: {
      value: chronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsMicrosoftGraphAlertSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsMicrosoftGraphAlertSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsMicrosoftGraphAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsMicrosoftGraphAlertSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function chronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationOutputReference | ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function chronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationOutputReference | ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#auth_endpoint ChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Subscription ID of the Microsoft security center alert settings alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#subscription_id ChronicleFeed#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#tenant_id ChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication;
}

export function chronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToTerraform(struct?: ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsOutputReference | ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_endpoint: cdktn.stringToTerraform(struct!.authEndpoint),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    subscription_id: cdktn.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    authentication: chronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsToHclTerraform(struct?: ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsOutputReference | ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktn.stringToHclTerraform(struct!.subscriptionId),
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
    authentication: {
      value: chronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._hostname = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._hostname = value.hostname;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsMicrosoftSecurityCenterAlertSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsMimecastMailSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsMimecastMailSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsMimecastMailSettingsAuthenticationOutputReference | ChronicleFeedDetailsMimecastMailSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsMimecastMailSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsMimecastMailSettingsAuthenticationOutputReference | ChronicleFeedDetailsMimecastMailSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsMimecastMailSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsMimecastMailSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsMimecastMailSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsMimecastMailSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsMimecastMailSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsMimecastMailSettingsAuthentication;
}

export function chronicleFeedDetailsMimecastMailSettingsToTerraform(struct?: ChronicleFeedDetailsMimecastMailSettingsOutputReference | ChronicleFeedDetailsMimecastMailSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsMimecastMailSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsMimecastMailSettingsToHclTerraform(struct?: ChronicleFeedDetailsMimecastMailSettingsOutputReference | ChronicleFeedDetailsMimecastMailSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsMimecastMailSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMimecastMailSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsMimecastMailSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsMimecastMailSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsMimecastMailSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsMimecastMailSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsMimecastMailSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function chronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsToTerraform(struct?: ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsOutputReference | ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function chronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsToHclTerraform(struct?: ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsOutputReference | ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface ChronicleFeedDetailsMimecastMailV2Settings {
  /**
  * auth_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#auth_credentials ChronicleFeed#auth_credentials}
  */
  readonly authCredentials?: ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials;
}

export function chronicleFeedDetailsMimecastMailV2SettingsToTerraform(struct?: ChronicleFeedDetailsMimecastMailV2SettingsOutputReference | ChronicleFeedDetailsMimecastMailV2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_credentials: chronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsToTerraform(struct!.authCredentials),
  }
}


export function chronicleFeedDetailsMimecastMailV2SettingsToHclTerraform(struct?: ChronicleFeedDetailsMimecastMailV2SettingsOutputReference | ChronicleFeedDetailsMimecastMailV2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_credentials: {
      value: chronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsToHclTerraform(struct!.authCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsMimecastMailV2SettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsMimecastMailV2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCredentials = this._authCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsMimecastMailV2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCredentials.internalValue = value.authCredentials;
    }
  }

  // auth_credentials - computed: false, optional: true, required: false
  private _authCredentials = new ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentialsOutputReference(this, "auth_credentials");
  public get authCredentials() {
    return this._authCredentials;
  }
  public putAuthCredentials(value: ChronicleFeedDetailsMimecastMailV2SettingsAuthCredentials) {
    this._authCredentials.internalValue = value;
  }
  public resetAuthCredentials() {
    this._authCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCredentialsInput() {
    return this._authCredentials.internalValue;
  }
}
export interface ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsNetskopeAlertSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsNetskopeAlertSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationOutputReference | ChronicleFeedDetailsNetskopeAlertSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsNetskopeAlertSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationOutputReference | ChronicleFeedDetailsNetskopeAlertSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsNetskopeAlertSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsNetskopeAlertSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsNetskopeAlertSettings {
  /**
  * Content type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#content_type ChronicleFeed#content_type}
  */
  readonly contentType?: string;
  /**
  * Feedname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#feedname ChronicleFeed#feedname}
  */
  readonly feedname?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsNetskopeAlertSettingsAuthentication;
}

export function chronicleFeedDetailsNetskopeAlertSettingsToTerraform(struct?: ChronicleFeedDetailsNetskopeAlertSettingsOutputReference | ChronicleFeedDetailsNetskopeAlertSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_type: cdktn.stringToTerraform(struct!.contentType),
    feedname: cdktn.stringToTerraform(struct!.feedname),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsNetskopeAlertSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsNetskopeAlertSettingsToHclTerraform(struct?: ChronicleFeedDetailsNetskopeAlertSettingsOutputReference | ChronicleFeedDetailsNetskopeAlertSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feedname: {
      value: cdktn.stringToHclTerraform(struct!.feedname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsNetskopeAlertSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsNetskopeAlertSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsNetskopeAlertSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._feedname !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedname = this._feedname;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsNetskopeAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
      this._feedname = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
      this._feedname = value.feedname;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // feedname - computed: false, optional: true, required: false
  private _feedname?: string; 
  public get feedname() {
    return this.getStringAttribute('feedname');
  }
  public set feedname(value: string) {
    this._feedname = value;
  }
  public resetFeedname() {
    this._feedname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feednameInput() {
    return this._feedname;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsNetskopeAlertSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsNetskopeAlertSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationOutputReference | ChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationOutputReference | ChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsNetskopeAlertV2Settings {
  /**
  * Content Category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#content_category ChronicleFeed#content_category}
  */
  readonly contentCategory?: string;
  /**
  * Content type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#content_types ChronicleFeed#content_types}
  */
  readonly contentTypes?: string[];
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication;
}

export function chronicleFeedDetailsNetskopeAlertV2SettingsToTerraform(struct?: ChronicleFeedDetailsNetskopeAlertV2SettingsOutputReference | ChronicleFeedDetailsNetskopeAlertV2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_category: cdktn.stringToTerraform(struct!.contentCategory),
    content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.contentTypes),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsNetskopeAlertV2SettingsToHclTerraform(struct?: ChronicleFeedDetailsNetskopeAlertV2SettingsOutputReference | ChronicleFeedDetailsNetskopeAlertV2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_category: {
      value: cdktn.stringToHclTerraform(struct!.contentCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.contentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsNetskopeAlertV2SettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsNetskopeAlertV2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentCategory = this._contentCategory;
    }
    if (this._contentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypes = this._contentTypes;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsNetskopeAlertV2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentCategory = undefined;
      this._contentTypes = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentCategory = value.contentCategory;
      this._contentTypes = value.contentTypes;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // content_category - computed: false, optional: true, required: false
  private _contentCategory?: string; 
  public get contentCategory() {
    return this.getStringAttribute('content_category');
  }
  public set contentCategory(value: string) {
    this._contentCategory = value;
  }
  public resetContentCategory() {
    this._contentCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCategoryInput() {
    return this._contentCategory;
  }

  // content_types - computed: false, optional: true, required: false
  private _contentTypes?: string[]; 
  public get contentTypes() {
    return this.getListAttribute('content_types');
  }
  public set contentTypes(value: string[]) {
    this._contentTypes = value;
  }
  public resetContentTypes() {
    this._contentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesInput() {
    return this._contentTypes;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsNetskopeAlertV2SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsNetskopeAlertV2SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsOffice365SettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
}

export function chronicleFeedDetailsOffice365SettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsOffice365SettingsAuthenticationOutputReference | ChronicleFeedDetailsOffice365SettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function chronicleFeedDetailsOffice365SettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsOffice365SettingsAuthenticationOutputReference | ChronicleFeedDetailsOffice365SettingsAuthentication): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsOffice365SettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsOffice365SettingsAuthentication | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsOffice365SettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface ChronicleFeedDetailsOffice365Settings {
  /**
  * API Auth Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#auth_endpoint ChronicleFeed#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * Supported office 365 content type.
  * Possible values:
  * AUDIT_AZURE_ACTIVE_DIRECTORY
  * AUDIT_EXCHANGE
  * AUDIT_SHARE_POINT
  * AUDIT_GENERAL
  * DLP_ALL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#content_type ChronicleFeed#content_type}
  */
  readonly contentType?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#tenant_id ChronicleFeed#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsOffice365SettingsAuthentication;
}

export function chronicleFeedDetailsOffice365SettingsToTerraform(struct?: ChronicleFeedDetailsOffice365SettingsOutputReference | ChronicleFeedDetailsOffice365Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_endpoint: cdktn.stringToTerraform(struct!.authEndpoint),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    authentication: chronicleFeedDetailsOffice365SettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsOffice365SettingsToHclTerraform(struct?: ChronicleFeedDetailsOffice365SettingsOutputReference | ChronicleFeedDetailsOffice365Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
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
    authentication: {
      value: chronicleFeedDetailsOffice365SettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsOffice365SettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsOffice365SettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsOffice365Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsOffice365Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._contentType = undefined;
      this._hostname = undefined;
      this._tenantId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._contentType = value.contentType;
      this._hostname = value.hostname;
      this._tenantId = value.tenantId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsOffice365SettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsOffice365SettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsOktaSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsOktaSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsOktaSettingsAuthenticationOutputReference | ChronicleFeedDetailsOktaSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsOktaSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsOktaSettingsAuthenticationOutputReference | ChronicleFeedDetailsOktaSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsOktaSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsOktaSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsOktaSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsOktaSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsOktaSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsOktaSettingsAuthentication;
}

export function chronicleFeedDetailsOktaSettingsToTerraform(struct?: ChronicleFeedDetailsOktaSettingsOutputReference | ChronicleFeedDetailsOktaSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsOktaSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsOktaSettingsToHclTerraform(struct?: ChronicleFeedDetailsOktaSettingsOutputReference | ChronicleFeedDetailsOktaSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsOktaSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsOktaSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsOktaSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsOktaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsOktaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsOktaSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsOktaSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsOktaUserContextSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsOktaUserContextSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsOktaUserContextSettingsAuthenticationOutputReference | ChronicleFeedDetailsOktaUserContextSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsOktaUserContextSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsOktaUserContextSettingsAuthenticationOutputReference | ChronicleFeedDetailsOktaUserContextSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsOktaUserContextSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsOktaUserContextSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsOktaUserContextSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsOktaUserContextSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsOktaUserContextSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * Manager id reference field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#manager_id_reference_field ChronicleFeed#manager_id_reference_field}
  */
  readonly managerIdReferenceField?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsOktaUserContextSettingsAuthentication;
}

export function chronicleFeedDetailsOktaUserContextSettingsToTerraform(struct?: ChronicleFeedDetailsOktaUserContextSettingsOutputReference | ChronicleFeedDetailsOktaUserContextSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    manager_id_reference_field: cdktn.stringToTerraform(struct!.managerIdReferenceField),
    authentication: chronicleFeedDetailsOktaUserContextSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsOktaUserContextSettingsToHclTerraform(struct?: ChronicleFeedDetailsOktaUserContextSettingsOutputReference | ChronicleFeedDetailsOktaUserContextSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manager_id_reference_field: {
      value: cdktn.stringToHclTerraform(struct!.managerIdReferenceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsOktaUserContextSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsOktaUserContextSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsOktaUserContextSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsOktaUserContextSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._managerIdReferenceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerIdReferenceField = this._managerIdReferenceField;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsOktaUserContextSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._managerIdReferenceField = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._managerIdReferenceField = value.managerIdReferenceField;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // manager_id_reference_field - computed: false, optional: true, required: false
  private _managerIdReferenceField?: string; 
  public get managerIdReferenceField() {
    return this.getStringAttribute('manager_id_reference_field');
  }
  public set managerIdReferenceField(value: string) {
    this._managerIdReferenceField = value;
  }
  public resetManagerIdReferenceField() {
    this._managerIdReferenceField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdReferenceFieldInput() {
    return this._managerIdReferenceField;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsOktaUserContextSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsOktaUserContextSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsPanIocSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsPanIocSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsPanIocSettingsAuthenticationOutputReference | ChronicleFeedDetailsPanIocSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsPanIocSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsPanIocSettingsAuthenticationOutputReference | ChronicleFeedDetailsPanIocSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsPanIocSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsPanIocSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsPanIocSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsPanIocSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsPanIocSettings {
  /**
  * PAN IOC feed name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#feed ChronicleFeed#feed}
  */
  readonly feed?: string;
  /**
  * PAN IOC feed ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#feed_id ChronicleFeed#feed_id}
  */
  readonly feedId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsPanIocSettingsAuthentication;
}

export function chronicleFeedDetailsPanIocSettingsToTerraform(struct?: ChronicleFeedDetailsPanIocSettingsOutputReference | ChronicleFeedDetailsPanIocSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    feed: cdktn.stringToTerraform(struct!.feed),
    feed_id: cdktn.stringToTerraform(struct!.feedId),
    authentication: chronicleFeedDetailsPanIocSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsPanIocSettingsToHclTerraform(struct?: ChronicleFeedDetailsPanIocSettingsOutputReference | ChronicleFeedDetailsPanIocSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    feed: {
      value: cdktn.stringToHclTerraform(struct!.feed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feed_id: {
      value: cdktn.stringToHclTerraform(struct!.feedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsPanIocSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsPanIocSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsPanIocSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsPanIocSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feed !== undefined) {
      hasAnyValues = true;
      internalValueResult.feed = this._feed;
    }
    if (this._feedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedId = this._feedId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsPanIocSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._feed = undefined;
      this._feedId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._feed = value.feed;
      this._feedId = value.feedId;
      this._authentication.internalValue = value.authentication;
    }
  }

  // feed - computed: false, optional: true, required: false
  private _feed?: string; 
  public get feed() {
    return this.getStringAttribute('feed');
  }
  public set feed(value: string) {
    this._feed = value;
  }
  public resetFeed() {
    this._feed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedInput() {
    return this._feed;
  }

  // feed_id - computed: false, optional: true, required: false
  private _feedId?: string; 
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }
  public set feedId(value: string) {
    this._feedId = value;
  }
  public resetFeedId() {
    this._feedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedIdInput() {
    return this._feedId;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsPanIocSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsPanIocSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsPanPrismaCloudSettingsAuthentication {
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#password ChronicleFeed#password}
  */
  readonly password?: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsPanPrismaCloudSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationOutputReference | ChronicleFeedDetailsPanPrismaCloudSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsPanPrismaCloudSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationOutputReference | ChronicleFeedDetailsPanPrismaCloudSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsPanPrismaCloudSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsPanPrismaCloudSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._user = value.user;
    }
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsPanPrismaCloudSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsPanPrismaCloudSettingsAuthentication;
}

export function chronicleFeedDetailsPanPrismaCloudSettingsToTerraform(struct?: ChronicleFeedDetailsPanPrismaCloudSettingsOutputReference | ChronicleFeedDetailsPanPrismaCloudSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsPanPrismaCloudSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsPanPrismaCloudSettingsToHclTerraform(struct?: ChronicleFeedDetailsPanPrismaCloudSettingsOutputReference | ChronicleFeedDetailsPanPrismaCloudSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsPanPrismaCloudSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsPanPrismaCloudSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsPanPrismaCloudSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsPanPrismaCloudSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsPanPrismaCloudSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsPanPrismaCloudSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsProofpointMailSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsProofpointMailSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsProofpointMailSettingsAuthenticationOutputReference | ChronicleFeedDetailsProofpointMailSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsProofpointMailSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsProofpointMailSettingsAuthenticationOutputReference | ChronicleFeedDetailsProofpointMailSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsProofpointMailSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsProofpointMailSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsProofpointMailSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsProofpointMailSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsProofpointMailSettingsAuthentication;
}

export function chronicleFeedDetailsProofpointMailSettingsToTerraform(struct?: ChronicleFeedDetailsProofpointMailSettingsOutputReference | ChronicleFeedDetailsProofpointMailSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: chronicleFeedDetailsProofpointMailSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsProofpointMailSettingsToHclTerraform(struct?: ChronicleFeedDetailsProofpointMailSettingsOutputReference | ChronicleFeedDetailsProofpointMailSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: chronicleFeedDetailsProofpointMailSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsProofpointMailSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsProofpointMailSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsProofpointMailSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsProofpointMailSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsProofpointMailSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsProofpointMailSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsProofpointOnDemandSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsProofpointOnDemandSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationOutputReference | ChronicleFeedDetailsProofpointOnDemandSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsProofpointOnDemandSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationOutputReference | ChronicleFeedDetailsProofpointOnDemandSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsProofpointOnDemandSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsProofpointOnDemandSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsProofpointOnDemandSettings {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#cluster_id ChronicleFeed#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsProofpointOnDemandSettingsAuthentication;
}

export function chronicleFeedDetailsProofpointOnDemandSettingsToTerraform(struct?: ChronicleFeedDetailsProofpointOnDemandSettingsOutputReference | ChronicleFeedDetailsProofpointOnDemandSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
    authentication: chronicleFeedDetailsProofpointOnDemandSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsProofpointOnDemandSettingsToHclTerraform(struct?: ChronicleFeedDetailsProofpointOnDemandSettingsOutputReference | ChronicleFeedDetailsProofpointOnDemandSettings): any {
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
    authentication: {
      value: chronicleFeedDetailsProofpointOnDemandSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsProofpointOnDemandSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsProofpointOnDemandSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsProofpointOnDemandSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._authentication.internalValue = value.authentication;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsProofpointOnDemandSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsProofpointOnDemandSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsPubsubSettings {
  /**
  * Google Service Account Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#google_service_account_email ChronicleFeed#google_service_account_email}
  */
  readonly googleServiceAccountEmail?: string;
}

export function chronicleFeedDetailsPubsubSettingsToTerraform(struct?: ChronicleFeedDetailsPubsubSettingsOutputReference | ChronicleFeedDetailsPubsubSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    google_service_account_email: cdktn.stringToTerraform(struct!.googleServiceAccountEmail),
  }
}


export function chronicleFeedDetailsPubsubSettingsToHclTerraform(struct?: ChronicleFeedDetailsPubsubSettingsOutputReference | ChronicleFeedDetailsPubsubSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    google_service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.googleServiceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsPubsubSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsPubsubSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleServiceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccountEmail = this._googleServiceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsPubsubSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._googleServiceAccountEmail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._googleServiceAccountEmail = value.googleServiceAccountEmail;
    }
  }

  // google_service_account_email - computed: false, optional: true, required: false
  private _googleServiceAccountEmail?: string; 
  public get googleServiceAccountEmail() {
    return this.getStringAttribute('google_service_account_email');
  }
  public set googleServiceAccountEmail(value: string) {
    this._googleServiceAccountEmail = value;
  }
  public resetGoogleServiceAccountEmail() {
    this._googleServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountEmailInput() {
    return this._googleServiceAccountEmail;
  }
}
export interface ChronicleFeedDetailsQualysScanSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsQualysScanSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsQualysScanSettingsAuthenticationOutputReference | ChronicleFeedDetailsQualysScanSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsQualysScanSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsQualysScanSettingsAuthenticationOutputReference | ChronicleFeedDetailsQualysScanSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsQualysScanSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsQualysScanSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsQualysScanSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsQualysScanSettings {
  /**
  * Supported Qualys Scan api type.
  * Possible values:
  * SCAN_SUMMARY_OUTPUT
  * SCAN_COMPLIANCE_OUTPUT
  * SCAN_COMPLIANCE_CONTROL_OUTPUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#api_type ChronicleFeed#api_type}
  */
  readonly apiType?: string;
  /**
  * Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsQualysScanSettingsAuthentication;
}

export function chronicleFeedDetailsQualysScanSettingsToTerraform(struct?: ChronicleFeedDetailsQualysScanSettingsOutputReference | ChronicleFeedDetailsQualysScanSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_type: cdktn.stringToTerraform(struct!.apiType),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsQualysScanSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsQualysScanSettingsToHclTerraform(struct?: ChronicleFeedDetailsQualysScanSettingsOutputReference | ChronicleFeedDetailsQualysScanSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_type: {
      value: cdktn.stringToHclTerraform(struct!.apiType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsQualysScanSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsQualysScanSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsQualysScanSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsQualysScanSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiType !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiType = this._apiType;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsQualysScanSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiType = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiType = value.apiType;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // api_type - computed: false, optional: true, required: false
  private _apiType?: string; 
  public get apiType() {
    return this.getStringAttribute('api_type');
  }
  public set apiType(value: string) {
    this._apiType = value;
  }
  public resetApiType() {
    this._apiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTypeInput() {
    return this._apiType;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsQualysScanSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsQualysScanSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsQualysVmSettingsAuthentication {
  /**
  * Secret of the account identified by user_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#secret ChronicleFeed#secret}
  */
  readonly secret?: string;
  /**
  * Username of an identity used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsQualysVmSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsQualysVmSettingsAuthenticationOutputReference | ChronicleFeedDetailsQualysVmSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsQualysVmSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsQualysVmSettingsAuthenticationOutputReference | ChronicleFeedDetailsQualysVmSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsQualysVmSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsQualysVmSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsQualysVmSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._user = value.user;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ChronicleFeedDetailsQualysVmSettings {
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsQualysVmSettingsAuthentication;
}

export function chronicleFeedDetailsQualysVmSettingsToTerraform(struct?: ChronicleFeedDetailsQualysVmSettingsOutputReference | ChronicleFeedDetailsQualysVmSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsQualysVmSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsQualysVmSettingsToHclTerraform(struct?: ChronicleFeedDetailsQualysVmSettingsOutputReference | ChronicleFeedDetailsQualysVmSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsQualysVmSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsQualysVmSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsQualysVmSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsQualysVmSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsQualysVmSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsQualysVmSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsQualysVmSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsRapid7InsightSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsRapid7InsightSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsRapid7InsightSettingsAuthenticationOutputReference | ChronicleFeedDetailsRapid7InsightSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsRapid7InsightSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsRapid7InsightSettingsAuthenticationOutputReference | ChronicleFeedDetailsRapid7InsightSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsRapid7InsightSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsRapid7InsightSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsRapid7InsightSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsRapid7InsightSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsRapid7InsightSettings {
  /**
  * Rapid7 API endpoint. Should be "vulnerabilities" or "assets".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#endpoint ChronicleFeed#endpoint}
  */
  readonly endpoint?: string;
  /**
  * API Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#hostname ChronicleFeed#hostname}
  */
  readonly hostname?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsRapid7InsightSettingsAuthentication;
}

export function chronicleFeedDetailsRapid7InsightSettingsToTerraform(struct?: ChronicleFeedDetailsRapid7InsightSettingsOutputReference | ChronicleFeedDetailsRapid7InsightSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    authentication: chronicleFeedDetailsRapid7InsightSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsRapid7InsightSettingsToHclTerraform(struct?: ChronicleFeedDetailsRapid7InsightSettingsOutputReference | ChronicleFeedDetailsRapid7InsightSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: chronicleFeedDetailsRapid7InsightSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsRapid7InsightSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsRapid7InsightSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsRapid7InsightSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsRapid7InsightSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._hostname = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._hostname = value.hostname;
      this._authentication.internalValue = value.authentication;
    }
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsRapid7InsightSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsRapid7InsightSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues {
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#key ChronicleFeed#key}
  */
  readonly key?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#value ChronicleFeed#value}
  */
  readonly value?: string;
}

export function chronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesToTerraform(struct?: ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesToHclTerraform(struct?: ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable): any {
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

export class ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesList extends cdktn.ComplexList {
  public internalValue? : ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesOutputReference {
    return new ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFeedDetailsRecordedFutureIocSettingsAuthentication {
  /**
  * header_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#header_key_values ChronicleFeed#header_key_values}
  */
  readonly headerKeyValues?: ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable;
}

export function chronicleFeedDetailsRecordedFutureIocSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationOutputReference | ChronicleFeedDetailsRecordedFutureIocSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_key_values: cdktn.listMapper(chronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesToTerraform, true)(struct!.headerKeyValues),
  }
}


export function chronicleFeedDetailsRecordedFutureIocSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationOutputReference | ChronicleFeedDetailsRecordedFutureIocSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_key_values: {
      value: cdktn.listMapperHcl(chronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesToHclTerraform, true)(struct!.headerKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsRecordedFutureIocSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKeyValues = this._headerKeyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsRecordedFutureIocSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerKeyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerKeyValues.internalValue = value.headerKeyValues;
    }
  }

  // header_key_values - computed: false, optional: true, required: false
  private _headerKeyValues = new ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValuesList(this, "header_key_values", false);
  public get headerKeyValues() {
    return this._headerKeyValues;
  }
  public putHeaderKeyValues(value: ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationHeaderKeyValues[] | cdktn.IResolvable) {
    this._headerKeyValues.internalValue = value;
  }
  public resetHeaderKeyValues() {
    this._headerKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyValuesInput() {
    return this._headerKeyValues.internalValue;
  }
}
export interface ChronicleFeedDetailsRecordedFutureIocSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsRecordedFutureIocSettingsAuthentication;
}

export function chronicleFeedDetailsRecordedFutureIocSettingsToTerraform(struct?: ChronicleFeedDetailsRecordedFutureIocSettingsOutputReference | ChronicleFeedDetailsRecordedFutureIocSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: chronicleFeedDetailsRecordedFutureIocSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsRecordedFutureIocSettingsToHclTerraform(struct?: ChronicleFeedDetailsRecordedFutureIocSettingsOutputReference | ChronicleFeedDetailsRecordedFutureIocSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: chronicleFeedDetailsRecordedFutureIocSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsRecordedFutureIocSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsRecordedFutureIocSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsRecordedFutureIocSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsRecordedFutureIocSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsRecordedFutureIocSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsRhIsacIocSettingsAuthentication {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function chronicleFeedDetailsRhIsacIocSettingsAuthenticationToTerraform(struct?: ChronicleFeedDetailsRhIsacIocSettingsAuthenticationOutputReference | ChronicleFeedDetailsRhIsacIocSettingsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function chronicleFeedDetailsRhIsacIocSettingsAuthenticationToHclTerraform(struct?: ChronicleFeedDetailsRhIsacIocSettingsAuthenticationOutputReference | ChronicleFeedDetailsRhIsacIocSettingsAuthentication): any {
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
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsRhIsacIocSettingsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsRhIsacIocSettingsAuthentication | undefined {
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
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsRhIsacIocSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
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

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface ChronicleFeedDetailsRhIsacIocSettings {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#authentication ChronicleFeed#authentication}
  */
  readonly authentication?: ChronicleFeedDetailsRhIsacIocSettingsAuthentication;
}

export function chronicleFeedDetailsRhIsacIocSettingsToTerraform(struct?: ChronicleFeedDetailsRhIsacIocSettingsOutputReference | ChronicleFeedDetailsRhIsacIocSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication: chronicleFeedDetailsRhIsacIocSettingsAuthenticationToTerraform(struct!.authentication),
  }
}


export function chronicleFeedDetailsRhIsacIocSettingsToHclTerraform(struct?: ChronicleFeedDetailsRhIsacIocSettingsOutputReference | ChronicleFeedDetailsRhIsacIocSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication: {
      value: chronicleFeedDetailsRhIsacIocSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsRhIsacIocSettingsAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsRhIsacIocSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsRhIsacIocSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsRhIsacIocSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ChronicleFeedDetailsRhIsacIocSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ChronicleFeedDetailsRhIsacIocSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims {
  /**
  * Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#audience ChronicleFeed#audience}
  */
  readonly audience?: string;
  /**
  * Issuer. Usually the client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#issuer ChronicleFeed#issuer}
  */
  readonly issuer?: string;
  /**
  * Subject. Usually the email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#subject ChronicleFeed#subject}
  */
  readonly subject?: string;
}

export function chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsToTerraform(struct?: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsOutputReference | ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsToHclTerraform(struct?: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsOutputReference | ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials {
  /**
  * Private key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#private_key ChronicleFeed#private_key}
  */
  readonly privateKey?: string;
}

export function chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsToTerraform(struct?: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsOutputReference | ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsToHclTerraform(struct?: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsOutputReference | ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials {
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#claims ChronicleFeed#claims}
  */
  readonly claims?: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims;
  /**
  * rs_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#rs_credentials ChronicleFeed#rs_credentials}
  */
  readonly rsCredentials?: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials;
}

export function chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToTerraform(struct?: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsOutputReference | ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    claims: chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsToTerraform(struct!.claims),
    rs_credentials: chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsToTerraform(struct!.rsCredentials),
  }
}


export function chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsToHclTerraform(struct?: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsOutputReference | ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsList",
    },
    rs_credentials: {
      value: chronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsToHclTerraform(struct!.rsCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._rsCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsCredentials = this._rsCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenEndpoint = undefined;
      this._claims.internalValue = undefined;
      this._rsCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenEndpoint = value.tokenEndpoint;
      this._claims.internalValue = value.claims;
      this._rsCredentials.internalValue = value.rsCredentials;
    }
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // rs_credentials - computed: false, optional: true, required: false
  private _rsCredentials = new ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentialsOutputReference(this, "rs_credentials");
  public get rsCredentials() {
    return this._rsCredentials;
  }
  public putRsCredentials(value: ChronicleFeedDetailsSalesforceSettingsOauthJwtCredentialsRsCredentials) {
    this._rsCredentials.internalValue = value;
  }
  public resetRsCredentials() {
    this._rsCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsCredentialsInput() {
    return this._rsCredentials.internalValue;
  }
}
export interface ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth {
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_id ChronicleFeed#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#client_secret ChronicleFeed#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#password ChronicleFeed#password}
  */
  readonly password?: string;
  /**
  * Token endpoint to get the OAuth token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#token_endpoint ChronicleFeed#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_feed#user ChronicleFeed#user}
  */
  readonly user?: string;
}

export function chronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToTerraform(struct?: ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthOutputReference | ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    password: cdktn.stringToTerraform(struct!.password),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function chronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthToHclTerraform(struct?: ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthOutputReference | ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth): any {
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
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth | undefined {
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
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFeedDetailsSalesforceSettingsOauthPasswordGrantAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._password = undefined;
      this._tokenEndpoint = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._password = value.password;
      this._tokenEndpoint = value.tokenEndpoint;
      this._user = value.user;
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

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
