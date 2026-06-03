# `managedKafkaConnectCluster` Submodule <a name="`managedKafkaConnectCluster` Submodule" id="@cdktn/provider-google.managedKafkaConnectCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaConnectCluster <a name="ManagedKafkaConnectCluster" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster google_managed_kafka_connect_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capacity_config: ManagedKafkaConnectClusterCapacityConfig,
  connect_cluster_id: str,
  gcp_config: ManagedKafkaConnectClusterGcpConfig,
  kafka_cluster: str,
  location: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: ManagedKafkaConnectClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.capacityConfig">capacity_config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a></code> | capacity_config block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.connectClusterId">connect_cluster_id</a></code> | <code>str</code> | The ID to use for the Connect Cluster, which will become the final component of the connect cluster's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.gcpConfig">gcp_config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a></code> | gcp_config block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.kafkaCluster">kafka_cluster</a></code> | <code>str</code> | The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: 'projects/PROJECT_ID/locations/LOCATION/clusters/CLUSTER_ID'. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#id ManagedKafkaConnectCluster#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | List of label KEY=VALUE pairs to add. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#project ManagedKafkaConnectCluster#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_config`<sup>Required</sup> <a name="capacity_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.capacityConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a>

capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#capacity_config ManagedKafkaConnectCluster#capacity_config}

---

##### `connect_cluster_id`<sup>Required</sup> <a name="connect_cluster_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.connectClusterId"></a>

- *Type:* str

The ID to use for the Connect Cluster, which will become the final component of the connect cluster's name.

This value is structured like: 'my-connect-cluster-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#connect_cluster_id ManagedKafkaConnectCluster#connect_cluster_id}

---

##### `gcp_config`<sup>Required</sup> <a name="gcp_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.gcpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a>

gcp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#gcp_config ManagedKafkaConnectCluster#gcp_config}

---

##### `kafka_cluster`<sup>Required</sup> <a name="kafka_cluster" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.kafkaCluster"></a>

- *Type:* str

The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: 'projects/PROJECT_ID/locations/LOCATION/clusters/CLUSTER_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#kafka_cluster ManagedKafkaConnectCluster#kafka_cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.location"></a>

- *Type:* str

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#location ManagedKafkaConnectCluster#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#deletion_policy ManagedKafkaConnectCluster#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#id ManagedKafkaConnectCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

List of label KEY=VALUE pairs to add.

Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#labels ManagedKafkaConnectCluster#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#project ManagedKafkaConnectCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#timeouts ManagedKafkaConnectCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putCapacityConfig">put_capacity_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putGcpConfig">put_gcp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capacity_config` <a name="put_capacity_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putCapacityConfig"></a>

```python
def put_capacity_config(
  memory_bytes: str,
  vcpu_count: str
) -> None
```

###### `memory_bytes`<sup>Required</sup> <a name="memory_bytes" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putCapacityConfig.parameter.memoryBytes"></a>

- *Type:* str

The memory to provision for the cluster in bytes.

