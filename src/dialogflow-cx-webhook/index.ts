/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DialogflowCxWebhookConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#deletion_policy DialogflowCxWebhook#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Indicates whether the webhook is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#disabled DialogflowCxWebhook#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The human-readable name of the webhook, unique within the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#display_name DialogflowCxWebhook#display_name}
  */
  readonly displayName: string;
  /**
  * Deprecated. Indicates if automatic spell correction is enabled in detect intent requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#enable_spell_correction DialogflowCxWebhook#enable_spell_correction}
  */
  readonly enableSpellCorrection?: boolean | cdktn.IResolvable;
  /**
  * Deprecated. Determines whether this agent should log conversation queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#enable_stackdriver_logging DialogflowCxWebhook#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#id DialogflowCxWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The agent to create a webhook for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#parent DialogflowCxWebhook#parent}
  */
  readonly parent?: string;
  /**
  * Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#security_settings DialogflowCxWebhook#security_settings}
  */
  readonly securitySettings?: string;
  /**
  * Webhook execution timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#timeout DialogflowCxWebhook#timeout}
  */
  readonly timeout?: string;
  /**
  * generic_web_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}
  */
  readonly genericWebService?: DialogflowCxWebhookGenericWebService;
  /**
  * service_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#service_directory DialogflowCxWebhook#service_directory}
  */
  readonly serviceDirectory?: DialogflowCxWebhookServiceDirectory;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#timeouts DialogflowCxWebhook#timeouts}
  */
  readonly timeouts?: DialogflowCxWebhookTimeouts;
}
export interface DialogflowCxWebhookGenericWebServiceOauthConfig {
  /**
  * The client ID provided by the 3rd party platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret provided by the 3rd party platform.  If the
  * 'secret_version_for_client_secret' field is set, this field will be
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}
  */
  readonly scopes?: string[];
  /**
  * The name of the SecretManager secret version resource storing the
  * client secret. If this field is set, the 'client_secret' field will be
  * ignored.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}
  */
  readonly secretVersionForClientSecret?: string;
  /**
  * The token endpoint provided by the 3rd party platform to exchange an
  * access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function dialogflowCxWebhookGenericWebServiceOauthConfigToTerraform(struct?: DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference | DialogflowCxWebhookGenericWebServiceOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    secret_version_for_client_secret: cdktn.stringToTerraform(struct!.secretVersionForClientSecret),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function dialogflowCxWebhookGenericWebServiceOauthConfigToHclTerraform(struct?: DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference | DialogflowCxWebhookGenericWebServiceOauthConfig): any {
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
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_version_for_client_secret: {
      value: cdktn.stringToHclTerraform(struct!.secretVersionForClientSecret),
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

export class DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookGenericWebServiceOauthConfig | undefined {
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
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._secretVersionForClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForClientSecret = this._secretVersionForClientSecret;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookGenericWebServiceOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scopes = undefined;
      this._secretVersionForClientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scopes = value.scopes;
      this._secretVersionForClientSecret = value.secretVersionForClientSecret;
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

  // secret_version_for_client_secret - computed: false, optional: true, required: false
  private _secretVersionForClientSecret?: string; 
  public get secretVersionForClientSecret() {
    return this.getStringAttribute('secret_version_for_client_secret');
  }
  public set secretVersionForClientSecret(value: string) {
    this._secretVersionForClientSecret = value;
  }
  public resetSecretVersionForClientSecret() {
    this._secretVersionForClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForClientSecretInput() {
    return this._secretVersionForClientSecret;
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
export interface DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}
  */
  readonly key: string;
  /**
  * The SecretManager secret version resource storing the header value.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#secret_version DialogflowCxWebhook#secret_version}
  */
  readonly secretVersion: string;
}

export function dialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersToTerraform(struct?: DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_version: cdktn.stringToTerraform(struct!.secretVersion),
  }
}


