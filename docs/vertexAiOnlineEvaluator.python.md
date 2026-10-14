# `vertexAiOnlineEvaluator` Submodule <a name="`vertexAiOnlineEvaluator` Submodule" id="@cdktn/provider-google.vertexAiOnlineEvaluator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiOnlineEvaluator <a name="VertexAiOnlineEvaluator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator google_vertex_ai_online_evaluator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluator(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_resource: str,
  cloud_observability: VertexAiOnlineEvaluatorCloudObservability,
  config: VertexAiOnlineEvaluatorConfigA,
  metric_sources: IResolvable | typing.List[VertexAiOnlineEvaluatorMetricSources],
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: VertexAiOnlineEvaluatorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.agentResource">agent_resource</a></code> | <code>str</code> | The name of the agent that the OnlineEvaluator evaluates periodically. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.cloudObservability">cloud_observability</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | cloud_observability block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.metricSources">metric_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>]</code> | metric_sources block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name for the OnlineEvaluator. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_resource`<sup>Required</sup> <a name="agent_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.agentResource"></a>

- *Type:* str

The name of the agent that the OnlineEvaluator evaluates periodically.

This value is used to filter the traces with a matching cloud.resource_id
and link the evaluation results with relevant dashboards/UIs. This field
is immutable; once set, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#agent_resource VertexAiOnlineEvaluator#agent_resource}

---

##### `cloud_observability`<sup>Required</sup> <a name="cloud_observability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.cloudObservability"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

cloud_observability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#cloud_observability VertexAiOnlineEvaluator#cloud_observability}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#config VertexAiOnlineEvaluator#config}

---

##### `metric_sources`<sup>Required</sup> <a name="metric_sources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.metricSources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>]

metric_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#metric_sources VertexAiOnlineEvaluator#metric_sources}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#deletion_policy VertexAiOnlineEvaluator#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name for the OnlineEvaluator.

The name doesn't have to be
unique. The name can consist of any UTF-8 characters. The maximum length
is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#display_name VertexAiOnlineEvaluator#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.region"></a>

- *Type:* str

The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#region VertexAiOnlineEvaluator#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#timeouts VertexAiOnlineEvaluator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability">put_cloud_observability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources">put_metric_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_observability` <a name="put_cloud_observability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability"></a>

```python
def put_cloud_observability(
  open_telemetry: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry,
  log_view: str = None,
  session_scope: VertexAiOnlineEvaluatorCloudObservabilitySessionScope = None,
  trace_scope: VertexAiOnlineEvaluatorCloudObservabilityTraceScope = None,
  trace_view: str = None
) -> None
```

###### `open_telemetry`<sup>Required</sup> <a name="open_telemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability.parameter.openTelemetry"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

open_telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#open_telemetry VertexAiOnlineEvaluator#open_telemetry}

---

###### `log_view`<sup>Optional</sup> <a name="log_view" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability.parameter.logView"></a>

- *Type:* str

Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#log_view VertexAiOnlineEvaluator#log_view}

---

###### `session_scope`<sup>Optional</sup> <a name="session_scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability.parameter.sessionScope"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

session_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#session_scope VertexAiOnlineEvaluator#session_scope}

---

###### `trace_scope`<sup>Optional</sup> <a name="trace_scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability.parameter.traceScope"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

trace_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#trace_scope VertexAiOnlineEvaluator#trace_scope}

---

###### `trace_view`<sup>Optional</sup> <a name="trace_view" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability.parameter.traceView"></a>

- *Type:* str

Optional trace view that will be used to query traces.

If empty, the
'_AllSpans' view from the '_Trace' US bucket will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#trace_view VertexAiOnlineEvaluator#trace_view}

---

##### `put_config` <a name="put_config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig"></a>

```python
def put_config(
  max_evaluated_samples_per_run: str = None,
  random_sampling: VertexAiOnlineEvaluatorConfigRandomSampling = None
) -> None
```

###### `max_evaluated_samples_per_run`<sup>Optional</sup> <a name="max_evaluated_samples_per_run" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig.parameter.maxEvaluatedSamplesPerRun"></a>

- *Type:* str

The maximum number of evaluations to perform per run. If set to 0, the number is unbounded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#max_evaluated_samples_per_run VertexAiOnlineEvaluator#max_evaluated_samples_per_run}

