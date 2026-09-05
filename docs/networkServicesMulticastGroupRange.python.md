# `networkServicesMulticastGroupRange` Submodule <a name="`networkServicesMulticastGroupRange` Submodule" id="@cdktn/provider-google.networkServicesMulticastGroupRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastGroupRange <a name="NetworkServicesMulticastGroupRange" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range google_network_services_multicast_group_range}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange(
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
  multicast_domain: str,
  multicast_group_range_id: str,
  reserved_internal_range: str,
  consumer_accept_list: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  distribution_scope: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  log_config: NetworkServicesMulticastGroupRangeLogConfig = None,
  project: str = None,
  require_explicit_accept: bool | IResolvable = None,
  timeouts: NetworkServicesMulticastGroupRangeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.multicastDomain">multicast_domain</a></code> | <code>str</code> | The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.multicastGroupRangeId">multicast_group_range_id</a></code> | <code>str</code> | A unique name for the multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.reservedInternalRange">reserved_internal_range</a></code> | <code>str</code> | The resource name of the internal range reserved for this multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.consumerAcceptList">consumer_accept_list</a></code> | <code>typing.List[str]</code> | A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional text description of the multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.distributionScope">distribution_scope</a></code> | <code>str</code> | Multicast group range's distribution scope. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#id NetworkServicesMulticastGroupRange#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#project NetworkServicesMulticastGroupRange#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.requireExplicitAccept">require_explicit_accept</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether an empty consumer_accept_list will deny all consumer projects. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#location NetworkServicesMulticastGroupRange#location}

---

##### `multicast_domain`<sup>Required</sup> <a name="multicast_domain" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.multicastDomain"></a>

- *Type:* str

The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#multicast_domain NetworkServicesMulticastGroupRange#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicast_group_range_id`<sup>Required</sup> <a name="multicast_group_range_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.multicastGroupRangeId"></a>

- *Type:* str

A unique name for the multicast group range.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#multicast_group_range_id NetworkServicesMulticastGroupRange#multicast_group_range_id}

---

##### `reserved_internal_range`<sup>Required</sup> <a name="reserved_internal_range" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.reservedInternalRange"></a>

- *Type:* str

The resource name of the internal range reserved for this multicast group range.

The internal range must be a Class D address (224.0.0.0 to 239.255.255.255)
and have a prefix length >= 23.

Use the following format:
'projects/* /locations/global/internalRanges/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#reserved_internal_range NetworkServicesMulticastGroupRange#reserved_internal_range}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `consumer_accept_list`<sup>Optional</sup> <a name="consumer_accept_list" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.consumerAcceptList"></a>

- *Type:* typing.List[str]

A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange.

The
project can be specified using its project ID or project number. If left
empty, then all consumer projects are allowed (unless
require_explicit_accept is set to true) once they have VPC networks
associated to the multicast domain. The current max length of the accept
list is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#consumer_accept_list NetworkServicesMulticastGroupRange#consumer_accept_list}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#deletion_policy NetworkServicesMulticastGroupRange#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.description"></a>

- *Type:* str

An optional text description of the multicast group range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#description NetworkServicesMulticastGroupRange#description}

---

##### `distribution_scope`<sup>Optional</sup> <a name="distribution_scope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.distributionScope"></a>

- *Type:* str

Multicast group range's distribution scope.

Intra-zone or intra-region
cross-zone is supported, with default value being intra-region. Cross
region distribution is not supported.
Possible values:
INTRA_ZONE
INTRA_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#distribution_scope NetworkServicesMulticastGroupRange#distribution_scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#id NetworkServicesMulticastGroupRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#labels NetworkServicesMulticastGroupRange#labels}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#log_config NetworkServicesMulticastGroupRange#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#project NetworkServicesMulticastGroupRange#project}.

---

##### `require_explicit_accept`<sup>Optional</sup> <a name="require_explicit_accept" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.requireExplicitAccept"></a>

- *Type:* bool | cdktn.IResolvable

Whether an empty consumer_accept_list will deny all consumer projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#require_explicit_accept NetworkServicesMulticastGroupRange#require_explicit_accept}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#timeouts NetworkServicesMulticastGroupRange#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetConsumerAcceptList">reset_consumer_accept_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDistributionScope">reset_distribution_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetRequireExplicitAccept">reset_require_explicit_accept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log_config` <a name="put_log_config" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putLogConfig"></a>

