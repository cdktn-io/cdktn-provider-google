/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IdentityPlatformInboundSamlConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#deletion_policy IdentityPlatformInboundSamlConfig#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human friendly display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#display_name IdentityPlatformInboundSamlConfig#display_name}
  */
  readonly displayName: string;
  /**
  * If this config allows users to sign in with the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#enabled IdentityPlatformInboundSamlConfig#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#id IdentityPlatformInboundSamlConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,
  * hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
  * alphanumeric character, and have at least 2 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#name IdentityPlatformInboundSamlConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#project IdentityPlatformInboundSamlConfig#project}
  */
  readonly project?: string;
  /**
  * idp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#idp_config IdentityPlatformInboundSamlConfig#idp_config}
  */
  readonly idpConfig: IdentityPlatformInboundSamlConfigIdpConfig;
  /**
  * sp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#sp_config IdentityPlatformInboundSamlConfig#sp_config}
  */
  readonly spConfig: IdentityPlatformInboundSamlConfigSpConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#timeouts IdentityPlatformInboundSamlConfig#timeouts}
  */
  readonly timeouts?: IdentityPlatformInboundSamlConfigTimeouts;
}
export interface IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates {
  /**
  * The IdP's x509 certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#x509_certificate IdentityPlatformInboundSamlConfig#x509_certificate}
  */
  readonly x509Certificate?: string;
}

export function identityPlatformInboundSamlConfigIdpConfigIdpCertificatesToTerraform(struct?: IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    x509_certificate: cdktn.stringToTerraform(struct!.x509Certificate),
  }
}


