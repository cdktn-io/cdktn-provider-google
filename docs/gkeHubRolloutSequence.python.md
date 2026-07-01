# `gkeHubRolloutSequence` Submodule <a name="`gkeHubRolloutSequence` Submodule" id="@cdktn/provider-google.gkeHubRolloutSequence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubRolloutSequence <a name="GkeHubRolloutSequence" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence google_gke_hub_rollout_sequence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequence(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rollout_sequence_id: str,
  stages: IResolvable | typing.List[GkeHubRolloutSequenceStages],
  auto_upgrade_config: GkeHubRolloutSequenceAutoUpgradeConfig = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  ignored_clusters_selector: GkeHubRolloutSequenceIgnoredClustersSelector = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GkeHubRolloutSequenceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.rolloutSequenceId">rollout_sequence_id</a></code> | <code>str</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.stages">stages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>]</code> | stages block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.autoUpgradeConfig">auto_upgrade_config</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.ignoredClustersSelector">ignored_clusters_selector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rollout_sequence_id`<sup>Required</sup> <a name="rollout_sequence_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.rolloutSequenceId"></a>

- *Type:* str

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#rollout_sequence_id GkeHubRolloutSequence#rollout_sequence_id}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.stages"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#stages GkeHubRolloutSequence#stages}

---

##### `auto_upgrade_config`<sup>Optional</sup> <a name="auto_upgrade_config" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.autoUpgradeConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#auto_upgrade_config GkeHubRolloutSequence#auto_upgrade_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#deletion_policy GkeHubRolloutSequence#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.displayName"></a>

- *Type:* str

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#display_name GkeHubRolloutSequence#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignored_clusters_selector`<sup>Optional</sup> <a name="ignored_clusters_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.ignoredClustersSelector"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#ignored_clusters_selector GkeHubRolloutSequence#ignored_clusters_selector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#labels GkeHubRolloutSequence#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#timeouts GkeHubRolloutSequence#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig">put_auto_upgrade_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector">put_ignored_clusters_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages">put_stages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetAutoUpgradeConfig">reset_auto_upgrade_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetIgnoredClustersSelector">reset_ignored_clusters_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_upgrade_config` <a name="put_auto_upgrade_config" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig"></a>

```python
def put_auto_upgrade_config(
  rollout_creation_scope: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope = None
) -> None
```

###### `rollout_creation_scope`<sup>Optional</sup> <a name="rollout_creation_scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig.parameter.rolloutCreationScope"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

rollout_creation_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#rollout_creation_scope GkeHubRolloutSequence#rollout_creation_scope}

---

##### `put_ignored_clusters_selector` <a name="put_ignored_clusters_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector"></a>

```python
def put_ignored_clusters_selector(
  label_selector: str
) -> None
```

###### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector.parameter.labelSelector"></a>

- *Type:* str

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}

---

##### `put_stages` <a name="put_stages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages"></a>

```python
def put_stages(
  value: IResolvable | typing.List[GkeHubRolloutSequenceStages]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#create GkeHubRolloutSequence#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#delete GkeHubRolloutSequence#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#update GkeHubRolloutSequence#update}.

---

##### `reset_auto_upgrade_config` <a name="reset_auto_upgrade_config" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetAutoUpgradeConfig"></a>

```python
def reset_auto_upgrade_config() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignored_clusters_selector` <a name="reset_ignored_clusters_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetIgnoredClustersSelector"></a>

```python
def reset_ignored_clusters_selector() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GkeHubRolloutSequence resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequence.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequence.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequence.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequence.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GkeHubRolloutSequence resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GkeHubRolloutSequence to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GkeHubRolloutSequence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GkeHubRolloutSequence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfig">auto_upgrade_config</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelector">ignored_clusters_selector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList">GkeHubRolloutSequenceStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference">GkeHubRolloutSequenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfigInput">auto_upgrade_config_input</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelectorInput">ignored_clusters_selector_input</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceIdInput">rollout_sequence_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stagesInput">stages_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceId">rollout_sequence_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_upgrade_config`<sup>Required</sup> <a name="auto_upgrade_config" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfig"></a>

```python
auto_upgrade_config: GkeHubRolloutSequenceAutoUpgradeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `ignored_clusters_selector`<sup>Required</sup> <a name="ignored_clusters_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelector"></a>

```python
ignored_clusters_selector: GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stages"></a>

```python
stages: GkeHubRolloutSequenceStagesList
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList">GkeHubRolloutSequenceStagesList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeouts"></a>

```python
timeouts: GkeHubRolloutSequenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference">GkeHubRolloutSequenceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `auto_upgrade_config_input`<sup>Optional</sup> <a name="auto_upgrade_config_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfigInput"></a>

```python
auto_upgrade_config_input: GkeHubRolloutSequenceAutoUpgradeConfig
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignored_clusters_selector_input`<sup>Optional</sup> <a name="ignored_clusters_selector_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelectorInput"></a>

```python
ignored_clusters_selector_input: GkeHubRolloutSequenceIgnoredClustersSelector
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rollout_sequence_id_input`<sup>Optional</sup> <a name="rollout_sequence_id_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceIdInput"></a>