export function dialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersToHclTerraform(struct?: DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders | cdktn.IResolvable): any {
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
    secret_version: {
      value: cdktn.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretVersion = value.secretVersion;
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

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}

export class DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList extends cdktn.ComplexList {
  public internalValue? : DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders[] | cdktn.IResolvable

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
  public get(index: number): DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference {
    return new DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfig {
  /**
  * The email address of the service account used to authenticate the webhook call.
  * Dialogflow uses this service account to exchange an access token and the access
  * token is then sent in the **Authorization** header of the webhook request.
  * 
  * The service account must have the **roles/iam.serviceAccountTokenCreator** role
  * granted to the
  * [Dialogflow service agent](https://cloud.google.com/iam/docs/service-agents?_gl=1*1jsujvh*_ga*NjYxMzU3OTg2LjE3Njc3MzQ4NjM.*_ga_WH2QY8WWF5*czE3Njc3MzQ2MjgkbzIkZzEkdDE3Njc3MzQ3NzQkajYwJGwwJGgw#dialogflow-service-agent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#service_account DialogflowCxWebhook#service_account}
  */
  readonly serviceAccount: string;
}

export function dialogflowCxWebhookGenericWebServiceServiceAccountAuthConfigToTerraform(struct?: DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfigOutputReference | DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
  }
}


export function dialogflowCxWebhookGenericWebServiceServiceAccountAuthConfigToHclTerraform(struct?: DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfigOutputReference | DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccount = value.serviceAccount;
    }
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
export interface DialogflowCxWebhookGenericWebService {
  /**
  * Specifies a list of allowed custom CA certificates (in DER format) for
  * HTTPS verification. This overrides the default SSL trust store. If this
  * is empty or unspecified, Dialogflow will use Google's default trust store
  * to verify certificates.
  * N.B. Make sure the HTTPS server certificates are signed with "subject alt
  * name". For instance a certificate can be self-signed using the following
  * command,
  * openssl x509 -req -days 200 -in example.com.csr \
  * -signkey example.com.key \
  * -out example.com.crt \
  * -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}
  */
  readonly allowedCaCerts?: string[];
  /**
  * HTTP method for the flexible webhook calls. Standard webhook always uses
  * POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Maps the values extracted from specific fields of the flexible webhook
  * response into session parameters.
  * - Key: session parameter name
  * - Value: field path in the webhook response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}
  */
  readonly parameterMapping?: { [key: string]: string };
  /**
  * Defines a custom JSON object as request body to send to flexible webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}
  */
  readonly requestBody?: string;
  /**
  * The HTTP request headers to send together with webhook requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * The SecretManager secret version resource storing the username:password
  * pair for HTTP Basic authentication.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}
  */
  readonly secretVersionForUsernamePassword?: string;
  /**
  * Indicate the auth token type generated from the [Diglogflow service
  * agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent).
  * The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}
  */
  readonly serviceAgentAuth?: string;
  /**
  * The webhook URI for receiving POST requests. It must use https protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}
  */
  readonly uri: string;
  /**
  * Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}
  */
  readonly webhookType?: string;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}
  */
  readonly oauthConfig?: DialogflowCxWebhookGenericWebServiceOauthConfig;
  /**
  * secret_versions_for_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}
  */
  readonly secretVersionsForRequestHeaders?: DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders[] | cdktn.IResolvable;
  /**
  * service_account_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#service_account_auth_config DialogflowCxWebhook#service_account_auth_config}
  */
  readonly serviceAccountAuthConfig?: DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfig;
}

export function dialogflowCxWebhookGenericWebServiceToTerraform(struct?: DialogflowCxWebhookGenericWebServiceOutputReference | DialogflowCxWebhookGenericWebService): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_ca_certs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedCaCerts),
    http_method: cdktn.stringToTerraform(struct!.httpMethod),
    parameter_mapping: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameterMapping),
    request_body: cdktn.stringToTerraform(struct!.requestBody),
    request_headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.requestHeaders),
    secret_version_for_username_password: cdktn.stringToTerraform(struct!.secretVersionForUsernamePassword),
    service_agent_auth: cdktn.stringToTerraform(struct!.serviceAgentAuth),
    uri: cdktn.stringToTerraform(struct!.uri),
    webhook_type: cdktn.stringToTerraform(struct!.webhookType),
    oauth_config: dialogflowCxWebhookGenericWebServiceOauthConfigToTerraform(struct!.oauthConfig),
    secret_versions_for_request_headers: cdktn.listMapper(dialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersToTerraform, true)(struct!.secretVersionsForRequestHeaders),
    service_account_auth_config: dialogflowCxWebhookGenericWebServiceServiceAccountAuthConfigToTerraform(struct!.serviceAccountAuthConfig),
  }
}


