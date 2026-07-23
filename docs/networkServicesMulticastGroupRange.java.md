# `networkServicesMulticastGroupRange` Submodule <a name="`networkServicesMulticastGroupRange` Submodule" id="@cdktn/provider-google.networkServicesMulticastGroupRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastGroupRange <a name="NetworkServicesMulticastGroupRange" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range google_network_services_multicast_group_range}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRange;

NetworkServicesMulticastGroupRange.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .multicastDomain(java.lang.String)
    .multicastGroupRangeId(java.lang.String)
    .reservedInternalRange(java.lang.String)
//  .consumerAcceptList(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .distributionScope(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .logConfig(NetworkServicesMulticastGroupRangeLogConfig)
//  .project(java.lang.String)
//  .requireExplicitAccept(java.lang.Boolean|IResolvable)
//  .timeouts(NetworkServicesMulticastGroupRangeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.multicastDomain">multicastDomain</a></code> | <code>java.lang.String</code> | The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.multicastGroupRangeId">multicastGroupRangeId</a></code> | <code>java.lang.String</code> | A unique name for the multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | The resource name of the internal range reserved for this multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.consumerAcceptList">consumerAcceptList</a></code> | <code>java.util.List<java.lang.String></code> | A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.distributionScope">distributionScope</a></code> | <code>java.lang.String</code> | Multicast group range's distribution scope. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#id NetworkServicesMulticastGroupRange#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#project NetworkServicesMulticastGroupRange#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.requireExplicitAccept">requireExplicitAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether an empty consumer_accept_list will deny all consumer projects. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#location NetworkServicesMulticastGroupRange#location}

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.multicastDomain"></a>

- *Type:* java.lang.String

The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#multicast_domain NetworkServicesMulticastGroupRange#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastGroupRangeId`<sup>Required</sup> <a name="multicastGroupRangeId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.multicastGroupRangeId"></a>

- *Type:* java.lang.String

A unique name for the multicast group range.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#multicast_group_range_id NetworkServicesMulticastGroupRange#multicast_group_range_id}

---

##### `reservedInternalRange`<sup>Required</sup> <a name="reservedInternalRange" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.reservedInternalRange"></a>

- *Type:* java.lang.String

The resource name of the internal range reserved for this multicast group range.

The internal range must be a Class D address (224.0.0.0 to 239.255.255.255)
and have a prefix length >= 23.

Use the following format:
'projects/* /locations/global/internalRanges/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#reserved_internal_range NetworkServicesMulticastGroupRange#reserved_internal_range}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `consumerAcceptList`<sup>Optional</sup> <a name="consumerAcceptList" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.consumerAcceptList"></a>

- *Type:* java.util.List<java.lang.String>

A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange.

The
project can be specified using its project ID or project number. If left
empty, then all consumer projects are allowed (unless
require_explicit_accept is set to true) once they have VPC networks
associated to the multicast domain. The current max length of the accept
list is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#consumer_accept_list NetworkServicesMulticastGroupRange#consumer_accept_list}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#deletion_policy NetworkServicesMulticastGroupRange#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional text description of the multicast group range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#description NetworkServicesMulticastGroupRange#description}

---

##### `distributionScope`<sup>Optional</sup> <a name="distributionScope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.distributionScope"></a>

- *Type:* java.lang.String

Multicast group range's distribution scope.

Intra-zone or intra-region
cross-zone is supported, with default value being intra-region. Cross
region distribution is not supported.
Possible values:
INTRA_ZONE
INTRA_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#distribution_scope NetworkServicesMulticastGroupRange#distribution_scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#id NetworkServicesMulticastGroupRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#labels NetworkServicesMulticastGroupRange#labels}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#log_config NetworkServicesMulticastGroupRange#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#project NetworkServicesMulticastGroupRange#project}.

---

