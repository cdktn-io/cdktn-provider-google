/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DeveloperConnectAccountConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID to use for the AccountConnector, which will become the final
  * component of the AccountConnector's resource name. Its format should adhere
  * to https://google.aip.dev/122#resource-id-segments Names must be unique
  * per-project per-location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#account_connector_id DeveloperConnectAccountConnector#account_connector_id}
  */
  readonly accountConnectorId: string;
  /**
  * Allows users to store small amounts of arbitrary data.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#annotations DeveloperConnectAccountConnector#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * This checksum is computed by the server based on the value of other
  * fields, and may be sent on update and delete requests to ensure the
  * client has an up-to-date value before proceeding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#etag DeveloperConnectAccountConnector#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#labels DeveloperConnectAccountConnector#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#location DeveloperConnectAccountConnector#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}
  */
  readonly project?: string;
  /**
  * custom_oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#custom_oauth_config DeveloperConnectAccountConnector#custom_oauth_config}
  */
  readonly customOauthConfig?: DeveloperConnectAccountConnectorCustomOauthConfig;
  /**
  * provider_oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#provider_oauth_config DeveloperConnectAccountConnector#provider_oauth_config}
  */
  readonly providerOauthConfig?: DeveloperConnectAccountConnectorProviderOauthConfig;
  /**
  * proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#proxy_config DeveloperConnectAccountConnector#proxy_config}
  */
  readonly proxyConfig?: DeveloperConnectAccountConnectorProxyConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#timeouts DeveloperConnectAccountConnector#timeouts}
  */
  readonly timeouts?: DeveloperConnectAccountConnectorTimeouts;
}
export interface DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig {
  /**
  * The Service Directory service name.
  * Format:
  * projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#service DeveloperConnectAccountConnector#service}
  */
  readonly service: string;
}

