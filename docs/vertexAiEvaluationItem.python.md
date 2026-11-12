# `vertexAiEvaluationItem` Submodule <a name="`vertexAiEvaluationItem` Submodule" id="@cdktn/provider-google.vertexAiEvaluationItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiEvaluationItem <a name="VertexAiEvaluationItem" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item google_vertex_ai_evaluation_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItem(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  evaluation_item_type: str,
  region: str,
  deletion_policy: str = None,
  evaluation_request: VertexAiEvaluationItemEvaluationRequest = None,
  gcs_uri: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metadata: str = None,
  project: str = None,
  timeouts: VertexAiEvaluationItemTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-friendly display name for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.evaluationItemType">evaluation_item_type</a></code> | <code>str</code> | The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"]. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the EvaluationItem. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.evaluationRequest">evaluation_request</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a></code> | evaluation_request block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.gcsUri">gcs_uri</a></code> | <code>str</code> | The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#id VertexAiEvaluationItem#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | User-defined metadata for this evaluation item as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#project VertexAiEvaluationItem#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.displayName"></a>

- *Type:* str

The user-friendly display name for the EvaluationItem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#display_name VertexAiEvaluationItem#display_name}

---

##### `evaluation_item_type`<sup>Required</sup> <a name="evaluation_item_type" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.evaluationItemType"></a>

- *Type:* str

The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#evaluation_item_type VertexAiEvaluationItem#evaluation_item_type}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.region"></a>

- *Type:* str

The region of the EvaluationItem. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#region VertexAiEvaluationItem#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#deletion_policy VertexAiEvaluationItem#deletion_policy}

---

##### `evaluation_request`<sup>Optional</sup> <a name="evaluation_request" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.evaluationRequest"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

evaluation_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#evaluation_request VertexAiEvaluationItem#evaluation_request}

---

##### `gcs_uri`<sup>Optional</sup> <a name="gcs_uri" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.gcsUri"></a>

- *Type:* str

The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#gcs_uri VertexAiEvaluationItem#gcs_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#id VertexAiEvaluationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for the EvaluationItem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#labels VertexAiEvaluationItem#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.metadata"></a>

- *Type:* str

User-defined metadata for this evaluation item as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#metadata VertexAiEvaluationItem#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#project VertexAiEvaluationItem#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#timeouts VertexAiEvaluationItem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest">put_evaluation_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetEvaluationRequest">reset_evaluation_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetGcsUri">reset_gcs_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_evaluation_request` <a name="put_evaluation_request" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest"></a>

```python
def put_evaluation_request(
  candidate_responses: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestCandidateResponses] = None,
  golden_response: VertexAiEvaluationItemEvaluationRequestGoldenResponse = None,
  prompt: VertexAiEvaluationItemEvaluationRequestPrompt = None,
  rubrics: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestRubrics] = None
) -> None
```

###### `candidate_responses`<sup>Optional</sup> <a name="candidate_responses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest.parameter.candidateResponses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>]

candidate_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate_responses VertexAiEvaluationItem#candidate_responses}

---

###### `golden_response`<sup>Optional</sup> <a name="golden_response" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest.parameter.goldenResponse"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

golden_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#golden_response VertexAiEvaluationItem#golden_response}

---

###### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest.parameter.prompt"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#prompt VertexAiEvaluationItem#prompt}

---

###### `rubrics`<sup>Optional</sup> <a name="rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest.parameter.rubrics"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>]

rubrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubrics VertexAiEvaluationItem#rubrics}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#create VertexAiEvaluationItem#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#delete VertexAiEvaluationItem#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#update VertexAiEvaluationItem#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_evaluation_request` <a name="reset_evaluation_request" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetEvaluationRequest"></a>

```python
def reset_evaluation_request() -> None
```

##### `reset_gcs_uri` <a name="reset_gcs_uri" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetGcsUri"></a>

```python
def reset_gcs_uri() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VertexAiEvaluationItem resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isConstruct"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformElement"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformResource"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VertexAiEvaluationItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiEvaluationItem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiEvaluationItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiEvaluationItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList">VertexAiEvaluationItemErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequest">evaluation_request</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference">VertexAiEvaluationItemEvaluationRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationResponse">evaluation_response</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList">VertexAiEvaluationItemEvaluationResponseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference">VertexAiEvaluationItemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemTypeInput">evaluation_item_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequestInput">evaluation_request_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUriInput">gcs_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemType">evaluation_item_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUri">gcs_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.error"></a>

```python
error: VertexAiEvaluationItemErrorList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList">VertexAiEvaluationItemErrorList</a>