export function dialogflowCxWebhookGenericWebServiceToHclTerraform(struct?: DialogflowCxWebhookGenericWebServiceOutputReference | DialogflowCxWebhookGenericWebService): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_ca_certs: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedCaCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_method: {
      value: cdktn.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_mapping: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameterMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_body: {
      value: cdktn.stringToHclTerraform(struct!.requestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_version_for_username_password: {
      value: cdktn.stringToHclTerraform(struct!.secretVersionForUsernamePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_agent_auth: {
      value: cdktn.stringToHclTerraform(struct!.serviceAgentAuth),
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
    webhook_type: {
      value: cdktn.stringToHclTerraform(struct!.webhookType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_config: {
      value: dialogflowCxWebhookGenericWebServiceOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxWebhookGenericWebServiceOauthConfigList",
    },
    secret_versions_for_request_headers: {
      value: cdktn.listMapperHcl(dialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersToHclTerraform, true)(struct!.secretVersionsForRequestHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList",
    },
    service_account_auth_config: {
      value: dialogflowCxWebhookGenericWebServiceServiceAccountAuthConfigToHclTerraform(struct!.serviceAccountAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookGenericWebServiceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookGenericWebService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCaCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCaCerts = this._allowedCaCerts;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._parameterMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterMapping = this._parameterMapping;
    }
    if (this._requestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._secretVersionForUsernamePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForUsernamePassword = this._secretVersionForUsernamePassword;
    }
    if (this._serviceAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuth = this._serviceAgentAuth;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._webhookType !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookType = this._webhookType;
    }
    if (this._oauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfig = this._oauthConfig?.internalValue;
    }
    if (this._secretVersionsForRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionsForRequestHeaders = this._secretVersionsForRequestHeaders?.internalValue;
    }
    if (this._serviceAccountAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountAuthConfig = this._serviceAccountAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookGenericWebService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCaCerts = undefined;
      this._httpMethod = undefined;
      this._parameterMapping = undefined;
      this._requestBody = undefined;
      this._requestHeaders = undefined;
      this._secretVersionForUsernamePassword = undefined;
      this._serviceAgentAuth = undefined;
      this._uri = undefined;
      this._webhookType = undefined;
      this._oauthConfig.internalValue = undefined;
      this._secretVersionsForRequestHeaders.internalValue = undefined;
      this._serviceAccountAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCaCerts = value.allowedCaCerts;
      this._httpMethod = value.httpMethod;
      this._parameterMapping = value.parameterMapping;
      this._requestBody = value.requestBody;
      this._requestHeaders = value.requestHeaders;
      this._secretVersionForUsernamePassword = value.secretVersionForUsernamePassword;
      this._serviceAgentAuth = value.serviceAgentAuth;
      this._uri = value.uri;
      this._webhookType = value.webhookType;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._secretVersionsForRequestHeaders.internalValue = value.secretVersionsForRequestHeaders;
      this._serviceAccountAuthConfig.internalValue = value.serviceAccountAuthConfig;
    }
  }

  // allowed_ca_certs - computed: false, optional: true, required: false
  private _allowedCaCerts?: string[]; 
  public get allowedCaCerts() {
    return this.getListAttribute('allowed_ca_certs');
  }
  public set allowedCaCerts(value: string[]) {
    this._allowedCaCerts = value;
  }
  public resetAllowedCaCerts() {
    this._allowedCaCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCaCertsInput() {
    return this._allowedCaCerts;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // parameter_mapping - computed: false, optional: true, required: false
  private _parameterMapping?: { [key: string]: string }; 
  public get parameterMapping() {
    return this.getStringMapAttribute('parameter_mapping');
  }
  public set parameterMapping(value: { [key: string]: string }) {
    this._parameterMapping = value;
  }
  public resetParameterMapping() {
    this._parameterMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterMappingInput() {
    return this._parameterMapping;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // secret_version_for_username_password - computed: false, optional: true, required: false
  private _secretVersionForUsernamePassword?: string; 
  public get secretVersionForUsernamePassword() {
    return this.getStringAttribute('secret_version_for_username_password');
  }
  public set secretVersionForUsernamePassword(value: string) {
    this._secretVersionForUsernamePassword = value;
  }
  public resetSecretVersionForUsernamePassword() {
    this._secretVersionForUsernamePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForUsernamePasswordInput() {
    return this._secretVersionForUsernamePassword;
  }

  // service_agent_auth - computed: false, optional: true, required: false
  private _serviceAgentAuth?: string; 
  public get serviceAgentAuth() {
    return this.getStringAttribute('service_agent_auth');
  }
  public set serviceAgentAuth(value: string) {
    this._serviceAgentAuth = value;
  }
  public resetServiceAgentAuth() {
    this._serviceAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthInput() {
    return this._serviceAgentAuth;
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

  // webhook_type - computed: false, optional: true, required: false
  private _webhookType?: string; 
  public get webhookType() {
    return this.getStringAttribute('webhook_type');
  }
  public set webhookType(value: string) {
    this._webhookType = value;
  }
  public resetWebhookType() {
    this._webhookType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookTypeInput() {
    return this._webhookType;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: DialogflowCxWebhookGenericWebServiceOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // secret_versions_for_request_headers - computed: false, optional: true, required: false
  private _secretVersionsForRequestHeaders = new DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList(this, "secret_versions_for_request_headers", true);
  public get secretVersionsForRequestHeaders() {
    return this._secretVersionsForRequestHeaders;
  }
  public putSecretVersionsForRequestHeaders(value: DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders[] | cdktn.IResolvable) {
    this._secretVersionsForRequestHeaders.internalValue = value;
  }
  public resetSecretVersionsForRequestHeaders() {
    this._secretVersionsForRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionsForRequestHeadersInput() {
    return this._secretVersionsForRequestHeaders.internalValue;
  }

  // service_account_auth_config - computed: false, optional: true, required: false
  private _serviceAccountAuthConfig = new DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfigOutputReference(this, "service_account_auth_config");
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }
  public putServiceAccountAuthConfig(value: DialogflowCxWebhookGenericWebServiceServiceAccountAuthConfig) {
    this._serviceAccountAuthConfig.internalValue = value;
  }
  public resetServiceAccountAuthConfig() {
    this._serviceAccountAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountAuthConfigInput() {
    return this._serviceAccountAuthConfig.internalValue;
  }
}
export interface DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig {
  /**
  * The client ID provided by the 3rd party platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret provided by the 3rd party platform.  If the
  * 'secret_version_for_client_secret' field is set, this field will be
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}
  */
  readonly scopes?: string[];
  /**
  * The name of the SecretManager secret version resource storing the
  * client secret. If this field is set, the 'client_secret' field will be
  * ignored.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}
  */
  readonly secretVersionForClientSecret?: string;
  /**
  * The token endpoint provided by the 3rd party platform to exchange an
  * access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function dialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigToTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference | DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    secret_version_for_client_secret: cdktn.stringToTerraform(struct!.secretVersionForClientSecret),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function dialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigToHclTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference | DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig): any {
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
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_version_for_client_secret: {
      value: cdktn.stringToHclTerraform(struct!.secretVersionForClientSecret),
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

export class DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig | undefined {
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
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._secretVersionForClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForClientSecret = this._secretVersionForClientSecret;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scopes = undefined;
      this._secretVersionForClientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scopes = value.scopes;
      this._secretVersionForClientSecret = value.secretVersionForClientSecret;
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

  // secret_version_for_client_secret - computed: false, optional: true, required: false
  private _secretVersionForClientSecret?: string; 
  public get secretVersionForClientSecret() {
    return this.getStringAttribute('secret_version_for_client_secret');
  }
  public set secretVersionForClientSecret(value: string) {
    this._secretVersionForClientSecret = value;
  }
  public resetSecretVersionForClientSecret() {
    this._secretVersionForClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForClientSecretInput() {
    return this._secretVersionForClientSecret;
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
export interface DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}
  */
  readonly key: string;
  /**
  * The SecretManager secret version resource storing the header value.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#secret_version DialogflowCxWebhook#secret_version}
  */
  readonly secretVersion: string;
}

export function dialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersToTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_version: cdktn.stringToTerraform(struct!.secretVersion),
  }
}


export function dialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersToHclTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders | cdktn.IResolvable): any {
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
    secret_version: {
      value: cdktn.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretVersion = value.secretVersion;
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

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}

export class DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList extends cdktn.ComplexList {
  public internalValue? : DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders[] | cdktn.IResolvable

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
  public get(index: number): DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference {
    return new DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfig {
  /**
  * The email address of the service account used to authenticate the webhook call.
  * Dialogflow uses this service account to exchange an access token and the access
  * token is then sent in the **Authorization** header of the webhook request.
  * 
  * The service account must have the **roles/iam.serviceAccountTokenCreator** role
  * granted to the
  * [Dialogflow service agent](https://cloud.google.com/iam/docs/service-agents?_gl=1*1jsujvh*_ga*NjYxMzU3OTg2LjE3Njc3MzQ4NjM.*_ga_WH2QY8WWF5*czE3Njc3MzQ2MjgkbzIkZzEkdDE3Njc3MzQ3NzQkajYwJGwwJGgw#dialogflow-service-agent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#service_account DialogflowCxWebhook#service_account}
  */
  readonly serviceAccount: string;
}

export function dialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfigToTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfigOutputReference | DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
  }
}


export function dialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfigToHclTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfigOutputReference | DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccount = value.serviceAccount;
    }
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
export interface DialogflowCxWebhookServiceDirectoryGenericWebService {
  /**
  * Specifies a list of allowed custom CA certificates (in DER format) for
  * HTTPS verification. This overrides the default SSL trust store. If this
  * is empty or unspecified, Dialogflow will use Google's default trust store
  * to verify certificates.
  * N.B. Make sure the HTTPS server certificates are signed with "subject alt
  * name". For instance a certificate can be self-signed using the following
  * command,
  * openssl x509 -req -days 200 -in example.com.csr \
  * -signkey example.com.key \
  * -out example.com.crt \
  * -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}
  */
  readonly allowedCaCerts?: string[];
  /**
  * HTTP method for the flexible webhook calls. Standard webhook always uses
  * POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Maps the values extracted from specific fields of the flexible webhook
  * response into session parameters.
  * - Key: session parameter name
  * - Value: field path in the webhook response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}
  */
  readonly parameterMapping?: { [key: string]: string };
  /**
  * Defines a custom JSON object as request body to send to flexible webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}
  */
  readonly requestBody?: string;
  /**
  * The HTTP request headers to send together with webhook requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * The SecretManager secret version resource storing the username:password
  * pair for HTTP Basic authentication.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}
  */
  readonly secretVersionForUsernamePassword?: string;
  /**
  * Indicate the auth token type generated from the [Diglogflow service
  * agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent).
  * The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}
  */
  readonly serviceAgentAuth?: string;
  /**
  * The webhook URI for receiving POST requests. It must use https protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}
  */
  readonly uri: string;
  /**
  * Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}
  */
  readonly webhookType?: string;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}
  */
  readonly oauthConfig?: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig;
  /**
  * secret_versions_for_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}
  */
  readonly secretVersionsForRequestHeaders?: DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders[] | cdktn.IResolvable;
  /**
  * service_account_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#service_account_auth_config DialogflowCxWebhook#service_account_auth_config}
  */
  readonly serviceAccountAuthConfig?: DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfig;
}

export function dialogflowCxWebhookServiceDirectoryGenericWebServiceToTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference | DialogflowCxWebhookServiceDirectoryGenericWebService): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_ca_certs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedCaCerts),
    http_method: cdktn.stringToTerraform(struct!.httpMethod),
    parameter_mapping: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameterMapping),
    request_body: cdktn.stringToTerraform(struct!.requestBody),
    request_headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.requestHeaders),
    secret_version_for_username_password: cdktn.stringToTerraform(struct!.secretVersionForUsernamePassword),
    service_agent_auth: cdktn.stringToTerraform(struct!.serviceAgentAuth),
    uri: cdktn.stringToTerraform(struct!.uri),
    webhook_type: cdktn.stringToTerraform(struct!.webhookType),
    oauth_config: dialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigToTerraform(struct!.oauthConfig),
    secret_versions_for_request_headers: cdktn.listMapper(dialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersToTerraform, true)(struct!.secretVersionsForRequestHeaders),
    service_account_auth_config: dialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfigToTerraform(struct!.serviceAccountAuthConfig),
  }
}


export function dialogflowCxWebhookServiceDirectoryGenericWebServiceToHclTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference | DialogflowCxWebhookServiceDirectoryGenericWebService): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_ca_certs: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedCaCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_method: {
      value: cdktn.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_mapping: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameterMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_body: {
      value: cdktn.stringToHclTerraform(struct!.requestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_version_for_username_password: {
      value: cdktn.stringToHclTerraform(struct!.secretVersionForUsernamePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_agent_auth: {
      value: cdktn.stringToHclTerraform(struct!.serviceAgentAuth),
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
    webhook_type: {
      value: cdktn.stringToHclTerraform(struct!.webhookType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_config: {
      value: dialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigList",
    },
    secret_versions_for_request_headers: {
      value: cdktn.listMapperHcl(dialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersToHclTerraform, true)(struct!.secretVersionsForRequestHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList",
    },
    service_account_auth_config: {
      value: dialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfigToHclTerraform(struct!.serviceAccountAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookServiceDirectoryGenericWebService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCaCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCaCerts = this._allowedCaCerts;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._parameterMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterMapping = this._parameterMapping;
    }
    if (this._requestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._secretVersionForUsernamePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForUsernamePassword = this._secretVersionForUsernamePassword;
    }
    if (this._serviceAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuth = this._serviceAgentAuth;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._webhookType !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookType = this._webhookType;
    }
    if (this._oauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfig = this._oauthConfig?.internalValue;
    }
    if (this._secretVersionsForRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionsForRequestHeaders = this._secretVersionsForRequestHeaders?.internalValue;
    }
    if (this._serviceAccountAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountAuthConfig = this._serviceAccountAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookServiceDirectoryGenericWebService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCaCerts = undefined;
      this._httpMethod = undefined;
      this._parameterMapping = undefined;
      this._requestBody = undefined;
      this._requestHeaders = undefined;
      this._secretVersionForUsernamePassword = undefined;
      this._serviceAgentAuth = undefined;
      this._uri = undefined;
      this._webhookType = undefined;
      this._oauthConfig.internalValue = undefined;
      this._secretVersionsForRequestHeaders.internalValue = undefined;
      this._serviceAccountAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCaCerts = value.allowedCaCerts;
      this._httpMethod = value.httpMethod;
      this._parameterMapping = value.parameterMapping;
      this._requestBody = value.requestBody;
      this._requestHeaders = value.requestHeaders;
      this._secretVersionForUsernamePassword = value.secretVersionForUsernamePassword;
      this._serviceAgentAuth = value.serviceAgentAuth;
      this._uri = value.uri;
      this._webhookType = value.webhookType;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._secretVersionsForRequestHeaders.internalValue = value.secretVersionsForRequestHeaders;
      this._serviceAccountAuthConfig.internalValue = value.serviceAccountAuthConfig;
    }
  }

  // allowed_ca_certs - computed: false, optional: true, required: false
  private _allowedCaCerts?: string[]; 
  public get allowedCaCerts() {
    return this.getListAttribute('allowed_ca_certs');
  }
  public set allowedCaCerts(value: string[]) {
    this._allowedCaCerts = value;
  }
  public resetAllowedCaCerts() {
    this._allowedCaCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCaCertsInput() {
    return this._allowedCaCerts;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // parameter_mapping - computed: false, optional: true, required: false
  private _parameterMapping?: { [key: string]: string }; 
  public get parameterMapping() {
    return this.getStringMapAttribute('parameter_mapping');
  }
  public set parameterMapping(value: { [key: string]: string }) {
    this._parameterMapping = value;
  }
  public resetParameterMapping() {
    this._parameterMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterMappingInput() {
    return this._parameterMapping;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // secret_version_for_username_password - computed: false, optional: true, required: false
  private _secretVersionForUsernamePassword?: string; 
  public get secretVersionForUsernamePassword() {
    return this.getStringAttribute('secret_version_for_username_password');
  }
  public set secretVersionForUsernamePassword(value: string) {
    this._secretVersionForUsernamePassword = value;
  }
  public resetSecretVersionForUsernamePassword() {
    this._secretVersionForUsernamePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForUsernamePasswordInput() {
    return this._secretVersionForUsernamePassword;
  }

  // service_agent_auth - computed: false, optional: true, required: false
  private _serviceAgentAuth?: string; 
  public get serviceAgentAuth() {
    return this.getStringAttribute('service_agent_auth');
  }
  public set serviceAgentAuth(value: string) {
    this._serviceAgentAuth = value;
  }
  public resetServiceAgentAuth() {
    this._serviceAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthInput() {
    return this._serviceAgentAuth;
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

  // webhook_type - computed: false, optional: true, required: false
  private _webhookType?: string; 
  public get webhookType() {
    return this.getStringAttribute('webhook_type');
  }
  public set webhookType(value: string) {
    this._webhookType = value;
  }
  public resetWebhookType() {
    this._webhookType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookTypeInput() {
    return this._webhookType;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // secret_versions_for_request_headers - computed: false, optional: true, required: false
  private _secretVersionsForRequestHeaders = new DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList(this, "secret_versions_for_request_headers", true);
  public get secretVersionsForRequestHeaders() {
    return this._secretVersionsForRequestHeaders;
  }
  public putSecretVersionsForRequestHeaders(value: DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders[] | cdktn.IResolvable) {
    this._secretVersionsForRequestHeaders.internalValue = value;
  }
  public resetSecretVersionsForRequestHeaders() {
    this._secretVersionsForRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionsForRequestHeadersInput() {
    return this._secretVersionsForRequestHeaders.internalValue;
  }

  // service_account_auth_config - computed: false, optional: true, required: false
  private _serviceAccountAuthConfig = new DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfigOutputReference(this, "service_account_auth_config");
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }
  public putServiceAccountAuthConfig(value: DialogflowCxWebhookServiceDirectoryGenericWebServiceServiceAccountAuthConfig) {
    this._serviceAccountAuthConfig.internalValue = value;
  }
  public resetServiceAccountAuthConfig() {
    this._serviceAccountAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountAuthConfigInput() {
    return this._serviceAccountAuthConfig.internalValue;
  }
}
export interface DialogflowCxWebhookServiceDirectory {
  /**
  * The name of Service Directory service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#service DialogflowCxWebhook#service}
  */
  readonly service: string;
  /**
  * generic_web_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}
  */
  readonly genericWebService?: DialogflowCxWebhookServiceDirectoryGenericWebService;
}

export function dialogflowCxWebhookServiceDirectoryToTerraform(struct?: DialogflowCxWebhookServiceDirectoryOutputReference | DialogflowCxWebhookServiceDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service: cdktn.stringToTerraform(struct!.service),
    generic_web_service: dialogflowCxWebhookServiceDirectoryGenericWebServiceToTerraform(struct!.genericWebService),
  }
}


export function dialogflowCxWebhookServiceDirectoryToHclTerraform(struct?: DialogflowCxWebhookServiceDirectoryOutputReference | DialogflowCxWebhookServiceDirectory): any {
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
    generic_web_service: {
      value: dialogflowCxWebhookServiceDirectoryGenericWebServiceToHclTerraform(struct!.genericWebService),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxWebhookServiceDirectoryGenericWebServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookServiceDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookServiceDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._genericWebService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericWebService = this._genericWebService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookServiceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
      this._genericWebService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
      this._genericWebService.internalValue = value.genericWebService;
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

  // generic_web_service - computed: false, optional: true, required: false
  private _genericWebService = new DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference(this, "generic_web_service");
  public get genericWebService() {
    return this._genericWebService;
  }
  public putGenericWebService(value: DialogflowCxWebhookServiceDirectoryGenericWebService) {
    this._genericWebService.internalValue = value;
  }
  public resetGenericWebService() {
    this._genericWebService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebServiceInput() {
    return this._genericWebService.internalValue;
  }
}
export interface DialogflowCxWebhookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#create DialogflowCxWebhook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#delete DialogflowCxWebhook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#update DialogflowCxWebhook#update}
  */
  readonly update?: string;
}

export function dialogflowCxWebhookTimeoutsToTerraform(struct?: DialogflowCxWebhookTimeouts | cdktn.IResolvable): any {
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


export function dialogflowCxWebhookTimeoutsToHclTerraform(struct?: DialogflowCxWebhookTimeouts | cdktn.IResolvable): any {
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

export class DialogflowCxWebhookTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxWebhookTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxWebhookTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook google_dialogflow_cx_webhook}
*/
export class DialogflowCxWebhook extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DialogflowCxWebhook resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxWebhook to import
  * @param importFromId The id of the existing DialogflowCxWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/dialogflow_cx_webhook google_dialogflow_cx_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_webhook',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.45.0',
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
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._enableSpellCorrection = config.enableSpellCorrection;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._id = config.id;
    this._parent = config.parent;
    this._securitySettings = config.securitySettings;
    this._timeout = config.timeout;
    this._genericWebService.internalValue = config.genericWebService;
    this._serviceDirectory.internalValue = config.serviceDirectory;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // enable_spell_correction - computed: false, optional: true, required: false
  private _enableSpellCorrection?: boolean | cdktn.IResolvable; 
  public get enableSpellCorrection() {
    return this.getBooleanAttribute('enable_spell_correction');
  }
  public set enableSpellCorrection(value: boolean | cdktn.IResolvable) {
    this._enableSpellCorrection = value;
  }
  public resetEnableSpellCorrection() {
    this._enableSpellCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpellCorrectionInput() {
    return this._enableSpellCorrection;
  }

  // enable_stackdriver_logging - computed: false, optional: true, required: false
  private _enableStackdriverLogging?: boolean | cdktn.IResolvable; 
  public get enableStackdriverLogging() {
    return this.getBooleanAttribute('enable_stackdriver_logging');
  }
  public set enableStackdriverLogging(value: boolean | cdktn.IResolvable) {
    this._enableStackdriverLogging = value;
  }
  public resetEnableStackdriverLogging() {
    this._enableStackdriverLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverLoggingInput() {
    return this._enableStackdriverLogging;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // security_settings - computed: false, optional: true, required: false
  private _securitySettings?: string; 
  public get securitySettings() {
    return this.getStringAttribute('security_settings');
  }
  public set securitySettings(value: string) {
    this._securitySettings = value;
  }
  public resetSecuritySettings() {
    this._securitySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings;
  }

  // start_flow - computed: true, optional: false, required: false
  public get startFlow() {
    return this.getStringAttribute('start_flow');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // generic_web_service - computed: false, optional: true, required: false
  private _genericWebService = new DialogflowCxWebhookGenericWebServiceOutputReference(this, "generic_web_service");
  public get genericWebService() {
    return this._genericWebService;
  }
  public putGenericWebService(value: DialogflowCxWebhookGenericWebService) {
    this._genericWebService.internalValue = value;
  }
  public resetGenericWebService() {
    this._genericWebService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebServiceInput() {
    return this._genericWebService.internalValue;
  }

  // service_directory - computed: false, optional: true, required: false
  private _serviceDirectory = new DialogflowCxWebhookServiceDirectoryOutputReference(this, "service_directory");
  public get serviceDirectory() {
    return this._serviceDirectory;
  }
  public putServiceDirectory(value: DialogflowCxWebhookServiceDirectory) {
    this._serviceDirectory.internalValue = value;
  }
  public resetServiceDirectory() {
    this._serviceDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryInput() {
    return this._serviceDirectory.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxWebhookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxWebhookTimeouts) {
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
      disabled: cdktn.booleanToTerraform(this._disabled),
      display_name: cdktn.stringToTerraform(this._displayName),
      enable_spell_correction: cdktn.booleanToTerraform(this._enableSpellCorrection),
      enable_stackdriver_logging: cdktn.booleanToTerraform(this._enableStackdriverLogging),
      id: cdktn.stringToTerraform(this._id),
      parent: cdktn.stringToTerraform(this._parent),
      security_settings: cdktn.stringToTerraform(this._securitySettings),
      timeout: cdktn.stringToTerraform(this._timeout),
      generic_web_service: dialogflowCxWebhookGenericWebServiceToTerraform(this._genericWebService.internalValue),
      service_directory: dialogflowCxWebhookServiceDirectoryToTerraform(this._serviceDirectory.internalValue),
      timeouts: dialogflowCxWebhookTimeoutsToTerraform(this._timeouts.internalValue),
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
      disabled: {
        value: cdktn.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_spell_correction: {
        value: cdktn.booleanToHclTerraform(this._enableSpellCorrection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_stackdriver_logging: {
        value: cdktn.booleanToHclTerraform(this._enableStackdriverLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_settings: {
        value: cdktn.stringToHclTerraform(this._securitySettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktn.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generic_web_service: {
        value: dialogflowCxWebhookGenericWebServiceToHclTerraform(this._genericWebService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxWebhookGenericWebServiceList",
      },
      service_directory: {
        value: dialogflowCxWebhookServiceDirectoryToHclTerraform(this._serviceDirectory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxWebhookServiceDirectoryList",
      },
      timeouts: {
        value: dialogflowCxWebhookTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxWebhookTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
