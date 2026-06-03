/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ContainerAnalysisOccurrenceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#deletion_policy ContainerAnalysisOccurrence#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The analysis note associated with this occurrence, in the form of
  * projects/[PROJECT]/notes/[NOTE_ID]. This field can be used as a
  * filter in list requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#note_name ContainerAnalysisOccurrence#note_name}
  */
  readonly noteName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}
  */
  readonly project?: string;
  /**
  * A description of actions that can be taken to remedy the note.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#remediation ContainerAnalysisOccurrence#remediation}
  */
  readonly remediation?: string;
  /**
  * Required. Immutable. A URI that represents the resource for which
  * the occurrence applies. For example,
  * https://gcr.io/project/image@sha256:123abc for a Docker image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#resource_uri ContainerAnalysisOccurrence#resource_uri}
  */
  readonly resourceUri: string;
  /**
  * attestation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#attestation ContainerAnalysisOccurrence#attestation}
  */
  readonly attestation: ContainerAnalysisOccurrenceAttestation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#timeouts ContainerAnalysisOccurrence#timeouts}
  */
  readonly timeouts?: ContainerAnalysisOccurrenceTimeouts;
}
export interface ContainerAnalysisOccurrenceAttestationSignatures {
  /**
  * The identifier for the public key that verifies this
  * signature. MUST be an RFC3986 conformant
  * URI. * When possible, the key id should be an
  * immutable reference, such as a cryptographic digest.
  * Examples of valid values:
  * 
  * * OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
  *   for more details on this scheme.
  *     * 'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
  * * RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):
  *     * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#public_key_id ContainerAnalysisOccurrence#public_key_id}
  */
  readonly publicKeyId: string;
  /**
  * The content of the signature, an opaque bytestring.
  * The payload that this signature verifies MUST be
  * unambiguously provided with the Signature during
  * verification. A wrapper message might provide the
  * payload explicitly. Alternatively, a message might
  * have a canonical serialization that can always be
  * unambiguously computed to derive the payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#signature ContainerAnalysisOccurrence#signature}
  */
  readonly signature?: string;
}

export function containerAnalysisOccurrenceAttestationSignaturesToTerraform(struct?: ContainerAnalysisOccurrenceAttestationSignatures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key_id: cdktn.stringToTerraform(struct!.publicKeyId),
    signature: cdktn.stringToTerraform(struct!.signature),
  }
}