```python
rollout_sequence_id_input: str
```

- *Type:* str

---

##### `stages_input`<sup>Optional</sup> <a name="stages_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stagesInput"></a>

```python
stages_input: IResolvable | typing.List[GkeHubRolloutSequenceStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GkeHubRolloutSequenceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rollout_sequence_id`<sup>Required</sup> <a name="rollout_sequence_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceId"></a>

```python
rollout_sequence_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubRolloutSequenceAutoUpgradeConfig <a name="GkeHubRolloutSequenceAutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig(
  rollout_creation_scope: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope">rollout_creation_scope</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | rollout_creation_scope block. |

---

##### `rollout_creation_scope`<sup>Optional</sup> <a name="rollout_creation_scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope"></a>

```python
rollout_creation_scope: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

rollout_creation_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#rollout_creation_scope GkeHubRolloutSequence#rollout_creation_scope}

---

### GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope <a name="GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope(
  upgrade_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes">upgrade_types</a></code> | <code>typing.List[str]</code> | The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'. |

---

##### `upgrade_types`<sup>Optional</sup> <a name="upgrade_types" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes"></a>

```python
upgrade_types: typing.List[str]
```

- *Type:* typing.List[str]

The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#upgrade_types GkeHubRolloutSequence#upgrade_types}

---

### GkeHubRolloutSequenceConfig <a name="GkeHubRolloutSequenceConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rollout_sequence_id: str,
  stages: IResolvable | typing.List[GkeHubRolloutSequenceStages],
  auto_upgrade_config: GkeHubRolloutSequenceAutoUpgradeConfig = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  ignored_clusters_selector: GkeHubRolloutSequenceIgnoredClustersSelector = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GkeHubRolloutSequenceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.rolloutSequenceId">rollout_sequence_id</a></code> | <code>str</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.stages">stages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>]</code> | stages block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.autoUpgradeConfig">auto_upgrade_config</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.displayName">display_name</a></code> | <code>str</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.ignoredClustersSelector">ignored_clusters_selector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rollout_sequence_id`<sup>Required</sup> <a name="rollout_sequence_id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.rolloutSequenceId"></a>

```python
rollout_sequence_id: str
```

- *Type:* str

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#rollout_sequence_id GkeHubRolloutSequence#rollout_sequence_id}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.stages"></a>

```python
stages: IResolvable | typing.List[GkeHubRolloutSequenceStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#stages GkeHubRolloutSequence#stages}

---

##### `auto_upgrade_config`<sup>Optional</sup> <a name="auto_upgrade_config" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.autoUpgradeConfig"></a>

```python
auto_upgrade_config: GkeHubRolloutSequenceAutoUpgradeConfig
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#auto_upgrade_config GkeHubRolloutSequence#auto_upgrade_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#deletion_policy GkeHubRolloutSequence#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#display_name GkeHubRolloutSequence#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignored_clusters_selector`<sup>Optional</sup> <a name="ignored_clusters_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.ignoredClustersSelector"></a>

```python
ignored_clusters_selector: GkeHubRolloutSequenceIgnoredClustersSelector
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#ignored_clusters_selector GkeHubRolloutSequence#ignored_clusters_selector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#labels GkeHubRolloutSequence#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.timeouts"></a>

```python
timeouts: GkeHubRolloutSequenceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#timeouts GkeHubRolloutSequence#timeouts}

---

### GkeHubRolloutSequenceIgnoredClustersSelector <a name="GkeHubRolloutSequenceIgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector(
  label_selector: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector">label_selector</a></code> | <code>str</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector"></a>

```python
label_selector: str
```

- *Type:* str

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}

---

### GkeHubRolloutSequenceStages <a name="GkeHubRolloutSequenceStages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceStages(
  fleet_projects: typing.List[str],
  cluster_selector: GkeHubRolloutSequenceStagesClusterSelector = None,
  soak_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.fleetProjects">fleet_projects</a></code> | <code>typing.List[str]</code> | List of Fleet projects to select the clusters from. Expected format: projects/{project}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.clusterSelector">cluster_selector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | cluster_selector block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.soakDuration">soak_duration</a></code> | <code>str</code> | Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days. |

---

##### `fleet_projects`<sup>Required</sup> <a name="fleet_projects" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.fleetProjects"></a>

```python
fleet_projects: typing.List[str]
```

- *Type:* typing.List[str]

List of Fleet projects to select the clusters from. Expected format: projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#fleet_projects GkeHubRolloutSequence#fleet_projects}

---

##### `cluster_selector`<sup>Optional</sup> <a name="cluster_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.clusterSelector"></a>

