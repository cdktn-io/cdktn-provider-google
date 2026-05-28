# `vertexAiReasoningEngineIamBinding` Submodule <a name="`vertexAiReasoningEngineIamBinding` Submodule" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiReasoningEngineIamBinding <a name="VertexAiReasoningEngineIamBinding" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding google_vertex_ai_reasoning_engine_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_reasoning_engine_iam_binding

vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  members: typing.List[str],
  reasoning_engine: str,
  role: str,
  condition: VertexAiReasoningEngineIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#members VertexAiReasoningEngineIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.reasoningEngine">reasoning_engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#reasoning_engine VertexAiReasoningEngineIamBinding#reasoning_engine}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#role VertexAiReasoningEngineIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#id VertexAiReasoningEngineIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#project VertexAiReasoningEngineIamBinding#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#region VertexAiReasoningEngineIamBinding#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#members VertexAiReasoningEngineIamBinding#members}.

---

##### `reasoning_engine`<sup>Required</sup> <a name="reasoning_engine" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.reasoningEngine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#reasoning_engine VertexAiReasoningEngineIamBinding#reasoning_engine}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#role VertexAiReasoningEngineIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#condition VertexAiReasoningEngineIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#id VertexAiReasoningEngineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#project VertexAiReasoningEngineIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#region VertexAiReasoningEngineIamBinding#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#expression VertexAiReasoningEngineIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#title VertexAiReasoningEngineIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#description VertexAiReasoningEngineIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VertexAiReasoningEngineIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isConstruct"></a>

```python
from cdktn_provider_google import vertex_ai_reasoning_engine_iam_binding

vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformElement"></a>

```python
from cdktn_provider_google import vertex_ai_reasoning_engine_iam_binding

vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformResource"></a>

```python
from cdktn_provider_google import vertex_ai_reasoning_engine_iam_binding

vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google import vertex_ai_reasoning_engine_iam_binding

vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VertexAiReasoningEngineIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiReasoningEngineIamBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiReasoningEngineIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiReasoningEngineIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference">VertexAiReasoningEngineIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngineInput">reasoning_engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngine">reasoning_engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.condition"></a>

```python
condition: VertexAiReasoningEngineIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference">VertexAiReasoningEngineIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.conditionInput"></a>

```python
condition_input: VertexAiReasoningEngineIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `reasoning_engine_input`<sup>Optional</sup> <a name="reasoning_engine_input" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngineInput"></a>

```python
reasoning_engine_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `reasoning_engine`<sup>Required</sup> <a name="reasoning_engine" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngine"></a>

```python
reasoning_engine: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiReasoningEngineIamBindingCondition <a name="VertexAiReasoningEngineIamBindingCondition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_reasoning_engine_iam_binding

vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#expression VertexAiReasoningEngineIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#title VertexAiReasoningEngineIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#description VertexAiReasoningEngineIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#expression VertexAiReasoningEngineIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#title VertexAiReasoningEngineIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#description VertexAiReasoningEngineIamBinding#description}.

---

### VertexAiReasoningEngineIamBindingConfig <a name="VertexAiReasoningEngineIamBindingConfig" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_reasoning_engine_iam_binding

vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  members: typing.List[str],
  reasoning_engine: str,
  role: str,
  condition: VertexAiReasoningEngineIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#members VertexAiReasoningEngineIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.reasoningEngine">reasoning_engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#reasoning_engine VertexAiReasoningEngineIamBinding#reasoning_engine}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#role VertexAiReasoningEngineIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#id VertexAiReasoningEngineIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#project VertexAiReasoningEngineIamBinding#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#region VertexAiReasoningEngineIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#members VertexAiReasoningEngineIamBinding#members}.

---

##### `reasoning_engine`<sup>Required</sup> <a name="reasoning_engine" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.reasoningEngine"></a>

```python
reasoning_engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#reasoning_engine VertexAiReasoningEngineIamBinding#reasoning_engine}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#role VertexAiReasoningEngineIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.condition"></a>

```python
condition: VertexAiReasoningEngineIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#condition VertexAiReasoningEngineIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#id VertexAiReasoningEngineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#project VertexAiReasoningEngineIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#region VertexAiReasoningEngineIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiReasoningEngineIamBindingConditionOutputReference <a name="VertexAiReasoningEngineIamBindingConditionOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_reasoning_engine_iam_binding

vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiReasoningEngineIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

---



