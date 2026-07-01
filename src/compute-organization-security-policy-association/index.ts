/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeOrganizationSecurityPolicyAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The resource that the security policy is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#attachment_id ComputeOrganizationSecurityPolicyAssociation#attachment_id}
  */
  readonly attachmentId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#deletion_policy ComputeOrganizationSecurityPolicyAssociation#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A list of folders to exclude from the security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#excluded_folders ComputeOrganizationSecurityPolicyAssociation#excluded_folders}
  */
  readonly excludedFolders?: string[];
  /**
  * A list of projects to exclude from the security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#excluded_projects ComputeOrganizationSecurityPolicyAssociation#excluded_projects}
  */
  readonly excludedProjects?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#id ComputeOrganizationSecurityPolicyAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for an association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#name ComputeOrganizationSecurityPolicyAssociation#name}
  */
  readonly name: string;
  /**
  * The security policy ID of the association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#policy_id ComputeOrganizationSecurityPolicyAssociation#policy_id}
  */
  readonly policyId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#timeouts ComputeOrganizationSecurityPolicyAssociation#timeouts}
  */
  readonly timeouts?: ComputeOrganizationSecurityPolicyAssociationTimeouts;
}
export interface ComputeOrganizationSecurityPolicyAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#create ComputeOrganizationSecurityPolicyAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#delete ComputeOrganizationSecurityPolicyAssociation#delete}
  */
  readonly delete?: string;
}

export function computeOrganizationSecurityPolicyAssociationTimeoutsToTerraform(struct?: ComputeOrganizationSecurityPolicyAssociationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function computeOrganizationSecurityPolicyAssociationTimeoutsToHclTerraform(struct?: ComputeOrganizationSecurityPolicyAssociationTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeOrganizationSecurityPolicyAssociationTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyAssociationTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association google_compute_organization_security_policy_association}
*/
export class ComputeOrganizationSecurityPolicyAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_organization_security_policy_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeOrganizationSecurityPolicyAssociation to import
  * @param importFromId The id of the existing ComputeOrganizationSecurityPolicyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeOrganizationSecurityPolicyAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_organization_security_policy_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association google_compute_organization_security_policy_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeOrganizationSecurityPolicyAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeOrganizationSecurityPolicyAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_organization_security_policy_association',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.39.0',
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
    this._attachmentId = config.attachmentId;
    this._deletionPolicy = config.deletionPolicy;
    this._excludedFolders = config.excludedFolders;
    this._excludedProjects = config.excludedProjects;
    this._id = config.id;
    this._name = config.name;
    this._policyId = config.policyId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_id - computed: false, optional: false, required: true
  private _attachmentId?: string; 
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }
  public set attachmentId(value: string) {
    this._attachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentIdInput() {
    return this._attachmentId;
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // excluded_folders - computed: false, optional: true, required: false
  private _excludedFolders?: string[]; 
  public get excludedFolders() {
    return this.getListAttribute('excluded_folders');
  }
  public set excludedFolders(value: string[]) {
    this._excludedFolders = value;
  }
  public resetExcludedFolders() {
    this._excludedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedFoldersInput() {
    return this._excludedFolders;
  }

  // excluded_projects - computed: false, optional: true, required: false
  private _excludedProjects?: string[]; 
  public get excludedProjects() {
    return this.getListAttribute('excluded_projects');
  }
  public set excludedProjects(value: string[]) {
    this._excludedProjects = value;
  }
  public resetExcludedProjects() {
    this._excludedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedProjectsInput() {
    return this._excludedProjects;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeOrganizationSecurityPolicyAssociationTimeouts) {
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
      attachment_id: cdktn.stringToTerraform(this._attachmentId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      excluded_folders: cdktn.listMapper(cdktn.stringToTerraform, false)(this._excludedFolders),
      excluded_projects: cdktn.listMapper(cdktn.stringToTerraform, false)(this._excludedProjects),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      policy_id: cdktn.stringToTerraform(this._policyId),
      timeouts: computeOrganizationSecurityPolicyAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attachment_id: {
        value: cdktn.stringToHclTerraform(this._attachmentId),
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
      excluded_folders: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._excludedFolders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      excluded_projects: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._excludedProjects),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      policy_id: {
        value: cdktn.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: computeOrganizationSecurityPolicyAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeOrganizationSecurityPolicyAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
