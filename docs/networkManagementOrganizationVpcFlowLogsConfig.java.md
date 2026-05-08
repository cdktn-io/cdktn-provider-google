# `networkManagementOrganizationVpcFlowLogsConfig` Submodule <a name="`networkManagementOrganizationVpcFlowLogsConfig` Submodule" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementOrganizationVpcFlowLogsConfig <a name="NetworkManagementOrganizationVpcFlowLogsConfig" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config google_network_management_organization_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_management_organization_vpc_flow_logs_config.NetworkManagementOrganizationVpcFlowLogsConfig;

NetworkManagementOrganizationVpcFlowLogsConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .organization(java.lang.String)
    .vpcFlowLogsConfigId(java.lang.String)
//  .aggregationInterval(java.lang.String)
//  .crossProjectMetadata(java.lang.String)
//  .description(java.lang.String)
//  .filterExpr(java.lang.String)
//  .flowSampling(java.lang.Number)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.lang.String)
//  .metadataFields(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .timeouts(NetworkManagementOrganizationVpcFlowLogsConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>java.lang.String</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.crossProjectMetadata">crossProjectMetadata</a></code> | <code>java.lang.String</code> | Determines whether to include cross project annotations in the logs. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels to represent the user-provided metadata. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#location NetworkManagementOrganizationVpcFlowLogsConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#organization NetworkManagementOrganizationVpcFlowLogsConfig#organization}

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.vpcFlowLogsConfigId"></a>

- *Type:* java.lang.String

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#vpc_flow_logs_config_id NetworkManagementOrganizationVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.aggregationInterval"></a>

- *Type:* java.lang.String

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values: INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#aggregation_interval NetworkManagementOrganizationVpcFlowLogsConfig#aggregation_interval}

---

##### `crossProjectMetadata`<sup>Optional</sup> <a name="crossProjectMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.crossProjectMetadata"></a>

- *Type:* java.lang.String

Determines whether to include cross project annotations in the logs.

