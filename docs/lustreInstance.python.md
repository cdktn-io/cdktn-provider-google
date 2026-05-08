# `lustreInstance` Submodule <a name="`lustreInstance` Submodule" id="@cdktn/provider-google.lustreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LustreInstance <a name="LustreInstance" id="@cdktn/provider-google.lustreInstance.LustreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance google_lustre_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capacity_gib: str,
  filesystem: str,
  instance_id: str,
  location: str,
  network: str,
  access_rules_options: LustreInstanceAccessRulesOptions = None,
  description: str = None,
  dynamic_tier_options: LustreInstanceDynamicTierOptions = None,
  gke_support_enabled: bool | IResolvable = None,
  id: str = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  maintenance_policy: LustreInstanceMaintenancePolicy = None,
  per_unit_storage_throughput: str = None,
  placement_policy: str = None,
  project: str = None,
  timeouts: LustreInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.capacityGib">capacity_gib</a></code> | <code>str</code> | The storage capacity of the instance in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.filesystem">filesystem</a></code> | <code>str</code> | The filesystem name for this instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The name of the Managed Lustre instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.network">network</a></code> | <code>str</code> | The full name of the VPC network to which the instance is connected. Must be in the format 'projects/{project_id}/global/networks/{network_name}'. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.accessRulesOptions">access_rules_options</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a></code> | access_rules_options block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | A user-readable description of the instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.dynamicTierOptions">dynamic_tier_options</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a></code> | dynamic_tier_options block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.gkeSupportEnabled">gke_support_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#id LustreInstance#id}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS key name to use for data encryption. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.perUnitStorageThroughput">per_unit_storage_throughput</a></code> | <code>str</code> | The throughput of the instance in MBps per TiB. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.placementPolicy">placement_policy</a></code> | <code>str</code> | The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#project LustreInstance#project}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.capacityGib"></a>

- *Type:* str

The storage capacity of the instance in gibibytes (GiB).

