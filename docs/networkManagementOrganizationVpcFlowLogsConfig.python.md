# `networkManagementOrganizationVpcFlowLogsConfig` Submodule <a name="`networkManagementOrganizationVpcFlowLogsConfig` Submodule" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementOrganizationVpcFlowLogsConfig <a name="NetworkManagementOrganizationVpcFlowLogsConfig" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config google_network_management_organization_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer"></a>

```python
from cdktn_provider_google import network_management_organization_vpc_flow_logs_config

networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig(
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
  organization: str,
  vpc_flow_logs_config_id: str,
  aggregation_interval: str = None,
  cross_project_metadata: str = None,
  deletion_policy: str = None,
  description: str = None,
  filter_expr: str = None,
  flow_sampling: typing.Union[int, float] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metadata: str = None,
  metadata_fields: typing.List[str] = None,
  state: str = None,
  timeouts: NetworkManagementOrganizationVpcFlowLogsConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.vpcFlowLogsConfigId">vpc_flow_logs_config_id</a></code> | <code>str</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.aggregationInterval">aggregation_interval</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.crossProjectMetadata">cross_project_metadata</a></code> | <code>str</code> | Determines whether to include cross project annotations in the logs. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.filterExpr">filter_expr</a></code> | <code>str</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.flowSampling">flow_sampling</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Resource labels to represent the user-provided metadata. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadataFields">metadata_fields</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.state">state</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#location NetworkManagementOrganizationVpcFlowLogsConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.organization"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#organization NetworkManagementOrganizationVpcFlowLogsConfig#organization}

---

##### `vpc_flow_logs_config_id`<sup>Required</sup> <a name="vpc_flow_logs_config_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.vpcFlowLogsConfigId"></a>

- *Type:* str

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#vpc_flow_logs_config_id NetworkManagementOrganizationVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `aggregation_interval`<sup>Optional</sup> <a name="aggregation_interval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.aggregationInterval"></a>

- *Type:* str

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values: INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#aggregation_interval NetworkManagementOrganizationVpcFlowLogsConfig#aggregation_interval}

---

##### `cross_project_metadata`<sup>Optional</sup> <a name="cross_project_metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.crossProjectMetadata"></a>

- *Type:* str

Determines whether to include cross project annotations in the logs.

This field is available only for organization configurations. If not
specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED.
Possible values:
CROSS_PROJECT_METADATA_ENABLED
CROSS_PROJECT_METADATA_DISABLED Possible values: ["CROSS_PROJECT_METADATA_ENABLED", "CROSS_PROJECT_METADATA_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#cross_project_metadata NetworkManagementOrganizationVpcFlowLogsConfig#cross_project_metadata}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#deletion_policy NetworkManagementOrganizationVpcFlowLogsConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.description"></a>

- *Type:* str

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#description NetworkManagementOrganizationVpcFlowLogsConfig#description}

---

##### `filter_expr`<sup>Optional</sup> <a name="filter_expr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.filterExpr"></a>

- *Type:* str

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#filter_expr NetworkManagementOrganizationVpcFlowLogsConfig#filter_expr}

---

##### `flow_sampling`<sup>Optional</sup> <a name="flow_sampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.flowSampling"></a>

- *Type:* typing.Union[int, float]

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#flow_sampling NetworkManagementOrganizationVpcFlowLogsConfig#flow_sampling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Resource labels to represent the user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#labels NetworkManagementOrganizationVpcFlowLogsConfig#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadata"></a>

- *Type:* str

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata NetworkManagementOrganizationVpcFlowLogsConfig#metadata}

---

##### `metadata_fields`<sup>Optional</sup> <a name="metadata_fields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadataFields"></a>

- *Type:* typing.List[str]

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata_fields NetworkManagementOrganizationVpcFlowLogsConfig#metadata_fields}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.state"></a>

- *Type:* str

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#state NetworkManagementOrganizationVpcFlowLogsConfig#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#timeouts NetworkManagementOrganizationVpcFlowLogsConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval">reset_aggregation_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata">reset_cross_project_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr">reset_filter_expr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling">reset_flow_sampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields">reset_metadata_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#create NetworkManagementOrganizationVpcFlowLogsConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#delete NetworkManagementOrganizationVpcFlowLogsConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#update NetworkManagementOrganizationVpcFlowLogsConfig#update}.

---

##### `reset_aggregation_interval` <a name="reset_aggregation_interval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval"></a>

```python
def reset_aggregation_interval() -> None
```

##### `reset_cross_project_metadata` <a name="reset_cross_project_metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata"></a>

```python
def reset_cross_project_metadata() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filter_expr` <a name="reset_filter_expr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr"></a>

```python
def reset_filter_expr() -> None
```

##### `reset_flow_sampling` <a name="reset_flow_sampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling"></a>

```python
def reset_flow_sampling() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_metadata_fields` <a name="reset_metadata_fields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields"></a>

```python
def reset_metadata_fields() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct"></a>