---

##### `evaluation_request`<sup>Required</sup> <a name="evaluation_request" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequest"></a>

```python
evaluation_request: VertexAiEvaluationItemEvaluationRequestOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference">VertexAiEvaluationItemEvaluationRequestOutputReference</a>

---

##### `evaluation_response`<sup>Required</sup> <a name="evaluation_response" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationResponse"></a>

```python
evaluation_response: VertexAiEvaluationItemEvaluationResponseList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList">VertexAiEvaluationItemEvaluationResponseList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeouts"></a>

```python
timeouts: VertexAiEvaluationItemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference">VertexAiEvaluationItemTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `evaluation_item_type_input`<sup>Optional</sup> <a name="evaluation_item_type_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemTypeInput"></a>

```python
evaluation_item_type_input: str
```

- *Type:* str

---

##### `evaluation_request_input`<sup>Optional</sup> <a name="evaluation_request_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequestInput"></a>

```python
evaluation_request_input: VertexAiEvaluationItemEvaluationRequest
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

---

##### `gcs_uri_input`<sup>Optional</sup> <a name="gcs_uri_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUriInput"></a>

```python
gcs_uri_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VertexAiEvaluationItemTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `evaluation_item_type`<sup>Required</sup> <a name="evaluation_item_type" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemType"></a>

```python
evaluation_item_type: str
```

- *Type:* str

---

##### `gcs_uri`<sup>Required</sup> <a name="gcs_uri" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUri"></a>

```python
gcs_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiEvaluationItemConfig <a name="VertexAiEvaluationItemConfig" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  evaluation_item_type: str,
  region: str,
  deletion_policy: str = None,
  evaluation_request: VertexAiEvaluationItemEvaluationRequest = None,
  gcs_uri: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metadata: str = None,
  project: str = None,
  timeouts: VertexAiEvaluationItemTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-friendly display name for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationItemType">evaluation_item_type</a></code> | <code>str</code> | The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"]. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.region">region</a></code> | <code>str</code> | The region of the EvaluationItem. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationRequest">evaluation_request</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a></code> | evaluation_request block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.gcsUri">gcs_uri</a></code> | <code>str</code> | The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#id VertexAiEvaluationItem#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.metadata">metadata</a></code> | <code>str</code> | User-defined metadata for this evaluation item as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#project VertexAiEvaluationItem#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-friendly display name for the EvaluationItem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#display_name VertexAiEvaluationItem#display_name}

---

##### `evaluation_item_type`<sup>Required</sup> <a name="evaluation_item_type" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationItemType"></a>

```python
evaluation_item_type: str
```

- *Type:* str

The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#evaluation_item_type VertexAiEvaluationItem#evaluation_item_type}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the EvaluationItem. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#region VertexAiEvaluationItem#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#deletion_policy VertexAiEvaluationItem#deletion_policy}

---

##### `evaluation_request`<sup>Optional</sup> <a name="evaluation_request" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationRequest"></a>

```python
evaluation_request: VertexAiEvaluationItemEvaluationRequest
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

evaluation_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#evaluation_request VertexAiEvaluationItem#evaluation_request}

---

##### `gcs_uri`<sup>Optional</sup> <a name="gcs_uri" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.gcsUri"></a>

```python
gcs_uri: str
```

- *Type:* str

The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#gcs_uri VertexAiEvaluationItem#gcs_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#id VertexAiEvaluationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for the EvaluationItem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#labels VertexAiEvaluationItem#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

User-defined metadata for this evaluation item as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#metadata VertexAiEvaluationItem#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#project VertexAiEvaluationItem#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.timeouts"></a>

```python
timeouts: VertexAiEvaluationItemTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#timeouts VertexAiEvaluationItem#timeouts}

---

### VertexAiEvaluationItemError <a name="VertexAiEvaluationItemError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemError()
```


### VertexAiEvaluationItemEvaluationRequest <a name="VertexAiEvaluationItemEvaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest(
  candidate_responses: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestCandidateResponses] = None,
  golden_response: VertexAiEvaluationItemEvaluationRequestGoldenResponse = None,
  prompt: VertexAiEvaluationItemEvaluationRequestPrompt = None,
  rubrics: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestRubrics] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.candidateResponses">candidate_responses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>]</code> | candidate_responses block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.goldenResponse">golden_response</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | golden_response block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a></code> | prompt block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.rubrics">rubrics</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>]</code> | rubrics block. |

---

##### `candidate_responses`<sup>Optional</sup> <a name="candidate_responses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.candidateResponses"></a>

```python
candidate_responses: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestCandidateResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>]

