/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KmsCryptoKeyVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the cryptoKey associated with the CryptoKeyVersions.
  * Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#crypto_key KmsCryptoKeyVersion#crypto_key}
  */
  readonly cryptoKey: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#deletion_policy KmsCryptoKeyVersion#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#id KmsCryptoKeyVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The current state of the CryptoKeyVersion. Note: you can only specify this field to manually 'ENABLE' or 'DISABLE' the CryptoKeyVersion,
  * otherwise the value of this field is always retrieved automatically. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#state KmsCryptoKeyVersion#state}
  */
  readonly state?: string;
  /**
  * external_protection_level_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#external_protection_level_options KmsCryptoKeyVersion#external_protection_level_options}
  */
  readonly externalProtectionLevelOptions?: KmsCryptoKeyVersionExternalProtectionLevelOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#timeouts KmsCryptoKeyVersion#timeouts}
  */
  readonly timeouts?: KmsCryptoKeyVersionTimeouts;
}
export interface KmsCryptoKeyVersionAttestationCertChains {
}

export function kmsCryptoKeyVersionAttestationCertChainsToTerraform(struct?: KmsCryptoKeyVersionAttestationCertChains): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kmsCryptoKeyVersionAttestationCertChainsToHclTerraform(struct?: KmsCryptoKeyVersionAttestationCertChains): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KmsCryptoKeyVersionAttestationCertChainsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KmsCryptoKeyVersionAttestationCertChains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsCryptoKeyVersionAttestationCertChains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cavium_certs - computed: true, optional: false, required: false
  public get caviumCerts() {
    return this.getListAttribute('cavium_certs');
  }

  // google_card_certs - computed: true, optional: false, required: false
  public get googleCardCerts() {
    return this.getListAttribute('google_card_certs');
  }

  // google_partition_certs - computed: true, optional: false, required: false
  public get googlePartitionCerts() {
    return this.getListAttribute('google_partition_certs');
  }
}

