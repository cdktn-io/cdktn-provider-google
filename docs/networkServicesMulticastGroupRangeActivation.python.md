# `networkServicesMulticastGroupRangeActivation` Submodule <a name="`networkServicesMulticastGroupRangeActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastGroupRangeActivation <a name="NetworkServicesMulticastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation google_network_services_multicast_group_range_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  multicast_domain_activation: str,
  multicast_group_range: str,
  multicast_group_range_activation_id: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  log_config: NetworkServicesMulticastGroupRangeActivationLogConfig = None,
  project: str = None,
  timeouts: NetworkServicesMulticastGroupRangeActivationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.multicastDomainActivation">multicast_domain_activation</a></code> | <code>str</code> | The resource name of a multicast domain activation that is in the same zone as this multicast group. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.multicastGroupRange">multicast_group_range</a></code> | <code>str</code> | The resource name of the global multicast group range for the group. Use the following format: 'projects/* /locations/global/multicastGroupRanges/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.multicastGroupRangeActivationId">multicast_group_range_activation_id</a></code> | <code>str</code> | A unique name for the multicast group range activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional text description of the multicast group range activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#id NetworkServicesMulticastGroupRangeActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#project NetworkServicesMulticastGroupRangeActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts">NetworkServicesMulticastGroupRangeActivationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#location NetworkServicesMulticastGroupRangeActivation#location}

---

##### `multicast_domain_activation`<sup>Required</sup> <a name="multicast_domain_activation" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.multicastDomainActivation"></a>

- *Type:* str

The resource name of a multicast domain activation that is in the same zone as this multicast group.

Use the following format:
'projects/* /locations/* /multicastDomainActivations/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#multicast_domain_activation NetworkServicesMulticastGroupRangeActivation#multicast_domain_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicast_group_range`<sup>Required</sup> <a name="multicast_group_range" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.multicastGroupRange"></a>

- *Type:* str

The resource name of the global multicast group range for the group. Use the following format: 'projects/* /locations/global/multicastGroupRanges/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#multicast_group_range NetworkServicesMulticastGroupRangeActivation#multicast_group_range}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicast_group_range_activation_id`<sup>Required</sup> <a name="multicast_group_range_activation_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.multicastGroupRangeActivationId"></a>

- *Type:* str

A unique name for the multicast group range activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#multicast_group_range_activation_id NetworkServicesMulticastGroupRangeActivation#multicast_group_range_activation_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#deletion_policy NetworkServicesMulticastGroupRangeActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.description"></a>

- *Type:* str

An optional text description of the multicast group range activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#description NetworkServicesMulticastGroupRangeActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#id NetworkServicesMulticastGroupRangeActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#labels NetworkServicesMulticastGroupRangeActivation#labels}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#log_config NetworkServicesMulticastGroupRangeActivation#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#project NetworkServicesMulticastGroupRangeActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts">NetworkServicesMulticastGroupRangeActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#timeouts NetworkServicesMulticastGroupRangeActivation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log_config` <a name="put_log_config" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putLogConfig"></a>

```python
def put_log_config(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putLogConfig.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#enabled NetworkServicesMulticastGroupRangeActivation#enabled}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#create NetworkServicesMulticastGroupRangeActivation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#delete NetworkServicesMulticastGroupRangeActivation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#update NetworkServicesMulticastGroupRangeActivation#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastGroupRangeActivation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isConstruct"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformElement"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformResource"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkServicesMulticastGroupRangeActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesMulticastGroupRangeActivation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesMulticastGroupRangeActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastGroupRangeActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference">NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupConsumerActivations">multicast_group_consumer_activations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList">NetworkServicesMulticastGroupRangeActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference">NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivationInput">multicast_domain_activation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationIdInput">multicast_group_range_activation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeInput">multicast_group_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts">NetworkServicesMulticastGroupRangeActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivation">multicast_domain_activation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRange">multicast_group_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationId">multicast_group_range_activation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.logConfig"></a>

```python
log_config: NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference">NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference</a>

---

##### `multicast_group_consumer_activations`<sup>Required</sup> <a name="multicast_group_consumer_activations" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupConsumerActivations"></a>

```python
multicast_group_consumer_activations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.state"></a>

```python
state: NetworkServicesMulticastGroupRangeActivationStateList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList">NetworkServicesMulticastGroupRangeActivationStateList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.timeouts"></a>

```python
timeouts: NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference">NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.logConfigInput"></a>

```python
log_config_input: NetworkServicesMulticastGroupRangeActivationLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a>

---

##### `multicast_domain_activation_input`<sup>Optional</sup> <a name="multicast_domain_activation_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivationInput"></a>

```python
multicast_domain_activation_input: str
```

- *Type:* str

---

##### `multicast_group_range_activation_id_input`<sup>Optional</sup> <a name="multicast_group_range_activation_id_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationIdInput"></a>

```python
multicast_group_range_activation_id_input: str
```

- *Type:* str

---

##### `multicast_group_range_input`<sup>Optional</sup> <a name="multicast_group_range_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeInput"></a>

