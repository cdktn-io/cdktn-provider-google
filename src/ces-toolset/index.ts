/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CesToolsetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#app CesToolset#app}
  */
  readonly app: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#deletion_policy CesToolset#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#description CesToolset#description}
  */
  readonly description?: string;
  /**
  * The display name of the toolset. Must be unique within the same app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#display_name CesToolset#display_name}
  */
  readonly displayName?: string;
  /**
  * Possible values:
  * SYNCHRONOUS
  * ASYNCHRONOUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#execution_type CesToolset#execution_type}
  */
  readonly executionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#id CesToolset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#location CesToolset#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#project CesToolset#project}
  */
  readonly project?: string;
  /**
  * The ID to use for the toolset, which will become the final component of
  * the toolset's resource name. If not provided, a unique ID will be
  * automatically assigned for the toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#toolset_id CesToolset#toolset_id}
  */
  readonly toolsetId: string;
  /**
  * mcp_toolset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#mcp_toolset CesToolset#mcp_toolset}
  */
  readonly mcpToolset?: CesToolsetMcpToolset;
  /**
  * open_api_toolset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#open_api_toolset CesToolset#open_api_toolset}
  */
  readonly openApiToolset?: CesToolsetOpenApiToolset;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#timeouts CesToolset#timeouts}
  */
  readonly timeouts?: CesToolsetTimeouts;
  /**
  * tool_fake_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#tool_fake_config CesToolset#tool_fake_config}
  */
  readonly toolFakeConfig?: CesToolsetToolFakeConfig;
}
export interface CesToolsetMcpToolsetApiAuthenticationApiKeyConfig {
  /**
  * The name of the SecretManager secret version resource storing the API key.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  * Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
  * service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#api_key_secret_version CesToolset#api_key_secret_version}
  */
  readonly apiKeySecretVersion: string;
  /**
  * The parameter name or the header name of the API key.
  * E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#key_name CesToolset#key_name}
  */
  readonly keyName: string;
  /**
  * Key location in the request. For API key auth on MCP toolsets,
  * the API key can only be sent in the request header.
  * Possible values:
  * HEADER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#request_location CesToolset#request_location}
  */
  readonly requestLocation: string;
}

export function cesToolsetMcpToolsetApiAuthenticationApiKeyConfigToTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference | CesToolsetMcpToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_secret_version: cdktn.stringToTerraform(struct!.apiKeySecretVersion),
    key_name: cdktn.stringToTerraform(struct!.keyName),
    request_location: cdktn.stringToTerraform(struct!.requestLocation),
  }
}


export function cesToolsetMcpToolsetApiAuthenticationApiKeyConfigToHclTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference | CesToolsetMcpToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.apiKeySecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktn.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_location: {
      value: cdktn.stringToHclTerraform(struct!.requestLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetMcpToolsetApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecretVersion = this._apiKeySecretVersion;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._requestLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLocation = this._requestLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetMcpToolsetApiAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeySecretVersion = undefined;
      this._keyName = undefined;
      this._requestLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeySecretVersion = value.apiKeySecretVersion;
      this._keyName = value.keyName;
      this._requestLocation = value.requestLocation;
    }
  }

  // api_key_secret_version - computed: false, optional: false, required: true
  private _apiKeySecretVersion?: string; 
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }
  public set apiKeySecretVersion(value: string) {
    this._apiKeySecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretVersionInput() {
    return this._apiKeySecretVersion;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // request_location - computed: false, optional: false, required: true
  private _requestLocation?: string; 
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
  public set requestLocation(value: string) {
    this._requestLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLocationInput() {
    return this._requestLocation;
  }
}
export interface CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#token CesToolset#token}
  */
  readonly token?: string;
}

export function cesToolsetMcpToolsetApiAuthenticationBearerTokenConfigToTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference | CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token: cdktn.stringToTerraform(struct!.token),
  }
}


export function cesToolsetMcpToolsetApiAuthenticationBearerTokenConfigToHclTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference | CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token: {
      value: cdktn.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface CesToolsetMcpToolsetApiAuthenticationOauthConfig {
  /**
  * The client ID from the OAuth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#client_id CesToolset#client_id}
  */
  readonly clientId: string;
  /**
  * The name of the SecretManager secret version resource storing the
  * client secret.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  * 
  * Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
  * service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#client_secret_version CesToolset#client_secret_version}
  */
  readonly clientSecretVersion: string;
  /**
  * OAuth grant types.
  * Possible values:
  * CLIENT_CREDENTIAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#oauth_grant_type CesToolset#oauth_grant_type}
  */
  readonly oauthGrantType: string;
  /**
  * The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#scopes CesToolset#scopes}
  */
  readonly scopes?: string[];
  /**
  * The token endpoint in the OAuth provider to exchange for an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#token_endpoint CesToolset#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function cesToolsetMcpToolsetApiAuthenticationOauthConfigToTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference | CesToolsetMcpToolsetApiAuthenticationOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret_version: cdktn.stringToTerraform(struct!.clientSecretVersion),
    oauth_grant_type: cdktn.stringToTerraform(struct!.oauthGrantType),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function cesToolsetMcpToolsetApiAuthenticationOauthConfigToHclTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference | CesToolsetMcpToolsetApiAuthenticationOauthConfig): any {
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
    client_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_grant_type: {
      value: cdktn.stringToHclTerraform(struct!.oauthGrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetMcpToolsetApiAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretVersion = this._clientSecretVersion;
    }
    if (this._oauthGrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthGrantType = this._oauthGrantType;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetMcpToolsetApiAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretVersion = undefined;
      this._oauthGrantType = undefined;
      this._scopes = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretVersion = value.clientSecretVersion;
      this._oauthGrantType = value.oauthGrantType;
      this._scopes = value.scopes;
      this._tokenEndpoint = value.tokenEndpoint;
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

  // client_secret_version - computed: false, optional: false, required: true
  private _clientSecretVersion?: string; 
  public get clientSecretVersion() {
    return this.getStringAttribute('client_secret_version');
  }
  public set clientSecretVersion(value: string) {
    this._clientSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretVersionInput() {
    return this._clientSecretVersion;
  }

  // oauth_grant_type - computed: false, optional: false, required: true
  private _oauthGrantType?: string; 
  public get oauthGrantType() {
    return this.getStringAttribute('oauth_grant_type');
  }
  public set oauthGrantType(value: string) {
    this._oauthGrantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthGrantTypeInput() {
    return this._oauthGrantType;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig {
  /**
  * The OAuth scopes to grant. If not specified, the default scope
  * 'https://www.googleapis.com/auth/cloud-platform' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#scopes CesToolset#scopes}
  */
  readonly scopes?: string[];
  /**
  * The email address of the service account used for authenticatation. CES
  * uses this service account to exchange an access token and the access token
  * is then sent in the 'Authorization' header of the request.
  * 
  * The service account must have the
  * 'roles/iam.serviceAccountTokenCreator' role granted to the
  * CES service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#service_account CesToolset#service_account}
  */
  readonly serviceAccount: string;
}

export function cesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigToTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference | CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
  }
}


