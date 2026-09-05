# `vertexAiEvaluationMetric` Submodule <a name="`vertexAiEvaluationMetric` Submodule" id="@cdktn/provider-google.vertexAiEvaluationMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiEvaluationMetric <a name="VertexAiEvaluationMetric" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric google_vertex_ai_evaluation_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_metric

vertexAiEvaluationMetric.VertexAiEvaluationMetric(
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
  region: str,
  deletion_policy: str = None,
  description: str = None,
  encryption_spec: VertexAiEvaluationMetricEncryptionSpec = None,
  evaluation_metric_id: str = None,
  gcs_uri: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metric: str = None,
  project: str = None,
  timeouts: VertexAiEvaluationMetricTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-friendly display name for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the EvaluationMetric. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec">VertexAiEvaluationMetricEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.evaluationMetricId">evaluation_metric_id</a></code> | <code>str</code> | The ID to use for the EvaluationMetric, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.gcsUri">gcs_uri</a></code> | <code>str</code> | The Google Cloud Storage URI that stores the metric specification. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#id VertexAiEvaluationMetric#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.metric">metric</a></code> | <code>str</code> | The metric configuration as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#project VertexAiEvaluationMetric#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts">VertexAiEvaluationMetricTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.displayName"></a>

- *Type:* str

The user-friendly display name for the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#display_name VertexAiEvaluationMetric#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.region"></a>

- *Type:* str

The region of the EvaluationMetric. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#region VertexAiEvaluationMetric#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#deletion_policy VertexAiEvaluationMetric#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.description"></a>

- *Type:* str

A description of the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#description VertexAiEvaluationMetric#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec">VertexAiEvaluationMetricEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#encryption_spec VertexAiEvaluationMetric#encryption_spec}

---

##### `evaluation_metric_id`<sup>Optional</sup> <a name="evaluation_metric_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.evaluationMetricId"></a>

- *Type:* str

The ID to use for the EvaluationMetric, which will become the final component of the resource name.

This value should be 1-63 characters,
and valid characters are /[a-z][0-9]-/. The first character must be
a lowercase letter, and the last character must be a lowercase letter
or number. If not provided, the server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#evaluation_metric_id VertexAiEvaluationMetric#evaluation_metric_id}

---

##### `gcs_uri`<sup>Optional</sup> <a name="gcs_uri" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.gcsUri"></a>

- *Type:* str

The Google Cloud Storage URI that stores the metric specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#gcs_uri VertexAiEvaluationMetric#gcs_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#id VertexAiEvaluationMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for the EvaluationMetric.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#labels VertexAiEvaluationMetric#labels}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.metric"></a>

- *Type:* str

The metric configuration as a JSON string.

Uses camelCase field names
to match the API format. Supports LLM-based metrics and custom code
execution metrics.
See the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)
for the full schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#metric VertexAiEvaluationMetric#metric}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#project VertexAiEvaluationMetric#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts">VertexAiEvaluationMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#timeouts VertexAiEvaluationMetric#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetEvaluationMetricId">reset_evaluation_metric_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetGcsUri">reset_gcs_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed encryption key
used to protect a resource. Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
The key needs to be in the same region as where the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#kms_key_name VertexAiEvaluationMetric#kms_key_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#create VertexAiEvaluationMetric#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#delete VertexAiEvaluationMetric#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#update VertexAiEvaluationMetric#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_evaluation_metric_id` <a name="reset_evaluation_metric_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetEvaluationMetricId"></a>

```python
def reset_evaluation_metric_id() -> None
```

##### `reset_gcs_uri` <a name="reset_gcs_uri" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetGcsUri"></a>

```python
def reset_gcs_uri() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VertexAiEvaluationMetric resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.isConstruct"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_metric

vertexAiEvaluationMetric.VertexAiEvaluationMetric.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.isTerraformElement"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_metric

vertexAiEvaluationMetric.VertexAiEvaluationMetric.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.isTerraformResource"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_metric

vertexAiEvaluationMetric.VertexAiEvaluationMetric.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.generateConfigForImport"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_metric

vertexAiEvaluationMetric.VertexAiEvaluationMetric.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VertexAiEvaluationMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiEvaluationMetric to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiEvaluationMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiEvaluationMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference">VertexAiEvaluationMetricEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference">VertexAiEvaluationMetricTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec">VertexAiEvaluationMetricEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.evaluationMetricIdInput">evaluation_metric_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.gcsUriInput">gcs_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts">VertexAiEvaluationMetricTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.evaluationMetricId">evaluation_metric_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.gcsUri">gcs_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.encryptionSpec"></a>

```python
encryption_spec: VertexAiEvaluationMetricEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference">VertexAiEvaluationMetricEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.timeouts"></a>

```python
timeouts: VertexAiEvaluationMetricTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference">VertexAiEvaluationMetricTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.encryptionSpecInput"></a>

```python
encryption_spec_input: VertexAiEvaluationMetricEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec">VertexAiEvaluationMetricEncryptionSpec</a>

---

