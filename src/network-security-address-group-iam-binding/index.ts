/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkSecurityAddressGroupIamBindingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding#id NetworkSecurityAddressGroupIamBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding#location NetworkSecurityAddressGroupIamBinding#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding#members NetworkSecurityAddressGroupIamBinding#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding#name NetworkSecurityAddressGroupIamBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding#project NetworkSecurityAddressGroupIamBinding#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding#role NetworkSecurityAddressGroupIamBinding#role}
  */
  readonly role: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding#condition NetworkSecurityAddressGroupIamBinding#condition}
  */
  readonly condition?: NetworkSecurityAddressGroupIamBindingCondition;
}
export interface NetworkSecurityAddressGroupIamBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding#description NetworkSecurityAddressGroupIamBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding#expression NetworkSecurityAddressGroupIamBinding#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding#title NetworkSecurityAddressGroupIamBinding#title}
  */
  readonly title: string;
}

export function networkSecurityAddressGroupIamBindingConditionToTerraform(struct?: NetworkSecurityAddressGroupIamBindingConditionOutputReference | NetworkSecurityAddressGroupIamBindingCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    expression: cdktn.stringToTerraform(struct!.expression),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function networkSecurityAddressGroupIamBindingConditionToHclTerraform(struct?: NetworkSecurityAddressGroupIamBindingConditionOutputReference | NetworkSecurityAddressGroupIamBindingCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAddressGroupIamBindingConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAddressGroupIamBindingCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAddressGroupIamBindingCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._title = value.title;
    }
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding google_network_security_address_group_iam_binding}
*/
export class NetworkSecurityAddressGroupIamBinding extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_address_group_iam_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkSecurityAddressGroupIamBinding resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityAddressGroupIamBinding to import
  * @param importFromId The id of the existing NetworkSecurityAddressGroupIamBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityAddressGroupIamBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_address_group_iam_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_address_group_iam_binding google_network_security_address_group_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityAddressGroupIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityAddressGroupIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_address_group_iam_binding',
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
    this._id = config.id;
    this._location = config.location;
    this._members = config.members;
    this._name = config.name;
    this._project = config.project;
    this._role = config.role;
    this._condition.internalValue = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // members - computed: false, optional: false, required: true
  private _members?: string[]; 
  public get members() {
    return cdktn.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new NetworkSecurityAddressGroupIamBindingConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: NetworkSecurityAddressGroupIamBindingCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      members: cdktn.listMapper(cdktn.stringToTerraform, false)(this._members),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      role: cdktn.stringToTerraform(this._role),
      condition: networkSecurityAddressGroupIamBindingConditionToTerraform(this._condition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      members: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      role: {
        value: cdktn.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: networkSecurityAddressGroupIamBindingConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityAddressGroupIamBindingConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