##### `requireExplicitAccept`<sup>Optional</sup> <a name="requireExplicitAccept" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.requireExplicitAccept"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether an empty consumer_accept_list will deny all consumer projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#require_explicit_accept NetworkServicesMulticastGroupRange#require_explicit_accept}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#timeouts NetworkServicesMulticastGroupRange#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetConsumerAcceptList">resetConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDistributionScope">resetDistributionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetRequireExplicitAccept">resetRequireExplicitAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putLogConfig"></a>

```java
public void putLogConfig(NetworkServicesMulticastGroupRangeLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesMulticastGroupRangeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a>

---

##### `resetConsumerAcceptList` <a name="resetConsumerAcceptList" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetConsumerAcceptList"></a>

```java
public void resetConsumerAcceptList()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDistributionScope` <a name="resetDistributionScope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetDistributionScope"></a>

```java
public void resetDistributionScope()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetProject"></a>

```java
public void resetProject()
```

##### `resetRequireExplicitAccept` <a name="resetRequireExplicitAccept" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetRequireExplicitAccept"></a>

```java
public void resetRequireExplicitAccept()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastGroupRange resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isConstruct"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRange;

NetworkServicesMulticastGroupRange.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRange;

NetworkServicesMulticastGroupRange.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRange;

NetworkServicesMulticastGroupRange.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRange;

NetworkServicesMulticastGroupRange.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesMulticastGroupRange.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkServicesMulticastGroupRange resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesMulticastGroupRange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesMulticastGroupRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastGroupRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference">NetworkServicesMulticastGroupRangeLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList">NetworkServicesMulticastGroupRangeStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference">NetworkServicesMulticastGroupRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptListInput">consumerAcceptListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScopeInput">distributionScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomainInput">multicastDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeIdInput">multicastGroupRangeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAcceptInput">requireExplicitAcceptInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRangeInput">reservedInternalRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptList">consumerAcceptList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScope">distributionScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomain">multicastDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeId">multicastGroupRangeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAccept">requireExplicitAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfig"></a>

```java
public NetworkServicesMulticastGroupRangeLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference">NetworkServicesMulticastGroupRangeLogConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.state"></a>

```java
public NetworkServicesMulticastGroupRangeStateList getState();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList">NetworkServicesMulticastGroupRangeStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeouts"></a>

```java
public NetworkServicesMulticastGroupRangeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference">NetworkServicesMulticastGroupRangeTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `consumerAcceptListInput`<sup>Optional</sup> <a name="consumerAcceptListInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptListInput"></a>

```java
public java.util.List<java.lang.String> getConsumerAcceptListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `distributionScopeInput`<sup>Optional</sup> <a name="distributionScopeInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScopeInput"></a>

```java
public java.lang.String getDistributionScopeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.logConfigInput"></a>

```java
public NetworkServicesMulticastGroupRangeLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

---

##### `multicastDomainInput`<sup>Optional</sup> <a name="multicastDomainInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomainInput"></a>

```java
public java.lang.String getMulticastDomainInput();
```

- *Type:* java.lang.String

---

##### `multicastGroupRangeIdInput`<sup>Optional</sup> <a name="multicastGroupRangeIdInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeIdInput"></a>

```java
public java.lang.String getMulticastGroupRangeIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `requireExplicitAcceptInput`<sup>Optional</sup> <a name="requireExplicitAcceptInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAcceptInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireExplicitAcceptInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reservedInternalRangeInput`<sup>Optional</sup> <a name="reservedInternalRangeInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRangeInput"></a>

```java
public java.lang.String getReservedInternalRangeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.timeoutsInput"></a>

```java
public IResolvable|NetworkServicesMulticastGroupRangeTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a>

---

##### `consumerAcceptList`<sup>Required</sup> <a name="consumerAcceptList" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.consumerAcceptList"></a>

```java
public java.util.List<java.lang.String> getConsumerAcceptList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `distributionScope`<sup>Required</sup> <a name="distributionScope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.distributionScope"></a>

```java
public java.lang.String getDistributionScope();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastDomain"></a>