---

###### `random_sampling`<sup>Optional</sup> <a name="random_sampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig.parameter.randomSampling"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

random_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#random_sampling VertexAiOnlineEvaluator#random_sampling}

---

##### `put_metric_sources` <a name="put_metric_sources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources"></a>

```python
def put_metric_sources(
  value: IResolvable | typing.List[VertexAiOnlineEvaluatorMetricSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#create VertexAiOnlineEvaluator#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#delete VertexAiOnlineEvaluator#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#update VertexAiOnlineEvaluator#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiOnlineEvaluator to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiOnlineEvaluator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiOnlineEvaluator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservability">cloud_observability</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference">VertexAiOnlineEvaluatorConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSources">metric_sources</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList">VertexAiOnlineEvaluatorMetricSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.stateDetails">state_details</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList">VertexAiOnlineEvaluatorStateDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference">VertexAiOnlineEvaluatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResourceInput">agent_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservabilityInput">cloud_observability_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.configInput">config_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSourcesInput">metric_sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResource">agent_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_observability`<sup>Required</sup> <a name="cloud_observability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservability"></a>

```python
cloud_observability: VertexAiOnlineEvaluatorCloudObservabilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.config"></a>

```python
config: VertexAiOnlineEvaluatorConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference">VertexAiOnlineEvaluatorConfigAOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `metric_sources`<sup>Required</sup> <a name="metric_sources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSources"></a>

```python
metric_sources: VertexAiOnlineEvaluatorMetricSourcesList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList">VertexAiOnlineEvaluatorMetricSourcesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.stateDetails"></a>

```python
state_details: VertexAiOnlineEvaluatorStateDetailsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList">VertexAiOnlineEvaluatorStateDetailsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeouts"></a>

```python
timeouts: VertexAiOnlineEvaluatorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference">VertexAiOnlineEvaluatorTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `agent_resource_input`<sup>Optional</sup> <a name="agent_resource_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResourceInput"></a>

```python
agent_resource_input: str
```

- *Type:* str

---

##### `cloud_observability_input`<sup>Optional</sup> <a name="cloud_observability_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservabilityInput"></a>

```python
cloud_observability_input: VertexAiOnlineEvaluatorCloudObservability
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.configInput"></a>

```python
config_input: VertexAiOnlineEvaluatorConfigA
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_sources_input`<sup>Optional</sup> <a name="metric_sources_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSourcesInput"></a>

```python
metric_sources_input: IResolvable | typing.List[VertexAiOnlineEvaluatorMetricSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VertexAiOnlineEvaluatorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

---

##### `agent_resource`<sup>Required</sup> <a name="agent_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResource"></a>

```python
agent_resource: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiOnlineEvaluatorCloudObservability <a name="VertexAiOnlineEvaluatorCloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability(
  open_telemetry: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry,
  log_view: str = None,
  session_scope: VertexAiOnlineEvaluatorCloudObservabilitySessionScope = None,
  trace_scope: VertexAiOnlineEvaluatorCloudObservabilityTraceScope = None,
  trace_view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.openTelemetry">open_telemetry</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | open_telemetry block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.logView">log_view</a></code> | <code>str</code> | Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.sessionScope">session_scope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | session_scope block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceScope">trace_scope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | trace_scope block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceView">trace_view</a></code> | <code>str</code> | Optional trace view that will be used to query traces. |

---

##### `open_telemetry`<sup>Required</sup> <a name="open_telemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.openTelemetry"></a>

```python
open_telemetry: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

open_telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#open_telemetry VertexAiOnlineEvaluator#open_telemetry}

---

##### `log_view`<sup>Optional</sup> <a name="log_view" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.logView"></a>

```python
log_view: str
```

- *Type:* str

Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#log_view VertexAiOnlineEvaluator#log_view}

---

##### `session_scope`<sup>Optional</sup> <a name="session_scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.sessionScope"></a>

```python
session_scope: VertexAiOnlineEvaluatorCloudObservabilitySessionScope
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

session_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#session_scope VertexAiOnlineEvaluator#session_scope}

---

##### `trace_scope`<sup>Optional</sup> <a name="trace_scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceScope"></a>

