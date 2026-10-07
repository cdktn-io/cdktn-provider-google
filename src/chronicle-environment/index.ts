/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChronicleEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Environment nicknames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#aliases_json ChronicleEnvironment#aliases_json}
  */
  readonly aliasesJson?: string;
  /**
  * Environment icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#base64_image ChronicleEnvironment#base64_image}
  */
  readonly base64Image?: string;
  /**
  * MAX_NAME_LENGTH = 256
  * Name of the contact for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#contact ChronicleEnvironment#contact}
  */
  readonly contact: string;
  /**
  * MAX_NAME_LENGTH = 256
  * Email of the contact for the environment. Multiple emails can be sepereated with the ';' character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#contact_emails ChronicleEnvironment#contact_emails}
  */
  readonly contactEmails: string;
  /**
  * MAX_NAME_LENGTH = 256
  * Phone number of the contact for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#contact_phone ChronicleEnvironment#contact_phone}
  */
  readonly contactPhone: string;
  /**
  * data access scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#data_access_scopes_json ChronicleEnvironment#data_access_scopes_json}
  */
  readonly dataAccessScopesJson?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#deletion_policy ChronicleEnvironment#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Whether Terraform will be prevented from destroying the environment. Deleting an environment will remove all its data and all playbooks, environments, integrations instances, reports and agents related to the environment. Once you delete an environment, it cannot be reversed. Deleting environments via terraform destroy or terraform apply will only succeed if this field is false in the Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#deletion_protection ChronicleEnvironment#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  * MAX_NAME_LENGTH = 256
  * Description of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#description ChronicleEnvironment#description}
  */
  readonly description: string;
  /**
  * Name of the environment
  * MAX_NAME_LENGTH = 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#display_name ChronicleEnvironment#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#id ChronicleEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#instance ChronicleEnvironment#instance}
  */
  readonly instance: string;
  /**
  * URL of the environment. Used to route UI links to the correct SIEM instance
  * when making cross-SecOps requests from SOAR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#instance_uri ChronicleEnvironment#instance_uri}
  */
  readonly instanceUri?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#location ChronicleEnvironment#location}
  */
  readonly location: string;
  /**
  * The optional parallel SIEM instance used as a data source. Used to route
  * API requests to the correct SIEM instance when making cross-SecOps requests
  * from SOAR. For most customers, this is not required, since the parent
  * instance is used as the data source by default.
  * Format:
  * projects/{project}/locations/{location}/instances/{instance}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#parallel_instance ChronicleEnvironment#parallel_instance}
  */
  readonly parallelInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#project ChronicleEnvironment#project}
  */
  readonly project?: string;
  /**
  * Environment data retention in months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#retention_duration ChronicleEnvironment#retention_duration}
  */
  readonly retentionDuration: number;
  /**
  * The weight of the environment, enabling customers to control distribution
  * of resources between the separate environments in a single instance of
  * Chronicle SOAR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#weight ChronicleEnvironment#weight}
  */
  readonly weight?: number;
  /**
  * dynamic_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#dynamic_parameters ChronicleEnvironment#dynamic_parameters}
  */
  readonly dynamicParameters?: ChronicleEnvironmentDynamicParameters[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#timeouts ChronicleEnvironment#timeouts}
  */
  readonly timeouts?: ChronicleEnvironmentTimeouts;
}
export interface ChronicleEnvironmentDynamicParameters {
  /**
  * The ID of the dynamic parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#dynamic_parameter_id ChronicleEnvironment#dynamic_parameter_id}
  */
  readonly dynamicParameterId: number;
  /**
  * The value of the dynamic parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#value ChronicleEnvironment#value}
  */
  readonly value: string;
}

