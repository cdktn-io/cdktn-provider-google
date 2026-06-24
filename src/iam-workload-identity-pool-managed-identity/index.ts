/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IamWorkloadIdentityPoolManagedIdentityConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#deletion_policy IamWorkloadIdentityPoolManagedIdentity#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A description of the managed identity. Cannot exceed 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#description IamWorkloadIdentityPoolManagedIdentity#description}
  */
  readonly description?: string;
  /**
  * Whether the managed identity is disabled. If disabled, credentials may no longer be issued for
  * the identity, however existing credentials will still be accepted until they expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#disabled IamWorkloadIdentityPoolManagedIdentity#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#id IamWorkloadIdentityPoolManagedIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#project IamWorkloadIdentityPoolManagedIdentity#project}
  */
  readonly project?: string;
  /**
  * The ID to use for the pool, which becomes the final component of the resource name. This
  * value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
  * 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_id}
  */
  readonly workloadIdentityPoolId: string;
  /**
  * The ID to use for the managed identity. This value must:
  * * contain at most 63 characters
  * * contain only lowercase alphanumeric characters or '-'
  * * start with an alphanumeric character
  * * end with an alphanumeric character
  * 
  * 
  * The prefix 'gcp-' will be reserved for future uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_managed_identity_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_managed_identity_id}
  */
  readonly workloadIdentityPoolManagedIdentityId: string;
  /**
  * The ID to use for the namespace. This value must:
  * * contain at most 63 characters
  * * contain only lowercase alphanumeric characters or '-'
  * * start with an alphanumeric character
  * * end with an alphanumeric character
  * 
  * 
  * The prefix 'gcp-' will be reserved for future uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_namespace_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_namespace_id}
  */
  readonly workloadIdentityPoolNamespaceId: string;
  /**
  * attestation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#attestation_rules IamWorkloadIdentityPoolManagedIdentity#attestation_rules}
  */
  readonly attestationRules?: IamWorkloadIdentityPoolManagedIdentityAttestationRules[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#timeouts IamWorkloadIdentityPoolManagedIdentity#timeouts}
  */
  readonly timeouts?: IamWorkloadIdentityPoolManagedIdentityTimeouts;
}
export interface IamWorkloadIdentityPoolManagedIdentityAttestationRules {
  /**
  * A single workload operating on Google Cloud. For example:
  * '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#google_cloud_resource IamWorkloadIdentityPoolManagedIdentity#google_cloud_resource}
  */
  readonly googleCloudResource: string;
}

export function iamWorkloadIdentityPoolManagedIdentityAttestationRulesToTerraform(struct?: IamWorkloadIdentityPoolManagedIdentityAttestationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    google_cloud_resource: cdktn.stringToTerraform(struct!.googleCloudResource),
  }
}