export function containerAnalysisOccurrenceAttestationSignaturesToHclTerraform(struct?: ContainerAnalysisOccurrenceAttestationSignatures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_key_id: {
      value: cdktn.stringToHclTerraform(struct!.publicKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature: {
      value: cdktn.stringToHclTerraform(struct!.signature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAnalysisOccurrenceAttestationSignaturesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAnalysisOccurrenceAttestationSignatures | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyId = this._publicKeyId;
    }
    if (this._signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAnalysisOccurrenceAttestationSignatures | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicKeyId = undefined;
      this._signature = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicKeyId = value.publicKeyId;
      this._signature = value.signature;
    }
  }

  // public_key_id - computed: false, optional: false, required: true
  private _publicKeyId?: string; 
  public get publicKeyId() {
    return this.getStringAttribute('public_key_id');
  }
  public set publicKeyId(value: string) {
    this._publicKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyIdInput() {
    return this._publicKeyId;
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }
}

export class ContainerAnalysisOccurrenceAttestationSignaturesList extends cdktn.ComplexList {
  public internalValue? : ContainerAnalysisOccurrenceAttestationSignatures[] | cdktn.IResolvable

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
  public get(index: number): ContainerAnalysisOccurrenceAttestationSignaturesOutputReference {
    return new ContainerAnalysisOccurrenceAttestationSignaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAnalysisOccurrenceAttestation {
  /**
  * The serialized payload that is verified by one or
  * more signatures. A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#serialized_payload ContainerAnalysisOccurrence#serialized_payload}
  */
  readonly serializedPayload: string;
  /**
  * signatures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#signatures ContainerAnalysisOccurrence#signatures}
  */
  readonly signatures: ContainerAnalysisOccurrenceAttestationSignatures[] | cdktn.IResolvable;
}

export function containerAnalysisOccurrenceAttestationToTerraform(struct?: ContainerAnalysisOccurrenceAttestationOutputReference | ContainerAnalysisOccurrenceAttestation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serialized_payload: cdktn.stringToTerraform(struct!.serializedPayload),
    signatures: cdktn.listMapper(containerAnalysisOccurrenceAttestationSignaturesToTerraform, true)(struct!.signatures),
  }
}


export function containerAnalysisOccurrenceAttestationToHclTerraform(struct?: ContainerAnalysisOccurrenceAttestationOutputReference | ContainerAnalysisOccurrenceAttestation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    serialized_payload: {
      value: cdktn.stringToHclTerraform(struct!.serializedPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signatures: {
      value: cdktn.listMapperHcl(containerAnalysisOccurrenceAttestationSignaturesToHclTerraform, true)(struct!.signatures),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerAnalysisOccurrenceAttestationSignaturesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAnalysisOccurrenceAttestationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAnalysisOccurrenceAttestation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serializedPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializedPayload = this._serializedPayload;
    }
    if (this._signatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatures = this._signatures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAnalysisOccurrenceAttestation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serializedPayload = undefined;
      this._signatures.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serializedPayload = value.serializedPayload;
      this._signatures.internalValue = value.signatures;
    }
  }

  // serialized_payload - computed: false, optional: false, required: true
  private _serializedPayload?: string; 
  public get serializedPayload() {
    return this.getStringAttribute('serialized_payload');
  }
  public set serializedPayload(value: string) {
    this._serializedPayload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializedPayloadInput() {
    return this._serializedPayload;
  }

  // signatures - computed: false, optional: false, required: true
  private _signatures = new ContainerAnalysisOccurrenceAttestationSignaturesList(this, "signatures", true);
  public get signatures() {
    return this._signatures;
  }
  public putSignatures(value: ContainerAnalysisOccurrenceAttestationSignatures[] | cdktn.IResolvable) {
    this._signatures.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturesInput() {
    return this._signatures.internalValue;
  }
}
export interface ContainerAnalysisOccurrenceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#create ContainerAnalysisOccurrence#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#delete ContainerAnalysisOccurrence#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#update ContainerAnalysisOccurrence#update}
  */
  readonly update?: string;
}

export function containerAnalysisOccurrenceTimeoutsToTerraform(struct?: ContainerAnalysisOccurrenceTimeouts | cdktn.IResolvable): any {
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


export function containerAnalysisOccurrenceTimeoutsToHclTerraform(struct?: ContainerAnalysisOccurrenceTimeouts | cdktn.IResolvable): any {
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

export class ContainerAnalysisOccurrenceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerAnalysisOccurrenceTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerAnalysisOccurrenceTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence google_container_analysis_occurrence}
*/
export class ContainerAnalysisOccurrence extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_analysis_occurrence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ContainerAnalysisOccurrence resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerAnalysisOccurrence to import
  * @param importFromId The id of the existing ContainerAnalysisOccurrence that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerAnalysisOccurrence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_container_analysis_occurrence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/container_analysis_occurrence google_container_analysis_occurrence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAnalysisOccurrenceConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAnalysisOccurrenceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_analysis_occurrence',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.35.0',
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
    this._id = config.id;
    this._noteName = config.noteName;
    this._project = config.project;
    this._remediation = config.remediation;
    this._resourceUri = config.resourceUri;
    this._attestation.internalValue = config.attestation;
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // note_name - computed: false, optional: false, required: true
  private _noteName?: string; 
  public get noteName() {
    return this.getStringAttribute('note_name');
  }
  public set noteName(value: string) {
    this._noteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noteNameInput() {
    return this._noteName;
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

  // remediation - computed: false, optional: true, required: false
  private _remediation?: string; 
  public get remediation() {
    return this.getStringAttribute('remediation');
  }
  public set remediation(value: string) {
    this._remediation = value;
  }
  public resetRemediation() {
    this._remediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInput() {
    return this._remediation;
  }

  // resource_uri - computed: false, optional: false, required: true
  private _resourceUri?: string; 
  public get resourceUri() {
    return this.getStringAttribute('resource_uri');
  }
  public set resourceUri(value: string) {
    this._resourceUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUriInput() {
    return this._resourceUri;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // attestation - computed: false, optional: false, required: true
  private _attestation = new ContainerAnalysisOccurrenceAttestationOutputReference(this, "attestation");
  public get attestation() {
    return this._attestation;
  }
  public putAttestation(value: ContainerAnalysisOccurrenceAttestation) {
    this._attestation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationInput() {
    return this._attestation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerAnalysisOccurrenceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerAnalysisOccurrenceTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      note_name: cdktn.stringToTerraform(this._noteName),
      project: cdktn.stringToTerraform(this._project),
      remediation: cdktn.stringToTerraform(this._remediation),
      resource_uri: cdktn.stringToTerraform(this._resourceUri),
      attestation: containerAnalysisOccurrenceAttestationToTerraform(this._attestation.internalValue),
      timeouts: containerAnalysisOccurrenceTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note_name: {
        value: cdktn.stringToHclTerraform(this._noteName),
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
      remediation: {
        value: cdktn.stringToHclTerraform(this._remediation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_uri: {
        value: cdktn.stringToHclTerraform(this._resourceUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attestation: {
        value: containerAnalysisOccurrenceAttestationToHclTerraform(this._attestation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAnalysisOccurrenceAttestationList",
      },
      timeouts: {
        value: containerAnalysisOccurrenceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerAnalysisOccurrenceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