```python
trace_scope: VertexAiOnlineEvaluatorCloudObservabilityTraceScope
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

trace_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#trace_scope VertexAiOnlineEvaluator#trace_scope}

---

##### `trace_view`<sup>Optional</sup> <a name="trace_view" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceView"></a>

```python
trace_view: str
```

- *Type:* str

Optional trace view that will be used to query traces.

If empty, the
'_AllSpans' view from the '_Trace' US bucket will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#trace_view VertexAiOnlineEvaluator#trace_view}

---

### VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry <a name="VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry(
  semconv_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion">semconv_version</a></code> | <code>str</code> | Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer. |

---

##### `semconv_version`<sup>Required</sup> <a name="semconv_version" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion"></a>

```python
semconv_version: str
```

- *Type:* str

Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#semconv_version VertexAiOnlineEvaluator#semconv_version}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScope <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope(
  filter: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter] = None,
  inactivity_trigger: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger">inactivity_trigger</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | inactivity_trigger block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter"></a>

```python
filter: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}

---

##### `inactivity_trigger`<sup>Optional</sup> <a name="inactivity_trigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger"></a>

```python
inactivity_trigger: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

inactivity_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#inactivity_trigger VertexAiOnlineEvaluator#inactivity_trigger}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter(
  duration: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration = None,
  model_call_errors: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors = None,
  model_calls: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls = None,
  tool_call_errors: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors = None,
  tool_calls: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls = None,
  total_token_usage: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage = None,
  user_turns: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors">model_call_errors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | model_call_errors block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls">model_calls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | model_calls block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors">tool_call_errors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | tool_call_errors block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls">tool_calls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | tool_calls block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage">total_token_usage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns">user_turns</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | user_turns block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration"></a>

```python
duration: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#duration VertexAiOnlineEvaluator#duration}

---

##### `model_call_errors`<sup>Optional</sup> <a name="model_call_errors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors"></a>

```python
model_call_errors: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

model_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#model_call_errors VertexAiOnlineEvaluator#model_call_errors}

---

##### `model_calls`<sup>Optional</sup> <a name="model_calls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls"></a>

```python
model_calls: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

model_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#model_calls VertexAiOnlineEvaluator#model_calls}

---

##### `tool_call_errors`<sup>Optional</sup> <a name="tool_call_errors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors"></a>

```python
tool_call_errors: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

tool_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#tool_call_errors VertexAiOnlineEvaluator#tool_call_errors}

---

##### `tool_calls`<sup>Optional</sup> <a name="tool_calls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls"></a>

```python
tool_calls: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

tool_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#tool_calls VertexAiOnlineEvaluator#tool_calls}

---

##### `total_token_usage`<sup>Optional</sup> <a name="total_token_usage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage"></a>

```python
total_token_usage: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#total_token_usage VertexAiOnlineEvaluator#total_token_usage}

---

##### `user_turns`<sup>Optional</sup> <a name="user_turns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns"></a>

```python
user_turns: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

user_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#user_turns VertexAiOnlineEvaluator#user_turns}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger(
  threshold: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold">threshold</a></code> | <code>str</code> | The amount of time that must pass with no new traces before a session is considered ready for evaluation. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

The amount of time that must pass with no new traces before a session is considered ready for evaluation.

Must be a positive
duration no greater than 7 days (604800 seconds), e.g. "3600s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#threshold VertexAiOnlineEvaluator#threshold}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScope <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope(
  filter: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter"></a>

```python
filter: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter(
  duration: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration = None,
  total_token_usage: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage">total_token_usage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration"></a>

```python
duration: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#duration VertexAiOnlineEvaluator#duration}

---

##### `total_token_usage`<sup>Optional</sup> <a name="total_token_usage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage"></a>

```python
total_token_usage: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#total_token_usage VertexAiOnlineEvaluator#total_token_usage}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage(
  comparison_operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The value to compare against. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorConfig <a name="VertexAiOnlineEvaluatorConfig" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_resource: str,
  cloud_observability: VertexAiOnlineEvaluatorCloudObservability,
  config: VertexAiOnlineEvaluatorConfigA,
  metric_sources: IResolvable | typing.List[VertexAiOnlineEvaluatorMetricSources],
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: VertexAiOnlineEvaluatorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.agentResource">agent_resource</a></code> | <code>str</code> | The name of the agent that the OnlineEvaluator evaluates periodically. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.cloudObservability">cloud_observability</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | cloud_observability block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.metricSources">metric_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>]</code> | metric_sources block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name for the OnlineEvaluator. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.region">region</a></code> | <code>str</code> | The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_resource`<sup>Required</sup> <a name="agent_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.agentResource"></a>