```java
public java.lang.String getMulticastDomain();
```

- *Type:* java.lang.String

---

##### `multicastGroupRangeId`<sup>Required</sup> <a name="multicastGroupRangeId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.multicastGroupRangeId"></a>

```java
public java.lang.String getMulticastGroupRangeId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `requireExplicitAccept`<sup>Required</sup> <a name="requireExplicitAccept" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.requireExplicitAccept"></a>

```java
public java.lang.Boolean|IResolvable getRequireExplicitAccept();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reservedInternalRange`<sup>Required</sup> <a name="reservedInternalRange" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.reservedInternalRange"></a>

```java
public java.lang.String getReservedInternalRange();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRange.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastGroupRangeConfig <a name="NetworkServicesMulticastGroupRangeConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRangeConfig;

NetworkServicesMulticastGroupRangeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .multicastDomain(java.lang.String)
    .multicastGroupRangeId(java.lang.String)
    .reservedInternalRange(java.lang.String)
//  .consumerAcceptList(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .distributionScope(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .logConfig(NetworkServicesMulticastGroupRangeLogConfig)
//  .project(java.lang.String)
//  .requireExplicitAccept(java.lang.Boolean|IResolvable)
//  .timeouts(NetworkServicesMulticastGroupRangeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastDomain">multicastDomain</a></code> | <code>java.lang.String</code> | The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastGroupRangeId">multicastGroupRangeId</a></code> | <code>java.lang.String</code> | A unique name for the multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | The resource name of the internal range reserved for this multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.consumerAcceptList">consumerAcceptList</a></code> | <code>java.util.List<java.lang.String></code> | A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional text description of the multicast group range. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.distributionScope">distributionScope</a></code> | <code>java.lang.String</code> | Multicast group range's distribution scope. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#id NetworkServicesMulticastGroupRange#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#project NetworkServicesMulticastGroupRange#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.requireExplicitAccept">requireExplicitAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether an empty consumer_accept_list will deny all consumer projects. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#location NetworkServicesMulticastGroupRange#location}

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastDomain"></a>

```java
public java.lang.String getMulticastDomain();
```

- *Type:* java.lang.String

The resource name of the multicast domain in which to create this multicast group range. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#multicast_domain NetworkServicesMulticastGroupRange#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastGroupRangeId`<sup>Required</sup> <a name="multicastGroupRangeId" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.multicastGroupRangeId"></a>

```java
public java.lang.String getMulticastGroupRangeId();
```

- *Type:* java.lang.String

A unique name for the multicast group range.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#multicast_group_range_id NetworkServicesMulticastGroupRange#multicast_group_range_id}

---

##### `reservedInternalRange`<sup>Required</sup> <a name="reservedInternalRange" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.reservedInternalRange"></a>

```java
public java.lang.String getReservedInternalRange();
```

- *Type:* java.lang.String

The resource name of the internal range reserved for this multicast group range.

The internal range must be a Class D address (224.0.0.0 to 239.255.255.255)
and have a prefix length >= 23.

Use the following format:
'projects/* /locations/global/internalRanges/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#reserved_internal_range NetworkServicesMulticastGroupRange#reserved_internal_range}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `consumerAcceptList`<sup>Optional</sup> <a name="consumerAcceptList" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.consumerAcceptList"></a>

```java
public java.util.List<java.lang.String> getConsumerAcceptList();
```

- *Type:* java.util.List<java.lang.String>

A list of consumer projects that are allowed to subscribe to the multicast IP addresses within the range defined by this MulticastGroupRange.

The
project can be specified using its project ID or project number. If left
empty, then all consumer projects are allowed (unless
require_explicit_accept is set to true) once they have VPC networks
associated to the multicast domain. The current max length of the accept
list is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#consumer_accept_list NetworkServicesMulticastGroupRange#consumer_accept_list}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#deletion_policy NetworkServicesMulticastGroupRange#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional text description of the multicast group range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#description NetworkServicesMulticastGroupRange#description}