export function chronicleEnvironmentDynamicParametersToTerraform(struct?: ChronicleEnvironmentDynamicParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dynamic_parameter_id: cdktn.numberToTerraform(struct!.dynamicParameterId),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleEnvironmentDynamicParametersToHclTerraform(struct?: ChronicleEnvironmentDynamicParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dynamic_parameter_id: {
      value: cdktn.numberToHclTerraform(struct!.dynamicParameterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleEnvironmentDynamicParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleEnvironmentDynamicParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicParameterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicParameterId = this._dynamicParameterId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleEnvironmentDynamicParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicParameterId = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicParameterId = value.dynamicParameterId;
      this._value = value.value;
    }
  }

  // dynamic_parameter_id - computed: false, optional: false, required: true
  private _dynamicParameterId?: number; 
  public get dynamicParameterId() {
    return this.getNumberAttribute('dynamic_parameter_id');
  }
  public set dynamicParameterId(value: number) {
    this._dynamicParameterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParameterIdInput() {
    return this._dynamicParameterId;
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getNumberAttribute('environment_id');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleEnvironmentDynamicParametersList extends cdktn.ComplexList {
  public internalValue? : ChronicleEnvironmentDynamicParameters[] | cdktn.IResolvable

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
  public get(index: number): ChronicleEnvironmentDynamicParametersOutputReference {
    return new ChronicleEnvironmentDynamicParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#create ChronicleEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#delete ChronicleEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#update ChronicleEnvironment#update}
  */
  readonly update?: string;
}

export function chronicleEnvironmentTimeoutsToTerraform(struct?: ChronicleEnvironmentTimeouts | cdktn.IResolvable): any {
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


export function chronicleEnvironmentTimeoutsToHclTerraform(struct?: ChronicleEnvironmentTimeouts | cdktn.IResolvable): any {
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

export class ChronicleEnvironmentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleEnvironmentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleEnvironmentTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment google_chronicle_environment}
*/
export class ChronicleEnvironment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleEnvironment to import
  * @param importFromId The id of the existing ChronicleEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_environment google_chronicle_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_environment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.6.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliasesJson = config.aliasesJson;
    this._base64Image = config.base64Image;
    this._contact = config.contact;
    this._contactEmails = config.contactEmails;
    this._contactPhone = config.contactPhone;
    this._dataAccessScopesJson = config.dataAccessScopesJson;
    this._deletionPolicy = config.deletionPolicy;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._instance = config.instance;
    this._instanceUri = config.instanceUri;
    this._location = config.location;
    this._parallelInstance = config.parallelInstance;
    this._project = config.project;
    this._retentionDuration = config.retentionDuration;
    this._weight = config.weight;
    this._dynamicParameters.internalValue = config.dynamicParameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases_json - computed: false, optional: true, required: false
  private _aliasesJson?: string; 
  public get aliasesJson() {
    return this.getStringAttribute('aliases_json');
  }
  public set aliasesJson(value: string) {
    this._aliasesJson = value;
  }
  public resetAliasesJson() {
    this._aliasesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesJsonInput() {
    return this._aliasesJson;
  }

  // base64_image - computed: false, optional: true, required: false
  private _base64Image?: string; 
  public get base64Image() {
    return this.getStringAttribute('base64_image');
  }
  public set base64Image(value: string) {
    this._base64Image = value;
  }
  public resetBase64Image() {
    this._base64Image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64ImageInput() {
    return this._base64Image;
  }

  // contact - computed: false, optional: false, required: true
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // contact_emails - computed: false, optional: false, required: true
  private _contactEmails?: string; 
  public get contactEmails() {
    return this.getStringAttribute('contact_emails');
  }
  public set contactEmails(value: string) {
    this._contactEmails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailsInput() {
    return this._contactEmails;
  }

  // contact_phone - computed: false, optional: false, required: true
  private _contactPhone?: string; 
  public get contactPhone() {
    return this.getStringAttribute('contact_phone');
  }
  public set contactPhone(value: string) {
    this._contactPhone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPhoneInput() {
    return this._contactPhone;
  }

  // data_access_scopes_json - computed: false, optional: true, required: false
  private _dataAccessScopesJson?: string; 
  public get dataAccessScopesJson() {
    return this.getStringAttribute('data_access_scopes_json');
  }
  public set dataAccessScopesJson(value: string) {
    this._dataAccessScopesJson = value;
  }
  public resetDataAccessScopesJson() {
    this._dataAccessScopesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessScopesJsonInput() {
    return this._dataAccessScopesJson;
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

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktn.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktn.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // instance_uri - computed: false, optional: true, required: false
  private _instanceUri?: string; 
  public get instanceUri() {
    return this.getStringAttribute('instance_uri');
  }
  public set instanceUri(value: string) {
    this._instanceUri = value;
  }
  public resetInstanceUri() {
    this._instanceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUriInput() {
    return this._instanceUri;
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

  // parallel_instance - computed: false, optional: true, required: false
  private _parallelInstance?: string; 
  public get parallelInstance() {
    return this.getStringAttribute('parallel_instance');
  }
  public set parallelInstance(value: string) {
    this._parallelInstance = value;
  }
  public resetParallelInstance() {
    this._parallelInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInstanceInput() {
    return this._parallelInstance;
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

  // retention_duration - computed: false, optional: false, required: true
  private _retentionDuration?: number; 
  public get retentionDuration() {
    return this.getNumberAttribute('retention_duration');
  }
  public set retentionDuration(value: number) {
    this._retentionDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // dynamic_parameters - computed: false, optional: true, required: false
  private _dynamicParameters = new ChronicleEnvironmentDynamicParametersList(this, "dynamic_parameters", false);
  public get dynamicParameters() {
    return this._dynamicParameters;
  }
  public putDynamicParameters(value: ChronicleEnvironmentDynamicParameters[] | cdktn.IResolvable) {
    this._dynamicParameters.internalValue = value;
  }
  public resetDynamicParameters() {
    this._dynamicParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParametersInput() {
    return this._dynamicParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleEnvironmentTimeouts) {
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
      aliases_json: cdktn.stringToTerraform(this._aliasesJson),
      base64_image: cdktn.stringToTerraform(this._base64Image),
      contact: cdktn.stringToTerraform(this._contact),
      contact_emails: cdktn.stringToTerraform(this._contactEmails),
      contact_phone: cdktn.stringToTerraform(this._contactPhone),
      data_access_scopes_json: cdktn.stringToTerraform(this._dataAccessScopesJson),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      instance_uri: cdktn.stringToTerraform(this._instanceUri),
      location: cdktn.stringToTerraform(this._location),
      parallel_instance: cdktn.stringToTerraform(this._parallelInstance),
      project: cdktn.stringToTerraform(this._project),
      retention_duration: cdktn.numberToTerraform(this._retentionDuration),
      weight: cdktn.numberToTerraform(this._weight),
      dynamic_parameters: cdktn.listMapper(chronicleEnvironmentDynamicParametersToTerraform, true)(this._dynamicParameters.internalValue),
      timeouts: chronicleEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases_json: {
        value: cdktn.stringToHclTerraform(this._aliasesJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base64_image: {
        value: cdktn.stringToHclTerraform(this._base64Image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact: {
        value: cdktn.stringToHclTerraform(this._contact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_emails: {
        value: cdktn.stringToHclTerraform(this._contactEmails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_phone: {
        value: cdktn.stringToHclTerraform(this._contactPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_access_scopes_json: {
        value: cdktn.stringToHclTerraform(this._dataAccessScopesJson),
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
      deletion_protection: {
        value: cdktn.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_uri: {
        value: cdktn.stringToHclTerraform(this._instanceUri),
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
      parallel_instance: {
        value: cdktn.stringToHclTerraform(this._parallelInstance),
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
      retention_duration: {
        value: cdktn.numberToHclTerraform(this._retentionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight: {
        value: cdktn.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_parameters: {
        value: cdktn.listMapperHcl(chronicleEnvironmentDynamicParametersToHclTerraform, true)(this._dynamicParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleEnvironmentDynamicParametersList",
      },
      timeouts: {
        value: chronicleEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleEnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