```python
agent_resource: str
```

- *Type:* str

The name of the agent that the OnlineEvaluator evaluates periodically.

This value is used to filter the traces with a matching cloud.resource_id
and link the evaluation results with relevant dashboards/UIs. This field
is immutable; once set, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#agent_resource VertexAiOnlineEvaluator#agent_resource}

---

##### `cloud_observability`<sup>Required</sup> <a name="cloud_observability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.cloudObservability"></a>

```python
cloud_observability: VertexAiOnlineEvaluatorCloudObservability
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

cloud_observability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#cloud_observability VertexAiOnlineEvaluator#cloud_observability}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.config"></a>

```python
config: VertexAiOnlineEvaluatorConfigA
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#config VertexAiOnlineEvaluator#config}

---

##### `metric_sources`<sup>Required</sup> <a name="metric_sources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.metricSources"></a>

```python
metric_sources: IResolvable | typing.List[VertexAiOnlineEvaluatorMetricSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>]

metric_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#metric_sources VertexAiOnlineEvaluator#metric_sources}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#deletion_policy VertexAiOnlineEvaluator#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name for the OnlineEvaluator.

The name doesn't have to be
unique. The name can consist of any UTF-8 characters. The maximum length
is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#display_name VertexAiOnlineEvaluator#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#region VertexAiOnlineEvaluator#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.timeouts"></a>

```python
timeouts: VertexAiOnlineEvaluatorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#timeouts VertexAiOnlineEvaluator#timeouts}

---

### VertexAiOnlineEvaluatorConfigA <a name="VertexAiOnlineEvaluatorConfigA" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA(
  max_evaluated_samples_per_run: str = None,
  random_sampling: VertexAiOnlineEvaluatorConfigRandomSampling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun">max_evaluated_samples_per_run</a></code> | <code>str</code> | The maximum number of evaluations to perform per run. If set to 0, the number is unbounded. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.randomSampling">random_sampling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | random_sampling block. |

---

##### `max_evaluated_samples_per_run`<sup>Optional</sup> <a name="max_evaluated_samples_per_run" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun"></a>

```python
max_evaluated_samples_per_run: str
```

- *Type:* str

The maximum number of evaluations to perform per run. If set to 0, the number is unbounded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#max_evaluated_samples_per_run VertexAiOnlineEvaluator#max_evaluated_samples_per_run}

---

##### `random_sampling`<sup>Optional</sup> <a name="random_sampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.randomSampling"></a>

```python
random_sampling: VertexAiOnlineEvaluatorConfigRandomSampling
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

random_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#random_sampling VertexAiOnlineEvaluator#random_sampling}

---

### VertexAiOnlineEvaluatorConfigRandomSampling <a name="VertexAiOnlineEvaluatorConfigRandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling(
  percentage: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of traces to sample for evaluation. Must be an integer between 1 and 100. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of traces to sample for evaluation. Must be an integer between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#percentage VertexAiOnlineEvaluator#percentage}

---

### VertexAiOnlineEvaluatorMetricSources <a name="VertexAiOnlineEvaluatorMetricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources(
  metric: str = None,
  metric_resource_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metric">metric</a></code> | <code>str</code> | Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metricResourceName">metric_resource_name</a></code> | <code>str</code> | Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metric"></a>

```python
metric: str
```

- *Type:* str

Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#metric VertexAiOnlineEvaluator#metric}

---

##### `metric_resource_name`<sup>Optional</sup> <a name="metric_resource_name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metricResourceName"></a>

```python
metric_resource_name: str
```

- *Type:* str

Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#metric_resource_name VertexAiOnlineEvaluator#metric_resource_name}

---

### VertexAiOnlineEvaluatorStateDetails <a name="VertexAiOnlineEvaluatorStateDetails" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails()
```


### VertexAiOnlineEvaluatorTimeouts <a name="VertexAiOnlineEvaluatorTimeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#create VertexAiOnlineEvaluator#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#delete VertexAiOnlineEvaluator#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#update VertexAiOnlineEvaluator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#create VertexAiOnlineEvaluator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#delete VertexAiOnlineEvaluator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#update VertexAiOnlineEvaluator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput">semconv_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion">semconv_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `semconv_version_input`<sup>Optional</sup> <a name="semconv_version_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput"></a>