---

##### `distributionScope`<sup>Optional</sup> <a name="distributionScope" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.distributionScope"></a>

```java
public java.lang.String getDistributionScope();
```

- *Type:* java.lang.String

Multicast group range's distribution scope.

Intra-zone or intra-region
cross-zone is supported, with default value being intra-region. Cross
region distribution is not supported.
Possible values:
INTRA_ZONE
INTRA_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#distribution_scope NetworkServicesMulticastGroupRange#distribution_scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#id NetworkServicesMulticastGroupRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#labels NetworkServicesMulticastGroupRange#labels}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.logConfig"></a>

```java
public NetworkServicesMulticastGroupRangeLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#log_config NetworkServicesMulticastGroupRange#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#project NetworkServicesMulticastGroupRange#project}.

---

##### `requireExplicitAccept`<sup>Optional</sup> <a name="requireExplicitAccept" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.requireExplicitAccept"></a>

```java
public java.lang.Boolean|IResolvable getRequireExplicitAccept();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether an empty consumer_accept_list will deny all consumer projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#require_explicit_accept NetworkServicesMulticastGroupRange#require_explicit_accept}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeConfig.property.timeouts"></a>

```java
public NetworkServicesMulticastGroupRangeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#timeouts NetworkServicesMulticastGroupRange#timeouts}

---

### NetworkServicesMulticastGroupRangeLogConfig <a name="NetworkServicesMulticastGroupRangeLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRangeLogConfig;

NetworkServicesMulticastGroupRangeLogConfig.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable logging or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#enabled NetworkServicesMulticastGroupRange#enabled}

---

### NetworkServicesMulticastGroupRangeState <a name="NetworkServicesMulticastGroupRangeState" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRangeState;

NetworkServicesMulticastGroupRangeState.builder()
    .build();
```


### NetworkServicesMulticastGroupRangeTimeouts <a name="NetworkServicesMulticastGroupRangeTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRangeTimeouts;

NetworkServicesMulticastGroupRangeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#create NetworkServicesMulticastGroupRange#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#delete NetworkServicesMulticastGroupRange#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#update NetworkServicesMulticastGroupRange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#create NetworkServicesMulticastGroupRange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#delete NetworkServicesMulticastGroupRange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_multicast_group_range#update NetworkServicesMulticastGroupRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastGroupRangeLogConfigOutputReference <a name="NetworkServicesMulticastGroupRangeLogConfigOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRangeLogConfigOutputReference;

new NetworkServicesMulticastGroupRangeLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfigOutputReference.property.internalValue"></a>

```java
public NetworkServicesMulticastGroupRangeLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeLogConfig">NetworkServicesMulticastGroupRangeLogConfig</a>

---


### NetworkServicesMulticastGroupRangeStateList <a name="NetworkServicesMulticastGroupRangeStateList" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRangeStateList;

new NetworkServicesMulticastGroupRangeStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.get"></a>

```java
public NetworkServicesMulticastGroupRangeStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkServicesMulticastGroupRangeStateOutputReference <a name="NetworkServicesMulticastGroupRangeStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRangeStateOutputReference;

new NetworkServicesMulticastGroupRangeStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState">NetworkServicesMulticastGroupRangeState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeStateOutputReference.property.internalValue"></a>

```java
public NetworkServicesMulticastGroupRangeState getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeState">NetworkServicesMulticastGroupRangeState</a>

---


### NetworkServicesMulticastGroupRangeTimeoutsOutputReference <a name="NetworkServicesMulticastGroupRangeTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_multicast_group_range.NetworkServicesMulticastGroupRangeTimeoutsOutputReference;

new NetworkServicesMulticastGroupRangeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkServicesMulticastGroupRangeTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastGroupRange.NetworkServicesMulticastGroupRangeTimeouts">NetworkServicesMulticastGroupRangeTimeouts</a>

---



