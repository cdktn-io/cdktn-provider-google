/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AgentIdentityAuthProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of scopes that are allowed to be requested for this auth_provider.
  * If this list is non-empty, only scopes within this list may be requested.
  * If this list is empty, all scopes may be requested.
  * Scopes appearing in 'blocked_scopes' are disallowed even if they appear in
  * 'allowed_scopes'.
  * The number of allowed scopes is limited to 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#allowed_scopes AgentIdentityAuthProvider#allowed_scopes}
  */
  readonly allowedScopes?: string[];
  /**
  * The ID to use for the AuthProvider, which will become the final segment
  * of the AuthProvider's resource name.
  * This value should be 1-63 characters, and valid characters
  * are /a-z-/. The first character must be a lowercase letter, and the
  * last character must be a lowercase letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#auth_provider_id AgentIdentityAuthProvider#auth_provider_id}
  */
  readonly authProviderId: string;
  /**
  * List of scopes that are blocked from being requested for this
  * auth_provider. If a scope appears in this list, it will not be requested,
  * even if it also appears in 'allowed_scopes'. 'blocked_scopes' takes
  * precedence over 'allowed_scopes'. The number of blocked scopes is limited
  * to 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#blocked_scopes AgentIdentityAuthProvider#blocked_scopes}
  */
  readonly blockedScopes?: string[];
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#deletion_policy AgentIdentityAuthProvider#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description of the resource.
  * Must be less than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#description AgentIdentityAuthProvider#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#id AgentIdentityAuthProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels as key value pairs
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#labels AgentIdentityAuthProvider#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#location AgentIdentityAuthProvider#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#project AgentIdentityAuthProvider#project}
  */
  readonly project?: string;
  /**
  * Input only. Represents the workload identity in IAM 'principal://' format of the
  * agent(s) that will use this AuthProvider. Example:
  * 'principal://agents.global.org-${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#workload_ids AgentIdentityAuthProvider#workload_ids}
  */
  readonly workloadIds?: string[];
  /**
  * auth_provider_type_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#auth_provider_type_params AgentIdentityAuthProvider#auth_provider_type_params}
  */
  readonly authProviderTypeParams: AgentIdentityAuthProviderAuthProviderTypeParams;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#timeouts AgentIdentityAuthProvider#timeouts}
  */
  readonly timeouts?: AgentIdentityAuthProviderTimeouts;
}
export interface AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider {
}

