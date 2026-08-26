/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CertificateManagerTrustConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#deletion_policy CertificateManagerTrustConfig#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * One or more paragraphs of text description of a trust config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#description CertificateManagerTrustConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the trust config.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#labels CertificateManagerTrustConfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The trust config location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#location CertificateManagerTrustConfig#location}
  */
  readonly location: string;
  /**
  * A user-defined name of the trust config. Trust config names must be unique globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#name CertificateManagerTrustConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}
  */
  readonly project?: string;
  /**
  * allowlisted_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#allowlisted_certificates CertificateManagerTrustConfig#allowlisted_certificates}
  */
  readonly allowlistedCertificates?: CertificateManagerTrustConfigAllowlistedCertificates[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#timeouts CertificateManagerTrustConfig#timeouts}
  */
  readonly timeouts?: CertificateManagerTrustConfigTimeouts;
  /**
  * trust_stores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#trust_stores CertificateManagerTrustConfig#trust_stores}
  */
  readonly trustStores?: CertificateManagerTrustConfigTrustStores[] | cdktn.IResolvable;
}
export interface CertificateManagerTrustConfigAllowlistedCertificates {
  /**
  * PEM certificate that is allowlisted. The certificate can be up to 5k bytes, and must be a parseable X.509 certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}
  */
  readonly pemCertificate: string;
}

export function certificateManagerTrustConfigAllowlistedCertificatesToTerraform(struct?: CertificateManagerTrustConfigAllowlistedCertificates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pem_certificate: cdktn.stringToTerraform(struct!.pemCertificate),
  }
}