```python
semconv_version_input: str
```

- *Type:* str

---

##### `semconv_version`<sup>Required</sup> <a name="semconv_version" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion"></a>

```python
semconv_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry">put_open_telemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope">put_session_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope">put_trace_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView">reset_log_view</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope">reset_session_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope">reset_trace_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView">reset_trace_view</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_open_telemetry` <a name="put_open_telemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry"></a>

```python
def put_open_telemetry(
  semconv_version: str
) -> None
```

###### `semconv_version`<sup>Required</sup> <a name="semconv_version" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry.parameter.semconvVersion"></a>

- *Type:* str

Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#semconv_version VertexAiOnlineEvaluator#semconv_version}

---

##### `put_session_scope` <a name="put_session_scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope"></a>

```python
def put_session_scope(
  filter: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter] = None,
  inactivity_trigger: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger = None
) -> None
```

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope.parameter.filter"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}

---

###### `inactivity_trigger`<sup>Optional</sup> <a name="inactivity_trigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope.parameter.inactivityTrigger"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

inactivity_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#inactivity_trigger VertexAiOnlineEvaluator#inactivity_trigger}

---

##### `put_trace_scope` <a name="put_trace_scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope"></a>

```python
def put_trace_scope(
  filter: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter] = None
) -> None
```

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope.parameter.filter"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}

---

##### `reset_log_view` <a name="reset_log_view" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView"></a>

```python
def reset_log_view() -> None
```

##### `reset_session_scope` <a name="reset_session_scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope"></a>

```python
def reset_session_scope() -> None
```

##### `reset_trace_scope` <a name="reset_trace_scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope"></a>

```python
def reset_trace_scope() -> None
```

##### `reset_trace_view` <a name="reset_trace_view" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView"></a>

```python
def reset_trace_view() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry">open_telemetry</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope">session_scope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope">trace_scope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput">log_view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput">open_telemetry_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput">session_scope_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput">trace_scope_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput">trace_view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView">log_view</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView">trace_view</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `open_telemetry`<sup>Required</sup> <a name="open_telemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry"></a>

```python
open_telemetry: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a>

---

##### `session_scope`<sup>Required</sup> <a name="session_scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope"></a>

```python
session_scope: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a>

---

##### `trace_scope`<sup>Required</sup> <a name="trace_scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope"></a>

```python
trace_scope: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a>

---

##### `log_view_input`<sup>Optional</sup> <a name="log_view_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput"></a>

```python
log_view_input: str
```

- *Type:* str

---

##### `open_telemetry_input`<sup>Optional</sup> <a name="open_telemetry_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput"></a>

```python
open_telemetry_input: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `session_scope_input`<sup>Optional</sup> <a name="session_scope_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput"></a>

```python
session_scope_input: VertexAiOnlineEvaluatorCloudObservabilitySessionScope
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `trace_scope_input`<sup>Optional</sup> <a name="trace_scope_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput"></a>

```python
trace_scope_input: VertexAiOnlineEvaluatorCloudObservabilityTraceScope
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `trace_view_input`<sup>Optional</sup> <a name="trace_view_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput"></a>

```python
trace_view_input: str
```

- *Type:* str

---

##### `log_view`<sup>Required</sup> <a name="log_view" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView"></a>

```python
log_view: str
```

- *Type:* str

---

##### `trace_view`<sup>Required</sup> <a name="trace_view" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView"></a>

```python
trace_view: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservability
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration">put_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors">put_model_call_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls">put_model_calls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors">put_tool_call_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls">put_tool_calls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage">put_total_token_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns">put_user_turns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors">reset_model_call_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls">reset_model_calls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors">reset_tool_call_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls">reset_tool_calls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage">reset_total_token_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns">reset_user_turns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_duration` <a name="put_duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration"></a>

