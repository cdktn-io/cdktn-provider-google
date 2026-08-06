/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ColabRuntimeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Triggers an upgrade anytime the runtime is started if it is upgradable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#auto_upgrade ColabRuntime#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktn.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#deletion_policy ColabRuntime#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the Runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#description ColabRuntime#description}
  */
  readonly description?: string;
  /**
  * Desired state of the Colab Runtime. Set this field to 'RUNNING' to start the runtime, and 'STOPPED' to stop it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#desired_state ColabRuntime#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Required. The display name of the Runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#display_name ColabRuntime#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#id ColabRuntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource: https://cloud.google.com/colab/docs/locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#location ColabRuntime#location}
  */
  readonly location: string;
  /**
  * The resource name of the Runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#name ColabRuntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#project ColabRuntime#project}
  */
  readonly project?: string;
  /**
  * The user email of the NotebookRuntime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#runtime_user ColabRuntime#runtime_user}
  */
  readonly runtimeUser: string;
  /**
  * notebook_runtime_template_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#notebook_runtime_template_ref ColabRuntime#notebook_runtime_template_ref}
  */
  readonly notebookRuntimeTemplateRef?: ColabRuntimeNotebookRuntimeTemplateRef;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#timeouts ColabRuntime#timeouts}
  */
  readonly timeouts?: ColabRuntimeTimeouts;
}
export interface ColabRuntimeNotebookRuntimeTemplateRef {
  /**
  * The resource name of the NotebookRuntimeTemplate based on which a NotebookRuntime will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#notebook_runtime_template ColabRuntime#notebook_runtime_template}
  */
  readonly notebookRuntimeTemplate: string;
}

export function colabRuntimeNotebookRuntimeTemplateRefToTerraform(struct?: ColabRuntimeNotebookRuntimeTemplateRefOutputReference | ColabRuntimeNotebookRuntimeTemplateRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    notebook_runtime_template: cdktn.stringToTerraform(struct!.notebookRuntimeTemplate),
  }
}


export function colabRuntimeNotebookRuntimeTemplateRefToHclTerraform(struct?: ColabRuntimeNotebookRuntimeTemplateRefOutputReference | ColabRuntimeNotebookRuntimeTemplateRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    notebook_runtime_template: {
      value: cdktn.stringToHclTerraform(struct!.notebookRuntimeTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ColabRuntimeNotebookRuntimeTemplateRefOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColabRuntimeNotebookRuntimeTemplateRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookRuntimeTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookRuntimeTemplate = this._notebookRuntimeTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColabRuntimeNotebookRuntimeTemplateRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notebookRuntimeTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notebookRuntimeTemplate = value.notebookRuntimeTemplate;
    }
  }

  // notebook_runtime_template - computed: false, optional: false, required: true
  private _notebookRuntimeTemplate?: string; 
  public get notebookRuntimeTemplate() {
    return this.getStringAttribute('notebook_runtime_template');
  }
  public set notebookRuntimeTemplate(value: string) {
    this._notebookRuntimeTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookRuntimeTemplateInput() {
    return this._notebookRuntimeTemplate;
  }
}
export interface ColabRuntimeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#create ColabRuntime#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#delete ColabRuntime#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#update ColabRuntime#update}
  */
  readonly update?: string;
}

export function colabRuntimeTimeoutsToTerraform(struct?: ColabRuntimeTimeouts | cdktn.IResolvable): any {
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


export function colabRuntimeTimeoutsToHclTerraform(struct?: ColabRuntimeTimeouts | cdktn.IResolvable): any {
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

export class ColabRuntimeTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ColabRuntimeTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ColabRuntimeTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime google_colab_runtime}
*/
export class ColabRuntime extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_colab_runtime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ColabRuntime resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ColabRuntime to import
  * @param importFromId The id of the existing ColabRuntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ColabRuntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_colab_runtime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/colab_runtime google_colab_runtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ColabRuntimeConfig
  */
  public constructor(scope: Construct, id: string, config: ColabRuntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_colab_runtime',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.43.0',
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
    this._autoUpgrade = config.autoUpgrade;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._desiredState = config.desiredState;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._runtimeUser = config.runtimeUser;
    this._notebookRuntimeTemplateRef.internalValue = config.notebookRuntimeTemplateRef;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade?: boolean | cdktn.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktn.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
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

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
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

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
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

  // is_upgradable - computed: true, optional: false, required: false
  public get isUpgradable() {
    return this.getBooleanAttribute('is_upgradable');
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notebook_runtime_type - computed: true, optional: false, required: false
  public get notebookRuntimeType() {
    return this.getStringAttribute('notebook_runtime_type');
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

  // runtime_user - computed: false, optional: false, required: true
  private _runtimeUser?: string; 
  public get runtimeUser() {
    return this.getStringAttribute('runtime_user');
  }
  public set runtimeUser(value: string) {
    this._runtimeUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeUserInput() {
    return this._runtimeUser;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // notebook_runtime_template_ref - computed: false, optional: true, required: false
  private _notebookRuntimeTemplateRef = new ColabRuntimeNotebookRuntimeTemplateRefOutputReference(this, "notebook_runtime_template_ref");
  public get notebookRuntimeTemplateRef() {
    return this._notebookRuntimeTemplateRef;
  }
  public putNotebookRuntimeTemplateRef(value: ColabRuntimeNotebookRuntimeTemplateRef) {
    this._notebookRuntimeTemplateRef.internalValue = value;
  }
  public resetNotebookRuntimeTemplateRef() {
    this._notebookRuntimeTemplateRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookRuntimeTemplateRefInput() {
    return this._notebookRuntimeTemplateRef.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ColabRuntimeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ColabRuntimeTimeouts) {
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
      auto_upgrade: cdktn.booleanToTerraform(this._autoUpgrade),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      desired_state: cdktn.stringToTerraform(this._desiredState),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      runtime_user: cdktn.stringToTerraform(this._runtimeUser),
      notebook_runtime_template_ref: colabRuntimeNotebookRuntimeTemplateRefToTerraform(this._notebookRuntimeTemplateRef.internalValue),
      timeouts: colabRuntimeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_upgrade: {
        value: cdktn.booleanToHclTerraform(this._autoUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      desired_state: {
        value: cdktn.stringToHclTerraform(this._desiredState),
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
      runtime_user: {
        value: cdktn.stringToHclTerraform(this._runtimeUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notebook_runtime_template_ref: {
        value: colabRuntimeNotebookRuntimeTemplateRefToHclTerraform(this._notebookRuntimeTemplateRef.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ColabRuntimeNotebookRuntimeTemplateRefList",
      },
      timeouts: {
        value: colabRuntimeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ColabRuntimeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
