/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApigeeEnvironmentDebugmaskConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#env_id ApigeeEnvironmentDebugmask#env_id}
  */
  readonly envId: string;
  /**
  * List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#fault_x_paths ApigeeEnvironmentDebugmask#fault_x_paths}
  */
  readonly faultXPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#id ApigeeEnvironmentDebugmask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Map of namespaces to URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#namespaces ApigeeEnvironmentDebugmask#namespaces}
  */
  readonly namespaces?: { [key: string]: string };
  /**
  * List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#request_json_paths ApigeeEnvironmentDebugmask#request_json_paths}
  */
  readonly requestJsonPaths?: string[];
  /**
  * List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#request_x_paths ApigeeEnvironmentDebugmask#request_x_paths}
  */
  readonly requestXPaths?: string[];
  /**
  * List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#response_json_paths ApigeeEnvironmentDebugmask#response_json_paths}
  */
  readonly responseJsonPaths?: string[];
  /**
  * List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#response_x_paths ApigeeEnvironmentDebugmask#response_x_paths}
  */
  readonly responseXPaths?: string[];
  /**
  * List of variables that the debug mask applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#variables ApigeeEnvironmentDebugmask#variables}
  */
  readonly variables?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#timeouts ApigeeEnvironmentDebugmask#timeouts}
  */
  readonly timeouts?: ApigeeEnvironmentDebugmaskTimeouts;
}
export interface ApigeeEnvironmentDebugmaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#create ApigeeEnvironmentDebugmask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#delete ApigeeEnvironmentDebugmask#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#update ApigeeEnvironmentDebugmask#update}
  */
  readonly update?: string;
}

export function apigeeEnvironmentDebugmaskTimeoutsToTerraform(struct?: ApigeeEnvironmentDebugmaskTimeouts | cdktn.IResolvable): any {
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


export function apigeeEnvironmentDebugmaskTimeoutsToHclTerraform(struct?: ApigeeEnvironmentDebugmaskTimeouts | cdktn.IResolvable): any {
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

export class ApigeeEnvironmentDebugmaskTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeEnvironmentDebugmaskTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApigeeEnvironmentDebugmaskTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask google_apigee_environment_debugmask}
*/
export class ApigeeEnvironmentDebugmask extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_environment_debugmask";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeEnvironmentDebugmask to import
  * @param importFromId The id of the existing ApigeeEnvironmentDebugmask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeEnvironmentDebugmask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_environment_debugmask", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/apigee_environment_debugmask google_apigee_environment_debugmask} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeEnvironmentDebugmaskConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeEnvironmentDebugmaskConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_environment_debugmask',
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
    this._envId = config.envId;
    this._faultXPaths = config.faultXPaths;
    this._id = config.id;
    this._namespaces = config.namespaces;
    this._requestJsonPaths = config.requestJsonPaths;
    this._requestXPaths = config.requestXPaths;
    this._responseJsonPaths = config.responseJsonPaths;
    this._responseXPaths = config.responseXPaths;
    this._variables = config.variables;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_id - computed: false, optional: false, required: true
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // fault_x_paths - computed: false, optional: true, required: false
  private _faultXPaths?: string[]; 
  public get faultXPaths() {
    return this.getListAttribute('fault_x_paths');
  }
  public set faultXPaths(value: string[]) {
    this._faultXPaths = value;
  }
  public resetFaultXPaths() {
    this._faultXPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultXPathsInput() {
    return this._faultXPaths;
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

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: { [key: string]: string }; 
  public get namespaces() {
    return this.getStringMapAttribute('namespaces');
  }
  public set namespaces(value: { [key: string]: string }) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // request_json_paths - computed: false, optional: true, required: false
  private _requestJsonPaths?: string[]; 
  public get requestJsonPaths() {
    return this.getListAttribute('request_json_paths');
  }
  public set requestJsonPaths(value: string[]) {
    this._requestJsonPaths = value;
  }
  public resetRequestJsonPaths() {
    this._requestJsonPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestJsonPathsInput() {
    return this._requestJsonPaths;
  }

  // request_x_paths - computed: false, optional: true, required: false
  private _requestXPaths?: string[]; 
  public get requestXPaths() {
    return this.getListAttribute('request_x_paths');
  }
  public set requestXPaths(value: string[]) {
    this._requestXPaths = value;
  }
  public resetRequestXPaths() {
    this._requestXPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestXPathsInput() {
    return this._requestXPaths;
  }

  // response_json_paths - computed: false, optional: true, required: false
  private _responseJsonPaths?: string[]; 
  public get responseJsonPaths() {
    return this.getListAttribute('response_json_paths');
  }
  public set responseJsonPaths(value: string[]) {
    this._responseJsonPaths = value;
  }
  public resetResponseJsonPaths() {
    this._responseJsonPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseJsonPathsInput() {
    return this._responseJsonPaths;
  }

  // response_x_paths - computed: false, optional: true, required: false
  private _responseXPaths?: string[]; 
  public get responseXPaths() {
    return this.getListAttribute('response_x_paths');
  }
  public set responseXPaths(value: string[]) {
    this._responseXPaths = value;
  }
  public resetResponseXPaths() {
    this._responseXPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseXPathsInput() {
    return this._responseXPaths;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: string[]; 
  public get variables() {
    return this.getListAttribute('variables');
  }
  public set variables(value: string[]) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeEnvironmentDebugmaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeEnvironmentDebugmaskTimeouts) {
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
      env_id: cdktn.stringToTerraform(this._envId),
      fault_x_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(this._faultXPaths),
      id: cdktn.stringToTerraform(this._id),
      namespaces: cdktn.hashMapper(cdktn.stringToTerraform)(this._namespaces),
      request_json_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(this._requestJsonPaths),
      request_x_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(this._requestXPaths),
      response_json_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(this._responseJsonPaths),
      response_x_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(this._responseXPaths),
      variables: cdktn.listMapper(cdktn.stringToTerraform, false)(this._variables),
      timeouts: apigeeEnvironmentDebugmaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_id: {
        value: cdktn.stringToHclTerraform(this._envId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_x_paths: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._faultXPaths),
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
      namespaces: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._namespaces),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      request_json_paths: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._requestJsonPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      request_x_paths: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._requestXPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      response_json_paths: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._responseJsonPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      response_x_paths: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._responseXPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      variables: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._variables),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: apigeeEnvironmentDebugmaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigeeEnvironmentDebugmaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
