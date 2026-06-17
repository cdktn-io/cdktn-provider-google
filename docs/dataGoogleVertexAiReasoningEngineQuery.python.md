# `dataGoogleVertexAiReasoningEngineQuery` Submodule <a name="`dataGoogleVertexAiReasoningEngineQuery` Submodule" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVertexAiReasoningEngineQuery <a name="DataGoogleVertexAiReasoningEngineQuery" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query google_vertex_ai_reasoning_engine_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer"></a>

```python
from cdktn_provider_google import data_google_vertex_ai_reasoning_engine_query

dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  reasoning_engine_id: str,
  region: str,
  class_method: str = None,
  id: str = None,
  input: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.reasoningEngineId">reasoning_engine_id</a></code> | <code>str</code> | The id of the Vertex Agent Engine to query. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.region">region</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.classMethod">class_method</a></code> | <code>str</code> | Class method to be used for the query. It is optional and defaults to "query" if unspecified. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.input">input</a></code> | <code>str</code> | Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc.. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.project">project</a></code> | <code>str</code> | The project of the resource. If not provided, the provider default project is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `reasoning_engine_id`<sup>Required</sup> <a name="reasoning_engine_id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.reasoningEngineId"></a>

- *Type:* str

The id of the Vertex Agent Engine to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#reasoning_engine_id DataGoogleVertexAiReasoningEngineQuery#reasoning_engine_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.region"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#region DataGoogleVertexAiReasoningEngineQuery#region}

---

##### `class_method`<sup>Optional</sup> <a name="class_method" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.classMethod"></a>

- *Type:* str

Class method to be used for the query. It is optional and defaults to "query" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#class_method DataGoogleVertexAiReasoningEngineQuery#class_method}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.input"></a>

- *Type:* str

Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#input DataGoogleVertexAiReasoningEngineQuery#input}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.project"></a>

- *Type:* str

The project of the resource. If not provided, the provider default project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#project DataGoogleVertexAiReasoningEngineQuery#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetClassMethod">reset_class_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_class_method` <a name="reset_class_method" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetClassMethod"></a>

```python
def reset_class_method() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleVertexAiReasoningEngineQuery resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct"></a>

```python
from cdktn_provider_google import data_google_vertex_ai_reasoning_engine_query

dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_vertex_ai_reasoning_engine_query

dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_vertex_ai_reasoning_engine_query

dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_vertex_ai_reasoning_engine_query

dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleVertexAiReasoningEngineQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleVertexAiReasoningEngineQuery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleVertexAiReasoningEngineQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVertexAiReasoningEngineQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.output">output</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethodInput">class_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineIdInput">reasoning_engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethod">class_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineId">reasoning_engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.output"></a>

```python
output: str
```

- *Type:* str

---

##### `class_method_input`<sup>Optional</sup> <a name="class_method_input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethodInput"></a>

```python
class_method_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `reasoning_engine_id_input`<sup>Optional</sup> <a name="reasoning_engine_id_input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineIdInput"></a>

```python
reasoning_engine_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `class_method`<sup>Required</sup> <a name="class_method" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethod"></a>

```python
class_method: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `reasoning_engine_id`<sup>Required</sup> <a name="reasoning_engine_id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineId"></a>

```python
reasoning_engine_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVertexAiReasoningEngineQueryConfig <a name="DataGoogleVertexAiReasoningEngineQueryConfig" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_vertex_ai_reasoning_engine_query

dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  reasoning_engine_id: str,
  region: str,
  class_method: str = None,
  id: str = None,
  input: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.reasoningEngineId">reasoning_engine_id</a></code> | <code>str</code> | The id of the Vertex Agent Engine to query. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.region">region</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.classMethod">class_method</a></code> | <code>str</code> | Class method to be used for the query. It is optional and defaults to "query" if unspecified. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.input">input</a></code> | <code>str</code> | Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc.. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.project">project</a></code> | <code>str</code> | The project of the resource. If not provided, the provider default project is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `reasoning_engine_id`<sup>Required</sup> <a name="reasoning_engine_id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.reasoningEngineId"></a>

```python
reasoning_engine_id: str
```

- *Type:* str

The id of the Vertex Agent Engine to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#reasoning_engine_id DataGoogleVertexAiReasoningEngineQuery#reasoning_engine_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#region DataGoogleVertexAiReasoningEngineQuery#region}

---

##### `class_method`<sup>Optional</sup> <a name="class_method" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.classMethod"></a>

```python
class_method: str
```

- *Type:* str

Class method to be used for the query. It is optional and defaults to "query" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#class_method DataGoogleVertexAiReasoningEngineQuery#class_method}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.input"></a>

```python
input: str
```

- *Type:* str

Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#input DataGoogleVertexAiReasoningEngineQuery#input}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project of the resource. If not provided, the provider default project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vertex_ai_reasoning_engine_query#project DataGoogleVertexAiReasoningEngineQuery#project}

---