export function developerConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigToTerraform(struct?: DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference | DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function developerConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigToHclTerraform(struct?: DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference | DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig | undefined) {
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
export interface DeveloperConnectAccountConnectorCustomOauthConfig {
  /**
  * The OAuth2 authrization server URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#auth_uri DeveloperConnectAccountConnector#auth_uri}
  */
  readonly authUri: string;
  /**
  * The client ID of the OAuth application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#client_id DeveloperConnectAccountConnector#client_id}
  */
  readonly clientId: string;
  /**
  * Input only. The client secret of the OAuth application.
  * It will be provided as plain text, but encrypted and stored in developer
  * connect. As INPUT_ONLY field, it will not be included in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#client_secret DeveloperConnectAccountConnector#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The host URI of the OAuth application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#host_uri DeveloperConnectAccountConnector#host_uri}
  */
  readonly hostUri: string;
  /**
  * Disable PKCE for this OAuth config. PKCE is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#pkce_disabled DeveloperConnectAccountConnector#pkce_disabled}
  */
  readonly pkceDisabled?: boolean | cdktn.IResolvable;
  /**
  * The type of the SCM provider.
  * Possible values:
  * SCM_PROVIDER_UNKNOWN
  * GITHUB_ENTERPRISE
  * GITLAB_ENTERPRISE
  * BITBUCKET_DATA_CENTER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#scm_provider DeveloperConnectAccountConnector#scm_provider}
  */
  readonly scmProvider: string;
  /**
  * The scopes to be requested during OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#scopes DeveloperConnectAccountConnector#scopes}
  */
  readonly scopes: string[];
  /**
  * SSL certificate to use for requests to a private service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#ssl_ca_certificate DeveloperConnectAccountConnector#ssl_ca_certificate}
  */
  readonly sslCaCertificate?: string;
  /**
  * The OAuth2 token request URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#token_uri DeveloperConnectAccountConnector#token_uri}
  */
  readonly tokenUri: string;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#service_directory_config DeveloperConnectAccountConnector#service_directory_config}
  */
  readonly serviceDirectoryConfig?: DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig;
}

export function developerConnectAccountConnectorCustomOauthConfigToTerraform(struct?: DeveloperConnectAccountConnectorCustomOauthConfigOutputReference | DeveloperConnectAccountConnectorCustomOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_uri: cdktn.stringToTerraform(struct!.authUri),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    host_uri: cdktn.stringToTerraform(struct!.hostUri),
    pkce_disabled: cdktn.booleanToTerraform(struct!.pkceDisabled),
    scm_provider: cdktn.stringToTerraform(struct!.scmProvider),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    ssl_ca_certificate: cdktn.stringToTerraform(struct!.sslCaCertificate),
    token_uri: cdktn.stringToTerraform(struct!.tokenUri),
    service_directory_config: developerConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
  }
}


export function developerConnectAccountConnectorCustomOauthConfigToHclTerraform(struct?: DeveloperConnectAccountConnectorCustomOauthConfigOutputReference | DeveloperConnectAccountConnectorCustomOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_uri: {
      value: cdktn.stringToHclTerraform(struct!.authUri),
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
    host_uri: {
      value: cdktn.stringToHclTerraform(struct!.hostUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkce_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.pkceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scm_provider: {
      value: cdktn.stringToHclTerraform(struct!.scmProvider),
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
    ssl_ca_certificate: {
      value: cdktn.stringToHclTerraform(struct!.sslCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_uri: {
      value: cdktn.stringToHclTerraform(struct!.tokenUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_config: {
      value: developerConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectAccountConnectorCustomOauthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectAccountConnectorCustomOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUri = this._authUri;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._hostUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUri = this._hostUri;
    }
    if (this._pkceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkceDisabled = this._pkceDisabled;
    }
    if (this._scmProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmProvider = this._scmProvider;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._sslCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificate = this._sslCaCertificate;
    }
    if (this._tokenUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUri = this._tokenUri;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectAccountConnectorCustomOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authUri = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._hostUri = undefined;
      this._pkceDisabled = undefined;
      this._scmProvider = undefined;
      this._scopes = undefined;
      this._sslCaCertificate = undefined;
      this._tokenUri = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authUri = value.authUri;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._hostUri = value.hostUri;
      this._pkceDisabled = value.pkceDisabled;
      this._scmProvider = value.scmProvider;
      this._scopes = value.scopes;
      this._sslCaCertificate = value.sslCaCertificate;
      this._tokenUri = value.tokenUri;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
    }
  }

  // auth_uri - computed: false, optional: false, required: true
  private _authUri?: string; 
  public get authUri() {
    return this.getStringAttribute('auth_uri');
  }
  public set authUri(value: string) {
    this._authUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUriInput() {
    return this._authUri;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // host_uri - computed: false, optional: false, required: true
  private _hostUri?: string; 
  public get hostUri() {
    return this.getStringAttribute('host_uri');
  }
  public set hostUri(value: string) {
    this._hostUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUriInput() {
    return this._hostUri;
  }

  // pkce_disabled - computed: false, optional: true, required: false
  private _pkceDisabled?: boolean | cdktn.IResolvable; 
  public get pkceDisabled() {
    return this.getBooleanAttribute('pkce_disabled');
  }
  public set pkceDisabled(value: boolean | cdktn.IResolvable) {
    this._pkceDisabled = value;
  }
  public resetPkceDisabled() {
    this._pkceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceDisabledInput() {
    return this._pkceDisabled;
  }

  // scm_provider - computed: false, optional: false, required: true
  private _scmProvider?: string; 
  public get scmProvider() {
    return this.getStringAttribute('scm_provider');
  }
  public set scmProvider(value: string) {
    this._scmProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scmProviderInput() {
    return this._scmProvider;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // server_version - computed: true, optional: false, required: false
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }

  // ssl_ca_certificate - computed: false, optional: true, required: false
  private _sslCaCertificate?: string; 
  public get sslCaCertificate() {
    return this.getStringAttribute('ssl_ca_certificate');
  }
  public set sslCaCertificate(value: string) {
    this._sslCaCertificate = value;
  }
  public resetSslCaCertificate() {
    this._sslCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateInput() {
    return this._sslCaCertificate;
  }

  // token_uri - computed: false, optional: false, required: true
  private _tokenUri?: string; 
  public get tokenUri() {
    return this.getStringAttribute('token_uri');
  }
  public set tokenUri(value: string) {
    this._tokenUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUriInput() {
    return this._tokenUri;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: DeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }
}
export interface DeveloperConnectAccountConnectorProviderOauthConfig {
  /**
  * User selected scopes to apply to the Oauth config
  * In the event of changing scopes, user records under AccountConnector will
  * be deleted and users will re-auth again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#scopes DeveloperConnectAccountConnector#scopes}
  */
  readonly scopes: string[];
  /**
  * Possible values:
  * GITHUB
  * GITLAB
  * GOOGLE
  * SENTRY
  * ROVO
  * NEW_RELIC
  * DATASTAX
  * DYNATRACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#system_provider_id DeveloperConnectAccountConnector#system_provider_id}
  */
  readonly systemProviderId?: string;
}

export function developerConnectAccountConnectorProviderOauthConfigToTerraform(struct?: DeveloperConnectAccountConnectorProviderOauthConfigOutputReference | DeveloperConnectAccountConnectorProviderOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    system_provider_id: cdktn.stringToTerraform(struct!.systemProviderId),
  }
}


export function developerConnectAccountConnectorProviderOauthConfigToHclTerraform(struct?: DeveloperConnectAccountConnectorProviderOauthConfigOutputReference | DeveloperConnectAccountConnectorProviderOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    system_provider_id: {
      value: cdktn.stringToHclTerraform(struct!.systemProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectAccountConnectorProviderOauthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectAccountConnectorProviderOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._systemProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemProviderId = this._systemProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectAccountConnectorProviderOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scopes = undefined;
      this._systemProviderId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scopes = value.scopes;
      this._systemProviderId = value.systemProviderId;
    }
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // system_provider_id - computed: false, optional: true, required: false
  private _systemProviderId?: string; 
  public get systemProviderId() {
    return this.getStringAttribute('system_provider_id');
  }
  public set systemProviderId(value: string) {
    this._systemProviderId = value;
  }
  public resetSystemProviderId() {
    this._systemProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemProviderIdInput() {
    return this._systemProviderId;
  }
}
export interface DeveloperConnectAccountConnectorProxyConfig {
  /**
  * Setting this to true allows the git and http proxies to perform actions on
  * behalf of the user configured under the account connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#enabled DeveloperConnectAccountConnector#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function developerConnectAccountConnectorProxyConfigToTerraform(struct?: DeveloperConnectAccountConnectorProxyConfigOutputReference | DeveloperConnectAccountConnectorProxyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function developerConnectAccountConnectorProxyConfigToHclTerraform(struct?: DeveloperConnectAccountConnectorProxyConfigOutputReference | DeveloperConnectAccountConnectorProxyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectAccountConnectorProxyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectAccountConnectorProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectAccountConnectorProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DeveloperConnectAccountConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#create DeveloperConnectAccountConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#delete DeveloperConnectAccountConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#update DeveloperConnectAccountConnector#update}
  */
  readonly update?: string;
}

export function developerConnectAccountConnectorTimeoutsToTerraform(struct?: DeveloperConnectAccountConnectorTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function developerConnectAccountConnectorTimeoutsToHclTerraform(struct?: DeveloperConnectAccountConnectorTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class DeveloperConnectAccountConnectorTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeveloperConnectAccountConnectorTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DeveloperConnectAccountConnectorTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector google_developer_connect_account_connector}
*/
export class DeveloperConnectAccountConnector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_developer_connect_account_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DeveloperConnectAccountConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeveloperConnectAccountConnector to import
  * @param importFromId The id of the existing DeveloperConnectAccountConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeveloperConnectAccountConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_developer_connect_account_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/developer_connect_account_connector google_developer_connect_account_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeveloperConnectAccountConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DeveloperConnectAccountConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_developer_connect_account_connector',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.31.0',
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
    this._accountConnectorId = config.accountConnectorId;
    this._annotations = config.annotations;
    this._etag = config.etag;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._customOauthConfig.internalValue = config.customOauthConfig;
    this._providerOauthConfig.internalValue = config.providerOauthConfig;
    this._proxyConfig.internalValue = config.proxyConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_connector_id - computed: false, optional: false, required: true
  private _accountConnectorId?: string; 
  public get accountConnectorId() {
    return this.getStringAttribute('account_connector_id');
  }
  public set accountConnectorId(value: string) {
    this._accountConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountConnectorIdInput() {
    return this._accountConnectorId;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktn.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // oauth_start_uri - computed: true, optional: false, required: false
  public get oauthStartUri() {
    return this.getStringAttribute('oauth_start_uri');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_oauth_config - computed: false, optional: true, required: false
  private _customOauthConfig = new DeveloperConnectAccountConnectorCustomOauthConfigOutputReference(this, "custom_oauth_config");
  public get customOauthConfig() {
    return this._customOauthConfig;
  }
  public putCustomOauthConfig(value: DeveloperConnectAccountConnectorCustomOauthConfig) {
    this._customOauthConfig.internalValue = value;
  }
  public resetCustomOauthConfig() {
    this._customOauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOauthConfigInput() {
    return this._customOauthConfig.internalValue;
  }

  // provider_oauth_config - computed: false, optional: true, required: false
  private _providerOauthConfig = new DeveloperConnectAccountConnectorProviderOauthConfigOutputReference(this, "provider_oauth_config");
  public get providerOauthConfig() {
    return this._providerOauthConfig;
  }
  public putProviderOauthConfig(value: DeveloperConnectAccountConnectorProviderOauthConfig) {
    this._providerOauthConfig.internalValue = value;
  }
  public resetProviderOauthConfig() {
    this._providerOauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerOauthConfigInput() {
    return this._providerOauthConfig.internalValue;
  }

  // proxy_config - computed: false, optional: true, required: false
  private _proxyConfig = new DeveloperConnectAccountConnectorProxyConfigOutputReference(this, "proxy_config");
  public get proxyConfig() {
    return this._proxyConfig;
  }
  public putProxyConfig(value: DeveloperConnectAccountConnectorProxyConfig) {
    this._proxyConfig.internalValue = value;
  }
  public resetProxyConfig() {
    this._proxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigInput() {
    return this._proxyConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DeveloperConnectAccountConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DeveloperConnectAccountConnectorTimeouts) {
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
      account_connector_id: cdktn.stringToTerraform(this._accountConnectorId),
      annotations: cdktn.hashMapper(cdktn.stringToTerraform)(this._annotations),
      etag: cdktn.stringToTerraform(this._etag),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      custom_oauth_config: developerConnectAccountConnectorCustomOauthConfigToTerraform(this._customOauthConfig.internalValue),
      provider_oauth_config: developerConnectAccountConnectorProviderOauthConfigToTerraform(this._providerOauthConfig.internalValue),
      proxy_config: developerConnectAccountConnectorProxyConfigToTerraform(this._proxyConfig.internalValue),
      timeouts: developerConnectAccountConnectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_connector_id: {
        value: cdktn.stringToHclTerraform(this._accountConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      etag: {
        value: cdktn.stringToHclTerraform(this._etag),
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
      custom_oauth_config: {
        value: developerConnectAccountConnectorCustomOauthConfigToHclTerraform(this._customOauthConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeveloperConnectAccountConnectorCustomOauthConfigList",
      },
      provider_oauth_config: {
        value: developerConnectAccountConnectorProviderOauthConfigToHclTerraform(this._providerOauthConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeveloperConnectAccountConnectorProviderOauthConfigList",
      },
      proxy_config: {
        value: developerConnectAccountConnectorProxyConfigToHclTerraform(this._proxyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeveloperConnectAccountConnectorProxyConfigList",
      },
      timeouts: {
        value: developerConnectAccountConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeveloperConnectAccountConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