export function certificateManagerTrustConfigAllowlistedCertificatesToHclTerraform(struct?: CertificateManagerTrustConfigAllowlistedCertificates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pem_certificate: {
      value: cdktn.stringToHclTerraform(struct!.pemCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateManagerTrustConfigAllowlistedCertificatesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CertificateManagerTrustConfigAllowlistedCertificates | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pemCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificate = this._pemCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerTrustConfigAllowlistedCertificates | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pemCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pemCertificate = value.pemCertificate;
    }
  }

  // pem_certificate - computed: false, optional: false, required: true
  private _pemCertificate?: string; 
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
  public set pemCertificate(value: string) {
    this._pemCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateInput() {
    return this._pemCertificate;
  }
}

export class CertificateManagerTrustConfigAllowlistedCertificatesList extends cdktn.ComplexList {
  public internalValue? : CertificateManagerTrustConfigAllowlistedCertificates[] | cdktn.IResolvable

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
  public get(index: number): CertificateManagerTrustConfigAllowlistedCertificatesOutputReference {
    return new CertificateManagerTrustConfigAllowlistedCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateManagerTrustConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#create CertificateManagerTrustConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#delete CertificateManagerTrustConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#update CertificateManagerTrustConfig#update}
  */
  readonly update?: string;
}

export function certificateManagerTrustConfigTimeoutsToTerraform(struct?: CertificateManagerTrustConfigTimeouts | cdktn.IResolvable): any {
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


export function certificateManagerTrustConfigTimeoutsToHclTerraform(struct?: CertificateManagerTrustConfigTimeouts | cdktn.IResolvable): any {
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

export class CertificateManagerTrustConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateManagerTrustConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CertificateManagerTrustConfigTimeouts | cdktn.IResolvable | undefined) {
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
export interface CertificateManagerTrustConfigTrustStoresIntermediateCas {
  /**
  * PEM intermediate certificate used for building up paths for validation.
  * Each certificate provided in PEM format may occupy up to 5kB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}
  */
  readonly pemCertificate?: string;
}

export function certificateManagerTrustConfigTrustStoresIntermediateCasToTerraform(struct?: CertificateManagerTrustConfigTrustStoresIntermediateCas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pem_certificate: cdktn.stringToTerraform(struct!.pemCertificate),
  }
}


export function certificateManagerTrustConfigTrustStoresIntermediateCasToHclTerraform(struct?: CertificateManagerTrustConfigTrustStoresIntermediateCas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pem_certificate: {
      value: cdktn.stringToHclTerraform(struct!.pemCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CertificateManagerTrustConfigTrustStoresIntermediateCas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pemCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificate = this._pemCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerTrustConfigTrustStoresIntermediateCas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pemCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pemCertificate = value.pemCertificate;
    }
  }

  // pem_certificate - computed: false, optional: true, required: false
  private _pemCertificate?: string; 
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
  public set pemCertificate(value: string) {
    this._pemCertificate = value;
  }
  public resetPemCertificate() {
    this._pemCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateInput() {
    return this._pemCertificate;
  }
}

export class CertificateManagerTrustConfigTrustStoresIntermediateCasList extends cdktn.ComplexList {
  public internalValue? : CertificateManagerTrustConfigTrustStoresIntermediateCas[] | cdktn.IResolvable

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
  public get(index: number): CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference {
    return new CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateManagerTrustConfigTrustStoresTrustAnchors {
  /**
  * PEM root certificate of the PKI used for validation.
  * Each certificate provided in PEM format may occupy up to 5kB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}
  */
  readonly pemCertificate?: string;
}

export function certificateManagerTrustConfigTrustStoresTrustAnchorsToTerraform(struct?: CertificateManagerTrustConfigTrustStoresTrustAnchors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pem_certificate: cdktn.stringToTerraform(struct!.pemCertificate),
  }
}


export function certificateManagerTrustConfigTrustStoresTrustAnchorsToHclTerraform(struct?: CertificateManagerTrustConfigTrustStoresTrustAnchors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pem_certificate: {
      value: cdktn.stringToHclTerraform(struct!.pemCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CertificateManagerTrustConfigTrustStoresTrustAnchors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pemCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificate = this._pemCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerTrustConfigTrustStoresTrustAnchors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pemCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pemCertificate = value.pemCertificate;
    }
  }

  // pem_certificate - computed: false, optional: true, required: false
  private _pemCertificate?: string; 
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
  public set pemCertificate(value: string) {
    this._pemCertificate = value;
  }
  public resetPemCertificate() {
    this._pemCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateInput() {
    return this._pemCertificate;
  }
}

export class CertificateManagerTrustConfigTrustStoresTrustAnchorsList extends cdktn.ComplexList {
  public internalValue? : CertificateManagerTrustConfigTrustStoresTrustAnchors[] | cdktn.IResolvable

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
  public get(index: number): CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference {
    return new CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateManagerTrustConfigTrustStores {
  /**
  * intermediate_cas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#intermediate_cas CertificateManagerTrustConfig#intermediate_cas}
  */
  readonly intermediateCas?: CertificateManagerTrustConfigTrustStoresIntermediateCas[] | cdktn.IResolvable;
  /**
  * trust_anchors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#trust_anchors CertificateManagerTrustConfig#trust_anchors}
  */
  readonly trustAnchors?: CertificateManagerTrustConfigTrustStoresTrustAnchors[] | cdktn.IResolvable;
}

export function certificateManagerTrustConfigTrustStoresToTerraform(struct?: CertificateManagerTrustConfigTrustStores | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    intermediate_cas: cdktn.listMapper(certificateManagerTrustConfigTrustStoresIntermediateCasToTerraform, true)(struct!.intermediateCas),
    trust_anchors: cdktn.listMapper(certificateManagerTrustConfigTrustStoresTrustAnchorsToTerraform, true)(struct!.trustAnchors),
  }
}


export function certificateManagerTrustConfigTrustStoresToHclTerraform(struct?: CertificateManagerTrustConfigTrustStores | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    intermediate_cas: {
      value: cdktn.listMapperHcl(certificateManagerTrustConfigTrustStoresIntermediateCasToHclTerraform, true)(struct!.intermediateCas),
      isBlock: true,
      type: "list",
      storageClassType: "CertificateManagerTrustConfigTrustStoresIntermediateCasList",
    },
    trust_anchors: {
      value: cdktn.listMapperHcl(certificateManagerTrustConfigTrustStoresTrustAnchorsToHclTerraform, true)(struct!.trustAnchors),
      isBlock: true,
      type: "list",
      storageClassType: "CertificateManagerTrustConfigTrustStoresTrustAnchorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateManagerTrustConfigTrustStoresOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CertificateManagerTrustConfigTrustStores | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intermediateCas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateCas = this._intermediateCas?.internalValue;
    }
    if (this._trustAnchors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAnchors = this._trustAnchors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerTrustConfigTrustStores | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intermediateCas.internalValue = undefined;
      this._trustAnchors.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intermediateCas.internalValue = value.intermediateCas;
      this._trustAnchors.internalValue = value.trustAnchors;
    }
  }

  // intermediate_cas - computed: false, optional: true, required: false
  private _intermediateCas = new CertificateManagerTrustConfigTrustStoresIntermediateCasList(this, "intermediate_cas", false);
  public get intermediateCas() {
    return this._intermediateCas;
  }
  public putIntermediateCas(value: CertificateManagerTrustConfigTrustStoresIntermediateCas[] | cdktn.IResolvable) {
    this._intermediateCas.internalValue = value;
  }
  public resetIntermediateCas() {
    this._intermediateCas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateCasInput() {
    return this._intermediateCas.internalValue;
  }

  // trust_anchors - computed: false, optional: true, required: false
  private _trustAnchors = new CertificateManagerTrustConfigTrustStoresTrustAnchorsList(this, "trust_anchors", false);
  public get trustAnchors() {
    return this._trustAnchors;
  }
  public putTrustAnchors(value: CertificateManagerTrustConfigTrustStoresTrustAnchors[] | cdktn.IResolvable) {
    this._trustAnchors.internalValue = value;
  }
  public resetTrustAnchors() {
    this._trustAnchors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAnchorsInput() {
    return this._trustAnchors.internalValue;
  }
}

export class CertificateManagerTrustConfigTrustStoresList extends cdktn.ComplexList {
  public internalValue? : CertificateManagerTrustConfigTrustStores[] | cdktn.IResolvable

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
  public get(index: number): CertificateManagerTrustConfigTrustStoresOutputReference {
    return new CertificateManagerTrustConfigTrustStoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config google_certificate_manager_trust_config}
*/
export class CertificateManagerTrustConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_certificate_manager_trust_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CertificateManagerTrustConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateManagerTrustConfig to import
  * @param importFromId The id of the existing CertificateManagerTrustConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateManagerTrustConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_certificate_manager_trust_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/certificate_manager_trust_config google_certificate_manager_trust_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateManagerTrustConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateManagerTrustConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_certificate_manager_trust_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._allowlistedCertificates.internalValue = config.allowlistedCertificates;
    this._timeouts.internalValue = config.timeouts;
    this._trustStores.internalValue = config.trustStores;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // allowlisted_certificates - computed: false, optional: true, required: false
  private _allowlistedCertificates = new CertificateManagerTrustConfigAllowlistedCertificatesList(this, "allowlisted_certificates", false);
  public get allowlistedCertificates() {
    return this._allowlistedCertificates;
  }
  public putAllowlistedCertificates(value: CertificateManagerTrustConfigAllowlistedCertificates[] | cdktn.IResolvable) {
    this._allowlistedCertificates.internalValue = value;
  }
  public resetAllowlistedCertificates() {
    this._allowlistedCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedCertificatesInput() {
    return this._allowlistedCertificates.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CertificateManagerTrustConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CertificateManagerTrustConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trust_stores - computed: false, optional: true, required: false
  private _trustStores = new CertificateManagerTrustConfigTrustStoresList(this, "trust_stores", false);
  public get trustStores() {
    return this._trustStores;
  }
  public putTrustStores(value: CertificateManagerTrustConfigTrustStores[] | cdktn.IResolvable) {
    this._trustStores.internalValue = value;
  }
  public resetTrustStores() {
    this._trustStores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoresInput() {
    return this._trustStores.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      allowlisted_certificates: cdktn.listMapper(certificateManagerTrustConfigAllowlistedCertificatesToTerraform, true)(this._allowlistedCertificates.internalValue),
      timeouts: certificateManagerTrustConfigTimeoutsToTerraform(this._timeouts.internalValue),
      trust_stores: cdktn.listMapper(certificateManagerTrustConfigTrustStoresToTerraform, true)(this._trustStores.internalValue),
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
      allowlisted_certificates: {
        value: cdktn.listMapperHcl(certificateManagerTrustConfigAllowlistedCertificatesToHclTerraform, true)(this._allowlistedCertificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificateManagerTrustConfigAllowlistedCertificatesList",
      },
      timeouts: {
        value: certificateManagerTrustConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateManagerTrustConfigTimeouts",
      },
      trust_stores: {
        value: cdktn.listMapperHcl(certificateManagerTrustConfigTrustStoresToHclTerraform, true)(this._trustStores.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificateManagerTrustConfigTrustStoresList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