```python
def put_duration(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

##### `put_model_call_errors` <a name="put_model_call_errors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors"></a>

```python
def put_model_call_errors(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

##### `put_model_calls` <a name="put_model_calls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls"></a>

```python
def put_model_calls(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

##### `put_tool_call_errors` <a name="put_tool_call_errors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors"></a>

```python
def put_tool_call_errors(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

##### `put_tool_calls` <a name="put_tool_calls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls"></a>

```python
def put_tool_calls(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

##### `put_total_token_usage` <a name="put_total_token_usage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage"></a>

```python
def put_total_token_usage(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

##### `put_user_turns` <a name="put_user_turns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns"></a>

```python
def put_user_turns(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

##### `reset_duration` <a name="reset_duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_model_call_errors` <a name="reset_model_call_errors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors"></a>

```python
def reset_model_call_errors() -> None
```

##### `reset_model_calls` <a name="reset_model_calls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls"></a>

```python
def reset_model_calls() -> None
```

##### `reset_tool_call_errors` <a name="reset_tool_call_errors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors"></a>

```python
def reset_tool_call_errors() -> None
```

##### `reset_tool_calls` <a name="reset_tool_calls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls"></a>

```python
def reset_tool_calls() -> None
```

##### `reset_total_token_usage` <a name="reset_total_token_usage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage"></a>

```python
def reset_total_token_usage() -> None
```

##### `reset_user_turns` <a name="reset_user_turns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns"></a>

```python
def reset_user_turns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors">model_call_errors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls">model_calls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors">tool_call_errors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls">tool_calls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage">total_token_usage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns">user_turns</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput">duration_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput">model_call_errors_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput">model_calls_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput">tool_call_errors_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput">tool_calls_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput">total_token_usage_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput">user_turns_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration"></a>

```python
duration: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a>

---

##### `model_call_errors`<sup>Required</sup> <a name="model_call_errors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors"></a>

```python
model_call_errors: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a>

---

##### `model_calls`<sup>Required</sup> <a name="model_calls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls"></a>

```python
model_calls: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a>

---

##### `tool_call_errors`<sup>Required</sup> <a name="tool_call_errors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors"></a>

```python
tool_call_errors: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a>

---

##### `tool_calls`<sup>Required</sup> <a name="tool_calls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls"></a>

```python
tool_calls: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a>

---

##### `total_token_usage`<sup>Required</sup> <a name="total_token_usage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage"></a>

```python
total_token_usage: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a>

---

##### `user_turns`<sup>Required</sup> <a name="user_turns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns"></a>

```python
user_turns: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a>

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput"></a>

```python
duration_input: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `model_call_errors_input`<sup>Optional</sup> <a name="model_call_errors_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput"></a>

```python
model_call_errors_input: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `model_calls_input`<sup>Optional</sup> <a name="model_calls_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput"></a>

```python
model_calls_input: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `tool_call_errors_input`<sup>Optional</sup> <a name="tool_call_errors_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput"></a>

```python
tool_call_errors_input: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `tool_calls_input`<sup>Optional</sup> <a name="tool_calls_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput"></a>

```python
tool_calls_input: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `total_token_usage_input`<sup>Optional</sup> <a name="total_token_usage_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```python
total_token_usage_input: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `user_turns_input`<sup>Optional</sup> <a name="user_turns_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput"></a>

```python
user_turns_input: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput">threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold">threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput"></a>

```python
threshold_input: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger">put_inactivity_trigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger">reset_inactivity_trigger</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]

---

##### `put_inactivity_trigger` <a name="put_inactivity_trigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger"></a>

```python
def put_inactivity_trigger(
  threshold: str
) -> None
```

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger.parameter.threshold"></a>

- *Type:* str

The amount of time that must pass with no new traces before a session is considered ready for evaluation.

Must be a positive
duration no greater than 7 days (604800 seconds), e.g. "3600s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#threshold VertexAiOnlineEvaluator#threshold}

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_inactivity_trigger` <a name="reset_inactivity_trigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger"></a>

```python
def reset_inactivity_trigger() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger">inactivity_trigger</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput">inactivity_trigger_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter"></a>

```python
filter: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a>

---

##### `inactivity_trigger`<sup>Required</sup> <a name="inactivity_trigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger"></a>

```python
inactivity_trigger: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>]

---

##### `inactivity_trigger_input`<sup>Optional</sup> <a name="inactivity_trigger_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput"></a>

```python
inactivity_trigger_input: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilitySessionScope
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration">put_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage">put_total_token_usage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage">reset_total_token_usage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_duration` <a name="put_duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration"></a>

```python
def put_duration(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

##### `put_total_token_usage` <a name="put_total_token_usage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage"></a>

```python
def put_total_token_usage(
  comparison_operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* typing.Union[int, float]

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

##### `reset_duration` <a name="reset_duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_total_token_usage` <a name="reset_total_token_usage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage"></a>

```python
def reset_total_token_usage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage">total_token_usage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput">duration_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput">total_token_usage_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration"></a>

```python
duration: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a>

---

##### `total_token_usage`<sup>Required</sup> <a name="total_token_usage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage"></a>

```python
total_token_usage: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a>

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput"></a>

```python
duration_input: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `total_token_usage_input`<sup>Optional</sup> <a name="total_token_usage_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```python
total_token_usage_input: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter"></a>

```python
filter: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorCloudObservabilityTraceScope
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---


### VertexAiOnlineEvaluatorConfigAOutputReference <a name="VertexAiOnlineEvaluatorConfigAOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling">put_random_sampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun">reset_max_evaluated_samples_per_run</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling">reset_random_sampling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_random_sampling` <a name="put_random_sampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling"></a>

```python
def put_random_sampling(
  percentage: typing.Union[int, float]
) -> None
```

###### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling.parameter.percentage"></a>

- *Type:* typing.Union[int, float]

The percentage of traces to sample for evaluation. Must be an integer between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#percentage VertexAiOnlineEvaluator#percentage}

---

##### `reset_max_evaluated_samples_per_run` <a name="reset_max_evaluated_samples_per_run" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun"></a>

```python
def reset_max_evaluated_samples_per_run() -> None
```

##### `reset_random_sampling` <a name="reset_random_sampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling"></a>

```python
def reset_random_sampling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling">random_sampling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput">max_evaluated_samples_per_run_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput">random_sampling_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun">max_evaluated_samples_per_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `random_sampling`<sup>Required</sup> <a name="random_sampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling"></a>

```python
random_sampling: VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a>

---

##### `max_evaluated_samples_per_run_input`<sup>Optional</sup> <a name="max_evaluated_samples_per_run_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput"></a>

```python
max_evaluated_samples_per_run_input: str
```

- *Type:* str

---

##### `random_sampling_input`<sup>Optional</sup> <a name="random_sampling_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput"></a>

```python
random_sampling_input: VertexAiOnlineEvaluatorConfigRandomSampling
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `max_evaluated_samples_per_run`<sup>Required</sup> <a name="max_evaluated_samples_per_run" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun"></a>

```python
max_evaluated_samples_per_run: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorConfigA
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

---


### VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference <a name="VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorConfigRandomSampling
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

---


### VertexAiOnlineEvaluatorMetricSourcesList <a name="VertexAiOnlineEvaluatorMetricSourcesList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiOnlineEvaluatorMetricSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VertexAiOnlineEvaluatorMetricSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>]

---


### VertexAiOnlineEvaluatorMetricSourcesOutputReference <a name="VertexAiOnlineEvaluatorMetricSourcesOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName">reset_metric_resource_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric` <a name="reset_metric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_metric_resource_name` <a name="reset_metric_resource_name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName"></a>

```python
def reset_metric_resource_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput">metric_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName">metric_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `metric_resource_name_input`<sup>Optional</sup> <a name="metric_resource_name_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput"></a>

```python
metric_resource_name_input: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `metric_resource_name`<sup>Required</sup> <a name="metric_resource_name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName"></a>

```python
metric_resource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiOnlineEvaluatorMetricSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>

---


### VertexAiOnlineEvaluatorStateDetailsList <a name="VertexAiOnlineEvaluatorStateDetailsList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiOnlineEvaluatorStateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VertexAiOnlineEvaluatorStateDetailsOutputReference <a name="VertexAiOnlineEvaluatorStateDetailsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails">VertexAiOnlineEvaluatorStateDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiOnlineEvaluatorStateDetails
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails">VertexAiOnlineEvaluatorStateDetails</a>

---


### VertexAiOnlineEvaluatorTimeoutsOutputReference <a name="VertexAiOnlineEvaluatorTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_online_evaluator

vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiOnlineEvaluatorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

---