##### `evaluation_metric_id_input`<sup>Optional</sup> <a name="evaluation_metric_id_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.evaluationMetricIdInput"></a>

```python
evaluation_metric_id_input: str
```

- *Type:* str

---

##### `gcs_uri_input`<sup>Optional</sup> <a name="gcs_uri_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.gcsUriInput"></a>

```python
gcs_uri_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VertexAiEvaluationMetricTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts">VertexAiEvaluationMetricTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `evaluation_metric_id`<sup>Required</sup> <a name="evaluation_metric_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.evaluationMetricId"></a>

```python
evaluation_metric_id: str
```

- *Type:* str

---

##### `gcs_uri`<sup>Required</sup> <a name="gcs_uri" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.gcsUri"></a>

```python
gcs_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetric.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiEvaluationMetricConfig <a name="VertexAiEvaluationMetricConfig" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_metric

vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  region: str,
  deletion_policy: str = None,
  description: str = None,
  encryption_spec: VertexAiEvaluationMetricEncryptionSpec = None,
  evaluation_metric_id: str = None,
  gcs_uri: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metric: str = None,
  project: str = None,
  timeouts: VertexAiEvaluationMetricTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-friendly display name for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.region">region</a></code> | <code>str</code> | The region of the EvaluationMetric. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.description">description</a></code> | <code>str</code> | A description of the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec">VertexAiEvaluationMetricEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.evaluationMetricId">evaluation_metric_id</a></code> | <code>str</code> | The ID to use for the EvaluationMetric, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.gcsUri">gcs_uri</a></code> | <code>str</code> | The Google Cloud Storage URI that stores the metric specification. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#id VertexAiEvaluationMetric#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.metric">metric</a></code> | <code>str</code> | The metric configuration as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#project VertexAiEvaluationMetric#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts">VertexAiEvaluationMetricTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-friendly display name for the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#display_name VertexAiEvaluationMetric#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the EvaluationMetric. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#region VertexAiEvaluationMetric#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#deletion_policy VertexAiEvaluationMetric#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#description VertexAiEvaluationMetric#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.encryptionSpec"></a>

```python
encryption_spec: VertexAiEvaluationMetricEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec">VertexAiEvaluationMetricEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#encryption_spec VertexAiEvaluationMetric#encryption_spec}

---

##### `evaluation_metric_id`<sup>Optional</sup> <a name="evaluation_metric_id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.evaluationMetricId"></a>

```python
evaluation_metric_id: str
```

- *Type:* str

The ID to use for the EvaluationMetric, which will become the final component of the resource name.

This value should be 1-63 characters,
and valid characters are /[a-z][0-9]-/. The first character must be
a lowercase letter, and the last character must be a lowercase letter
or number. If not provided, the server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#evaluation_metric_id VertexAiEvaluationMetric#evaluation_metric_id}

---

##### `gcs_uri`<sup>Optional</sup> <a name="gcs_uri" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.gcsUri"></a>

```python
gcs_uri: str
```

- *Type:* str

The Google Cloud Storage URI that stores the metric specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#gcs_uri VertexAiEvaluationMetric#gcs_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#id VertexAiEvaluationMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for the EvaluationMetric.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#labels VertexAiEvaluationMetric#labels}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.metric"></a>

```python
metric: str
```

- *Type:* str

The metric configuration as a JSON string.

Uses camelCase field names
to match the API format. Supports LLM-based metrics and custom code
execution metrics.
See the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)
for the full schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#metric VertexAiEvaluationMetric#metric}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#project VertexAiEvaluationMetric#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricConfig.property.timeouts"></a>

```python
timeouts: VertexAiEvaluationMetricTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts">VertexAiEvaluationMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#timeouts VertexAiEvaluationMetric#timeouts}

---

### VertexAiEvaluationMetricEncryptionSpec <a name="VertexAiEvaluationMetricEncryptionSpec" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_metric

vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Required. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed encryption key
used to protect a resource. Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
The key needs to be in the same region as where the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#kms_key_name VertexAiEvaluationMetric#kms_key_name}

---

### VertexAiEvaluationMetricTimeouts <a name="VertexAiEvaluationMetricTimeouts" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_metric

vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#create VertexAiEvaluationMetric#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#delete VertexAiEvaluationMetric#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#update VertexAiEvaluationMetric#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#create VertexAiEvaluationMetric#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#delete VertexAiEvaluationMetric#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vertex_ai_evaluation_metric#update VertexAiEvaluationMetric#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiEvaluationMetricEncryptionSpecOutputReference <a name="VertexAiEvaluationMetricEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_metric

vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec">VertexAiEvaluationMetricEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiEvaluationMetricEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricEncryptionSpec">VertexAiEvaluationMetricEncryptionSpec</a>

---


### VertexAiEvaluationMetricTimeoutsOutputReference <a name="VertexAiEvaluationMetricTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_evaluation_metric

vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts">VertexAiEvaluationMetricTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiEvaluationMetricTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationMetric.VertexAiEvaluationMetricTimeouts">VertexAiEvaluationMetricTimeouts</a>

---