candidate_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate_responses VertexAiEvaluationItem#candidate_responses}

---

##### `golden_response`<sup>Optional</sup> <a name="golden_response" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.goldenResponse"></a>

```python
golden_response: VertexAiEvaluationItemEvaluationRequestGoldenResponse
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

golden_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#golden_response VertexAiEvaluationItem#golden_response}

---

##### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.prompt"></a>

```python
prompt: VertexAiEvaluationItemEvaluationRequestPrompt
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#prompt VertexAiEvaluationItem#prompt}

---

##### `rubrics`<sup>Optional</sup> <a name="rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.rubrics"></a>

```python
rubrics: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestRubrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>]

rubrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubrics VertexAiEvaluationItem#rubrics}

---

### VertexAiEvaluationItemEvaluationRequestCandidateResponses <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses(
  candidate: str,
  agent_data: str = None,
  text: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.candidate">candidate</a></code> | <code>str</code> | The name of the candidate that produced the response. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.agentData">agent_data</a></code> | <code>str</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.text">text</a></code> | <code>str</code> | Text response. At most one of 'text', 'value', or 'agent_data' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.value">value</a></code> | <code>str</code> | Fields and values that can be used to populate the response template, as a JSON string. |

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.candidate"></a>

```python
candidate: str
```

- *Type:* str

The name of the candidate that produced the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate VertexAiEvaluationItem#candidate}

---

##### `agent_data`<sup>Optional</sup> <a name="agent_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.agentData"></a>

```python
agent_data: str
```

- *Type:* str

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
field is used to provide the full output of an agent's run, including
all turns and events, for direct evaluation.
At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.text"></a>

```python
text: str
```

- *Type:* str

Text response. At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.value"></a>

```python
value: str
```

- *Type:* str

Fields and values that can be used to populate the response template, as a JSON string.

At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}

---

### VertexAiEvaluationItemEvaluationRequestCandidateResponsesError <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError()
```


### VertexAiEvaluationItemEvaluationRequestGoldenResponse <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse(
  candidate: str,
  agent_data: str = None,
  text: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.candidate">candidate</a></code> | <code>str</code> | The name of the candidate that produced the response. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.agentData">agent_data</a></code> | <code>str</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.text">text</a></code> | <code>str</code> | Text response. At most one of 'text', 'value', or 'agent_data' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.value">value</a></code> | <code>str</code> | Fields and values that can be used to populate the response template, as a JSON string. |

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.candidate"></a>

```python
candidate: str
```

- *Type:* str

The name of the candidate that produced the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate VertexAiEvaluationItem#candidate}

---

##### `agent_data`<sup>Optional</sup> <a name="agent_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.agentData"></a>

```python
agent_data: str
```

- *Type:* str

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
field is used to provide the full output of an agent's run, including
all turns and events, for direct evaluation.
At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.text"></a>

```python
text: str
```

- *Type:* str

Text response. At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.value"></a>

```python
value: str
```

- *Type:* str

Fields and values that can be used to populate the response template, as a JSON string.

At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}

---

### VertexAiEvaluationItemEvaluationRequestGoldenResponseError <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError()
```


### VertexAiEvaluationItemEvaluationRequestPrompt <a name="VertexAiEvaluationItemEvaluationRequestPrompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt(
  agent_data: str = None,
  prompt_template_data: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData = None,
  text: str = None,
  user_scenario: VertexAiEvaluationItemEvaluationRequestPromptUserScenario = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.agentData">agent_data</a></code> | <code>str</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.promptTemplateData">prompt_template_data</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | prompt_template_data block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.text">text</a></code> | <code>str</code> | Text prompt. At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.userScenario">user_scenario</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | user_scenario block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.value">value</a></code> | <code>str</code> | Fields and values that can be used to populate the prompt template, as a JSON string. |

---

##### `agent_data`<sup>Optional</sup> <a name="agent_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.agentData"></a>

```python
agent_data: str
```

- *Type:* str

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
serves as the input context for agent scraping.
At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}

---

##### `prompt_template_data`<sup>Optional</sup> <a name="prompt_template_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.promptTemplateData"></a>

```python
prompt_template_data: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