export function cesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference | CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scopes = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scopes = value.scopes;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig {
}

export function cesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference | CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function cesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference | CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CesToolsetMcpToolsetApiAuthentication {
  /**
  * api_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#api_key_config CesToolset#api_key_config}
  */
  readonly apiKeyConfig?: CesToolsetMcpToolsetApiAuthenticationApiKeyConfig;
  /**
  * bearer_token_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#bearer_token_config CesToolset#bearer_token_config}
  */
  readonly bearerTokenConfig?: CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#oauth_config CesToolset#oauth_config}
  */
  readonly oauthConfig?: CesToolsetMcpToolsetApiAuthenticationOauthConfig;
  /**
  * service_account_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#service_account_auth_config CesToolset#service_account_auth_config}
  */
  readonly serviceAccountAuthConfig?: CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig;
  /**
  * service_agent_id_token_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#service_agent_id_token_auth_config CesToolset#service_agent_id_token_auth_config}
  */
  readonly serviceAgentIdTokenAuthConfig?: CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;
}

export function cesToolsetMcpToolsetApiAuthenticationToTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationOutputReference | CesToolsetMcpToolsetApiAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_config: cesToolsetMcpToolsetApiAuthenticationApiKeyConfigToTerraform(struct!.apiKeyConfig),
    bearer_token_config: cesToolsetMcpToolsetApiAuthenticationBearerTokenConfigToTerraform(struct!.bearerTokenConfig),
    oauth_config: cesToolsetMcpToolsetApiAuthenticationOauthConfigToTerraform(struct!.oauthConfig),
    service_account_auth_config: cesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigToTerraform(struct!.serviceAccountAuthConfig),
    service_agent_id_token_auth_config: cesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct!.serviceAgentIdTokenAuthConfig),
  }
}


