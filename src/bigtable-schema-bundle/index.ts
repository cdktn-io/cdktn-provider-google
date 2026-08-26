/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BigtableSchemaBundleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#deletion_policy BigtableSchemaBundle#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, allow backwards incompatible changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#ignore_warnings BigtableSchemaBundle#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktn.IResolvable;
  /**
  * The name of the instance to create the schema bundle within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#instance BigtableSchemaBundle#instance}
  */
  readonly instance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}
  */
  readonly project?: string;
  /**
  * The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#schema_bundle_id BigtableSchemaBundle#schema_bundle_id}
  */
  readonly schemaBundleId: string;
  /**
  * The name of the table to create the schema bundle within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#table BigtableSchemaBundle#table}
  */
  readonly table?: string;
  /**
  * proto_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#proto_schema BigtableSchemaBundle#proto_schema}
  */
  readonly protoSchema: BigtableSchemaBundleProtoSchema;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#timeouts BigtableSchemaBundle#timeouts}
  */
  readonly timeouts?: BigtableSchemaBundleTimeouts;
}
export interface BigtableSchemaBundleProtoSchema {
  /**
  * Base64 encoded content of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#proto_descriptors BigtableSchemaBundle#proto_descriptors}
  */
  readonly protoDescriptors: string;
}

export function bigtableSchemaBundleProtoSchemaToTerraform(struct?: BigtableSchemaBundleProtoSchemaOutputReference | BigtableSchemaBundleProtoSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    proto_descriptors: cdktn.stringToTerraform(struct!.protoDescriptors),
  }
}


export function bigtableSchemaBundleProtoSchemaToHclTerraform(struct?: BigtableSchemaBundleProtoSchemaOutputReference | BigtableSchemaBundleProtoSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    proto_descriptors: {
      value: cdktn.stringToHclTerraform(struct!.protoDescriptors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigtableSchemaBundleProtoSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigtableSchemaBundleProtoSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protoDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoDescriptors = this._protoDescriptors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableSchemaBundleProtoSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protoDescriptors = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protoDescriptors = value.protoDescriptors;
    }
  }

  // proto_descriptors - computed: false, optional: false, required: true
  private _protoDescriptors?: string; 
  public get protoDescriptors() {
    return this.getStringAttribute('proto_descriptors');
  }
  public set protoDescriptors(value: string) {
    this._protoDescriptors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoDescriptorsInput() {
    return this._protoDescriptors;
  }
}
export interface BigtableSchemaBundleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#create BigtableSchemaBundle#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#delete BigtableSchemaBundle#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#update BigtableSchemaBundle#update}
  */
  readonly update?: string;
}

export function bigtableSchemaBundleTimeoutsToTerraform(struct?: BigtableSchemaBundleTimeouts | cdktn.IResolvable): any {
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


export function bigtableSchemaBundleTimeoutsToHclTerraform(struct?: BigtableSchemaBundleTimeouts | cdktn.IResolvable): any {
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

export class BigtableSchemaBundleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigtableSchemaBundleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BigtableSchemaBundleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle google_bigtable_schema_bundle}
*/
export class BigtableSchemaBundle extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigtable_schema_bundle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BigtableSchemaBundle resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigtableSchemaBundle to import
  * @param importFromId The id of the existing BigtableSchemaBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigtableSchemaBundle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_bigtable_schema_bundle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/bigtable_schema_bundle google_bigtable_schema_bundle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigtableSchemaBundleConfig
  */
  public constructor(scope: Construct, id: string, config: BigtableSchemaBundleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_schema_bundle',
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
    this._id = config.id;
    this._ignoreWarnings = config.ignoreWarnings;
    this._instance = config.instance;
    this._project = config.project;
    this._schemaBundleId = config.schemaBundleId;
    this._table = config.table;
    this._protoSchema.internalValue = config.protoSchema;
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

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktn.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktn.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // schema_bundle_id - computed: false, optional: false, required: true
  private _schemaBundleId?: string; 
  public get schemaBundleId() {
    return this.getStringAttribute('schema_bundle_id');
  }
  public set schemaBundleId(value: string) {
    this._schemaBundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaBundleIdInput() {
    return this._schemaBundleId;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // proto_schema - computed: false, optional: false, required: true
  private _protoSchema = new BigtableSchemaBundleProtoSchemaOutputReference(this, "proto_schema");
  public get protoSchema() {
    return this._protoSchema;
  }
  public putProtoSchema(value: BigtableSchemaBundleProtoSchema) {
    this._protoSchema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoSchemaInput() {
    return this._protoSchema.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigtableSchemaBundleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigtableSchemaBundleTimeouts) {
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
      ignore_warnings: cdktn.booleanToTerraform(this._ignoreWarnings),
      instance: cdktn.stringToTerraform(this._instance),
      project: cdktn.stringToTerraform(this._project),
      schema_bundle_id: cdktn.stringToTerraform(this._schemaBundleId),
      table: cdktn.stringToTerraform(this._table),
      proto_schema: bigtableSchemaBundleProtoSchemaToTerraform(this._protoSchema.internalValue),
      timeouts: bigtableSchemaBundleTimeoutsToTerraform(this._timeouts.internalValue),
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
      ignore_warnings: {
        value: cdktn.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
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
      schema_bundle_id: {
        value: cdktn.stringToHclTerraform(this._schemaBundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table: {
        value: cdktn.stringToHclTerraform(this._table),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proto_schema: {
        value: bigtableSchemaBundleProtoSchemaToHclTerraform(this._protoSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigtableSchemaBundleProtoSchemaList",
      },
      timeouts: {
        value: bigtableSchemaBundleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigtableSchemaBundleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