prompt_template_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#prompt_template_data VertexAiEvaluationItem#prompt_template_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.text"></a>

```python
text: str
```

- *Type:* str

Text prompt. At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}

---

##### `user_scenario`<sup>Optional</sup> <a name="user_scenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.userScenario"></a>

```python
user_scenario: VertexAiEvaluationItemEvaluationRequestPromptUserScenario
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

user_scenario block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#user_scenario VertexAiEvaluationItem#user_scenario}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.value"></a>

```python
value: str
```

- *Type:* str

Fields and values that can be used to populate the prompt template, as a JSON string.

At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}

---

### VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData <a name="VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData(
  values: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.property.values">values</a></code> | <code>str</code> | The values for fields in the prompt template, as a JSON string mapping field names to Content objects. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.property.values"></a>

```python
values: str
```

- *Type:* str

The values for fields in the prompt template, as a JSON string mapping field names to Content objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#values VertexAiEvaluationItem#values}

---

### VertexAiEvaluationItemEvaluationRequestPromptUserScenario <a name="VertexAiEvaluationItemEvaluationRequestPromptUserScenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario(
  conversation_plan: str,
  starting_prompt: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.conversationPlan">conversation_plan</a></code> | <code>str</code> | The plan for the conversation, used to drive the multi-turn agent run and generate the simulated agent evaluation dataset. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.startingPrompt">starting_prompt</a></code> | <code>str</code> | The prompt that starts the conversation between the simulated user and the agent under test. |

---

##### `conversation_plan`<sup>Required</sup> <a name="conversation_plan" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.conversationPlan"></a>

```python
conversation_plan: str
```

- *Type:* str

The plan for the conversation, used to drive the multi-turn agent run and generate the simulated agent evaluation dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#conversation_plan VertexAiEvaluationItem#conversation_plan}

---

##### `starting_prompt`<sup>Required</sup> <a name="starting_prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.startingPrompt"></a>

```python
starting_prompt: str
```

- *Type:* str

The prompt that starts the conversation between the simulated user and the agent under test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#starting_prompt VertexAiEvaluationItem#starting_prompt}

---

### VertexAiEvaluationItemEvaluationRequestRubrics <a name="VertexAiEvaluationItemEvaluationRequestRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics(
  name: str,
  display_name: str = None,
  group_id: str = None,
  rubrics: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestRubricsRubrics] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#name VertexAiEvaluationItem#name}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name for the group. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.groupId">group_id</a></code> | <code>str</code> | Unique identifier for the group. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.rubrics">rubrics</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>]</code> | rubrics block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#name VertexAiEvaluationItem#name}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#display_name VertexAiEvaluationItem#display_name}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Unique identifier for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#group_id VertexAiEvaluationItem#group_id}

---

##### `rubrics`<sup>Optional</sup> <a name="rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.rubrics"></a>

```python
rubrics: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestRubricsRubrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>]

rubrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubrics VertexAiEvaluationItem#rubrics}

---

### VertexAiEvaluationItemEvaluationRequestRubricsRubrics <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics(
  content: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent,
  importance: str = None,
  rubric_id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.content">content</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | content block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.importance">importance</a></code> | <code>str</code> | The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.rubricId">rubric_id</a></code> | <code>str</code> | Unique identifier for the rubric. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.type">type</a></code> | <code>str</code> | A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.content"></a>

```python
content: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#content VertexAiEvaluationItem#content}

---

##### `importance`<sup>Optional</sup> <a name="importance" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.importance"></a>

```python
importance: str
```

- *Type:* str

The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#importance VertexAiEvaluationItem#importance}

---

##### `rubric_id`<sup>Optional</sup> <a name="rubric_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.rubricId"></a>

```python
rubric_id: str
```

- *Type:* str

Unique identifier for the rubric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubric_id VertexAiEvaluationItem#rubric_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.type"></a>

```python
type: str
```

- *Type:* str

A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#type VertexAiEvaluationItem#type}

---

### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent(
  property: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.property.property">property</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | property block. |

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.property.property"></a>

```python
property: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#property VertexAiEvaluationItem#property}

---

### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty(
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.property.description">description</a></code> | <code>str</code> | Description of the property being evaluated. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the property being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#description VertexAiEvaluationItem#description}

---

### VertexAiEvaluationItemEvaluationResponse <a name="VertexAiEvaluationItemEvaluationResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse()
```


### VertexAiEvaluationItemEvaluationResponseCandidateResults <a name="VertexAiEvaluationItemEvaluationResponseCandidateResults" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults()
```


### VertexAiEvaluationItemEvaluationResponseCandidateResultsError <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError()
```


### VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts()
```


### VertexAiEvaluationItemTimeouts <a name="VertexAiEvaluationItemTimeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#create VertexAiEvaluationItem#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#delete VertexAiEvaluationItem#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#update VertexAiEvaluationItem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#create VertexAiEvaluationItem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#delete VertexAiEvaluationItem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#update VertexAiEvaluationItem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiEvaluationItemErrorList <a name="VertexAiEvaluationItemErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiEvaluationItemErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VertexAiEvaluationItemErrorOutputReference <a name="VertexAiEvaluationItemErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError">VertexAiEvaluationItemError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemError
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError">VertexAiEvaluationItemError</a>

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError">VertexAiEvaluationItemEvaluationRequestCandidateResponsesError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationRequestCandidateResponsesError
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError">VertexAiEvaluationItemEvaluationRequestCandidateResponsesError</a>

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesList <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestCandidateResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>]

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetAgentData">reset_agent_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_agent_data` <a name="reset_agent_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetAgentData"></a>

```python
def reset_agent_data() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentDataInput">agent_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidateInput">candidate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentData">agent_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidate">candidate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.error"></a>

```python
error: VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList</a>

---

##### `agent_data_input`<sup>Optional</sup> <a name="agent_data_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentDataInput"></a>

```python
agent_data_input: str
```

- *Type:* str

---

##### `candidate_input`<sup>Optional</sup> <a name="candidate_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidateInput"></a>

```python
candidate_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `agent_data`<sup>Required</sup> <a name="agent_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentData"></a>

```python
agent_data: str
```

- *Type:* str

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidate"></a>

```python
candidate: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiEvaluationItemEvaluationRequestCandidateResponses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>

---


### VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError">VertexAiEvaluationItemEvaluationRequestGoldenResponseError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationRequestGoldenResponseError
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError">VertexAiEvaluationItemEvaluationRequestGoldenResponseError</a>

---


### VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetAgentData">reset_agent_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_agent_data` <a name="reset_agent_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetAgentData"></a>

```python
def reset_agent_data() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList">VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentDataInput">agent_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidateInput">candidate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentData">agent_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidate">candidate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.error"></a>

```python
error: VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList">VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList</a>

---

##### `agent_data_input`<sup>Optional</sup> <a name="agent_data_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentDataInput"></a>

```python
agent_data_input: str
```

- *Type:* str

---

##### `candidate_input`<sup>Optional</sup> <a name="candidate_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidateInput"></a>

```python
candidate_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `agent_data`<sup>Required</sup> <a name="agent_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentData"></a>

```python
agent_data: str
```

- *Type:* str

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidate"></a>

```python
candidate: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationRequestGoldenResponse
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---


### VertexAiEvaluationItemEvaluationRequestOutputReference <a name="VertexAiEvaluationItemEvaluationRequestOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses">put_candidate_responses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse">put_golden_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt">put_prompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics">put_rubrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetCandidateResponses">reset_candidate_responses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetGoldenResponse">reset_golden_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetPrompt">reset_prompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetRubrics">reset_rubrics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_candidate_responses` <a name="put_candidate_responses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses"></a>