The CPU:memory ratio (vCPU:GiB) must be between 1:1 and 1:8. Minimum: 3221225472 (3 GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#memory_bytes ManagedKafkaConnectCluster#memory_bytes}

---

###### `vcpu_count`<sup>Required</sup> <a name="vcpu_count" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putCapacityConfig.parameter.vcpuCount"></a>

- *Type:* str

The number of vCPUs to provision for the cluster. The minimum is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#vcpu_count ManagedKafkaConnectCluster#vcpu_count}

---

##### `put_gcp_config` <a name="put_gcp_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putGcpConfig"></a>

```python
def put_gcp_config(
  access_config: ManagedKafkaConnectClusterGcpConfigAccessConfig
) -> None
```

###### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putGcpConfig.parameter.accessConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#access_config ManagedKafkaConnectCluster#access_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#create ManagedKafkaConnectCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#delete ManagedKafkaConnectCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#update ManagedKafkaConnectCluster#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ManagedKafkaConnectCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isConstruct"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformElement"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformResource"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ManagedKafkaConnectCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedKafkaConnectCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedKafkaConnectCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ManagedKafkaConnectCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.capacityConfig">capacity_config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference">ManagedKafkaConnectClusterCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.gcpConfig">gcp_config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference">ManagedKafkaConnectClusterGcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference">ManagedKafkaConnectClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.capacityConfigInput">capacity_config_input</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connectClusterIdInput">connect_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.gcpConfigInput">gcp_config_input</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.kafkaClusterInput">kafka_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connectClusterId">connect_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.kafkaCluster">kafka_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_config`<sup>Required</sup> <a name="capacity_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.capacityConfig"></a>

```python
capacity_config: ManagedKafkaConnectClusterCapacityConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference">ManagedKafkaConnectClusterCapacityConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `gcp_config`<sup>Required</sup> <a name="gcp_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.gcpConfig"></a>

```python
gcp_config: ManagedKafkaConnectClusterGcpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference">ManagedKafkaConnectClusterGcpConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.timeouts"></a>

```python
timeouts: ManagedKafkaConnectClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference">ManagedKafkaConnectClusterTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `capacity_config_input`<sup>Optional</sup> <a name="capacity_config_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.capacityConfigInput"></a>

```python
capacity_config_input: ManagedKafkaConnectClusterCapacityConfig
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a>

---

##### `connect_cluster_id_input`<sup>Optional</sup> <a name="connect_cluster_id_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connectClusterIdInput"></a>

```python
connect_cluster_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `gcp_config_input`<sup>Optional</sup> <a name="gcp_config_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.gcpConfigInput"></a>

```python
gcp_config_input: ManagedKafkaConnectClusterGcpConfig
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kafka_cluster_input`<sup>Optional</sup> <a name="kafka_cluster_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.kafkaClusterInput"></a>

```python
kafka_cluster_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ManagedKafkaConnectClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a>

---

##### `connect_cluster_id`<sup>Required</sup> <a name="connect_cluster_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connectClusterId"></a>

```python
connect_cluster_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kafka_cluster`<sup>Required</sup> <a name="kafka_cluster" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.kafkaCluster"></a>

```python
kafka_cluster: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaConnectClusterCapacityConfig <a name="ManagedKafkaConnectClusterCapacityConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig(
  memory_bytes: str,
  vcpu_count: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig.property.memoryBytes">memory_bytes</a></code> | <code>str</code> | The memory to provision for the cluster in bytes. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig.property.vcpuCount">vcpu_count</a></code> | <code>str</code> | The number of vCPUs to provision for the cluster. The minimum is 3. |

---

##### `memory_bytes`<sup>Required</sup> <a name="memory_bytes" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig.property.memoryBytes"></a>

```python
memory_bytes: str
```

- *Type:* str

The memory to provision for the cluster in bytes.

The CPU:memory ratio (vCPU:GiB) must be between 1:1 and 1:8. Minimum: 3221225472 (3 GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#memory_bytes ManagedKafkaConnectCluster#memory_bytes}

---

##### `vcpu_count`<sup>Required</sup> <a name="vcpu_count" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig.property.vcpuCount"></a>

```python
vcpu_count: str
```

- *Type:* str

The number of vCPUs to provision for the cluster. The minimum is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#vcpu_count ManagedKafkaConnectCluster#vcpu_count}

---

### ManagedKafkaConnectClusterConfig <a name="ManagedKafkaConnectClusterConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capacity_config: ManagedKafkaConnectClusterCapacityConfig,
  connect_cluster_id: str,
  gcp_config: ManagedKafkaConnectClusterGcpConfig,
  kafka_cluster: str,
  location: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: ManagedKafkaConnectClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.capacityConfig">capacity_config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a></code> | capacity_config block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.connectClusterId">connect_cluster_id</a></code> | <code>str</code> | The ID to use for the Connect Cluster, which will become the final component of the connect cluster's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.gcpConfig">gcp_config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a></code> | gcp_config block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.kafkaCluster">kafka_cluster</a></code> | <code>str</code> | The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: 'projects/PROJECT_ID/locations/LOCATION/clusters/CLUSTER_ID'. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.location">location</a></code> | <code>str</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#id ManagedKafkaConnectCluster#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | List of label KEY=VALUE pairs to add. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#project ManagedKafkaConnectCluster#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_config`<sup>Required</sup> <a name="capacity_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.capacityConfig"></a>

```python
capacity_config: ManagedKafkaConnectClusterCapacityConfig
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a>

capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#capacity_config ManagedKafkaConnectCluster#capacity_config}

---

##### `connect_cluster_id`<sup>Required</sup> <a name="connect_cluster_id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.connectClusterId"></a>

```python
connect_cluster_id: str
```

- *Type:* str

The ID to use for the Connect Cluster, which will become the final component of the connect cluster's name.

This value is structured like: 'my-connect-cluster-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#connect_cluster_id ManagedKafkaConnectCluster#connect_cluster_id}

---

##### `gcp_config`<sup>Required</sup> <a name="gcp_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.gcpConfig"></a>

```python
gcp_config: ManagedKafkaConnectClusterGcpConfig
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a>

gcp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#gcp_config ManagedKafkaConnectCluster#gcp_config}

---

##### `kafka_cluster`<sup>Required</sup> <a name="kafka_cluster" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.kafkaCluster"></a>

```python
kafka_cluster: str
```

- *Type:* str

The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: 'projects/PROJECT_ID/locations/LOCATION/clusters/CLUSTER_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#kafka_cluster ManagedKafkaConnectCluster#kafka_cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#location ManagedKafkaConnectCluster#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#deletion_policy ManagedKafkaConnectCluster#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#id ManagedKafkaConnectCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

List of label KEY=VALUE pairs to add.

Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#labels ManagedKafkaConnectCluster#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#project ManagedKafkaConnectCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.timeouts"></a>

```python
timeouts: ManagedKafkaConnectClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#timeouts ManagedKafkaConnectCluster#timeouts}

---

### ManagedKafkaConnectClusterGcpConfig <a name="ManagedKafkaConnectClusterGcpConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig(
  access_config: ManagedKafkaConnectClusterGcpConfigAccessConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig.property.accessConfig">access_config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | access_config block. |

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig.property.accessConfig"></a>

```python
access_config: ManagedKafkaConnectClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#access_config ManagedKafkaConnectCluster#access_config}

---

### ManagedKafkaConnectClusterGcpConfigAccessConfig <a name="ManagedKafkaConnectClusterGcpConfigAccessConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig(
  network_configs: IResolvable | typing.List[ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig.property.networkConfigs">network_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>]</code> | network_configs block. |

---

##### `network_configs`<sup>Required</sup> <a name="network_configs" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig.property.networkConfigs"></a>

```python
network_configs: IResolvable | typing.List[ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>]

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#network_configs ManagedKafkaConnectCluster#network_configs}

---

### ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs <a name="ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs(
  primary_subnet: str,
  additional_subnets: typing.List[str] = None,
  dns_domain_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.primarySubnet">primary_subnet</a></code> | <code>str</code> | VPC subnet to make available to the Kafka Connect cluster. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.additionalSubnets">additional_subnets</a></code> | <code>typing.List[str]</code> | Additional subnets may be specified. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.dnsDomainNames">dns_domain_names</a></code> | <code>typing.List[str]</code> | Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster. |

---

##### `primary_subnet`<sup>Required</sup> <a name="primary_subnet" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.primarySubnet"></a>

```python
primary_subnet: str
```

- *Type:* str

VPC subnet to make available to the Kafka Connect cluster.

Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id}. It is used to create a Private Service Connect (PSC) interface for the Kafka Connect workers. It must be located in the same region as the Kafka Connect cluster. The CIDR range of the subnet must be within the IPv4 address ranges for private networks, as specified in RFC 1918. The primary subnet CIDR range must have a minimum size of /22 (1024 addresses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#primary_subnet ManagedKafkaConnectCluster#primary_subnet}

---

##### `additional_subnets`<sup>Optional</sup> <a name="additional_subnets" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.additionalSubnets"></a>

```python
additional_subnets: typing.List[str]
```

- *Type:* typing.List[str]

Additional subnets may be specified.

They may be in another region, but must be in the same VPC network. The Connect workers can communicate with network endpoints in either the primary or additional subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#additional_subnets ManagedKafkaConnectCluster#additional_subnets}

---

##### `dns_domain_names`<sup>Optional</sup> <a name="dns_domain_names" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.dnsDomainNames"></a>

```python
dns_domain_names: typing.List[str]
```

- *Type:* typing.List[str]

Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster.

When using MirrorMaker2, it's necessary to add the bootstrap address's dns domain name of the target cluster to make it visible to the connector. For example: my-kafka-cluster.us-central1.managedkafka.my-project.cloud.goog

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#dns_domain_names ManagedKafkaConnectCluster#dns_domain_names}

---

### ManagedKafkaConnectClusterTimeouts <a name="ManagedKafkaConnectClusterTimeouts" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#create ManagedKafkaConnectCluster#create}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#delete ManagedKafkaConnectCluster#delete}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#update ManagedKafkaConnectCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#create ManagedKafkaConnectCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#delete ManagedKafkaConnectCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#update ManagedKafkaConnectCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaConnectClusterCapacityConfigOutputReference <a name="ManagedKafkaConnectClusterCapacityConfigOutputReference" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytesInput">memory_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCountInput">vcpu_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytes">memory_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCount">vcpu_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_bytes_input`<sup>Optional</sup> <a name="memory_bytes_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytesInput"></a>

```python
memory_bytes_input: str
```

- *Type:* str

---

##### `vcpu_count_input`<sup>Optional</sup> <a name="vcpu_count_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCountInput"></a>

```python
vcpu_count_input: str
```

- *Type:* str

---

##### `memory_bytes`<sup>Required</sup> <a name="memory_bytes" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytes"></a>

```python
memory_bytes: str
```

- *Type:* str

---

##### `vcpu_count`<sup>Required</sup> <a name="vcpu_count" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCount"></a>

```python
vcpu_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.internalValue"></a>

```python
internal_value: ManagedKafkaConnectClusterCapacityConfig
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a>

---


### ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList <a name="ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>]

---


### ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference <a name="ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetAdditionalSubnets">reset_additional_subnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetDnsDomainNames">reset_dns_domain_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_subnets` <a name="reset_additional_subnets" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetAdditionalSubnets"></a>

```python
def reset_additional_subnets() -> None
```

##### `reset_dns_domain_names` <a name="reset_dns_domain_names" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetDnsDomainNames"></a>

```python
def reset_dns_domain_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnetsInput">additional_subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNamesInput">dns_domain_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnetInput">primary_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnets">additional_subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNames">dns_domain_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnet">primary_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_subnets_input`<sup>Optional</sup> <a name="additional_subnets_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnetsInput"></a>

```python
additional_subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_domain_names_input`<sup>Optional</sup> <a name="dns_domain_names_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNamesInput"></a>

```python
dns_domain_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `primary_subnet_input`<sup>Optional</sup> <a name="primary_subnet_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnetInput"></a>

```python
primary_subnet_input: str
```

- *Type:* str

---

##### `additional_subnets`<sup>Required</sup> <a name="additional_subnets" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnets"></a>

```python
additional_subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_domain_names`<sup>Required</sup> <a name="dns_domain_names" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNames"></a>

```python
dns_domain_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `primary_subnet`<sup>Required</sup> <a name="primary_subnet" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnet"></a>

```python
primary_subnet: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>

---


### ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference <a name="ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs">put_network_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_configs` <a name="put_network_configs" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs"></a>

```python
def put_network_configs(
  value: IResolvable | typing.List[ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigs">network_configs</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput">network_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_configs`<sup>Required</sup> <a name="network_configs" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigs"></a>

```python
network_configs: ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList</a>

---

##### `network_configs_input`<sup>Optional</sup> <a name="network_configs_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput"></a>

```python
network_configs_input: IResolvable | typing.List[ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: ManagedKafkaConnectClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a>

---


### ManagedKafkaConnectClusterGcpConfigOutputReference <a name="ManagedKafkaConnectClusterGcpConfigOutputReference" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig">put_access_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_config` <a name="put_access_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig"></a>

```python
def put_access_config(
  network_configs: IResolvable | typing.List[ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs]
) -> None
```

###### `network_configs`<sup>Required</sup> <a name="network_configs" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig.parameter.networkConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>]

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#network_configs ManagedKafkaConnectCluster#network_configs}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfig">access_config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference">ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfigInput">access_config_input</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfig"></a>

```python
access_config: ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference">ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference</a>

---

##### `access_config_input`<sup>Optional</sup> <a name="access_config_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfigInput"></a>

```python
access_config_input: ManagedKafkaConnectClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.internalValue"></a>

```python
internal_value: ManagedKafkaConnectClusterGcpConfig
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a>

---


### ManagedKafkaConnectClusterTimeoutsOutputReference <a name="ManagedKafkaConnectClusterTimeoutsOutputReference" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connect_cluster

managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedKafkaConnectClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a>

---



