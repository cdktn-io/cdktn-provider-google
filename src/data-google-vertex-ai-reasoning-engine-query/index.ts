/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vertex_ai_reasoning_engine_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleVertexAiReasoningEngineQueryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Class method to be used for the query. It is optional and defaults to "query" if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vertex_ai_reasoning_engine_query#class_method DataGoogleVertexAiReasoningEngineQuery#class_method}
  */
  readonly classMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vertex_ai_reasoning_engine_query#input DataGoogleVertexAiReasoningEngineQuery#input}
  */
  readonly input?: string;
  /**
  * The project of the resource. If not provided, the provider default project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vertex_ai_reasoning_engine_query#project DataGoogleVertexAiReasoningEngineQuery#project}
  */
  readonly project?: string;
  /**
  * The id of the Vertex Agent Engine to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vertex_ai_reasoning_engine_query#reasoning_engine_id DataGoogleVertexAiReasoningEngineQuery#reasoning_engine_id}
  */
  readonly reasoningEngineId: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vertex_ai_reasoning_engine_query#region DataGoogleVertexAiReasoningEngineQuery#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vertex_ai_reasoning_engine_query google_vertex_ai_reasoning_engine_query}
*/
export class DataGoogleVertexAiReasoningEngineQuery extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_reasoning_engine_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleVertexAiReasoningEngineQuery resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleVertexAiReasoningEngineQuery to import
  * @param importFromId The id of the existing DataGoogleVertexAiReasoningEngineQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vertex_ai_reasoning_engine_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleVertexAiReasoningEngineQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_reasoning_engine_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vertex_ai_reasoning_engine_query google_vertex_ai_reasoning_engine_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleVertexAiReasoningEngineQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleVertexAiReasoningEngineQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_reasoning_engine_query',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.36.0',
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
    this._classMethod = config.classMethod;
    this._id = config.id;
    this._input = config.input;
    this._project = config.project;
    this._reasoningEngineId = config.reasoningEngineId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_method - computed: false, optional: true, required: false
  private _classMethod?: string; 
  public get classMethod() {
    return this.getStringAttribute('class_method');
  }
  public set classMethod(value: string) {
    this._classMethod = value;
  }
  public resetClassMethod() {
    this._classMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classMethodInput() {
    return this._classMethod;
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

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // project - computed: false, optional: true, required: false
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

  // reasoning_engine_id - computed: false, optional: false, required: true
  private _reasoningEngineId?: string; 
  public get reasoningEngineId() {
    return this.getStringAttribute('reasoning_engine_id');
  }
  public set reasoningEngineId(value: string) {
    this._reasoningEngineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasoningEngineIdInput() {
    return this._reasoningEngineId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_method: cdktn.stringToTerraform(this._classMethod),
      id: cdktn.stringToTerraform(this._id),
      input: cdktn.stringToTerraform(this._input),
      project: cdktn.stringToTerraform(this._project),
      reasoning_engine_id: cdktn.stringToTerraform(this._reasoningEngineId),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_method: {
        value: cdktn.stringToHclTerraform(this._classMethod),
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
      input: {
        value: cdktn.stringToHclTerraform(this._input),
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
      reasoning_engine_id: {
        value: cdktn.stringToHclTerraform(this._reasoningEngineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