```python
def put_candidate_responses(
  value: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestCandidateResponses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>]

---

##### `put_golden_response` <a name="put_golden_response" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse"></a>

```python
def put_golden_response(
  candidate: str,
  agent_data: str = None,
  text: str = None,
  value: str = None
) -> None
```

###### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse.parameter.candidate"></a>

- *Type:* str

The name of the candidate that produced the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate VertexAiEvaluationItem#candidate}

---

###### `agent_data`<sup>Optional</sup> <a name="agent_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse.parameter.agentData"></a>

- *Type:* str

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
field is used to provide the full output of an agent's run, including
all turns and events, for direct evaluation.
At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse.parameter.text"></a>

- *Type:* str

Text response. At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse.parameter.value"></a>

- *Type:* str

Fields and values that can be used to populate the response template, as a JSON string.

At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}

---

##### `put_prompt` <a name="put_prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt"></a>

```python
def put_prompt(
  agent_data: str = None,
  prompt_template_data: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData = None,
  text: str = None,
  user_scenario: VertexAiEvaluationItemEvaluationRequestPromptUserScenario = None,
  value: str = None
) -> None
```

###### `agent_data`<sup>Optional</sup> <a name="agent_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt.parameter.agentData"></a>

- *Type:* str

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
serves as the input context for agent scraping.
At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}

---

###### `prompt_template_data`<sup>Optional</sup> <a name="prompt_template_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt.parameter.promptTemplateData"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

prompt_template_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#prompt_template_data VertexAiEvaluationItem#prompt_template_data}

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt.parameter.text"></a>

- *Type:* str

Text prompt. At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}

---

###### `user_scenario`<sup>Optional</sup> <a name="user_scenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt.parameter.userScenario"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

user_scenario block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#user_scenario VertexAiEvaluationItem#user_scenario}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt.parameter.value"></a>

- *Type:* str

Fields and values that can be used to populate the prompt template, as a JSON string.

At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}

---

##### `put_rubrics` <a name="put_rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics"></a>

```python
def put_rubrics(
  value: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestRubrics]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>]

---

##### `reset_candidate_responses` <a name="reset_candidate_responses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetCandidateResponses"></a>

```python
def reset_candidate_responses() -> None
```

##### `reset_golden_response` <a name="reset_golden_response" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetGoldenResponse"></a>

```python
def reset_golden_response() -> None
```

##### `reset_prompt` <a name="reset_prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetPrompt"></a>

```python
def reset_prompt() -> None
```

##### `reset_rubrics` <a name="reset_rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetRubrics"></a>

```python
def reset_rubrics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponses">candidate_responses</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponse">golden_response</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference">VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference">VertexAiEvaluationItemEvaluationRequestPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubrics">rubrics</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponsesInput">candidate_responses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponseInput">golden_response_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.promptInput">prompt_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubricsInput">rubrics_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `candidate_responses`<sup>Required</sup> <a name="candidate_responses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponses"></a>

```python
candidate_responses: VertexAiEvaluationItemEvaluationRequestCandidateResponsesList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesList</a>

---

##### `golden_response`<sup>Required</sup> <a name="golden_response" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponse"></a>

```python
golden_response: VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference">VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference</a>

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.prompt"></a>

```python
prompt: VertexAiEvaluationItemEvaluationRequestPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference">VertexAiEvaluationItemEvaluationRequestPromptOutputReference</a>

---

##### `rubrics`<sup>Required</sup> <a name="rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubrics"></a>

```python
rubrics: VertexAiEvaluationItemEvaluationRequestRubricsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsList</a>

---

##### `candidate_responses_input`<sup>Optional</sup> <a name="candidate_responses_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponsesInput"></a>

```python
candidate_responses_input: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestCandidateResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>]

---

##### `golden_response_input`<sup>Optional</sup> <a name="golden_response_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponseInput"></a>

```python
golden_response_input: VertexAiEvaluationItemEvaluationRequestGoldenResponse
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.promptInput"></a>

```python
prompt_input: VertexAiEvaluationItemEvaluationRequestPrompt
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

---

##### `rubrics_input`<sup>Optional</sup> <a name="rubrics_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubricsInput"></a>

```python
rubrics_input: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestRubrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationRequest
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

---


### VertexAiEvaluationItemEvaluationRequestPromptOutputReference <a name="VertexAiEvaluationItemEvaluationRequestPromptOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData">put_prompt_template_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario">put_user_scenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetAgentData">reset_agent_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetPromptTemplateData">reset_prompt_template_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetUserScenario">reset_user_scenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_prompt_template_data` <a name="put_prompt_template_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData"></a>

```python
def put_prompt_template_data(
  values: str = None
) -> None
```

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData.parameter.values"></a>

- *Type:* str

The values for fields in the prompt template, as a JSON string mapping field names to Content objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#values VertexAiEvaluationItem#values}

---

##### `put_user_scenario` <a name="put_user_scenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario"></a>

```python
def put_user_scenario(
  conversation_plan: str,
  starting_prompt: str
) -> None
```