export function iamWorkloadIdentityPoolManagedIdentityAttestationRulesToHclTerraform(struct?: IamWorkloadIdentityPoolManagedIdentityAttestationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    google_cloud_resource: {
      value: cdktn.stringToHclTerraform(struct!.googleCloudResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IamWorkloadIdentityPoolManagedIdentityAttestationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleCloudResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudResource = this._googleCloudResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityPoolManagedIdentityAttestationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._googleCloudResource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._googleCloudResource = value.googleCloudResource;
    }
  }

  // google_cloud_resource - computed: false, optional: false, required: true
  private _googleCloudResource?: string; 
  public get googleCloudResource() {
    return this.getStringAttribute('google_cloud_resource');
  }
  public set googleCloudResource(value: string) {
    this._googleCloudResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudResourceInput() {
    return this._googleCloudResource;
  }
}

export class IamWorkloadIdentityPoolManagedIdentityAttestationRulesList extends cdktn.ComplexList {
  public internalValue? : IamWorkloadIdentityPoolManagedIdentityAttestationRules[] | cdktn.IResolvable

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
  public get(index: number): IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference {
    return new IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamWorkloadIdentityPoolManagedIdentityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#create IamWorkloadIdentityPoolManagedIdentity#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#delete IamWorkloadIdentityPoolManagedIdentity#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#update IamWorkloadIdentityPoolManagedIdentity#update}
  */
  readonly update?: string;
}

export function iamWorkloadIdentityPoolManagedIdentityTimeoutsToTerraform(struct?: IamWorkloadIdentityPoolManagedIdentityTimeouts | cdktn.IResolvable): any {
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


export function iamWorkloadIdentityPoolManagedIdentityTimeoutsToHclTerraform(struct?: IamWorkloadIdentityPoolManagedIdentityTimeouts | cdktn.IResolvable): any {
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

export class IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamWorkloadIdentityPoolManagedIdentityTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IamWorkloadIdentityPoolManagedIdentityTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity google_iam_workload_identity_pool_managed_identity}
*/
export class IamWorkloadIdentityPoolManagedIdentity extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workload_identity_pool_managed_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IamWorkloadIdentityPoolManagedIdentity resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamWorkloadIdentityPoolManagedIdentity to import
  * @param importFromId The id of the existing IamWorkloadIdentityPoolManagedIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamWorkloadIdentityPoolManagedIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_workload_identity_pool_managed_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workload_identity_pool_managed_identity google_iam_workload_identity_pool_managed_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamWorkloadIdentityPoolManagedIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: IamWorkloadIdentityPoolManagedIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workload_identity_pool_managed_identity',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.38.0',
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
    this._disabled = config.disabled;
    this._id = config.id;
    this._project = config.project;
    this._workloadIdentityPoolId = config.workloadIdentityPoolId;
    this._workloadIdentityPoolManagedIdentityId = config.workloadIdentityPoolManagedIdentityId;
    this._workloadIdentityPoolNamespaceId = config.workloadIdentityPoolNamespaceId;
    this._attestationRules.internalValue = config.attestationRules;
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

  // workload_identity_pool_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolId?: string; 
  public get workloadIdentityPoolId() {
    return this.getStringAttribute('workload_identity_pool_id');
  }
  public set workloadIdentityPoolId(value: string) {
    this._workloadIdentityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolIdInput() {
    return this._workloadIdentityPoolId;
  }

  // workload_identity_pool_managed_identity_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolManagedIdentityId?: string; 
  public get workloadIdentityPoolManagedIdentityId() {
    return this.getStringAttribute('workload_identity_pool_managed_identity_id');
  }
  public set workloadIdentityPoolManagedIdentityId(value: string) {
    this._workloadIdentityPoolManagedIdentityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolManagedIdentityIdInput() {
    return this._workloadIdentityPoolManagedIdentityId;
  }

  // workload_identity_pool_namespace_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolNamespaceId?: string; 
  public get workloadIdentityPoolNamespaceId() {
    return this.getStringAttribute('workload_identity_pool_namespace_id');
  }
  public set workloadIdentityPoolNamespaceId(value: string) {
    this._workloadIdentityPoolNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolNamespaceIdInput() {
    return this._workloadIdentityPoolNamespaceId;
  }

  // attestation_rules - computed: false, optional: true, required: false
  private _attestationRules = new IamWorkloadIdentityPoolManagedIdentityAttestationRulesList(this, "attestation_rules", true);
  public get attestationRules() {
    return this._attestationRules;
  }
  public putAttestationRules(value: IamWorkloadIdentityPoolManagedIdentityAttestationRules[] | cdktn.IResolvable) {
    this._attestationRules.internalValue = value;
  }
  public resetAttestationRules() {
    this._attestationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationRulesInput() {
    return this._attestationRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamWorkloadIdentityPoolManagedIdentityTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      disabled: cdktn.booleanToTerraform(this._disabled),
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      workload_identity_pool_id: cdktn.stringToTerraform(this._workloadIdentityPoolId),
      workload_identity_pool_managed_identity_id: cdktn.stringToTerraform(this._workloadIdentityPoolManagedIdentityId),
      workload_identity_pool_namespace_id: cdktn.stringToTerraform(this._workloadIdentityPoolNamespaceId),
      attestation_rules: cdktn.listMapper(iamWorkloadIdentityPoolManagedIdentityAttestationRulesToTerraform, true)(this._attestationRules.internalValue),
      timeouts: iamWorkloadIdentityPoolManagedIdentityTimeoutsToTerraform(this._timeouts.internalValue),
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
      disabled: {
        value: cdktn.booleanToHclTerraform(this._disabled),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_identity_pool_id: {
        value: cdktn.stringToHclTerraform(this._workloadIdentityPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_identity_pool_managed_identity_id: {
        value: cdktn.stringToHclTerraform(this._workloadIdentityPoolManagedIdentityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_identity_pool_namespace_id: {
        value: cdktn.stringToHclTerraform(this._workloadIdentityPoolNamespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attestation_rules: {
        value: cdktn.listMapperHcl(iamWorkloadIdentityPoolManagedIdentityAttestationRulesToHclTerraform, true)(this._attestationRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IamWorkloadIdentityPoolManagedIdentityAttestationRulesList",
      },
      timeouts: {
        value: iamWorkloadIdentityPoolManagedIdentityTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamWorkloadIdentityPoolManagedIdentityTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