Allowed values
are from '9000' to '7632000', depending on the 'perUnitStorageThroughput'.
See [Performance tiers and maximum storage
capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
for specific minimums, maximums, and step sizes for each performance tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#capacity_gib LustreInstance#capacity_gib}

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.filesystem"></a>

- *Type:* str

The filesystem name for this instance.

This name is used by client-side
tools, including when mounting the instance. Must be eight characters or
less and can only contain letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#filesystem LustreInstance#filesystem}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.instanceId"></a>

- *Type:* str

The name of the Managed Lustre instance.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#instance_id LustreInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#location LustreInstance#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.network"></a>

- *Type:* str

The full name of the VPC network to which the instance is connected. Must be in the format 'projects/{project_id}/global/networks/{network_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#network LustreInstance#network}

---

##### `access_rules_options`<sup>Optional</sup> <a name="access_rules_options" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.accessRulesOptions"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

access_rules_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#access_rules_options LustreInstance#access_rules_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.description"></a>

- *Type:* str

A user-readable description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#description LustreInstance#description}

---

##### `dynamic_tier_options`<sup>Optional</sup> <a name="dynamic_tier_options" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.dynamicTierOptions"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

dynamic_tier_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#dynamic_tier_options LustreInstance#dynamic_tier_options}

---

##### `gke_support_enabled`<sup>Optional</sup> <a name="gke_support_enabled" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.gkeSupportEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#gke_support_enabled LustreInstance#gke_support_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#id LustreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.kmsKey"></a>

- *Type:* str

The Cloud KMS key name to use for data encryption.

If not set, the instance will use Google-managed encryption keys.
If set, the instance will use customer-managed encryption keys.
The key must be in the same region as the instance.
The key format is:
projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#kms_key LustreInstance#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#labels LustreInstance#labels}

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#maintenance_policy LustreInstance#maintenance_policy}

---

##### `per_unit_storage_throughput`<sup>Optional</sup> <a name="per_unit_storage_throughput" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.perUnitStorageThroughput"></a>

- *Type:* str

The throughput of the instance in MBps per TiB.

Valid values are 125, 250,
500, 1000.
See [Performance tiers and maximum storage
capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
for more information.

If the instance is using the Dynamic tier, this field must not be set or
must be set to zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#per_unit_storage_throughput LustreInstance#per_unit_storage_throughput}

---

##### `placement_policy`<sup>Optional</sup> <a name="placement_policy" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.placementPolicy"></a>

- *Type:* str

The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#placement_policy LustreInstance#placement_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#project LustreInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#timeouts LustreInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions">put_access_rules_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putDynamicTierOptions">put_dynamic_tier_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putMaintenancePolicy">put_maintenance_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetAccessRulesOptions">reset_access_rules_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetDynamicTierOptions">reset_dynamic_tier_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetGkeSupportEnabled">reset_gke_support_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetMaintenancePolicy">reset_maintenance_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetPerUnitStorageThroughput">reset_per_unit_storage_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetPlacementPolicy">reset_placement_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.lustreInstance.LustreInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.lustreInstance.LustreInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.lustreInstance.LustreInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.lustreInstance.LustreInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.lustreInstance.LustreInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.lustreInstance.LustreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.lustreInstance.LustreInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.lustreInstance.LustreInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.lustreInstance.LustreInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.lustreInstance.LustreInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.lustreInstance.LustreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.lustreInstance.LustreInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.lustreInstance.LustreInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lustreInstance.LustreInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_rules_options` <a name="put_access_rules_options" id="@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions"></a>

```python
def put_access_rules_options(
  default_squash_mode: str,
  access_rules: IResolvable | typing.List[LustreInstanceAccessRulesOptionsAccessRules] = None,
  default_squash_gid: typing.Union[int, float] = None,
  default_squash_uid: typing.Union[int, float] = None
) -> None
```

###### `default_squash_mode`<sup>Required</sup> <a name="default_squash_mode" id="@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions.parameter.defaultSquashMode"></a>

- *Type:* str

The squash mode for the default access rule. Possible values: NO_SQUASH ROOT_SQUASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#default_squash_mode LustreInstance#default_squash_mode}

---

###### `access_rules`<sup>Optional</sup> <a name="access_rules" id="@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions.parameter.accessRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>]

access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#access_rules LustreInstance#access_rules}

---

###### `default_squash_gid`<sup>Optional</sup> <a name="default_squash_gid" id="@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions.parameter.defaultSquashGid"></a>

- *Type:* typing.Union[int, float]

The user squash GID for the default access rule.

This user squash GID applies to all root users connecting from clients
that are not matched by any of the access rules. If not set, the default
is 0 (no GID squash).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#default_squash_gid LustreInstance#default_squash_gid}

---

###### `default_squash_uid`<sup>Optional</sup> <a name="default_squash_uid" id="@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions.parameter.defaultSquashUid"></a>

- *Type:* typing.Union[int, float]

The user squash UID for the default access rule.

This user squash UID applies to all root users connecting from clients
that are not matched by any of the access rules. If not set, the default
is 0 (no UID squash).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#default_squash_uid LustreInstance#default_squash_uid}

---

##### `put_dynamic_tier_options` <a name="put_dynamic_tier_options" id="@cdktn/provider-google.lustreInstance.LustreInstance.putDynamicTierOptions"></a>

```python
def put_dynamic_tier_options(
  mode: str
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.lustreInstance.LustreInstance.putDynamicTierOptions.parameter.mode"></a>

- *Type:* str

The dynamic tier mode of the instance. Possible values: DISABLED DEFAULT_CACHE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#mode LustreInstance#mode}

---

##### `put_maintenance_policy` <a name="put_maintenance_policy" id="@cdktn/provider-google.lustreInstance.LustreInstance.putMaintenancePolicy"></a>

```python
def put_maintenance_policy(
  weekly_maintenance_windows: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows,
  maintenance_exclusion_window: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow = None
) -> None
```

###### `weekly_maintenance_windows`<sup>Required</sup> <a name="weekly_maintenance_windows" id="@cdktn/provider-google.lustreInstance.LustreInstance.putMaintenancePolicy.parameter.weeklyMaintenanceWindows"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

weekly_maintenance_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#weekly_maintenance_windows LustreInstance#weekly_maintenance_windows}

---

###### `maintenance_exclusion_window`<sup>Optional</sup> <a name="maintenance_exclusion_window" id="@cdktn/provider-google.lustreInstance.LustreInstance.putMaintenancePolicy.parameter.maintenanceExclusionWindow"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

maintenance_exclusion_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#maintenance_exclusion_window LustreInstance#maintenance_exclusion_window}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.lustreInstance.LustreInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.lustreInstance.LustreInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#create LustreInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.lustreInstance.LustreInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#delete LustreInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.lustreInstance.LustreInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#update LustreInstance#update}.

---

##### `reset_access_rules_options` <a name="reset_access_rules_options" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetAccessRulesOptions"></a>

```python
def reset_access_rules_options() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dynamic_tier_options` <a name="reset_dynamic_tier_options" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetDynamicTierOptions"></a>

```python
def reset_dynamic_tier_options() -> None
```

##### `reset_gke_support_enabled` <a name="reset_gke_support_enabled" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetGkeSupportEnabled"></a>

```python
def reset_gke_support_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_maintenance_policy` <a name="reset_maintenance_policy" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetMaintenancePolicy"></a>

```python
def reset_maintenance_policy() -> None
```

##### `reset_per_unit_storage_throughput` <a name="reset_per_unit_storage_throughput" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetPerUnitStorageThroughput"></a>

```python
def reset_per_unit_storage_throughput() -> None
```

##### `reset_placement_policy` <a name="reset_placement_policy" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetPlacementPolicy"></a>

```python
def reset_placement_policy() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LustreInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.lustreInstance.LustreInstance.isConstruct"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.lustreInstance.LustreInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformElement"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformResource"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LustreInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LustreInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LustreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LustreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptions">access_rules_options</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference">LustreInstanceAccessRulesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptions">dynamic_tier_options</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference">LustreInstanceDynamicTierOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference">LustreInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference">LustreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.upcomingMaintenanceSchedule">upcoming_maintenance_schedule</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList">LustreInstanceUpcomingMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptionsInput">access_rules_options_input</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGibInput">capacity_gib_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptionsInput">dynamic_tier_options_input</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystemInput">filesystem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabledInput">gke_support_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicyInput">maintenance_policy_input</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughputInput">per_unit_storage_throughput_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicyInput">placement_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGib">capacity_gib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystem">filesystem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabled">gke_support_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughput">per_unit_storage_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicy">placement_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_rules_options`<sup>Required</sup> <a name="access_rules_options" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptions"></a>

```python
access_rules_options: LustreInstanceAccessRulesOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference">LustreInstanceAccessRulesOptionsOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dynamic_tier_options`<sup>Required</sup> <a name="dynamic_tier_options" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptions"></a>

```python
dynamic_tier_options: LustreInstanceDynamicTierOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference">LustreInstanceDynamicTierOptionsOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `maintenance_policy`<sup>Required</sup> <a name="maintenance_policy" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicy"></a>

```python
maintenance_policy: LustreInstanceMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference">LustreInstanceMaintenancePolicyOutputReference</a>

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.timeouts"></a>

```python
timeouts: LustreInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference">LustreInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `upcoming_maintenance_schedule`<sup>Required</sup> <a name="upcoming_maintenance_schedule" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.upcomingMaintenanceSchedule"></a>

```python
upcoming_maintenance_schedule: LustreInstanceUpcomingMaintenanceScheduleList
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList">LustreInstanceUpcomingMaintenanceScheduleList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_rules_options_input`<sup>Optional</sup> <a name="access_rules_options_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptionsInput"></a>

```python
access_rules_options_input: LustreInstanceAccessRulesOptions
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

---

##### `capacity_gib_input`<sup>Optional</sup> <a name="capacity_gib_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGibInput"></a>

```python
capacity_gib_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dynamic_tier_options_input`<sup>Optional</sup> <a name="dynamic_tier_options_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptionsInput"></a>

```python
dynamic_tier_options_input: LustreInstanceDynamicTierOptions
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

---

##### `filesystem_input`<sup>Optional</sup> <a name="filesystem_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystemInput"></a>

```python
filesystem_input: str
```

- *Type:* str

---

##### `gke_support_enabled_input`<sup>Optional</sup> <a name="gke_support_enabled_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabledInput"></a>

```python
gke_support_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maintenance_policy_input`<sup>Optional</sup> <a name="maintenance_policy_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicyInput"></a>

```python
maintenance_policy_input: LustreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `per_unit_storage_throughput_input`<sup>Optional</sup> <a name="per_unit_storage_throughput_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughputInput"></a>

```python
per_unit_storage_throughput_input: str
```

- *Type:* str

---

##### `placement_policy_input`<sup>Optional</sup> <a name="placement_policy_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicyInput"></a>

```python
placement_policy_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | LustreInstanceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGib"></a>

```python
capacity_gib: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystem"></a>

```python
filesystem: str
```

- *Type:* str

---

##### `gke_support_enabled`<sup>Required</sup> <a name="gke_support_enabled" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabled"></a>

```python
gke_support_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `per_unit_storage_throughput`<sup>Required</sup> <a name="per_unit_storage_throughput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughput"></a>

```python
per_unit_storage_throughput: str
```

- *Type:* str

---

##### `placement_policy`<sup>Required</sup> <a name="placement_policy" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicy"></a>

```python
placement_policy: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LustreInstanceAccessRulesOptions <a name="LustreInstanceAccessRulesOptions" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceAccessRulesOptions(
  default_squash_mode: str,
  access_rules: IResolvable | typing.List[LustreInstanceAccessRulesOptionsAccessRules] = None,
  default_squash_gid: typing.Union[int, float] = None,
  default_squash_uid: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashMode">default_squash_mode</a></code> | <code>str</code> | The squash mode for the default access rule. Possible values: NO_SQUASH ROOT_SQUASH. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.accessRules">access_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>]</code> | access_rules block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashGid">default_squash_gid</a></code> | <code>typing.Union[int, float]</code> | The user squash GID for the default access rule. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashUid">default_squash_uid</a></code> | <code>typing.Union[int, float]</code> | The user squash UID for the default access rule. |

---

##### `default_squash_mode`<sup>Required</sup> <a name="default_squash_mode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashMode"></a>

```python
default_squash_mode: str
```

- *Type:* str

The squash mode for the default access rule. Possible values: NO_SQUASH ROOT_SQUASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#default_squash_mode LustreInstance#default_squash_mode}

---

##### `access_rules`<sup>Optional</sup> <a name="access_rules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.accessRules"></a>

```python
access_rules: IResolvable | typing.List[LustreInstanceAccessRulesOptionsAccessRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>]

access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#access_rules LustreInstance#access_rules}

---

##### `default_squash_gid`<sup>Optional</sup> <a name="default_squash_gid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashGid"></a>

```python
default_squash_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The user squash GID for the default access rule.

This user squash GID applies to all root users connecting from clients
that are not matched by any of the access rules. If not set, the default
is 0 (no GID squash).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#default_squash_gid LustreInstance#default_squash_gid}

---

##### `default_squash_uid`<sup>Optional</sup> <a name="default_squash_uid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashUid"></a>

```python
default_squash_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The user squash UID for the default access rule.

This user squash UID applies to all root users connecting from clients
that are not matched by any of the access rules. If not set, the default
is 0 (no UID squash).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#default_squash_uid LustreInstance#default_squash_uid}

---

### LustreInstanceAccessRulesOptionsAccessRules <a name="LustreInstanceAccessRulesOptionsAccessRules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceAccessRulesOptionsAccessRules(
  ip_address_ranges: typing.List[str],
  name: str,
  squash_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.ipAddressRanges">ip_address_ranges</a></code> | <code>typing.List[str]</code> | The IP address ranges to which to apply this access rule. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.name">name</a></code> | <code>str</code> | The name of the access rule policy group. Must be 16 characters or less and include only alphanumeric characters or '_'. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.squashMode">squash_mode</a></code> | <code>str</code> | Squash mode for the access rule. Possible values: NO_SQUASH ROOT_SQUASH. |

---

##### `ip_address_ranges`<sup>Required</sup> <a name="ip_address_ranges" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.ipAddressRanges"></a>

```python
ip_address_ranges: typing.List[str]
```

- *Type:* typing.List[str]

The IP address ranges to which to apply this access rule.

Accepts
non-overlapping CIDR ranges (e.g., '192.168.1.0/24') and IP addresses
(e.g., '192.168.1.0').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#ip_address_ranges LustreInstance#ip_address_ranges}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the access rule policy group. Must be 16 characters or less and include only alphanumeric characters or '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#name LustreInstance#name}

---

##### `squash_mode`<sup>Required</sup> <a name="squash_mode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.squashMode"></a>

```python
squash_mode: str
```

- *Type:* str

Squash mode for the access rule. Possible values: NO_SQUASH ROOT_SQUASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#squash_mode LustreInstance#squash_mode}

---

### LustreInstanceConfig <a name="LustreInstanceConfig" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capacity_gib: str,
  filesystem: str,
  instance_id: str,
  location: str,
  network: str,
  access_rules_options: LustreInstanceAccessRulesOptions = None,
  description: str = None,
  dynamic_tier_options: LustreInstanceDynamicTierOptions = None,
  gke_support_enabled: bool | IResolvable = None,
  id: str = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  maintenance_policy: LustreInstanceMaintenancePolicy = None,
  per_unit_storage_throughput: str = None,
  placement_policy: str = None,
  project: str = None,
  timeouts: LustreInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.capacityGib">capacity_gib</a></code> | <code>str</code> | The storage capacity of the instance in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.filesystem">filesystem</a></code> | <code>str</code> | The filesystem name for this instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The name of the Managed Lustre instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.network">network</a></code> | <code>str</code> | The full name of the VPC network to which the instance is connected. Must be in the format 'projects/{project_id}/global/networks/{network_name}'. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.accessRulesOptions">access_rules_options</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a></code> | access_rules_options block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.description">description</a></code> | <code>str</code> | A user-readable description of the instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dynamicTierOptions">dynamic_tier_options</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a></code> | dynamic_tier_options block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.gkeSupportEnabled">gke_support_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#id LustreInstance#id}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS key name to use for data encryption. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.perUnitStorageThroughput">per_unit_storage_throughput</a></code> | <code>str</code> | The throughput of the instance in MBps per TiB. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.placementPolicy">placement_policy</a></code> | <code>str</code> | The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#project LustreInstance#project}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.capacityGib"></a>

```python
capacity_gib: str
```

- *Type:* str

The storage capacity of the instance in gibibytes (GiB).

Allowed values
are from '9000' to '7632000', depending on the 'perUnitStorageThroughput'.
See [Performance tiers and maximum storage
capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
for specific minimums, maximums, and step sizes for each performance tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#capacity_gib LustreInstance#capacity_gib}

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.filesystem"></a>

```python
filesystem: str
```

- *Type:* str

The filesystem name for this instance.

This name is used by client-side
tools, including when mounting the instance. Must be eight characters or
less and can only contain letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#filesystem LustreInstance#filesystem}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The name of the Managed Lustre instance.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#instance_id LustreInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#location LustreInstance#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The full name of the VPC network to which the instance is connected. Must be in the format 'projects/{project_id}/global/networks/{network_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#network LustreInstance#network}

---

##### `access_rules_options`<sup>Optional</sup> <a name="access_rules_options" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.accessRulesOptions"></a>

```python
access_rules_options: LustreInstanceAccessRulesOptions
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

access_rules_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#access_rules_options LustreInstance#access_rules_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A user-readable description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#description LustreInstance#description}

---

##### `dynamic_tier_options`<sup>Optional</sup> <a name="dynamic_tier_options" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dynamicTierOptions"></a>

```python
dynamic_tier_options: LustreInstanceDynamicTierOptions
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

dynamic_tier_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#dynamic_tier_options LustreInstance#dynamic_tier_options}

---

##### `gke_support_enabled`<sup>Optional</sup> <a name="gke_support_enabled" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.gkeSupportEnabled"></a>

```python
gke_support_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#gke_support_enabled LustreInstance#gke_support_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#id LustreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Cloud KMS key name to use for data encryption.

If not set, the instance will use Google-managed encryption keys.
If set, the instance will use customer-managed encryption keys.
The key must be in the same region as the instance.
The key format is:
projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#kms_key LustreInstance#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#labels LustreInstance#labels}

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.maintenancePolicy"></a>

```python
maintenance_policy: LustreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#maintenance_policy LustreInstance#maintenance_policy}

---

##### `per_unit_storage_throughput`<sup>Optional</sup> <a name="per_unit_storage_throughput" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.perUnitStorageThroughput"></a>

```python
per_unit_storage_throughput: str
```

- *Type:* str

The throughput of the instance in MBps per TiB.

Valid values are 125, 250,
500, 1000.
See [Performance tiers and maximum storage
capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
for more information.

If the instance is using the Dynamic tier, this field must not be set or
must be set to zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#per_unit_storage_throughput LustreInstance#per_unit_storage_throughput}

---

##### `placement_policy`<sup>Optional</sup> <a name="placement_policy" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.placementPolicy"></a>

```python
placement_policy: str
```

- *Type:* str

The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#placement_policy LustreInstance#placement_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#project LustreInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.timeouts"></a>

```python
timeouts: LustreInstanceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#timeouts LustreInstance#timeouts}

---

### LustreInstanceDynamicTierOptions <a name="LustreInstanceDynamicTierOptions" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceDynamicTierOptions(
  mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions.property.mode">mode</a></code> | <code>str</code> | The dynamic tier mode of the instance. Possible values: DISABLED DEFAULT_CACHE. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions.property.mode"></a>

```python
mode: str
```

- *Type:* str

The dynamic tier mode of the instance. Possible values: DISABLED DEFAULT_CACHE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#mode LustreInstance#mode}

---

### LustreInstanceMaintenancePolicy <a name="LustreInstanceMaintenancePolicy" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicy(
  weekly_maintenance_windows: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows,
  maintenance_exclusion_window: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.weeklyMaintenanceWindows">weekly_maintenance_windows</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | weekly_maintenance_windows block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.maintenanceExclusionWindow">maintenance_exclusion_window</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | maintenance_exclusion_window block. |

---

##### `weekly_maintenance_windows`<sup>Required</sup> <a name="weekly_maintenance_windows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.weeklyMaintenanceWindows"></a>

```python
weekly_maintenance_windows: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

weekly_maintenance_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#weekly_maintenance_windows LustreInstance#weekly_maintenance_windows}

---

##### `maintenance_exclusion_window`<sup>Optional</sup> <a name="maintenance_exclusion_window" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.maintenanceExclusionWindow"></a>

```python
maintenance_exclusion_window: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

maintenance_exclusion_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#maintenance_exclusion_window LustreInstance#maintenance_exclusion_window}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindow <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindow" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow(
  end_date: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate,
  start_date: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate,
  time: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.endDate">end_date</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.startDate">start_date</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.time">time</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | time block. |

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.endDate"></a>

```python
end_date: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#end_date LustreInstance#end_date}

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.startDate"></a>

```python
start_date: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#start_date LustreInstance#start_date}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.time"></a>

```python
time: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#time LustreInstance#time}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't
significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#day LustreInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#month LustreInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#year LustreInstance#year}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't
significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#day LustreInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#month LustreInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#year LustreInstance#year}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of a minute. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#hours LustreInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#minutes LustreInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#nanos LustreInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of a minute.

Must be greater than or equal to 0 and typically must
be less than or equal to 59. An API may allow the value 60 if it allows
leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#seconds LustreInstance#seconds}

---

### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows(
  day_of_week: str,
  start_time: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | start_time block. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#day_of_week LustreInstance#day_of_week}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.startTime"></a>

```python
start_time: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#start_time LustreInstance#start_time}

---

### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of a minute. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#hours LustreInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#minutes LustreInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#nanos LustreInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of a minute.

Must be greater than or equal to 0 and typically must
be less than or equal to 59. An API may allow the value 60 if it allows
leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#seconds LustreInstance#seconds}

---

### LustreInstanceTimeouts <a name="LustreInstanceTimeouts" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#create LustreInstance#create}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#delete LustreInstance#delete}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#update LustreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#create LustreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#delete LustreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#update LustreInstance#update}.

---

### LustreInstanceUpcomingMaintenanceSchedule <a name="LustreInstanceUpcomingMaintenanceSchedule" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceUpcomingMaintenanceSchedule()
```


## Classes <a name="Classes" id="Classes"></a>

### LustreInstanceAccessRulesOptionsAccessRulesList <a name="LustreInstanceAccessRulesOptionsAccessRulesList" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LustreInstanceAccessRulesOptionsAccessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LustreInstanceAccessRulesOptionsAccessRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>]

---


### LustreInstanceAccessRulesOptionsAccessRulesOutputReference <a name="LustreInstanceAccessRulesOptionsAccessRulesOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRangesInput">ip_address_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashModeInput">squash_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRanges">ip_address_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashMode">squash_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_ranges_input`<sup>Optional</sup> <a name="ip_address_ranges_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRangesInput"></a>

```python
ip_address_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `squash_mode_input`<sup>Optional</sup> <a name="squash_mode_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashModeInput"></a>

```python
squash_mode_input: str
```

- *Type:* str

---

##### `ip_address_ranges`<sup>Required</sup> <a name="ip_address_ranges" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRanges"></a>

```python
ip_address_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `squash_mode`<sup>Required</sup> <a name="squash_mode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashMode"></a>

```python
squash_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LustreInstanceAccessRulesOptionsAccessRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>

---


### LustreInstanceAccessRulesOptionsOutputReference <a name="LustreInstanceAccessRulesOptionsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceAccessRulesOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.putAccessRules">put_access_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetAccessRules">reset_access_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashGid">reset_default_squash_gid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashUid">reset_default_squash_uid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_rules` <a name="put_access_rules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.putAccessRules"></a>

```python
def put_access_rules(
  value: IResolvable | typing.List[LustreInstanceAccessRulesOptionsAccessRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.putAccessRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>]

---

##### `reset_access_rules` <a name="reset_access_rules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetAccessRules"></a>

```python
def reset_access_rules() -> None
```

##### `reset_default_squash_gid` <a name="reset_default_squash_gid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashGid"></a>

```python
def reset_default_squash_gid() -> None
```

##### `reset_default_squash_uid` <a name="reset_default_squash_uid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashUid"></a>

```python
def reset_default_squash_uid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRules">access_rules</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList">LustreInstanceAccessRulesOptionsAccessRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRulesInput">access_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGidInput">default_squash_gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashModeInput">default_squash_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUidInput">default_squash_uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGid">default_squash_gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashMode">default_squash_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUid">default_squash_uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_rules`<sup>Required</sup> <a name="access_rules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRules"></a>

```python
access_rules: LustreInstanceAccessRulesOptionsAccessRulesList
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList">LustreInstanceAccessRulesOptionsAccessRulesList</a>

---

##### `access_rules_input`<sup>Optional</sup> <a name="access_rules_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRulesInput"></a>

```python
access_rules_input: IResolvable | typing.List[LustreInstanceAccessRulesOptionsAccessRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>]

---

##### `default_squash_gid_input`<sup>Optional</sup> <a name="default_squash_gid_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGidInput"></a>

```python
default_squash_gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_squash_mode_input`<sup>Optional</sup> <a name="default_squash_mode_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashModeInput"></a>

```python
default_squash_mode_input: str
```

- *Type:* str

---

##### `default_squash_uid_input`<sup>Optional</sup> <a name="default_squash_uid_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUidInput"></a>

```python
default_squash_uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_squash_gid`<sup>Required</sup> <a name="default_squash_gid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGid"></a>

```python
default_squash_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_squash_mode`<sup>Required</sup> <a name="default_squash_mode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashMode"></a>

```python
default_squash_mode: str
```

- *Type:* str

---

##### `default_squash_uid`<sup>Required</sup> <a name="default_squash_uid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUid"></a>

```python
default_squash_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LustreInstanceAccessRulesOptions
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

---


### LustreInstanceDynamicTierOptionsOutputReference <a name="LustreInstanceDynamicTierOptionsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceDynamicTierOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LustreInstanceDynamicTierOptions
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetYear">reset_year</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_month` <a name="reset_month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_year` <a name="reset_year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetYear"></a>

```python
def reset_year() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.internalValue"></a>

```python
internal_value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate">put_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate">put_start_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime">put_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_end_date` <a name="put_end_date" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate"></a>

```python
def put_end_date(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't
significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#day LustreInstance#day}

---

###### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#month LustreInstance#month}

---

###### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#year LustreInstance#year}

---

##### `put_start_date` <a name="put_start_date" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate"></a>

```python
def put_start_date(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't
significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#day LustreInstance#day}

---

###### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#month LustreInstance#month}

---

###### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#year LustreInstance#year}

---

##### `put_time` <a name="put_time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime"></a>

```python
def put_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#hours LustreInstance#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#minutes LustreInstance#minutes}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#nanos LustreInstance#nanos}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of a minute.

Must be greater than or equal to 0 and typically must
be less than or equal to 59. An API may allow the value 60 if it allows
leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#seconds LustreInstance#seconds}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDate">end_date</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDate">start_date</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.time">time</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDateInput">end_date_input</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDateInput">start_date_input</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.timeInput">time_input</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDate"></a>

```python
end_date: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference</a>

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDate"></a>

```python
start_date: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference</a>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.time"></a>

```python
time: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference</a>

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDateInput"></a>

```python
end_date_input: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDateInput"></a>

```python
start_date_input: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.timeInput"></a>

```python
time_input: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.internalValue"></a>

```python
internal_value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetYear">reset_year</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_month` <a name="reset_month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_year` <a name="reset_year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetYear"></a>

```python
def reset_year() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.internalValue"></a>

```python
internal_value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.internalValue"></a>

```python
internal_value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---


### LustreInstanceMaintenancePolicyOutputReference <a name="LustreInstanceMaintenancePolicyOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow">put_maintenance_exclusion_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows">put_weekly_maintenance_windows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resetMaintenanceExclusionWindow">reset_maintenance_exclusion_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_maintenance_exclusion_window` <a name="put_maintenance_exclusion_window" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow"></a>

```python
def put_maintenance_exclusion_window(
  end_date: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate,
  start_date: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate,
  time: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime
) -> None
```

###### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow.parameter.endDate"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#end_date LustreInstance#end_date}

---

###### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow.parameter.startDate"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#start_date LustreInstance#start_date}

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow.parameter.time"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#time LustreInstance#time}

---

##### `put_weekly_maintenance_windows` <a name="put_weekly_maintenance_windows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows"></a>

```python
def put_weekly_maintenance_windows(
  day_of_week: str,
  start_time: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime
) -> None
```

###### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows.parameter.dayOfWeek"></a>

- *Type:* str

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#day_of_week LustreInstance#day_of_week}

---

###### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows.parameter.startTime"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#start_time LustreInstance#start_time}

---

##### `reset_maintenance_exclusion_window` <a name="reset_maintenance_exclusion_window" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resetMaintenanceExclusionWindow"></a>

```python
def reset_maintenance_exclusion_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindow">maintenance_exclusion_window</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindows">weekly_maintenance_windows</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindowInput">maintenance_exclusion_window_input</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowsInput">weekly_maintenance_windows_input</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_exclusion_window`<sup>Required</sup> <a name="maintenance_exclusion_window" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindow"></a>

```python
maintenance_exclusion_window: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference</a>

---

##### `weekly_maintenance_windows`<sup>Required</sup> <a name="weekly_maintenance_windows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindows"></a>

```python
weekly_maintenance_windows: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference</a>

---

##### `maintenance_exclusion_window_input`<sup>Optional</sup> <a name="maintenance_exclusion_window_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindowInput"></a>

```python
maintenance_exclusion_window_input: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---

##### `weekly_maintenance_windows_input`<sup>Optional</sup> <a name="weekly_maintenance_windows_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowsInput"></a>

```python
weekly_maintenance_windows_input: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: LustreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

---


### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime">put_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_start_time` <a name="put_start_time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime"></a>

```python
def put_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#hours LustreInstance#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#minutes LustreInstance#minutes}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#nanos LustreInstance#nanos}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of a minute.

Must be greater than or equal to 0 and typically must
be less than or equal to 59. An API may allow the value 60 if it allows
leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/lustre_instance#seconds LustreInstance#seconds}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTimeInput">start_time_input</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTime"></a>

```python
start_time: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference</a>

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```python
start_time_input: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.internalValue"></a>

```python
internal_value: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---


### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---


### LustreInstanceTimeoutsOutputReference <a name="LustreInstanceTimeoutsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LustreInstanceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

---


### LustreInstanceUpcomingMaintenanceScheduleList <a name="LustreInstanceUpcomingMaintenanceScheduleList" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LustreInstanceUpcomingMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LustreInstanceUpcomingMaintenanceScheduleOutputReference <a name="LustreInstanceUpcomingMaintenanceScheduleOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_google import lustre_instance

lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule">LustreInstanceUpcomingMaintenanceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: LustreInstanceUpcomingMaintenanceSchedule
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule">LustreInstanceUpcomingMaintenanceSchedule</a>

---