```python
cluster_selector: GkeHubRolloutSequenceStagesClusterSelector
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

cluster_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#cluster_selector GkeHubRolloutSequence#cluster_selector}

---

##### `soak_duration`<sup>Optional</sup> <a name="soak_duration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.soakDuration"></a>

```python
soak_duration: str
```

- *Type:* str

Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#soak_duration GkeHubRolloutSequence#soak_duration}

---

### GkeHubRolloutSequenceStagesClusterSelector <a name="GkeHubRolloutSequenceStagesClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector(
  label_selector: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.property.labelSelector">label_selector</a></code> | <code>str</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.property.labelSelector"></a>

```python
label_selector: str
```

- *Type:* str

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}

---

### GkeHubRolloutSequenceTimeouts <a name="GkeHubRolloutSequenceTimeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#create GkeHubRolloutSequence#create}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#delete GkeHubRolloutSequence#delete}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#update GkeHubRolloutSequence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#create GkeHubRolloutSequence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#delete GkeHubRolloutSequence#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#update GkeHubRolloutSequence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubRolloutSequenceAutoUpgradeConfigOutputReference <a name="GkeHubRolloutSequenceAutoUpgradeConfigOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope">put_rollout_creation_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope">reset_rollout_creation_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rollout_creation_scope` <a name="put_rollout_creation_scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope"></a>

```python
def put_rollout_creation_scope(
  upgrade_types: typing.List[str] = None
) -> None
```

###### `upgrade_types`<sup>Optional</sup> <a name="upgrade_types" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope.parameter.upgradeTypes"></a>

- *Type:* typing.List[str]

The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#upgrade_types GkeHubRolloutSequence#upgrade_types}

---

##### `reset_rollout_creation_scope` <a name="reset_rollout_creation_scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope"></a>

```python
def reset_rollout_creation_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope">rollout_creation_scope</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput">rollout_creation_scope_input</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rollout_creation_scope`<sup>Required</sup> <a name="rollout_creation_scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope"></a>

```python
rollout_creation_scope: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a>

---

##### `rollout_creation_scope_input`<sup>Optional</sup> <a name="rollout_creation_scope_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput"></a>

```python
rollout_creation_scope_input: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubRolloutSequenceAutoUpgradeConfig
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

---


### GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference <a name="GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes">reset_upgrade_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_upgrade_types` <a name="reset_upgrade_types" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes"></a>

```python
def reset_upgrade_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput">upgrade_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes">upgrade_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `upgrade_types_input`<sup>Optional</sup> <a name="upgrade_types_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput"></a>

```python
upgrade_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `upgrade_types`<sup>Required</sup> <a name="upgrade_types" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes"></a>

```python
upgrade_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---


### GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference <a name="GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput">label_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector">label_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_selector_input`<sup>Optional</sup> <a name="label_selector_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput"></a>

```python
label_selector_input: str
```

- *Type:* str

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector"></a>

```python
label_selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubRolloutSequenceIgnoredClustersSelector
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

---


### GkeHubRolloutSequenceStagesClusterSelectorOutputReference <a name="GkeHubRolloutSequenceStagesClusterSelectorOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput">label_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector">label_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_selector_input`<sup>Optional</sup> <a name="label_selector_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput"></a>

```python
label_selector_input: str
```

- *Type:* str

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector"></a>

```python
label_selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubRolloutSequenceStagesClusterSelector
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

---


### GkeHubRolloutSequenceStagesList <a name="GkeHubRolloutSequenceStagesList" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubRolloutSequenceStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GkeHubRolloutSequenceStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>]

---


### GkeHubRolloutSequenceStagesOutputReference <a name="GkeHubRolloutSequenceStagesOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector">put_cluster_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetClusterSelector">reset_cluster_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetSoakDuration">reset_soak_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cluster_selector` <a name="put_cluster_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector"></a>

```python
def put_cluster_selector(
  label_selector: str
) -> None
```

###### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector.parameter.labelSelector"></a>

- *Type:* str

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}

---

##### `reset_cluster_selector` <a name="reset_cluster_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetClusterSelector"></a>

```python
def reset_cluster_selector() -> None
```

##### `reset_soak_duration` <a name="reset_soak_duration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetSoakDuration"></a>

```python
def reset_soak_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelector">cluster_selector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference">GkeHubRolloutSequenceStagesClusterSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput">cluster_selector_input</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput">fleet_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput">soak_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjects">fleet_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDuration">soak_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_selector`<sup>Required</sup> <a name="cluster_selector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelector"></a>

```python
cluster_selector: GkeHubRolloutSequenceStagesClusterSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference">GkeHubRolloutSequenceStagesClusterSelectorOutputReference</a>

---

##### `cluster_selector_input`<sup>Optional</sup> <a name="cluster_selector_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput"></a>

```python
cluster_selector_input: GkeHubRolloutSequenceStagesClusterSelector
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `fleet_projects_input`<sup>Optional</sup> <a name="fleet_projects_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput"></a>

```python
fleet_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `soak_duration_input`<sup>Optional</sup> <a name="soak_duration_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput"></a>

```python
soak_duration_input: str
```

- *Type:* str

---

##### `fleet_projects`<sup>Required</sup> <a name="fleet_projects" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjects"></a>

```python
fleet_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `soak_duration`<sup>Required</sup> <a name="soak_duration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDuration"></a>

```python
soak_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GkeHubRolloutSequenceStages
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>

---


### GkeHubRolloutSequenceTimeoutsOutputReference <a name="GkeHubRolloutSequenceTimeoutsOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gke_hub_rollout_sequence

gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GkeHubRolloutSequenceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

---