export function cesToolsetMcpToolsetApiAuthenticationToHclTerraform(struct?: CesToolsetMcpToolsetApiAuthenticationOutputReference | CesToolsetMcpToolsetApiAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_config: {
      value: cesToolsetMcpToolsetApiAuthenticationApiKeyConfigToHclTerraform(struct!.apiKeyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetMcpToolsetApiAuthenticationApiKeyConfigList",
    },
    bearer_token_config: {
      value: cesToolsetMcpToolsetApiAuthenticationBearerTokenConfigToHclTerraform(struct!.bearerTokenConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigList",
    },
    oauth_config: {
      value: cesToolsetMcpToolsetApiAuthenticationOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetMcpToolsetApiAuthenticationOauthConfigList",
    },
    service_account_auth_config: {
      value: cesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct!.serviceAccountAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigList",
    },
    service_agent_id_token_auth_config: {
      value: cesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct!.serviceAgentIdTokenAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetMcpToolsetApiAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetMcpToolsetApiAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyConfig = this._apiKeyConfig?.internalValue;
    }
    if (this._bearerTokenConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenConfig = this._bearerTokenConfig?.internalValue;
    }
    if (this._oauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfig = this._oauthConfig?.internalValue;
    }
    if (this._serviceAccountAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountAuthConfig = this._serviceAccountAuthConfig?.internalValue;
    }
    if (this._serviceAgentIdTokenAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentIdTokenAuthConfig = this._serviceAgentIdTokenAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetMcpToolsetApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyConfig.internalValue = undefined;
      this._bearerTokenConfig.internalValue = undefined;
      this._oauthConfig.internalValue = undefined;
      this._serviceAccountAuthConfig.internalValue = undefined;
      this._serviceAgentIdTokenAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyConfig.internalValue = value.apiKeyConfig;
      this._bearerTokenConfig.internalValue = value.bearerTokenConfig;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._serviceAccountAuthConfig.internalValue = value.serviceAccountAuthConfig;
      this._serviceAgentIdTokenAuthConfig.internalValue = value.serviceAgentIdTokenAuthConfig;
    }
  }

  // api_key_config - computed: false, optional: true, required: false
  private _apiKeyConfig = new CesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference(this, "api_key_config");
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }
  public putApiKeyConfig(value: CesToolsetMcpToolsetApiAuthenticationApiKeyConfig) {
    this._apiKeyConfig.internalValue = value;
  }
  public resetApiKeyConfig() {
    this._apiKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyConfigInput() {
    return this._apiKeyConfig.internalValue;
  }

  // bearer_token_config - computed: false, optional: true, required: false
  private _bearerTokenConfig = new CesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference(this, "bearer_token_config");
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }
  public putBearerTokenConfig(value: CesToolsetMcpToolsetApiAuthenticationBearerTokenConfig) {
    this._bearerTokenConfig.internalValue = value;
  }
  public resetBearerTokenConfig() {
    this._bearerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenConfigInput() {
    return this._bearerTokenConfig.internalValue;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new CesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: CesToolsetMcpToolsetApiAuthenticationOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // service_account_auth_config - computed: false, optional: true, required: false
  private _serviceAccountAuthConfig = new CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(this, "service_account_auth_config");
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }
  public putServiceAccountAuthConfig(value: CesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig) {
    this._serviceAccountAuthConfig.internalValue = value;
  }
  public resetServiceAccountAuthConfig() {
    this._serviceAccountAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountAuthConfigInput() {
    return this._serviceAccountAuthConfig.internalValue;
  }

  // service_agent_id_token_auth_config - computed: false, optional: true, required: false
  private _serviceAgentIdTokenAuthConfig = new CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(this, "service_agent_id_token_auth_config");
  public get serviceAgentIdTokenAuthConfig() {
    return this._serviceAgentIdTokenAuthConfig;
  }
  public putServiceAgentIdTokenAuthConfig(value: CesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig) {
    this._serviceAgentIdTokenAuthConfig.internalValue = value;
  }
  public resetServiceAgentIdTokenAuthConfig() {
    this._serviceAgentIdTokenAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentIdTokenAuthConfigInput() {
    return this._serviceAgentIdTokenAuthConfig.internalValue;
  }
}
export interface CesToolsetMcpToolsetServiceDirectoryConfig {
  /**
  * The name of [Service
  * Directory](https://cloud.google.com/service-directory) service.
  * Format:
  * 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'.
  * Location of the service directory must be the same as the location of the
  * app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#service CesToolset#service}
  */
  readonly service: string;
}

export function cesToolsetMcpToolsetServiceDirectoryConfigToTerraform(struct?: CesToolsetMcpToolsetServiceDirectoryConfigOutputReference | CesToolsetMcpToolsetServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function cesToolsetMcpToolsetServiceDirectoryConfigToHclTerraform(struct?: CesToolsetMcpToolsetServiceDirectoryConfigOutputReference | CesToolsetMcpToolsetServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetMcpToolsetServiceDirectoryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetMcpToolsetServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetMcpToolsetServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface CesToolsetMcpToolsetTlsConfigCaCerts {
  /**
  * The allowed custom CA certificates (in DER format) for
  * HTTPS verification. This overrides the default SSL trust store. If this
  * is empty or unspecified, CES will use Google's default trust
  * store to verify certificates. N.B. Make sure the HTTPS server
  * certificates are signed with "subject alt name". For instance a
  * certificate can be self-signed using the following command,
  * openssl x509 -req -days 200 -in example.com.csr \
  * -signkey example.com.key \
  * -out example.com.crt \
  * -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#cert CesToolset#cert}
  */
  readonly cert: string;
  /**
  * The name of the allowed custom CA certificates. This
  * can be used to disambiguate the custom CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#display_name CesToolset#display_name}
  */
  readonly displayName: string;
}

export function cesToolsetMcpToolsetTlsConfigCaCertsToTerraform(struct?: CesToolsetMcpToolsetTlsConfigCaCerts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cert: cdktn.stringToTerraform(struct!.cert),
    display_name: cdktn.stringToTerraform(struct!.displayName),
  }
}


export function cesToolsetMcpToolsetTlsConfigCaCertsToHclTerraform(struct?: CesToolsetMcpToolsetTlsConfigCaCerts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cert: {
      value: cdktn.stringToHclTerraform(struct!.cert),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetMcpToolsetTlsConfigCaCertsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolsetMcpToolsetTlsConfigCaCerts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetMcpToolsetTlsConfigCaCerts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._displayName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._displayName = value.displayName;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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
}

export class CesToolsetMcpToolsetTlsConfigCaCertsList extends cdktn.ComplexList {
  public internalValue? : CesToolsetMcpToolsetTlsConfigCaCerts[] | cdktn.IResolvable

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
  public get(index: number): CesToolsetMcpToolsetTlsConfigCaCertsOutputReference {
    return new CesToolsetMcpToolsetTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolsetMcpToolsetTlsConfig {
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#ca_certs CesToolset#ca_certs}
  */
  readonly caCerts: CesToolsetMcpToolsetTlsConfigCaCerts[] | cdktn.IResolvable;
}

export function cesToolsetMcpToolsetTlsConfigToTerraform(struct?: CesToolsetMcpToolsetTlsConfigOutputReference | CesToolsetMcpToolsetTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_certs: cdktn.listMapper(cesToolsetMcpToolsetTlsConfigCaCertsToTerraform, true)(struct!.caCerts),
  }
}


export function cesToolsetMcpToolsetTlsConfigToHclTerraform(struct?: CesToolsetMcpToolsetTlsConfigOutputReference | CesToolsetMcpToolsetTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_certs: {
      value: cdktn.listMapperHcl(cesToolsetMcpToolsetTlsConfigCaCertsToHclTerraform, true)(struct!.caCerts),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetMcpToolsetTlsConfigCaCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetMcpToolsetTlsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetMcpToolsetTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetMcpToolsetTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCerts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCerts.internalValue = value.caCerts;
    }
  }

  // ca_certs - computed: false, optional: false, required: true
  private _caCerts = new CesToolsetMcpToolsetTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: CesToolsetMcpToolsetTlsConfigCaCerts[] | cdktn.IResolvable) {
    this._caCerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }
}
export interface CesToolsetMcpToolset {
  /**
  * The custom headers to send in the request to the MCP server. The values
  * must be in the format '$context.variables.<name_of_variable>' and can be
  * set in the session variables. See
  * https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection
  * for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#custom_headers CesToolset#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * The address of the MCP server, for example, "https://example.com/mcp/". If
  * the server is built with the MCP SDK, the url should be suffixed with
  * "/mcp/". Only Streamable HTTP transport based servers are supported. See
  * https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http
  * for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#server_address CesToolset#server_address}
  */
  readonly serverAddress: string;
  /**
  * api_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#api_authentication CesToolset#api_authentication}
  */
  readonly apiAuthentication?: CesToolsetMcpToolsetApiAuthentication;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#service_directory_config CesToolset#service_directory_config}
  */
  readonly serviceDirectoryConfig?: CesToolsetMcpToolsetServiceDirectoryConfig;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#tls_config CesToolset#tls_config}
  */
  readonly tlsConfig?: CesToolsetMcpToolsetTlsConfig;
}

export function cesToolsetMcpToolsetToTerraform(struct?: CesToolsetMcpToolsetOutputReference | CesToolsetMcpToolset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customHeaders),
    server_address: cdktn.stringToTerraform(struct!.serverAddress),
    api_authentication: cesToolsetMcpToolsetApiAuthenticationToTerraform(struct!.apiAuthentication),
    service_directory_config: cesToolsetMcpToolsetServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
    tls_config: cesToolsetMcpToolsetTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function cesToolsetMcpToolsetToHclTerraform(struct?: CesToolsetMcpToolsetOutputReference | CesToolsetMcpToolset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server_address: {
      value: cdktn.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_authentication: {
      value: cesToolsetMcpToolsetApiAuthenticationToHclTerraform(struct!.apiAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetMcpToolsetApiAuthenticationList",
    },
    service_directory_config: {
      value: cesToolsetMcpToolsetServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetMcpToolsetServiceDirectoryConfigList",
    },
    tls_config: {
      value: cesToolsetMcpToolsetTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetMcpToolsetTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetMcpToolsetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetMcpToolset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaders = this._customHeaders;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._apiAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiAuthentication = this._apiAuthentication?.internalValue;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetMcpToolset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customHeaders = undefined;
      this._serverAddress = undefined;
      this._apiAuthentication.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customHeaders = value.customHeaders;
      this._serverAddress = value.serverAddress;
      this._apiAuthentication.internalValue = value.apiAuthentication;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string }; 
  public get customHeaders() {
    return this.getStringMapAttribute('custom_headers');
  }
  public set customHeaders(value: { [key: string]: string }) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // api_authentication - computed: false, optional: true, required: false
  private _apiAuthentication = new CesToolsetMcpToolsetApiAuthenticationOutputReference(this, "api_authentication");
  public get apiAuthentication() {
    return this._apiAuthentication;
  }
  public putApiAuthentication(value: CesToolsetMcpToolsetApiAuthentication) {
    this._apiAuthentication.internalValue = value;
  }
  public resetApiAuthentication() {
    this._apiAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAuthenticationInput() {
    return this._apiAuthentication.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new CesToolsetMcpToolsetServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: CesToolsetMcpToolsetServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new CesToolsetMcpToolsetTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: CesToolsetMcpToolsetTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig {
  /**
  * The name of the SecretManager secret version resource storing the API key.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  * Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
  * service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#api_key_secret_version CesToolset#api_key_secret_version}
  */
  readonly apiKeySecretVersion: string;
  /**
  * The parameter name or the header name of the API key.
  * E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#key_name CesToolset#key_name}
  */
  readonly keyName: string;
  /**
  * Key location in the request.
  * Possible values:
  * HEADER
  * QUERY_STRING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#request_location CesToolset#request_location}
  */
  readonly requestLocation: string;
}

export function cesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigToTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference | CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_secret_version: cdktn.stringToTerraform(struct!.apiKeySecretVersion),
    key_name: cdktn.stringToTerraform(struct!.keyName),
    request_location: cdktn.stringToTerraform(struct!.requestLocation),
  }
}


export function cesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigToHclTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference | CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.apiKeySecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktn.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_location: {
      value: cdktn.stringToHclTerraform(struct!.requestLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecretVersion = this._apiKeySecretVersion;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._requestLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLocation = this._requestLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeySecretVersion = undefined;
      this._keyName = undefined;
      this._requestLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeySecretVersion = value.apiKeySecretVersion;
      this._keyName = value.keyName;
      this._requestLocation = value.requestLocation;
    }
  }

  // api_key_secret_version - computed: false, optional: false, required: true
  private _apiKeySecretVersion?: string; 
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }
  public set apiKeySecretVersion(value: string) {
    this._apiKeySecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretVersionInput() {
    return this._apiKeySecretVersion;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // request_location - computed: false, optional: false, required: true
  private _requestLocation?: string; 
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
  public set requestLocation(value: string) {
    this._requestLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLocationInput() {
    return this._requestLocation;
  }
}
export interface CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#token CesToolset#token}
  */
  readonly token?: string;
}

export function cesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigToTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference | CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token: cdktn.stringToTerraform(struct!.token),
  }
}


export function cesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigToHclTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference | CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token: {
      value: cdktn.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface CesToolsetOpenApiToolsetApiAuthenticationOauthConfig {
  /**
  * The client ID from the OAuth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#client_id CesToolset#client_id}
  */
  readonly clientId: string;
  /**
  * The name of the SecretManager secret version resource storing the
  * client secret.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  * 
  * Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
  * service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#client_secret_version CesToolset#client_secret_version}
  */
  readonly clientSecretVersion: string;
  /**
  * OAuth grant types.
  * Possible values:
  * CLIENT_CREDENTIAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#oauth_grant_type CesToolset#oauth_grant_type}
  */
  readonly oauthGrantType: string;
  /**
  * The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#scopes CesToolset#scopes}
  */
  readonly scopes?: string[];
  /**
  * The token endpoint in the OAuth provider to exchange for an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#token_endpoint CesToolset#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function cesToolsetOpenApiToolsetApiAuthenticationOauthConfigToTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference | CesToolsetOpenApiToolsetApiAuthenticationOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret_version: cdktn.stringToTerraform(struct!.clientSecretVersion),
    oauth_grant_type: cdktn.stringToTerraform(struct!.oauthGrantType),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function cesToolsetOpenApiToolsetApiAuthenticationOauthConfigToHclTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference | CesToolsetOpenApiToolsetApiAuthenticationOauthConfig): any {
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
    client_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_grant_type: {
      value: cdktn.stringToHclTerraform(struct!.oauthGrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetOpenApiToolsetApiAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretVersion = this._clientSecretVersion;
    }
    if (this._oauthGrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthGrantType = this._oauthGrantType;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetOpenApiToolsetApiAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretVersion = undefined;
      this._oauthGrantType = undefined;
      this._scopes = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretVersion = value.clientSecretVersion;
      this._oauthGrantType = value.oauthGrantType;
      this._scopes = value.scopes;
      this._tokenEndpoint = value.tokenEndpoint;
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

  // client_secret_version - computed: false, optional: false, required: true
  private _clientSecretVersion?: string; 
  public get clientSecretVersion() {
    return this.getStringAttribute('client_secret_version');
  }
  public set clientSecretVersion(value: string) {
    this._clientSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretVersionInput() {
    return this._clientSecretVersion;
  }

  // oauth_grant_type - computed: false, optional: false, required: true
  private _oauthGrantType?: string; 
  public get oauthGrantType() {
    return this.getStringAttribute('oauth_grant_type');
  }
  public set oauthGrantType(value: string) {
    this._oauthGrantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthGrantTypeInput() {
    return this._oauthGrantType;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig {
  /**
  * The OAuth scopes to grant. If not specified, the default scope
  * 'https://www.googleapis.com/auth/cloud-platform' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#scopes CesToolset#scopes}
  */
  readonly scopes?: string[];
  /**
  * The email address of the service account used for authenticatation. CES
  * uses this service account to exchange an access token and the access token
  * is then sent in the 'Authorization' header of the request.
  * 
  * The service account must have the
  * 'roles/iam.serviceAccountTokenCreator' role granted to the
  * CES service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#service_account CesToolset#service_account}
  */
  readonly serviceAccount: string;
}

export function cesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigToTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference | CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
  }
}


export function cesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference | CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scopes = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scopes = value.scopes;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig {
}

export function cesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference | CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function cesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference | CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CesToolsetOpenApiToolsetApiAuthentication {
  /**
  * api_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#api_key_config CesToolset#api_key_config}
  */
  readonly apiKeyConfig?: CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig;
  /**
  * bearer_token_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#bearer_token_config CesToolset#bearer_token_config}
  */
  readonly bearerTokenConfig?: CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#oauth_config CesToolset#oauth_config}
  */
  readonly oauthConfig?: CesToolsetOpenApiToolsetApiAuthenticationOauthConfig;
  /**
  * service_account_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#service_account_auth_config CesToolset#service_account_auth_config}
  */
  readonly serviceAccountAuthConfig?: CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig;
  /**
  * service_agent_id_token_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#service_agent_id_token_auth_config CesToolset#service_agent_id_token_auth_config}
  */
  readonly serviceAgentIdTokenAuthConfig?: CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;
}

export function cesToolsetOpenApiToolsetApiAuthenticationToTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationOutputReference | CesToolsetOpenApiToolsetApiAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_config: cesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigToTerraform(struct!.apiKeyConfig),
    bearer_token_config: cesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigToTerraform(struct!.bearerTokenConfig),
    oauth_config: cesToolsetOpenApiToolsetApiAuthenticationOauthConfigToTerraform(struct!.oauthConfig),
    service_account_auth_config: cesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigToTerraform(struct!.serviceAccountAuthConfig),
    service_agent_id_token_auth_config: cesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct!.serviceAgentIdTokenAuthConfig),
  }
}


export function cesToolsetOpenApiToolsetApiAuthenticationToHclTerraform(struct?: CesToolsetOpenApiToolsetApiAuthenticationOutputReference | CesToolsetOpenApiToolsetApiAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_config: {
      value: cesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigToHclTerraform(struct!.apiKeyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigList",
    },
    bearer_token_config: {
      value: cesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigToHclTerraform(struct!.bearerTokenConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigList",
    },
    oauth_config: {
      value: cesToolsetOpenApiToolsetApiAuthenticationOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetOpenApiToolsetApiAuthenticationOauthConfigList",
    },
    service_account_auth_config: {
      value: cesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct!.serviceAccountAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigList",
    },
    service_agent_id_token_auth_config: {
      value: cesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct!.serviceAgentIdTokenAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetOpenApiToolsetApiAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetOpenApiToolsetApiAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyConfig = this._apiKeyConfig?.internalValue;
    }
    if (this._bearerTokenConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenConfig = this._bearerTokenConfig?.internalValue;
    }
    if (this._oauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfig = this._oauthConfig?.internalValue;
    }
    if (this._serviceAccountAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountAuthConfig = this._serviceAccountAuthConfig?.internalValue;
    }
    if (this._serviceAgentIdTokenAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentIdTokenAuthConfig = this._serviceAgentIdTokenAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetOpenApiToolsetApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyConfig.internalValue = undefined;
      this._bearerTokenConfig.internalValue = undefined;
      this._oauthConfig.internalValue = undefined;
      this._serviceAccountAuthConfig.internalValue = undefined;
      this._serviceAgentIdTokenAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyConfig.internalValue = value.apiKeyConfig;
      this._bearerTokenConfig.internalValue = value.bearerTokenConfig;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._serviceAccountAuthConfig.internalValue = value.serviceAccountAuthConfig;
      this._serviceAgentIdTokenAuthConfig.internalValue = value.serviceAgentIdTokenAuthConfig;
    }
  }

  // api_key_config - computed: false, optional: true, required: false
  private _apiKeyConfig = new CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference(this, "api_key_config");
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }
  public putApiKeyConfig(value: CesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig) {
    this._apiKeyConfig.internalValue = value;
  }
  public resetApiKeyConfig() {
    this._apiKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyConfigInput() {
    return this._apiKeyConfig.internalValue;
  }

  // bearer_token_config - computed: false, optional: true, required: false
  private _bearerTokenConfig = new CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference(this, "bearer_token_config");
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }
  public putBearerTokenConfig(value: CesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig) {
    this._bearerTokenConfig.internalValue = value;
  }
  public resetBearerTokenConfig() {
    this._bearerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenConfigInput() {
    return this._bearerTokenConfig.internalValue;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new CesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: CesToolsetOpenApiToolsetApiAuthenticationOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // service_account_auth_config - computed: false, optional: true, required: false
  private _serviceAccountAuthConfig = new CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(this, "service_account_auth_config");
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }
  public putServiceAccountAuthConfig(value: CesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig) {
    this._serviceAccountAuthConfig.internalValue = value;
  }
  public resetServiceAccountAuthConfig() {
    this._serviceAccountAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountAuthConfigInput() {
    return this._serviceAccountAuthConfig.internalValue;
  }

  // service_agent_id_token_auth_config - computed: false, optional: true, required: false
  private _serviceAgentIdTokenAuthConfig = new CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(this, "service_agent_id_token_auth_config");
  public get serviceAgentIdTokenAuthConfig() {
    return this._serviceAgentIdTokenAuthConfig;
  }
  public putServiceAgentIdTokenAuthConfig(value: CesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig) {
    this._serviceAgentIdTokenAuthConfig.internalValue = value;
  }
  public resetServiceAgentIdTokenAuthConfig() {
    this._serviceAgentIdTokenAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentIdTokenAuthConfigInput() {
    return this._serviceAgentIdTokenAuthConfig.internalValue;
  }
}
export interface CesToolsetOpenApiToolsetServiceDirectoryConfig {
  /**
  * The name of [Service
  * Directory](https://cloud.google.com/service-directory) service.
  * Format:
  * 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'.
  * Location of the service directory must be the same as the location of the
  * app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#service CesToolset#service}
  */
  readonly service: string;
}

export function cesToolsetOpenApiToolsetServiceDirectoryConfigToTerraform(struct?: CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference | CesToolsetOpenApiToolsetServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function cesToolsetOpenApiToolsetServiceDirectoryConfigToHclTerraform(struct?: CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference | CesToolsetOpenApiToolsetServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetOpenApiToolsetServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetOpenApiToolsetServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface CesToolsetOpenApiToolsetTlsConfigCaCerts {
  /**
  * The allowed custom CA certificates (in DER format) for
  * HTTPS verification. This overrides the default SSL trust store. If this
  * is empty or unspecified, CES will use Google's default trust
  * store to verify certificates. N.B. Make sure the HTTPS server
  * certificates are signed with "subject alt name". For instance a
  * certificate can be self-signed using the following command,
  * openssl x509 -req -days 200 -in example.com.csr \
  * -signkey example.com.key \
  * -out example.com.crt \
  * -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#cert CesToolset#cert}
  */
  readonly cert: string;
  /**
  * The name of the allowed custom CA certificates. This
  * can be used to disambiguate the custom CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#display_name CesToolset#display_name}
  */
  readonly displayName: string;
}

export function cesToolsetOpenApiToolsetTlsConfigCaCertsToTerraform(struct?: CesToolsetOpenApiToolsetTlsConfigCaCerts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cert: cdktn.stringToTerraform(struct!.cert),
    display_name: cdktn.stringToTerraform(struct!.displayName),
  }
}


export function cesToolsetOpenApiToolsetTlsConfigCaCertsToHclTerraform(struct?: CesToolsetOpenApiToolsetTlsConfigCaCerts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cert: {
      value: cdktn.stringToHclTerraform(struct!.cert),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolsetOpenApiToolsetTlsConfigCaCerts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetOpenApiToolsetTlsConfigCaCerts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._displayName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._displayName = value.displayName;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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
}

export class CesToolsetOpenApiToolsetTlsConfigCaCertsList extends cdktn.ComplexList {
  public internalValue? : CesToolsetOpenApiToolsetTlsConfigCaCerts[] | cdktn.IResolvable

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
  public get(index: number): CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference {
    return new CesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolsetOpenApiToolsetTlsConfig {
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#ca_certs CesToolset#ca_certs}
  */
  readonly caCerts: CesToolsetOpenApiToolsetTlsConfigCaCerts[] | cdktn.IResolvable;
}

export function cesToolsetOpenApiToolsetTlsConfigToTerraform(struct?: CesToolsetOpenApiToolsetTlsConfigOutputReference | CesToolsetOpenApiToolsetTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_certs: cdktn.listMapper(cesToolsetOpenApiToolsetTlsConfigCaCertsToTerraform, true)(struct!.caCerts),
  }
}


export function cesToolsetOpenApiToolsetTlsConfigToHclTerraform(struct?: CesToolsetOpenApiToolsetTlsConfigOutputReference | CesToolsetOpenApiToolsetTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_certs: {
      value: cdktn.listMapperHcl(cesToolsetOpenApiToolsetTlsConfigCaCertsToHclTerraform, true)(struct!.caCerts),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetOpenApiToolsetTlsConfigCaCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetOpenApiToolsetTlsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetOpenApiToolsetTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetOpenApiToolsetTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCerts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCerts.internalValue = value.caCerts;
    }
  }

  // ca_certs - computed: false, optional: false, required: true
  private _caCerts = new CesToolsetOpenApiToolsetTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: CesToolsetOpenApiToolsetTlsConfigCaCerts[] | cdktn.IResolvable) {
    this._caCerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }
}
export interface CesToolsetOpenApiToolset {
  /**
  * If true, the agent will ignore unknown fields in the API response for all
  * operations defined in the OpenAPI schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#ignore_unknown_fields CesToolset#ignore_unknown_fields}
  */
  readonly ignoreUnknownFields?: boolean | cdktn.IResolvable;
  /**
  * The OpenAPI schema of the toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#open_api_schema CesToolset#open_api_schema}
  */
  readonly openApiSchema: string;
  /**
  * api_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#api_authentication CesToolset#api_authentication}
  */
  readonly apiAuthentication?: CesToolsetOpenApiToolsetApiAuthentication;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#service_directory_config CesToolset#service_directory_config}
  */
  readonly serviceDirectoryConfig?: CesToolsetOpenApiToolsetServiceDirectoryConfig;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#tls_config CesToolset#tls_config}
  */
  readonly tlsConfig?: CesToolsetOpenApiToolsetTlsConfig;
}

export function cesToolsetOpenApiToolsetToTerraform(struct?: CesToolsetOpenApiToolsetOutputReference | CesToolsetOpenApiToolset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ignore_unknown_fields: cdktn.booleanToTerraform(struct!.ignoreUnknownFields),
    open_api_schema: cdktn.stringToTerraform(struct!.openApiSchema),
    api_authentication: cesToolsetOpenApiToolsetApiAuthenticationToTerraform(struct!.apiAuthentication),
    service_directory_config: cesToolsetOpenApiToolsetServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
    tls_config: cesToolsetOpenApiToolsetTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function cesToolsetOpenApiToolsetToHclTerraform(struct?: CesToolsetOpenApiToolsetOutputReference | CesToolsetOpenApiToolset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ignore_unknown_fields: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreUnknownFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_api_schema: {
      value: cdktn.stringToHclTerraform(struct!.openApiSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_authentication: {
      value: cesToolsetOpenApiToolsetApiAuthenticationToHclTerraform(struct!.apiAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetOpenApiToolsetApiAuthenticationList",
    },
    service_directory_config: {
      value: cesToolsetOpenApiToolsetServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetOpenApiToolsetServiceDirectoryConfigList",
    },
    tls_config: {
      value: cesToolsetOpenApiToolsetTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetOpenApiToolsetTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetOpenApiToolsetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetOpenApiToolset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreUnknownFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnknownFields = this._ignoreUnknownFields;
    }
    if (this._openApiSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiSchema = this._openApiSchema;
    }
    if (this._apiAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiAuthentication = this._apiAuthentication?.internalValue;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetOpenApiToolset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreUnknownFields = undefined;
      this._openApiSchema = undefined;
      this._apiAuthentication.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreUnknownFields = value.ignoreUnknownFields;
      this._openApiSchema = value.openApiSchema;
      this._apiAuthentication.internalValue = value.apiAuthentication;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // ignore_unknown_fields - computed: false, optional: true, required: false
  private _ignoreUnknownFields?: boolean | cdktn.IResolvable; 
  public get ignoreUnknownFields() {
    return this.getBooleanAttribute('ignore_unknown_fields');
  }
  public set ignoreUnknownFields(value: boolean | cdktn.IResolvable) {
    this._ignoreUnknownFields = value;
  }
  public resetIgnoreUnknownFields() {
    this._ignoreUnknownFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnknownFieldsInput() {
    return this._ignoreUnknownFields;
  }

  // open_api_schema - computed: false, optional: false, required: true
  private _openApiSchema?: string; 
  public get openApiSchema() {
    return this.getStringAttribute('open_api_schema');
  }
  public set openApiSchema(value: string) {
    this._openApiSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiSchemaInput() {
    return this._openApiSchema;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // api_authentication - computed: false, optional: true, required: false
  private _apiAuthentication = new CesToolsetOpenApiToolsetApiAuthenticationOutputReference(this, "api_authentication");
  public get apiAuthentication() {
    return this._apiAuthentication;
  }
  public putApiAuthentication(value: CesToolsetOpenApiToolsetApiAuthentication) {
    this._apiAuthentication.internalValue = value;
  }
  public resetApiAuthentication() {
    this._apiAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAuthenticationInput() {
    return this._apiAuthentication.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new CesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: CesToolsetOpenApiToolsetServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new CesToolsetOpenApiToolsetTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: CesToolsetOpenApiToolsetTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface CesToolsetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#create CesToolset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#delete CesToolset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#update CesToolset#update}
  */
  readonly update?: string;
}

export function cesToolsetTimeoutsToTerraform(struct?: CesToolsetTimeouts | cdktn.IResolvable): any {
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


export function cesToolsetTimeoutsToHclTerraform(struct?: CesToolsetTimeouts | cdktn.IResolvable): any {
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

export class CesToolsetTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CesToolsetTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CesToolsetTimeouts | cdktn.IResolvable | undefined) {
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
export interface CesToolsetToolFakeConfigCodeBlock {
  /**
  * Python code which will be invoked in tool fake mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#python_code CesToolset#python_code}
  */
  readonly pythonCode: string;
}

export function cesToolsetToolFakeConfigCodeBlockToTerraform(struct?: CesToolsetToolFakeConfigCodeBlockOutputReference | CesToolsetToolFakeConfigCodeBlock): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    python_code: cdktn.stringToTerraform(struct!.pythonCode),
  }
}


export function cesToolsetToolFakeConfigCodeBlockToHclTerraform(struct?: CesToolsetToolFakeConfigCodeBlockOutputReference | CesToolsetToolFakeConfigCodeBlock): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    python_code: {
      value: cdktn.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetToolFakeConfigCodeBlockOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetToolFakeConfigCodeBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetToolFakeConfigCodeBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pythonCode = value.pythonCode;
    }
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}
export interface CesToolsetToolFakeConfig {
  /**
  * Whether the tool is using fake mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#enable_fake_mode CesToolset#enable_fake_mode}
  */
  readonly enableFakeMode?: boolean | cdktn.IResolvable;
  /**
  * code_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#code_block CesToolset#code_block}
  */
  readonly codeBlock?: CesToolsetToolFakeConfigCodeBlock;
}

export function cesToolsetToolFakeConfigToTerraform(struct?: CesToolsetToolFakeConfigOutputReference | CesToolsetToolFakeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_fake_mode: cdktn.booleanToTerraform(struct!.enableFakeMode),
    code_block: cesToolsetToolFakeConfigCodeBlockToTerraform(struct!.codeBlock),
  }
}


export function cesToolsetToolFakeConfigToHclTerraform(struct?: CesToolsetToolFakeConfigOutputReference | CesToolsetToolFakeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_fake_mode: {
      value: cdktn.booleanToHclTerraform(struct!.enableFakeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_block: {
      value: cesToolsetToolFakeConfigCodeBlockToHclTerraform(struct!.codeBlock),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolsetToolFakeConfigCodeBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolsetToolFakeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolsetToolFakeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableFakeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFakeMode = this._enableFakeMode;
    }
    if (this._codeBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBlock = this._codeBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolsetToolFakeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableFakeMode = undefined;
      this._codeBlock.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableFakeMode = value.enableFakeMode;
      this._codeBlock.internalValue = value.codeBlock;
    }
  }

  // enable_fake_mode - computed: false, optional: true, required: false
  private _enableFakeMode?: boolean | cdktn.IResolvable; 
  public get enableFakeMode() {
    return this.getBooleanAttribute('enable_fake_mode');
  }
  public set enableFakeMode(value: boolean | cdktn.IResolvable) {
    this._enableFakeMode = value;
  }
  public resetEnableFakeMode() {
    this._enableFakeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFakeModeInput() {
    return this._enableFakeMode;
  }

  // code_block - computed: false, optional: true, required: false
  private _codeBlock = new CesToolsetToolFakeConfigCodeBlockOutputReference(this, "code_block");
  public get codeBlock() {
    return this._codeBlock;
  }
  public putCodeBlock(value: CesToolsetToolFakeConfigCodeBlock) {
    this._codeBlock.internalValue = value;
  }
  public resetCodeBlock() {
    this._codeBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBlockInput() {
    return this._codeBlock.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset google_ces_toolset}
*/
export class CesToolset extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_toolset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CesToolset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CesToolset to import
  * @param importFromId The id of the existing CesToolset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CesToolset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_toolset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_toolset google_ces_toolset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CesToolsetConfig
  */
  public constructor(scope: Construct, id: string, config: CesToolsetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_toolset',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.42.0',
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
    this._app = config.app;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._executionType = config.executionType;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._toolsetId = config.toolsetId;
    this._mcpToolset.internalValue = config.mcpToolset;
    this._openApiToolset.internalValue = config.openApiToolset;
    this._timeouts.internalValue = config.timeouts;
    this._toolFakeConfig.internalValue = config.toolFakeConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // execution_type - computed: false, optional: true, required: false
  private _executionType?: string; 
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }
  public set executionType(value: string) {
    this._executionType = value;
  }
  public resetExecutionType() {
    this._executionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTypeInput() {
    return this._executionType;
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

  // toolset_id - computed: false, optional: false, required: true
  private _toolsetId?: string; 
  public get toolsetId() {
    return this.getStringAttribute('toolset_id');
  }
  public set toolsetId(value: string) {
    this._toolsetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetIdInput() {
    return this._toolsetId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // mcp_toolset - computed: false, optional: true, required: false
  private _mcpToolset = new CesToolsetMcpToolsetOutputReference(this, "mcp_toolset");
  public get mcpToolset() {
    return this._mcpToolset;
  }
  public putMcpToolset(value: CesToolsetMcpToolset) {
    this._mcpToolset.internalValue = value;
  }
  public resetMcpToolset() {
    this._mcpToolset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpToolsetInput() {
    return this._mcpToolset.internalValue;
  }

  // open_api_toolset - computed: false, optional: true, required: false
  private _openApiToolset = new CesToolsetOpenApiToolsetOutputReference(this, "open_api_toolset");
  public get openApiToolset() {
    return this._openApiToolset;
  }
  public putOpenApiToolset(value: CesToolsetOpenApiToolset) {
    this._openApiToolset.internalValue = value;
  }
  public resetOpenApiToolset() {
    this._openApiToolset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiToolsetInput() {
    return this._openApiToolset.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CesToolsetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CesToolsetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tool_fake_config - computed: false, optional: true, required: false
  private _toolFakeConfig = new CesToolsetToolFakeConfigOutputReference(this, "tool_fake_config");
  public get toolFakeConfig() {
    return this._toolFakeConfig;
  }
  public putToolFakeConfig(value: CesToolsetToolFakeConfig) {
    this._toolFakeConfig.internalValue = value;
  }
  public resetToolFakeConfig() {
    this._toolFakeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolFakeConfigInput() {
    return this._toolFakeConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: cdktn.stringToTerraform(this._app),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      execution_type: cdktn.stringToTerraform(this._executionType),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      toolset_id: cdktn.stringToTerraform(this._toolsetId),
      mcp_toolset: cesToolsetMcpToolsetToTerraform(this._mcpToolset.internalValue),
      open_api_toolset: cesToolsetOpenApiToolsetToTerraform(this._openApiToolset.internalValue),
      timeouts: cesToolsetTimeoutsToTerraform(this._timeouts.internalValue),
      tool_fake_config: cesToolsetToolFakeConfigToTerraform(this._toolFakeConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktn.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_type: {
        value: cdktn.stringToHclTerraform(this._executionType),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
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
      toolset_id: {
        value: cdktn.stringToHclTerraform(this._toolsetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mcp_toolset: {
        value: cesToolsetMcpToolsetToHclTerraform(this._mcpToolset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesToolsetMcpToolsetList",
      },
      open_api_toolset: {
        value: cesToolsetOpenApiToolsetToHclTerraform(this._openApiToolset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesToolsetOpenApiToolsetList",
      },
      timeouts: {
        value: cesToolsetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CesToolsetTimeouts",
      },
      tool_fake_config: {
        value: cesToolsetToolFakeConfigToHclTerraform(this._toolFakeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesToolsetToolFakeConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