This field is available only for organization configurations. If not
specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED.
Possible values:
CROSS_PROJECT_METADATA_ENABLED
CROSS_PROJECT_METADATA_DISABLED Possible values: ["CROSS_PROJECT_METADATA_ENABLED", "CROSS_PROJECT_METADATA_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#cross_project_metadata NetworkManagementOrganizationVpcFlowLogsConfig#cross_project_metadata}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#description NetworkManagementOrganizationVpcFlowLogsConfig#description}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.filterExpr"></a>

- *Type:* java.lang.String

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#filter_expr NetworkManagementOrganizationVpcFlowLogsConfig#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.flowSampling"></a>

- *Type:* java.lang.Number

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#flow_sampling NetworkManagementOrganizationVpcFlowLogsConfig#flow_sampling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels to represent the user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#labels NetworkManagementOrganizationVpcFlowLogsConfig#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata NetworkManagementOrganizationVpcFlowLogsConfig#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadataFields"></a>

- *Type:* java.util.List<java.lang.String>

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata_fields NetworkManagementOrganizationVpcFlowLogsConfig#metadata_fields}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#state NetworkManagementOrganizationVpcFlowLogsConfig#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#timeouts NetworkManagementOrganizationVpcFlowLogsConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval">resetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata">resetCrossProjectMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr">resetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling">resetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields">resetMetadataFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts"></a>

```java
public void putTimeouts(NetworkManagementOrganizationVpcFlowLogsConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---

##### `resetAggregationInterval` <a name="resetAggregationInterval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval"></a>

```java
public void resetAggregationInterval()
```

##### `resetCrossProjectMetadata` <a name="resetCrossProjectMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata"></a>

```java
public void resetCrossProjectMetadata()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFilterExpr` <a name="resetFilterExpr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr"></a>

```java
public void resetFilterExpr()
```

##### `resetFlowSampling` <a name="resetFlowSampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling"></a>

```java
public void resetFlowSampling()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMetadataFields` <a name="resetMetadataFields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields"></a>

```java
public void resetMetadataFields()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.network_management_organization_vpc_flow_logs_config.NetworkManagementOrganizationVpcFlowLogsConfig;

NetworkManagementOrganizationVpcFlowLogsConfig.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_management_organization_vpc_flow_logs_config.NetworkManagementOrganizationVpcFlowLogsConfig;

NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_management_organization_vpc_flow_logs_config.NetworkManagementOrganizationVpcFlowLogsConfig;

NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_management_organization_vpc_flow_logs_config.NetworkManagementOrganizationVpcFlowLogsConfig;

NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkManagementOrganizationVpcFlowLogsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkManagementOrganizationVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkManagementOrganizationVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput">aggregationIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput">crossProjectMetadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput">filterExprInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput">flowSamplingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput">metadataFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">vpcFlowLogsConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata">crossProjectMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts"></a>

```java
public NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `aggregationIntervalInput`<sup>Optional</sup> <a name="aggregationIntervalInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```java
public java.lang.String getAggregationIntervalInput();
```

- *Type:* java.lang.String

---

##### `crossProjectMetadataInput`<sup>Optional</sup> <a name="crossProjectMetadataInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput"></a>

```java
public java.lang.String getCrossProjectMetadataInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filterExprInput`<sup>Optional</sup> <a name="filterExprInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput"></a>

```java
public java.lang.String getFilterExprInput();
```

- *Type:* java.lang.String

---

##### `flowSamplingInput`<sup>Optional</sup> <a name="flowSamplingInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput"></a>

```java
public java.lang.Number getFlowSamplingInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metadataFieldsInput`<sup>Optional</sup> <a name="metadataFieldsInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```java
public java.util.List<java.lang.String> getMetadataFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput"></a>

```java
public IResolvable|NetworkManagementOrganizationVpcFlowLogsConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---

##### `vpcFlowLogsConfigIdInput`<sup>Optional</sup> <a name="vpcFlowLogsConfigIdInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```java
public java.lang.String getVpcFlowLogsConfigIdInput();
```

- *Type:* java.lang.String

---

##### `aggregationInterval`<sup>Required</sup> <a name="aggregationInterval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval"></a>

```java
public java.lang.String getAggregationInterval();
```

- *Type:* java.lang.String

---

##### `crossProjectMetadata`<sup>Required</sup> <a name="crossProjectMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata"></a>

```java
public java.lang.String getCrossProjectMetadata();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filterExpr`<sup>Required</sup> <a name="filterExpr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr"></a>

```java
public java.lang.String getFilterExpr();
```

- *Type:* java.lang.String

---

##### `flowSampling`<sup>Required</sup> <a name="flowSampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling"></a>

```java
public java.lang.Number getFlowSampling();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `metadataFields`<sup>Required</sup> <a name="metadataFields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields"></a>

```java
public java.util.List<java.lang.String> getMetadataFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```java
public java.lang.String getVpcFlowLogsConfigId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementOrganizationVpcFlowLogsConfigConfig <a name="NetworkManagementOrganizationVpcFlowLogsConfigConfig" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_management_organization_vpc_flow_logs_config.NetworkManagementOrganizationVpcFlowLogsConfigConfig;

NetworkManagementOrganizationVpcFlowLogsConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .organization(java.lang.String)
    .vpcFlowLogsConfigId(java.lang.String)
//  .aggregationInterval(java.lang.String)
//  .crossProjectMetadata(java.lang.String)
//  .description(java.lang.String)
//  .filterExpr(java.lang.String)
//  .flowSampling(java.lang.Number)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.lang.String)
//  .metadataFields(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .timeouts(NetworkManagementOrganizationVpcFlowLogsConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>java.lang.String</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata">crossProjectMetadata</a></code> | <code>java.lang.String</code> | Determines whether to include cross project annotations in the logs. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels to represent the user-provided metadata. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state">state</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#location NetworkManagementOrganizationVpcFlowLogsConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#organization NetworkManagementOrganizationVpcFlowLogsConfig#organization}

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```java
public java.lang.String getVpcFlowLogsConfigId();
```

- *Type:* java.lang.String

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#vpc_flow_logs_config_id NetworkManagementOrganizationVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```java
public java.lang.String getAggregationInterval();
```

- *Type:* java.lang.String

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values: INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#aggregation_interval NetworkManagementOrganizationVpcFlowLogsConfig#aggregation_interval}

---

##### `crossProjectMetadata`<sup>Optional</sup> <a name="crossProjectMetadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata"></a>

```java
public java.lang.String getCrossProjectMetadata();
```

- *Type:* java.lang.String

Determines whether to include cross project annotations in the logs.

This field is available only for organization configurations. If not
specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED.
Possible values:
CROSS_PROJECT_METADATA_ENABLED
CROSS_PROJECT_METADATA_DISABLED Possible values: ["CROSS_PROJECT_METADATA_ENABLED", "CROSS_PROJECT_METADATA_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#cross_project_metadata NetworkManagementOrganizationVpcFlowLogsConfig#cross_project_metadata}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#description NetworkManagementOrganizationVpcFlowLogsConfig#description}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr"></a>

```java
public java.lang.String getFilterExpr();
```

- *Type:* java.lang.String

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#filter_expr NetworkManagementOrganizationVpcFlowLogsConfig#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling"></a>

```java
public java.lang.Number getFlowSampling();
```

- *Type:* java.lang.Number

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#flow_sampling NetworkManagementOrganizationVpcFlowLogsConfig#flow_sampling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels to represent the user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#labels NetworkManagementOrganizationVpcFlowLogsConfig#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata NetworkManagementOrganizationVpcFlowLogsConfig#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields"></a>

```java
public java.util.List<java.lang.String> getMetadataFields();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata_fields NetworkManagementOrganizationVpcFlowLogsConfig#metadata_fields}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#state NetworkManagementOrganizationVpcFlowLogsConfig#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts"></a>

```java
public NetworkManagementOrganizationVpcFlowLogsConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#timeouts NetworkManagementOrganizationVpcFlowLogsConfig#timeouts}

---

### NetworkManagementOrganizationVpcFlowLogsConfigTimeouts <a name="NetworkManagementOrganizationVpcFlowLogsConfigTimeouts" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_management_organization_vpc_flow_logs_config.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts;

NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#create NetworkManagementOrganizationVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#delete NetworkManagementOrganizationVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#update NetworkManagementOrganizationVpcFlowLogsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#create NetworkManagementOrganizationVpcFlowLogsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#delete NetworkManagementOrganizationVpcFlowLogsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_management_organization_vpc_flow_logs_config#update NetworkManagementOrganizationVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference <a name="NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_management_organization_vpc_flow_logs_config.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference;

new NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkManagementOrganizationVpcFlowLogsConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkManagementOrganizationVpcFlowLogsConfig.NetworkManagementOrganizationVpcFlowLogsConfigTimeouts">NetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---