```python
def put_log_config(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putLogConfig.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#enabled NetworkServicesMulticastGroupRange#enabled}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#create NetworkServicesMulticastGroupRange#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#delete NetworkServicesMulticastGroupRange#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#update NetworkServicesMulticastGroupRange#update}.

---

##### `reset_consumer_accept_list` <a name="reset_consumer_accept_list" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetConsumerAcceptList"></a>

```python
def reset_consumer_accept_list() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_distribution_scope` <a name="reset_distribution_scope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDistributionScope"></a>

```python
def reset_distribution_scope() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_require_explicit_accept` <a name="reset_require_explicit_accept" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetRequireExplicitAccept"></a>

```python
def reset_require_explicit_accept() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastGroupRange resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isConstruct"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformElement"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformResource"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkServicesMulticastGroupRange resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesMulticastGroupRange to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesMulticastGroupRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastGroupRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference">NetworkServicesMulticastGroupRangeLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList">NetworkServicesMulticastGroupRangeStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference">NetworkServicesMulticastGroupRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptListInput">consumer_accept_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScopeInput">distribution_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomainInput">multicast_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeIdInput">multicast_group_range_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAcceptInput">require_explicit_accept_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRangeInput">reserved_internal_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptList">consumer_accept_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScope">distribution_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomain">multicast_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeId">multicast_group_range_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAccept">require_explicit_accept</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRange">reserved_internal_range</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfig"></a>

```python
log_config: NetworkServicesMulticastGroupRangeLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference">NetworkServicesMulticastGroupRangeLogConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.state"></a>

```python
state: NetworkServicesMulticastGroupRangeStateList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList">NetworkServicesMulticastGroupRangeStateList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeouts"></a>

```python
timeouts: NetworkServicesMulticastGroupRangeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference">NetworkServicesMulticastGroupRangeTimeoutsOutputReference</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `consumer_accept_list_input`<sup>Optional</sup> <a name="consumer_accept_list_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptListInput"></a>

```python
consumer_accept_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `distribution_scope_input`<sup>Optional</sup> <a name="distribution_scope_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScopeInput"></a>

```python
distribution_scope_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfigInput"></a>

```python
log_config_input: NetworkServicesMulticastGroupRangeLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

---

##### `multicast_domain_input`<sup>Optional</sup> <a name="multicast_domain_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomainInput"></a>

```python
multicast_domain_input: str
```

- *Type:* str

---

##### `multicast_group_range_id_input`<sup>Optional</sup> <a name="multicast_group_range_id_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeIdInput"></a>

```python
multicast_group_range_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `require_explicit_accept_input`<sup>Optional</sup> <a name="require_explicit_accept_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAcceptInput"></a>

```python
require_explicit_accept_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reserved_internal_range_input`<sup>Optional</sup> <a name="reserved_internal_range_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRangeInput"></a>

```python
reserved_internal_range_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkServicesMulticastGroupRangeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a>

---

##### `consumer_accept_list`<sup>Required</sup> <a name="consumer_accept_list" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptList"></a>

```python
consumer_accept_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distribution_scope`<sup>Required</sup> <a name="distribution_scope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScope"></a>

```python
distribution_scope: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `multicast_domain`<sup>Required</sup> <a name="multicast_domain" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomain"></a>

```python
multicast_domain: str
```

- *Type:* str

---

##### `multicast_group_range_id`<sup>Required</sup> <a name="multicast_group_range_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeId"></a>

```python
multicast_group_range_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `require_explicit_accept`<sup>Required</sup> <a name="require_explicit_accept" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAccept"></a>

```python
require_explicit_accept: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reserved_internal_range`<sup>Required</sup> <a name="reserved_internal_range" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRange"></a>

```python
reserved_internal_range: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastGroupRangeConfig <a name="NetworkServicesMulticastGroupRangeConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  multicast_domain: str,
  multicast_group_range_id: str,
  reserved_internal_range: str,
  consumer_accept_list: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  distribution_scope: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  log_config: NetworkServicesMulticastGroupRangeLogConfig = None,
  project: str = None,
  require_explicit_accept: bool | IResolvable = None,
  timeouts: NetworkServicesMulticastGroupRangeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastDomain">multicast_domain</a></code> | <code>str</code> | The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastGroupRangeId">multicast_group_range_id</a></code> | <code>str</code> | A unique name for the multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.reservedInternalRange">reserved_internal_range</a></code> | <code>str</code> | The resource name of the internal range reserved for this multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.consumerAcceptList">consumer_accept_list</a></code> | <code>typing.List[str]</code> | A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.description">description</a></code> | <code>str</code> | An optional text description of the multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.distributionScope">distribution_scope</a></code> | <code>str</code> | Multicast group range's distribution scope. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#id NetworkServicesMulticastGroupRange#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#project NetworkServicesMulticastGroupRange#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.requireExplicitAccept">require_explicit_accept</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether an empty consumer_accept_list will deny all consumer projects. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#location NetworkServicesMulticastGroupRange#location}

---

##### `multicast_domain`<sup>Required</sup> <a name="multicast_domain" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastDomain"></a>

```python
multicast_domain: str
```

- *Type:* str

The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#multicast_domain NetworkServicesMulticastGroupRange#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicast_group_range_id`<sup>Required</sup> <a name="multicast_group_range_id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastGroupRangeId"></a>