###### `conversation_plan`<sup>Required</sup> <a name="conversation_plan" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario.parameter.conversationPlan"></a>

- *Type:* str

The plan for the conversation, used to drive the multi-turn agent run and generate the simulated agent evaluation dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#conversation_plan VertexAiEvaluationItem#conversation_plan}

---

###### `starting_prompt`<sup>Required</sup> <a name="starting_prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario.parameter.startingPrompt"></a>

- *Type:* str

The prompt that starts the conversation between the simulated user and the agent under test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#starting_prompt VertexAiEvaluationItem#starting_prompt}

---

##### `reset_agent_data` <a name="reset_agent_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetAgentData"></a>

```python
def reset_agent_data() -> None
```

##### `reset_prompt_template_data` <a name="reset_prompt_template_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetPromptTemplateData"></a>

```python
def reset_prompt_template_data() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_user_scenario` <a name="reset_user_scenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetUserScenario"></a>

```python
def reset_user_scenario() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateData">prompt_template_data</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenario">user_scenario</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference">VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentDataInput">agent_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateDataInput">prompt_template_data_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenarioInput">user_scenario_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentData">agent_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prompt_template_data`<sup>Required</sup> <a name="prompt_template_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateData"></a>

```python
prompt_template_data: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference</a>

---

##### `user_scenario`<sup>Required</sup> <a name="user_scenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenario"></a>

```python
user_scenario: VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference">VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference</a>

---

##### `agent_data_input`<sup>Optional</sup> <a name="agent_data_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentDataInput"></a>

```python
agent_data_input: str
```

- *Type:* str

---

##### `prompt_template_data_input`<sup>Optional</sup> <a name="prompt_template_data_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateDataInput"></a>

```python
prompt_template_data_input: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `user_scenario_input`<sup>Optional</sup> <a name="user_scenario_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenarioInput"></a>

```python
user_scenario_input: VertexAiEvaluationItemEvaluationRequestPromptUserScenario
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `agent_data`<sup>Required</sup> <a name="agent_data" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentData"></a>

```python
agent_data: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationRequestPrompt
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

---


### VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference <a name="VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.valuesInput">values_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.values">values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.valuesInput"></a>

```python
values_input: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.values"></a>

```python
values: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---


### VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference <a name="VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlanInput">conversation_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPromptInput">starting_prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlan">conversation_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPrompt">starting_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conversation_plan_input`<sup>Optional</sup> <a name="conversation_plan_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlanInput"></a>

```python
conversation_plan_input: str
```

- *Type:* str

---

##### `starting_prompt_input`<sup>Optional</sup> <a name="starting_prompt_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPromptInput"></a>

```python
starting_prompt_input: str
```

- *Type:* str

---

##### `conversation_plan`<sup>Required</sup> <a name="conversation_plan" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlan"></a>

```python
conversation_plan: str
```

- *Type:* str

---

##### `starting_prompt`<sup>Required</sup> <a name="starting_prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPrompt"></a>

```python
starting_prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationRequestPromptUserScenario
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsList <a name="VertexAiEvaluationItemEvaluationRequestRubricsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiEvaluationItemEvaluationRequestRubricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestRubrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>]

---


### VertexAiEvaluationItemEvaluationRequestRubricsOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics">put_rubrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetRubrics">reset_rubrics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rubrics` <a name="put_rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics"></a>

```python
def put_rubrics(
  value: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestRubricsRubrics]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>]

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_rubrics` <a name="reset_rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetRubrics"></a>

```python
def reset_rubrics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubrics">rubrics</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsRubricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubricsInput">rubrics_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rubrics`<sup>Required</sup> <a name="rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubrics"></a>

```python
rubrics: VertexAiEvaluationItemEvaluationRequestRubricsRubricsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsRubricsList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rubrics_input`<sup>Optional</sup> <a name="rubrics_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubricsInput"></a>

```python
rubrics_input: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestRubricsRubrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiEvaluationItemEvaluationRequestRubrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty">put_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resetProperty">reset_property</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_property` <a name="put_property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty"></a>

```python
def put_property(
  description: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty.parameter.description"></a>

- *Type:* str

Description of the property being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#description VertexAiEvaluationItem#description}

---

##### `reset_property` <a name="reset_property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resetProperty"></a>

```python
def reset_property() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.property">property</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.propertyInput">property_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.property"></a>