export function agentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderToTerraform(struct?: AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function agentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderToHclTerraform(struct?: AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList extends cdktn.ComplexList {

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
  public get(index: number): AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference {
    return new AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgentIdentityAuthProviderAuthProviderTypeParamsApiKey {
  /**
  * Input only. The API key for this auth_provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#api_key AgentIdentityAuthProvider#api_key}
  */
  readonly apiKey?: string;
}

export function agentIdentityAuthProviderAuthProviderTypeParamsApiKeyToTerraform(struct?: AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference | AgentIdentityAuthProviderAuthProviderTypeParamsApiKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
  }
}


export function agentIdentityAuthProviderAuthProviderTypeParamsApiKeyToHclTerraform(struct?: AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference | AgentIdentityAuthProviderAuthProviderTypeParamsApiKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentIdentityAuthProviderAuthProviderTypeParamsApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentIdentityAuthProviderAuthProviderTypeParamsApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}
export interface AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth {
  /**
  * The authorization endpoint to send users to for consenting to delegate
  * to the agent.
  * eg. "https://auth.atlassian.com/authorize"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#authorization_url AgentIdentityAuthProvider#authorization_url}
  */
  readonly authorizationUrl?: string;
  /**
  * The client ID of the OAuth client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Input only. The client secret of the OAuth client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#client_secret AgentIdentityAuthProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Input only. The client secret of the OAuth client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#client_secret_wo AgentIdentityAuthProvider#client_secret_wo}
  */
  readonly clientSecretWo?: string;
  /**
  * Triggers update of 'client_secret_wo' write-only. Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#client_secret_wo_version AgentIdentityAuthProvider#client_secret_wo_version}
  */
  readonly clientSecretWoVersion?: string;
  /**
  * The default continue URI for 3LO flow and it will be used when no continue
  * URI is provided in the RetrieveCredentials request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#default_continue_uri AgentIdentityAuthProvider#default_continue_uri}
  */
  readonly defaultContinueUri?: string;
  /**
  * Enables Proof Key for Code Exchange (PKCE) for the OAuth flow to prevent
  * authorization code interception attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#enable_pkce AgentIdentityAuthProvider#enable_pkce}
  */
  readonly enablePkce?: boolean | cdktn.IResolvable;
  /**
  * The token endpoint for requesting tokens on behalf of an end user.
  * eg. "https://auth.atlassian.com/oauth/token"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#token_url AgentIdentityAuthProvider#token_url}
  */
  readonly tokenUrl?: string;
}

export function agentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthToTerraform(struct?: AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference | AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_url: cdktn.stringToTerraform(struct!.authorizationUrl),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_wo: cdktn.stringToTerraform(struct!.clientSecretWo),
    client_secret_wo_version: cdktn.stringToTerraform(struct!.clientSecretWoVersion),
    default_continue_uri: cdktn.stringToTerraform(struct!.defaultContinueUri),
    enable_pkce: cdktn.booleanToTerraform(struct!.enablePkce),
    token_url: cdktn.stringToTerraform(struct!.tokenUrl),
  }
}


export function agentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthToHclTerraform(struct?: AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference | AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_url: {
      value: cdktn.stringToHclTerraform(struct!.authorizationUrl),
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
    client_secret_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_continue_uri: {
      value: cdktn.stringToHclTerraform(struct!.defaultContinueUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pkce: {
      value: cdktn.booleanToHclTerraform(struct!.enablePkce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationUrl = this._authorizationUrl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWo = this._clientSecretWo;
    }
    if (this._clientSecretWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWoVersion = this._clientSecretWoVersion;
    }
    if (this._defaultContinueUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultContinueUri = this._defaultContinueUri;
    }
    if (this._enablePkce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePkce = this._enablePkce;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationUrl = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretWo = undefined;
      this._clientSecretWoVersion = undefined;
      this._defaultContinueUri = undefined;
      this._enablePkce = undefined;
      this._tokenUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationUrl = value.authorizationUrl;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretWo = value.clientSecretWo;
      this._clientSecretWoVersion = value.clientSecretWoVersion;
      this._defaultContinueUri = value.defaultContinueUri;
      this._enablePkce = value.enablePkce;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // authorization_url - computed: false, optional: true, required: false
  private _authorizationUrl?: string; 
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }
  public set authorizationUrl(value: string) {
    this._authorizationUrl = value;
  }
  public resetAuthorizationUrl() {
    this._authorizationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationUrlInput() {
    return this._authorizationUrl;
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

  // client_secret_wo - computed: false, optional: true, required: false
  private _clientSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  public resetClientSecretWo() {
    this._clientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // client_secret_wo_version - computed: false, optional: true, required: false
  private _clientSecretWoVersion?: string; 
  public get clientSecretWoVersion() {
    return this.getStringAttribute('client_secret_wo_version');
  }
  public set clientSecretWoVersion(value: string) {
    this._clientSecretWoVersion = value;
  }
  public resetClientSecretWoVersion() {
    this._clientSecretWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoVersionInput() {
    return this._clientSecretWoVersion;
  }

  // default_continue_uri - computed: false, optional: true, required: false
  private _defaultContinueUri?: string; 
  public get defaultContinueUri() {
    return this.getStringAttribute('default_continue_uri');
  }
  public set defaultContinueUri(value: string) {
    this._defaultContinueUri = value;
  }
  public resetDefaultContinueUri() {
    this._defaultContinueUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultContinueUriInput() {
    return this._defaultContinueUri;
  }

  // enable_pkce - computed: false, optional: true, required: false
  private _enablePkce?: boolean | cdktn.IResolvable; 
  public get enablePkce() {
    return this.getBooleanAttribute('enable_pkce');
  }
  public set enablePkce(value: boolean | cdktn.IResolvable) {
    this._enablePkce = value;
  }
  public resetEnablePkce() {
    this._enablePkce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePkceInput() {
    return this._enablePkce;
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth {
  /**
  * The client ID of the OAuth client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#client_id AgentIdentityAuthProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Input only. The client secret of the OAuth client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#client_secret AgentIdentityAuthProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Input only. The client secret of the OAuth client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#client_secret_wo AgentIdentityAuthProvider#client_secret_wo}
  */
  readonly clientSecretWo?: string;
  /**
  * Triggers update of 'client_secret_wo' write-only. Increment this value when an update to 'client_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#client_secret_wo_version AgentIdentityAuthProvider#client_secret_wo_version}
  */
  readonly clientSecretWoVersion?: string;
  /**
  * The token endpoint of the OAuth client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#token_url AgentIdentityAuthProvider#token_url}
  */
  readonly tokenUrl?: string;
}

export function agentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthToTerraform(struct?: AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference | AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_wo: cdktn.stringToTerraform(struct!.clientSecretWo),
    client_secret_wo_version: cdktn.stringToTerraform(struct!.clientSecretWoVersion),
    token_url: cdktn.stringToTerraform(struct!.tokenUrl),
  }
}


export function agentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthToHclTerraform(struct?: AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference | AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth): any {
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
    client_secret_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth | undefined {
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
    if (this._clientSecretWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWo = this._clientSecretWo;
    }
    if (this._clientSecretWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWoVersion = this._clientSecretWoVersion;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretWo = undefined;
      this._clientSecretWoVersion = undefined;
      this._tokenUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretWo = value.clientSecretWo;
      this._clientSecretWoVersion = value.clientSecretWoVersion;
      this._tokenUrl = value.tokenUrl;
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

  // client_secret_wo - computed: false, optional: true, required: false
  private _clientSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  public resetClientSecretWo() {
    this._clientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // client_secret_wo_version - computed: false, optional: true, required: false
  private _clientSecretWoVersion?: string; 
  public get clientSecretWoVersion() {
    return this.getStringAttribute('client_secret_wo_version');
  }
  public set clientSecretWoVersion(value: string) {
    this._clientSecretWoVersion = value;
  }
  public resetClientSecretWoVersion() {
    this._clientSecretWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoVersionInput() {
    return this._clientSecretWoVersion;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface AgentIdentityAuthProviderAuthProviderTypeParams {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#api_key AgentIdentityAuthProvider#api_key}
  */
  readonly apiKey?: AgentIdentityAuthProviderAuthProviderTypeParamsApiKey;
  /**
  * three_legged_oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#three_legged_oauth AgentIdentityAuthProvider#three_legged_oauth}
  */
  readonly threeLeggedOauth?: AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth;
  /**
  * two_legged_oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#two_legged_oauth AgentIdentityAuthProvider#two_legged_oauth}
  */
  readonly twoLeggedOauth?: AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth;
}

export function agentIdentityAuthProviderAuthProviderTypeParamsToTerraform(struct?: AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference | AgentIdentityAuthProviderAuthProviderTypeParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: agentIdentityAuthProviderAuthProviderTypeParamsApiKeyToTerraform(struct!.apiKey),
    three_legged_oauth: agentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthToTerraform(struct!.threeLeggedOauth),
    two_legged_oauth: agentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthToTerraform(struct!.twoLeggedOauth),
  }
}


export function agentIdentityAuthProviderAuthProviderTypeParamsToHclTerraform(struct?: AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference | AgentIdentityAuthProviderAuthProviderTypeParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: agentIdentityAuthProviderAuthProviderTypeParamsApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "list",
      storageClassType: "AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyList",
    },
    three_legged_oauth: {
      value: agentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthToHclTerraform(struct!.threeLeggedOauth),
      isBlock: true,
      type: "list",
      storageClassType: "AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthList",
    },
    two_legged_oauth: {
      value: agentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthToHclTerraform(struct!.twoLeggedOauth),
      isBlock: true,
      type: "list",
      storageClassType: "AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentIdentityAuthProviderAuthProviderTypeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._threeLeggedOauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threeLeggedOauth = this._threeLeggedOauth?.internalValue;
    }
    if (this._twoLeggedOauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoLeggedOauth = this._twoLeggedOauth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentIdentityAuthProviderAuthProviderTypeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey.internalValue = undefined;
      this._threeLeggedOauth.internalValue = undefined;
      this._twoLeggedOauth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey.internalValue = value.apiKey;
      this._threeLeggedOauth.internalValue = value.threeLeggedOauth;
      this._twoLeggedOauth.internalValue = value.twoLeggedOauth;
    }
  }

  // ge_auth_provider - computed: true, optional: false, required: false
  private _geAuthProvider = new AgentIdentityAuthProviderAuthProviderTypeParamsGeAuthProviderList(this, "ge_auth_provider", false);
  public get geAuthProvider() {
    return this._geAuthProvider;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new AgentIdentityAuthProviderAuthProviderTypeParamsApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AgentIdentityAuthProviderAuthProviderTypeParamsApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // three_legged_oauth - computed: false, optional: true, required: false
  private _threeLeggedOauth = new AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauthOutputReference(this, "three_legged_oauth");
  public get threeLeggedOauth() {
    return this._threeLeggedOauth;
  }
  public putThreeLeggedOauth(value: AgentIdentityAuthProviderAuthProviderTypeParamsThreeLeggedOauth) {
    this._threeLeggedOauth.internalValue = value;
  }
  public resetThreeLeggedOauth() {
    this._threeLeggedOauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threeLeggedOauthInput() {
    return this._threeLeggedOauth.internalValue;
  }

  // two_legged_oauth - computed: false, optional: true, required: false
  private _twoLeggedOauth = new AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauthOutputReference(this, "two_legged_oauth");
  public get twoLeggedOauth() {
    return this._twoLeggedOauth;
  }
  public putTwoLeggedOauth(value: AgentIdentityAuthProviderAuthProviderTypeParamsTwoLeggedOauth) {
    this._twoLeggedOauth.internalValue = value;
  }
  public resetTwoLeggedOauth() {
    this._twoLeggedOauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoLeggedOauthInput() {
    return this._twoLeggedOauth.internalValue;
  }
}
export interface AgentIdentityAuthProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#create AgentIdentityAuthProvider#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#delete AgentIdentityAuthProvider#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#update AgentIdentityAuthProvider#update}
  */
  readonly update?: string;
}

export function agentIdentityAuthProviderTimeoutsToTerraform(struct?: AgentIdentityAuthProviderTimeouts | cdktn.IResolvable): any {
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


export function agentIdentityAuthProviderTimeoutsToHclTerraform(struct?: AgentIdentityAuthProviderTimeouts | cdktn.IResolvable): any {
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

export class AgentIdentityAuthProviderTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentIdentityAuthProviderTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AgentIdentityAuthProviderTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider google_agent_identity_auth_provider}
*/
export class AgentIdentityAuthProvider extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_agent_identity_auth_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AgentIdentityAuthProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentIdentityAuthProvider to import
  * @param importFromId The id of the existing AgentIdentityAuthProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentIdentityAuthProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_agent_identity_auth_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/agent_identity_auth_provider google_agent_identity_auth_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentIdentityAuthProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AgentIdentityAuthProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'google_agent_identity_auth_provider',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.44.0',
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
    this._allowedScopes = config.allowedScopes;
    this._authProviderId = config.authProviderId;
    this._blockedScopes = config.blockedScopes;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._workloadIds = config.workloadIds;
    this._authProviderTypeParams.internalValue = config.authProviderTypeParams;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_scopes - computed: false, optional: true, required: false
  private _allowedScopes?: string[]; 
  public get allowedScopes() {
    return this.getListAttribute('allowed_scopes');
  }
  public set allowedScopes(value: string[]) {
    this._allowedScopes = value;
  }
  public resetAllowedScopes() {
    this._allowedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes;
  }

  // auth_provider_id - computed: false, optional: false, required: true
  private _authProviderId?: string; 
  public get authProviderId() {
    return this.getStringAttribute('auth_provider_id');
  }
  public set authProviderId(value: string) {
    this._authProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderIdInput() {
    return this._authProviderId;
  }

  // blocked_scopes - computed: false, optional: true, required: false
  private _blockedScopes?: string[]; 
  public get blockedScopes() {
    return this.getListAttribute('blocked_scopes');
  }
  public set blockedScopes(value: string[]) {
    this._blockedScopes = value;
  }
  public resetBlockedScopes() {
    this._blockedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedScopesInput() {
    return this._blockedScopes;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // workload_ids - computed: false, optional: true, required: false
  private _workloadIds?: string[]; 
  public get workloadIds() {
    return this.getListAttribute('workload_ids');
  }
  public set workloadIds(value: string[]) {
    this._workloadIds = value;
  }
  public resetWorkloadIds() {
    this._workloadIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdsInput() {
    return this._workloadIds;
  }

  // auth_provider_type_params - computed: false, optional: false, required: true
  private _authProviderTypeParams = new AgentIdentityAuthProviderAuthProviderTypeParamsOutputReference(this, "auth_provider_type_params");
  public get authProviderTypeParams() {
    return this._authProviderTypeParams;
  }
  public putAuthProviderTypeParams(value: AgentIdentityAuthProviderAuthProviderTypeParams) {
    this._authProviderTypeParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderTypeParamsInput() {
    return this._authProviderTypeParams.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AgentIdentityAuthProviderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AgentIdentityAuthProviderTimeouts) {
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
      allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedScopes),
      auth_provider_id: cdktn.stringToTerraform(this._authProviderId),
      blocked_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._blockedScopes),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      workload_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._workloadIds),
      auth_provider_type_params: agentIdentityAuthProviderAuthProviderTypeParamsToTerraform(this._authProviderTypeParams.internalValue),
      timeouts: agentIdentityAuthProviderTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_scopes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auth_provider_id: {
        value: cdktn.stringToHclTerraform(this._authProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_scopes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._blockedScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._workloadIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auth_provider_type_params: {
        value: agentIdentityAuthProviderAuthProviderTypeParamsToHclTerraform(this._authProviderTypeParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AgentIdentityAuthProviderAuthProviderTypeParamsList",
      },
      timeouts: {
        value: agentIdentityAuthProviderTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AgentIdentityAuthProviderTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