```python
multicast_group_range_id: str
```

- *Type:* str

A unique name for the multicast group range.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#multicast_group_range_id NetworkServicesMulticastGroupRange#multicast_group_range_id}

---

##### `reserved_internal_range`<sup>Required</sup> <a name="reserved_internal_range" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.reservedInternalRange"></a>

```python
reserved_internal_range: str
```

- *Type:* str

The resource name of the internal range reserved for this multicast group range.

The internal range must be a Class D address (224.0.0.0 to 239.255.255.255)
and have a prefix length >= 23.

Use the following format:
'projects/* /locations/global/internalRanges/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#reserved_internal_range NetworkServicesMulticastGroupRange#reserved_internal_range}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `consumer_accept_list`<sup>Optional</sup> <a name="consumer_accept_list" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.consumerAcceptList"></a>

```python
consumer_accept_list: typing.List[str]
```

- *Type:* typing.List[str]

A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange.

The
project can be specified using its project ID or project number. If left
empty, then all consumer projects are allowed (unless
require_explicit_accept is set to true) once they have VPC networks
associated to the multicast domain. The current max length of the accept
list is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#consumer_accept_list NetworkServicesMulticastGroupRange#consumer_accept_list}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#deletion_policy NetworkServicesMulticastGroupRange#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional text description of the multicast group range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#description NetworkServicesMulticastGroupRange#description}

---

##### `distribution_scope`<sup>Optional</sup> <a name="distribution_scope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.distributionScope"></a>

```python
distribution_scope: str
```

- *Type:* str

Multicast group range's distribution scope.

Intra-zone or intra-region
cross-zone is supported, with default value being intra-region. Cross
region distribution is not supported.
Possible values:
INTRA_ZONE
INTRA_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#distribution_scope NetworkServicesMulticastGroupRange#distribution_scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#id NetworkServicesMulticastGroupRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#labels NetworkServicesMulticastGroupRange#labels}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.logConfig"></a>

```python
log_config: NetworkServicesMulticastGroupRangeLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#log_config NetworkServicesMulticastGroupRange#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#project NetworkServicesMulticastGroupRange#project}.

---

##### `require_explicit_accept`<sup>Optional</sup> <a name="require_explicit_accept" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.requireExplicitAccept"></a>

```python
require_explicit_accept: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether an empty consumer_accept_list will deny all consumer projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#require_explicit_accept NetworkServicesMulticastGroupRange#require_explicit_accept}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesMulticastGroupRangeTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#timeouts NetworkServicesMulticastGroupRange#timeouts}

---

### NetworkServicesMulticastGroupRangeLogConfig <a name="NetworkServicesMulticastGroupRangeLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable logging or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#enabled NetworkServicesMulticastGroupRange#enabled}

---

### NetworkServicesMulticastGroupRangeState <a name="NetworkServicesMulticastGroupRangeState" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState()
```


### NetworkServicesMulticastGroupRangeTimeouts <a name="NetworkServicesMulticastGroupRangeTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#create NetworkServicesMulticastGroupRange#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#delete NetworkServicesMulticastGroupRange#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#update NetworkServicesMulticastGroupRange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#create NetworkServicesMulticastGroupRange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#delete NetworkServicesMulticastGroupRange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/network_services_multicast_group_range#update NetworkServicesMulticastGroupRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastGroupRangeLogConfigOutputReference <a name="NetworkServicesMulticastGroupRangeLogConfigOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesMulticastGroupRangeLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

---


### NetworkServicesMulticastGroupRangeStateList <a name="NetworkServicesMulticastGroupRangeStateList" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesMulticastGroupRangeStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkServicesMulticastGroupRangeStateOutputReference <a name="NetworkServicesMulticastGroupRangeStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState">NetworkServicesMulticastGroupRangeState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesMulticastGroupRangeState
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState">NetworkServicesMulticastGroupRangeState</a>

---


### NetworkServicesMulticastGroupRangeTimeoutsOutputReference <a name="NetworkServicesMulticastGroupRangeTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_range

networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesMulticastGroupRangeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a>

---