```python
multicast_group_range_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkServicesMulticastGroupRangeActivationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts">NetworkServicesMulticastGroupRangeActivationTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `multicast_domain_activation`<sup>Required</sup> <a name="multicast_domain_activation" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivation"></a>

```python
multicast_domain_activation: str
```

- *Type:* str

---

##### `multicast_group_range`<sup>Required</sup> <a name="multicast_group_range" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRange"></a>

```python
multicast_group_range: str
```

- *Type:* str

---

##### `multicast_group_range_activation_id`<sup>Required</sup> <a name="multicast_group_range_activation_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationId"></a>

```python
multicast_group_range_activation_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastGroupRangeActivationConfig <a name="NetworkServicesMulticastGroupRangeActivationConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  multicast_domain_activation: str,
  multicast_group_range: str,
  multicast_group_range_activation_id: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  log_config: NetworkServicesMulticastGroupRangeActivationLogConfig = None,
  project: str = None,
  timeouts: NetworkServicesMulticastGroupRangeActivationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastDomainActivation">multicast_domain_activation</a></code> | <code>str</code> | The resource name of a multicast domain activation that is in the same zone as this multicast group. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRange">multicast_group_range</a></code> | <code>str</code> | The resource name of the global multicast group range for the group. Use the following format: 'projects/* /locations/global/multicastGroupRanges/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRangeActivationId">multicast_group_range_activation_id</a></code> | <code>str</code> | A unique name for the multicast group range activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.description">description</a></code> | <code>str</code> | An optional text description of the multicast group range activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#id NetworkServicesMulticastGroupRangeActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#project NetworkServicesMulticastGroupRangeActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts">NetworkServicesMulticastGroupRangeActivationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#location NetworkServicesMulticastGroupRangeActivation#location}

---

##### `multicast_domain_activation`<sup>Required</sup> <a name="multicast_domain_activation" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastDomainActivation"></a>

```python
multicast_domain_activation: str
```

- *Type:* str

The resource name of a multicast domain activation that is in the same zone as this multicast group.

Use the following format:
'projects/* /locations/* /multicastDomainActivations/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#multicast_domain_activation NetworkServicesMulticastGroupRangeActivation#multicast_domain_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicast_group_range`<sup>Required</sup> <a name="multicast_group_range" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRange"></a>

```python
multicast_group_range: str
```

- *Type:* str

The resource name of the global multicast group range for the group. Use the following format: 'projects/* /locations/global/multicastGroupRanges/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#multicast_group_range NetworkServicesMulticastGroupRangeActivation#multicast_group_range}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicast_group_range_activation_id`<sup>Required</sup> <a name="multicast_group_range_activation_id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRangeActivationId"></a>

```python
multicast_group_range_activation_id: str
```

- *Type:* str

A unique name for the multicast group range activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#multicast_group_range_activation_id NetworkServicesMulticastGroupRangeActivation#multicast_group_range_activation_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#deletion_policy NetworkServicesMulticastGroupRangeActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional text description of the multicast group range activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#description NetworkServicesMulticastGroupRangeActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#id NetworkServicesMulticastGroupRangeActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#labels NetworkServicesMulticastGroupRangeActivation#labels}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.logConfig"></a>

```python
log_config: NetworkServicesMulticastGroupRangeActivationLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#log_config NetworkServicesMulticastGroupRangeActivation#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#project NetworkServicesMulticastGroupRangeActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesMulticastGroupRangeActivationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts">NetworkServicesMulticastGroupRangeActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#timeouts NetworkServicesMulticastGroupRangeActivation#timeouts}

---

### NetworkServicesMulticastGroupRangeActivationLogConfig <a name="NetworkServicesMulticastGroupRangeActivationLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable logging or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#enabled NetworkServicesMulticastGroupRangeActivation#enabled}

---

### NetworkServicesMulticastGroupRangeActivationState <a name="NetworkServicesMulticastGroupRangeActivationState" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationState.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationState()
```


### NetworkServicesMulticastGroupRangeActivationTimeouts <a name="NetworkServicesMulticastGroupRangeActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#create NetworkServicesMulticastGroupRangeActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#delete NetworkServicesMulticastGroupRangeActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#update NetworkServicesMulticastGroupRangeActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#create NetworkServicesMulticastGroupRangeActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#delete NetworkServicesMulticastGroupRangeActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_group_range_activation#update NetworkServicesMulticastGroupRangeActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference <a name="NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesMulticastGroupRangeActivationLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationLogConfig">NetworkServicesMulticastGroupRangeActivationLogConfig</a>

---


### NetworkServicesMulticastGroupRangeActivationStateList <a name="NetworkServicesMulticastGroupRangeActivationStateList" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesMulticastGroupRangeActivationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkServicesMulticastGroupRangeActivationStateOutputReference <a name="NetworkServicesMulticastGroupRangeActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationState">NetworkServicesMulticastGroupRangeActivationState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationStateOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesMulticastGroupRangeActivationState
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationState">NetworkServicesMulticastGroupRangeActivationState</a>

---


### NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference <a name="NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range_activation

networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts">NetworkServicesMulticastGroupRangeActivationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesMulticastGroupRangeActivationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastGroupRangeActivation.NetworkServicesMulticastGroupRangeActivationTimeouts">NetworkServicesMulticastGroupRangeActivationTimeouts</a>

---