export function identityPlatformInboundSamlConfigIdpConfigIdpCertificatesToHclTerraform(struct?: IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    x509_certificate: {
      value: cdktn.stringToHclTerraform(struct!.x509Certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x509Certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509Certificate = this._x509Certificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x509Certificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x509Certificate = value.x509Certificate;
    }
  }

  // x509_certificate - computed: false, optional: true, required: false
  private _x509Certificate?: string; 
  public get x509Certificate() {
    return this.getStringAttribute('x509_certificate');
  }
  public set x509Certificate(value: string) {
    this._x509Certificate = value;
  }
  public resetX509Certificate() {
    this._x509Certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertificateInput() {
    return this._x509Certificate;
  }
}

export class IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList extends cdktn.ComplexList {
  public internalValue? : IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates[] | cdktn.IResolvable

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
  public get(index: number): IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference {
    return new IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityPlatformInboundSamlConfigIdpConfig {
  /**
  * Unique identifier for all SAML entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#idp_entity_id IdentityPlatformInboundSamlConfig#idp_entity_id}
  */
  readonly idpEntityId: string;
  /**
  * Indicates if outbounding SAMLRequest should be signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#sign_request IdentityPlatformInboundSamlConfig#sign_request}
  */
  readonly signRequest?: boolean | cdktn.IResolvable;
  /**
  * URL to send Authentication request to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#sso_url IdentityPlatformInboundSamlConfig#sso_url}
  */
  readonly ssoUrl: string;
  /**
  * idp_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#idp_certificates IdentityPlatformInboundSamlConfig#idp_certificates}
  */
  readonly idpCertificates: IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates[] | cdktn.IResolvable;
}

export function identityPlatformInboundSamlConfigIdpConfigToTerraform(struct?: IdentityPlatformInboundSamlConfigIdpConfigOutputReference | IdentityPlatformInboundSamlConfigIdpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idp_entity_id: cdktn.stringToTerraform(struct!.idpEntityId),
    sign_request: cdktn.booleanToTerraform(struct!.signRequest),
    sso_url: cdktn.stringToTerraform(struct!.ssoUrl),
    idp_certificates: cdktn.listMapper(identityPlatformInboundSamlConfigIdpConfigIdpCertificatesToTerraform, true)(struct!.idpCertificates),
  }
}


export function identityPlatformInboundSamlConfigIdpConfigToHclTerraform(struct?: IdentityPlatformInboundSamlConfigIdpConfigOutputReference | IdentityPlatformInboundSamlConfigIdpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idp_entity_id: {
      value: cdktn.stringToHclTerraform(struct!.idpEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_request: {
      value: cdktn.booleanToHclTerraform(struct!.signRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sso_url: {
      value: cdktn.stringToHclTerraform(struct!.ssoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_certificates: {
      value: cdktn.listMapperHcl(identityPlatformInboundSamlConfigIdpConfigIdpCertificatesToHclTerraform, true)(struct!.idpCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformInboundSamlConfigIdpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformInboundSamlConfigIdpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpEntityId = this._idpEntityId;
    }
    if (this._signRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.signRequest = this._signRequest;
    }
    if (this._ssoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoUrl = this._ssoUrl;
    }
    if (this._idpCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpCertificates = this._idpCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformInboundSamlConfigIdpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idpEntityId = undefined;
      this._signRequest = undefined;
      this._ssoUrl = undefined;
      this._idpCertificates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idpEntityId = value.idpEntityId;
      this._signRequest = value.signRequest;
      this._ssoUrl = value.ssoUrl;
      this._idpCertificates.internalValue = value.idpCertificates;
    }
  }

  // idp_entity_id - computed: false, optional: false, required: true
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // sign_request - computed: false, optional: true, required: false
  private _signRequest?: boolean | cdktn.IResolvable; 
  public get signRequest() {
    return this.getBooleanAttribute('sign_request');
  }
  public set signRequest(value: boolean | cdktn.IResolvable) {
    this._signRequest = value;
  }
  public resetSignRequest() {
    this._signRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signRequestInput() {
    return this._signRequest;
  }

  // sso_url - computed: false, optional: false, required: true
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
  }

  // idp_certificates - computed: false, optional: false, required: true
  private _idpCertificates = new IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList(this, "idp_certificates", false);
  public get idpCertificates() {
    return this._idpCertificates;
  }
  public putIdpCertificates(value: IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates[] | cdktn.IResolvable) {
    this._idpCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCertificatesInput() {
    return this._idpCertificates.internalValue;
  }
}
export interface IdentityPlatformInboundSamlConfigSpConfigSpCertificates {
}

export function identityPlatformInboundSamlConfigSpConfigSpCertificatesToTerraform(struct?: IdentityPlatformInboundSamlConfigSpConfigSpCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function identityPlatformInboundSamlConfigSpConfigSpCertificatesToHclTerraform(struct?: IdentityPlatformInboundSamlConfigSpConfigSpCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IdentityPlatformInboundSamlConfigSpConfigSpCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformInboundSamlConfigSpConfigSpCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x509_certificate - computed: true, optional: false, required: false
  public get x509Certificate() {
    return this.getStringAttribute('x509_certificate');
  }
}

export class IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList extends cdktn.ComplexList {

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
  public get(index: number): IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference {
    return new IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityPlatformInboundSamlConfigSpConfig {
  /**
  * Callback URI where responses from IDP are handled. Must start with 'https://'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#callback_uri IdentityPlatformInboundSamlConfig#callback_uri}
  */
  readonly callbackUri?: string;
  /**
  * Unique identifier for all SAML entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#sp_entity_id IdentityPlatformInboundSamlConfig#sp_entity_id}
  */
  readonly spEntityId?: string;
}

export function identityPlatformInboundSamlConfigSpConfigToTerraform(struct?: IdentityPlatformInboundSamlConfigSpConfigOutputReference | IdentityPlatformInboundSamlConfigSpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    callback_uri: cdktn.stringToTerraform(struct!.callbackUri),
    sp_entity_id: cdktn.stringToTerraform(struct!.spEntityId),
  }
}


export function identityPlatformInboundSamlConfigSpConfigToHclTerraform(struct?: IdentityPlatformInboundSamlConfigSpConfigOutputReference | IdentityPlatformInboundSamlConfigSpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    callback_uri: {
      value: cdktn.stringToHclTerraform(struct!.callbackUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_entity_id: {
      value: cdktn.stringToHclTerraform(struct!.spEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityPlatformInboundSamlConfigSpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformInboundSamlConfigSpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callbackUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackUri = this._callbackUri;
    }
    if (this._spEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEntityId = this._spEntityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformInboundSamlConfigSpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callbackUri = undefined;
      this._spEntityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callbackUri = value.callbackUri;
      this._spEntityId = value.spEntityId;
    }
  }

  // callback_uri - computed: false, optional: true, required: false
  private _callbackUri?: string; 
  public get callbackUri() {
    return this.getStringAttribute('callback_uri');
  }
  public set callbackUri(value: string) {
    this._callbackUri = value;
  }
  public resetCallbackUri() {
    this._callbackUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUriInput() {
    return this._callbackUri;
  }

  // sp_certificates - computed: true, optional: false, required: false
  private _spCertificates = new IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList(this, "sp_certificates", false);
  public get spCertificates() {
    return this._spCertificates;
  }

  // sp_entity_id - computed: false, optional: true, required: false
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  public resetSpEntityId() {
    this._spEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }
}
export interface IdentityPlatformInboundSamlConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#create IdentityPlatformInboundSamlConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#delete IdentityPlatformInboundSamlConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#update IdentityPlatformInboundSamlConfig#update}
  */
  readonly update?: string;
}

export function identityPlatformInboundSamlConfigTimeoutsToTerraform(struct?: IdentityPlatformInboundSamlConfigTimeouts | cdktn.IResolvable): any {
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


export function identityPlatformInboundSamlConfigTimeoutsToHclTerraform(struct?: IdentityPlatformInboundSamlConfigTimeouts | cdktn.IResolvable): any {
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

export class IdentityPlatformInboundSamlConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityPlatformInboundSamlConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IdentityPlatformInboundSamlConfigTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config google_identity_platform_inbound_saml_config}
*/
export class IdentityPlatformInboundSamlConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_identity_platform_inbound_saml_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IdentityPlatformInboundSamlConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityPlatformInboundSamlConfig to import
  * @param importFromId The id of the existing IdentityPlatformInboundSamlConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityPlatformInboundSamlConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_identity_platform_inbound_saml_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/identity_platform_inbound_saml_config google_identity_platform_inbound_saml_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityPlatformInboundSamlConfigConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityPlatformInboundSamlConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_inbound_saml_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.36.0',
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
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._idpConfig.internalValue = config.idpConfig;
    this._spConfig.internalValue = config.spConfig;
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

  // idp_config - computed: false, optional: false, required: true
  private _idpConfig = new IdentityPlatformInboundSamlConfigIdpConfigOutputReference(this, "idp_config");
  public get idpConfig() {
    return this._idpConfig;
  }
  public putIdpConfig(value: IdentityPlatformInboundSamlConfigIdpConfig) {
    this._idpConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpConfigInput() {
    return this._idpConfig.internalValue;
  }

  // sp_config - computed: false, optional: false, required: true
  private _spConfig = new IdentityPlatformInboundSamlConfigSpConfigOutputReference(this, "sp_config");
  public get spConfig() {
    return this._spConfig;
  }
  public putSpConfig(value: IdentityPlatformInboundSamlConfigSpConfig) {
    this._spConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spConfigInput() {
    return this._spConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityPlatformInboundSamlConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityPlatformInboundSamlConfigTimeouts) {
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
      display_name: cdktn.stringToTerraform(this._displayName),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      idp_config: identityPlatformInboundSamlConfigIdpConfigToTerraform(this._idpConfig.internalValue),
      sp_config: identityPlatformInboundSamlConfigSpConfigToTerraform(this._spConfig.internalValue),
      timeouts: identityPlatformInboundSamlConfigTimeoutsToTerraform(this._timeouts.internalValue),
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
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      idp_config: {
        value: identityPlatformInboundSamlConfigIdpConfigToHclTerraform(this._idpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityPlatformInboundSamlConfigIdpConfigList",
      },
      sp_config: {
        value: identityPlatformInboundSamlConfigSpConfigToHclTerraform(this._spConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityPlatformInboundSamlConfigSpConfigList",
      },
      timeouts: {
        value: identityPlatformInboundSamlConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityPlatformInboundSamlConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