```python
property: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference</a>

---

##### `property_input`<sup>Optional</sup> <a name="property_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.propertyInput"></a>

```python
property_input: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsList <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VertexAiEvaluationItemEvaluationRequestRubricsRubrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>]

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetImportance">reset_importance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetRubricId">reset_rubric_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_content` <a name="put_content" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent"></a>

```python
def put_content(
  property: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty = None
) -> None
```

###### `property`<sup>Optional</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent.parameter.property"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#property VertexAiEvaluationItem#property}

---

##### `reset_importance` <a name="reset_importance" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetImportance"></a>

```python
def reset_importance() -> None
```

##### `reset_rubric_id` <a name="reset_rubric_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetRubricId"></a>

```python
def reset_rubric_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.content">content</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.contentInput">content_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importanceInput">importance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricIdInput">rubric_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importance">importance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricId">rubric_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.content"></a>

```python
content: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference</a>

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.contentInput"></a>

```python
content_input: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---

##### `importance_input`<sup>Optional</sup> <a name="importance_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importanceInput"></a>

```python
importance_input: str
```

- *Type:* str

---

##### `rubric_id_input`<sup>Optional</sup> <a name="rubric_id_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricIdInput"></a>

```python
rubric_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importance"></a>

```python
importance: str
```

- *Type:* str

---

##### `rubric_id`<sup>Required</sup> <a name="rubric_id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricId"></a>

```python
rubric_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiEvaluationItemEvaluationRequestRubricsRubrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError">VertexAiEvaluationItemEvaluationResponseCandidateResultsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationResponseCandidateResultsError
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError">VertexAiEvaluationItemEvaluationResponseCandidateResultsError</a>

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsList <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.additionalResults">additional_results</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.candidate">candidate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList">VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.explanation">explanation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.rubricVerdicts">rubric_verdicts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.score">score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults">VertexAiEvaluationItemEvaluationResponseCandidateResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_results`<sup>Required</sup> <a name="additional_results" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.additionalResults"></a>

```python
additional_results: str
```

- *Type:* str

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.candidate"></a>

```python
candidate: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.error"></a>

```python
error: VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList">VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList</a>

---

##### `explanation`<sup>Required</sup> <a name="explanation" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.explanation"></a>

```python
explanation: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `rubric_verdicts`<sup>Required</sup> <a name="rubric_verdicts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.rubricVerdicts"></a>

```python
rubric_verdicts: VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList</a>

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.score"></a>

```python
score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationResponseCandidateResults
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults">VertexAiEvaluationItemEvaluationResponseCandidateResults</a>

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.evaluatedRubric">evaluated_rubric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.reasoning">reasoning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.verdict">verdict</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluated_rubric`<sup>Required</sup> <a name="evaluated_rubric" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.evaluatedRubric"></a>

```python
evaluated_rubric: str
```

- *Type:* str

---

##### `reasoning`<sup>Required</sup> <a name="reasoning" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.reasoning"></a>

```python
reasoning: str
```

- *Type:* str

---

##### `verdict`<sup>Required</sup> <a name="verdict" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.verdict"></a>

```python
verdict: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts</a>

---


### VertexAiEvaluationItemEvaluationResponseList <a name="VertexAiEvaluationItemEvaluationResponseList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiEvaluationItemEvaluationResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VertexAiEvaluationItemEvaluationResponseOutputReference <a name="VertexAiEvaluationItemEvaluationResponseOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.candidateResults">candidate_results</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRequest">evaluation_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRun">evaluation_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.request">request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse">VertexAiEvaluationItemEvaluationResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `candidate_results`<sup>Required</sup> <a name="candidate_results" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.candidateResults"></a>

```python
candidate_results: VertexAiEvaluationItemEvaluationResponseCandidateResultsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsList</a>

---

##### `evaluation_request`<sup>Required</sup> <a name="evaluation_request" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRequest"></a>

```python
evaluation_request: str
```

- *Type:* str

---

##### `evaluation_run`<sup>Required</sup> <a name="evaluation_run" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRun"></a>

```python
evaluation_run: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.request"></a>

```python
request: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationItemEvaluationResponse
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse">VertexAiEvaluationItemEvaluationResponse</a>

---


### VertexAiEvaluationItemTimeoutsOutputReference <a name="VertexAiEvaluationItemTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_item

vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiEvaluationItemTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

---