```python
from cdktn_provider_google import network_management_organization_vpc_flow_logs_config

networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import network_management_organization_vpc_flow_logs_config

networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import network_management_organization_vpc_flow_logs_config

networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_management_organization_vpc_flow_logs_config

networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkManagementOrganizationVpcFlowLogsConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkManagementOrganizationVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkManagementOrganizationVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput">aggregation_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput">cross_project_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput">filter_expr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput">flow_sampling_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput">metadata_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">vpc_flow_logs_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval">aggregation_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata">cross_project_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr">filter_expr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling">flow_sampling</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields">metadata_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId">vpc_flow_logs_config_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts"></a>

```python
timeouts: NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `aggregation_interval_input`<sup>Optional</sup> <a name="aggregation_interval_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```python
aggregation_interval_input: str
```

- *Type:* str

---

##### `cross_project_metadata_input`<sup>Optional</sup> <a name="cross_project_metadata_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput"></a>

```python
cross_project_metadata_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `filter_expr_input`<sup>Optional</sup> <a name="filter_expr_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput"></a>

```python
filter_expr_input: str
```

- *Type:* str

---

##### `flow_sampling_input`<sup>Optional</sup> <a name="flow_sampling_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput"></a>

```python
flow_sampling_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metadata_fields_input`<sup>Optional</sup> <a name="metadata_fields_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```python
metadata_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkManagementOrganizationVpcFlowLogsConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---

##### `vpc_flow_logs_config_id_input`<sup>Optional</sup> <a name="vpc_flow_logs_config_id_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```python
vpc_flow_logs_config_id_input: str
```

- *Type:* str

---

##### `aggregation_interval`<sup>Required</sup> <a name="aggregation_interval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval"></a>

```python
aggregation_interval: str
```

- *Type:* str

---

##### `cross_project_metadata`<sup>Required</sup> <a name="cross_project_metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata"></a>

```python
cross_project_metadata: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filter_expr`<sup>Required</sup> <a name="filter_expr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr"></a>

```python
filter_expr: str
```

- *Type:* str

---

##### `flow_sampling`<sup>Required</sup> <a name="flow_sampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling"></a>

```python
flow_sampling: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `metadata_fields`<sup>Required</sup> <a name="metadata_fields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields"></a>

```python
metadata_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vpc_flow_logs_config_id`<sup>Required</sup> <a name="vpc_flow_logs_config_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```python
vpc_flow_logs_config_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementOrganizationVpcFlowLogsConfigConfig <a name="NetworkManagementOrganizationVpcFlowLogsConfigConfig" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import network_management_organization_vpc_flow_logs_config

networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  organization: str,
  vpc_flow_logs_config_id: str,
  aggregation_interval: str = None,
  cross_project_metadata: str = None,
  deletion_policy: str = None,
  description: str = None,
  filter_expr: str = None,
  flow_sampling: typing.Union[int, float] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  metadata: str = None,
  metadata_fields: typing.List[str] = None,
  state: str = None,
  timeouts: NetworkManagementOrganizationVpcFlowLogsConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization">organization</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">vpc_flow_logs_config_id</a></code> | <code>str</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval">aggregation_interval</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata">cross_project_metadata</a></code> | <code>str</code> | Determines whether to include cross project annotations in the logs. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description">description</a></code> | <code>str</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr">filter_expr</a></code> | <code>str</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling">flow_sampling</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Resource labels to represent the user-provided metadata. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata">metadata</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields">metadata_fields</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state">state</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#location NetworkManagementOrganizationVpcFlowLogsConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#organization NetworkManagementOrganizationVpcFlowLogsConfig#organization}

---

##### `vpc_flow_logs_config_id`<sup>Required</sup> <a name="vpc_flow_logs_config_id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```python
vpc_flow_logs_config_id: str
```

- *Type:* str

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#vpc_flow_logs_config_id NetworkManagementOrganizationVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `aggregation_interval`<sup>Optional</sup> <a name="aggregation_interval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```python
aggregation_interval: str
```

- *Type:* str

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values: INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#aggregation_interval NetworkManagementOrganizationVpcFlowLogsConfig#aggregation_interval}

---

##### `cross_project_metadata`<sup>Optional</sup> <a name="cross_project_metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata"></a>

```python
cross_project_metadata: str
```

- *Type:* str

Determines whether to include cross project annotations in the logs.

This field is available only for organization configurations. If not
specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED.
Possible values:
CROSS_PROJECT_METADATA_ENABLED
CROSS_PROJECT_METADATA_DISABLED Possible values: ["CROSS_PROJECT_METADATA_ENABLED", "CROSS_PROJECT_METADATA_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#cross_project_metadata NetworkManagementOrganizationVpcFlowLogsConfig#cross_project_metadata}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#deletion_policy NetworkManagementOrganizationVpcFlowLogsConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#description NetworkManagementOrganizationVpcFlowLogsConfig#description}

---

##### `filter_expr`<sup>Optional</sup> <a name="filter_expr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr"></a>

```python
filter_expr: str
```

- *Type:* str

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#filter_expr NetworkManagementOrganizationVpcFlowLogsConfig#filter_expr}

---

##### `flow_sampling`<sup>Optional</sup> <a name="flow_sampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling"></a>

```python
flow_sampling: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#flow_sampling NetworkManagementOrganizationVpcFlowLogsConfig#flow_sampling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Resource labels to represent the user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#labels NetworkManagementOrganizationVpcFlowLogsConfig#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata NetworkManagementOrganizationVpcFlowLogsConfig#metadata}

---

##### `metadata_fields`<sup>Optional</sup> <a name="metadata_fields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields"></a>

```python
metadata_fields: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata_fields NetworkManagementOrganizationVpcFlowLogsConfig#metadata_fields}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#state NetworkManagementOrganizationVpcFlowLogsConfig#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts"></a>

```python
timeouts: NetworkManagementOrganizationVpcFlowLogsConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#timeouts NetworkManagementOrganizationVpcFlowLogsConfig#timeouts}

---

### NetworkManagementOrganizationVpcFlowLogsConfigTimeouts <a name="NetworkManagementOrganizationVpcFlowLogsConfigTimeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_management_organization_vpc_flow_logs_config

networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#create NetworkManagementOrganizationVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#delete NetworkManagementOrganizationVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#update NetworkManagementOrganizationVpcFlowLogsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#create NetworkManagementOrganizationVpcFlowLogsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#delete NetworkManagementOrganizationVpcFlowLogsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_management_organization_vpc_flow_logs_config#update NetworkManagementOrganizationVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference <a name="NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_management_organization_vpc_flow_logs_config

networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkManagementOrganizationVpcFlowLogsConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---