export class KmsCryptoKeyVersionAttestationCertChainsList extends cdktn.ComplexList {

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
  public get(index: number): KmsCryptoKeyVersionAttestationCertChainsOutputReference {
    return new KmsCryptoKeyVersionAttestationCertChainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions {
}

export function kmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsToTerraform(struct?: KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsToHclTerraform(struct?: KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ekm_connection_key_path - computed: true, optional: false, required: false
  public get ekmConnectionKeyPath() {
    return this.getStringAttribute('ekm_connection_key_path');
  }

  // external_key_uri - computed: true, optional: false, required: false
  public get externalKeyUri() {
    return this.getStringAttribute('external_key_uri');
  }
}

export class KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList extends cdktn.ComplexList {

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
  public get(index: number): KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference {
    return new KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsCryptoKeyVersionAttestation {
}

export function kmsCryptoKeyVersionAttestationToTerraform(struct?: KmsCryptoKeyVersionAttestation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kmsCryptoKeyVersionAttestationToHclTerraform(struct?: KmsCryptoKeyVersionAttestation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KmsCryptoKeyVersionAttestationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KmsCryptoKeyVersionAttestation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsCryptoKeyVersionAttestation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_chains - computed: true, optional: false, required: false
  private _certChains = new KmsCryptoKeyVersionAttestationCertChainsList(this, "cert_chains", false);
  public get certChains() {
    return this._certChains;
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // external_protection_level_options - computed: true, optional: false, required: false
  private _externalProtectionLevelOptions = new KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList(this, "external_protection_level_options", false);
  public get externalProtectionLevelOptions() {
    return this._externalProtectionLevelOptions;
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }
}

export class KmsCryptoKeyVersionAttestationList extends cdktn.ComplexList {

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
  public get(index: number): KmsCryptoKeyVersionAttestationOutputReference {
    return new KmsCryptoKeyVersionAttestationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsCryptoKeyVersionExternalProtectionLevelOptions {
  /**
  * The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#ekm_connection_key_path KmsCryptoKeyVersion#ekm_connection_key_path}
  */
  readonly ekmConnectionKeyPath?: string;
  /**
  * The URI for an external resource that this CryptoKeyVersion represents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#external_key_uri KmsCryptoKeyVersion#external_key_uri}
  */
  readonly externalKeyUri?: string;
}

export function kmsCryptoKeyVersionExternalProtectionLevelOptionsToTerraform(struct?: KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference | KmsCryptoKeyVersionExternalProtectionLevelOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ekm_connection_key_path: cdktn.stringToTerraform(struct!.ekmConnectionKeyPath),
    external_key_uri: cdktn.stringToTerraform(struct!.externalKeyUri),
  }
}


export function kmsCryptoKeyVersionExternalProtectionLevelOptionsToHclTerraform(struct?: KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference | KmsCryptoKeyVersionExternalProtectionLevelOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ekm_connection_key_path: {
      value: cdktn.stringToHclTerraform(struct!.ekmConnectionKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_key_uri: {
      value: cdktn.stringToHclTerraform(struct!.externalKeyUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsCryptoKeyVersionExternalProtectionLevelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ekmConnectionKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ekmConnectionKeyPath = this._ekmConnectionKeyPath;
    }
    if (this._externalKeyUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalKeyUri = this._externalKeyUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsCryptoKeyVersionExternalProtectionLevelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ekmConnectionKeyPath = undefined;
      this._externalKeyUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ekmConnectionKeyPath = value.ekmConnectionKeyPath;
      this._externalKeyUri = value.externalKeyUri;
    }
  }

  // ekm_connection_key_path - computed: false, optional: true, required: false
  private _ekmConnectionKeyPath?: string; 
  public get ekmConnectionKeyPath() {
    return this.getStringAttribute('ekm_connection_key_path');
  }
  public set ekmConnectionKeyPath(value: string) {
    this._ekmConnectionKeyPath = value;
  }
  public resetEkmConnectionKeyPath() {
    this._ekmConnectionKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ekmConnectionKeyPathInput() {
    return this._ekmConnectionKeyPath;
  }

  // external_key_uri - computed: false, optional: true, required: false
  private _externalKeyUri?: string; 
  public get externalKeyUri() {
    return this.getStringAttribute('external_key_uri');
  }
  public set externalKeyUri(value: string) {
    this._externalKeyUri = value;
  }
  public resetExternalKeyUri() {
    this._externalKeyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalKeyUriInput() {
    return this._externalKeyUri;
  }
}
export interface KmsCryptoKeyVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#create KmsCryptoKeyVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#delete KmsCryptoKeyVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#update KmsCryptoKeyVersion#update}
  */
  readonly update?: string;
}

export function kmsCryptoKeyVersionTimeoutsToTerraform(struct?: KmsCryptoKeyVersionTimeouts | cdktn.IResolvable): any {
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


export function kmsCryptoKeyVersionTimeoutsToHclTerraform(struct?: KmsCryptoKeyVersionTimeouts | cdktn.IResolvable): any {
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

export class KmsCryptoKeyVersionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KmsCryptoKeyVersionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: KmsCryptoKeyVersionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version google_kms_crypto_key_version}
*/
export class KmsCryptoKeyVersion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_crypto_key_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KmsCryptoKeyVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsCryptoKeyVersion to import
  * @param importFromId The id of the existing KmsCryptoKeyVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsCryptoKeyVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_kms_crypto_key_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/kms_crypto_key_version google_kms_crypto_key_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsCryptoKeyVersionConfig
  */
  public constructor(scope: Construct, id: string, config: KmsCryptoKeyVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_crypto_key_version',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
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
    this._cryptoKey = config.cryptoKey;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._state = config.state;
    this._externalProtectionLevelOptions.internalValue = config.externalProtectionLevelOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // attestation - computed: true, optional: false, required: false
  private _attestation = new KmsCryptoKeyVersionAttestationList(this, "attestation", false);
  public get attestation() {
    return this._attestation;
  }

  // crypto_key - computed: false, optional: false, required: true
  private _cryptoKey?: string; 
  public get cryptoKey() {
    return this.getStringAttribute('crypto_key');
  }
  public set cryptoKey(value: string) {
    this._cryptoKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey;
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

  // generate_time - computed: true, optional: false, required: false
  public get generateTime() {
    return this.getStringAttribute('generate_time');
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

  // protection_level - computed: true, optional: false, required: false
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // external_protection_level_options - computed: false, optional: true, required: false
  private _externalProtectionLevelOptions = new KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference(this, "external_protection_level_options");
  public get externalProtectionLevelOptions() {
    return this._externalProtectionLevelOptions;
  }
  public putExternalProtectionLevelOptions(value: KmsCryptoKeyVersionExternalProtectionLevelOptions) {
    this._externalProtectionLevelOptions.internalValue = value;
  }
  public resetExternalProtectionLevelOptions() {
    this._externalProtectionLevelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalProtectionLevelOptionsInput() {
    return this._externalProtectionLevelOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsCryptoKeyVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsCryptoKeyVersionTimeouts) {
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
      crypto_key: cdktn.stringToTerraform(this._cryptoKey),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      state: cdktn.stringToTerraform(this._state),
      external_protection_level_options: kmsCryptoKeyVersionExternalProtectionLevelOptionsToTerraform(this._externalProtectionLevelOptions.internalValue),
      timeouts: kmsCryptoKeyVersionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crypto_key: {
        value: cdktn.stringToHclTerraform(this._cryptoKey),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktn.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_protection_level_options: {
        value: kmsCryptoKeyVersionExternalProtectionLevelOptionsToHclTerraform(this._externalProtectionLevelOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsCryptoKeyVersionExternalProtectionLevelOptionsList",
      },
      timeouts: {
        value: kmsCryptoKeyVersionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsCryptoKeyVersionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
