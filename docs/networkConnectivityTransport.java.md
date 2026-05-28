# `networkConnectivityTransport` Submodule <a name="`networkConnectivityTransport` Submodule" id="@cdktn/provider-google.networkConnectivityTransport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityTransport <a name="NetworkConnectivityTransport" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport google_network_connectivity_transport}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer"></a>

```java
import io.cdktn.providers.google.network_connectivity_transport.NetworkConnectivityTransport;

NetworkConnectivityTransport.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .network(java.lang.String)
    .region(java.lang.String)
    .remoteProfile(java.lang.String)
//  .advertisedRoutes(java.util.List<java.lang.String>)
//  .bandwidth(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mtuLimit(java.lang.Number)
//  .project(java.lang.String)
//  .providedActivationKey(java.lang.String)
//  .remoteAccountId(java.lang.String)
//  .stackType(java.lang.String)
//  .timeouts(NetworkConnectivityTransportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource, see google.aip.dev/122 for resource naming. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Resource URL of the Network that will be peered with this Transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.remoteProfile">remoteProfile</a></code> | <code>java.lang.String</code> | Resource URL of the remoteTransportProfile that this Transport is connecting to. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.advertisedRoutes">advertisedRoutes</a></code> | <code>java.util.List<java.lang.String></code> | List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.mtuLimit">mtuLimit</a></code> | <code>java.lang.Number</code> | [Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.providedActivationKey">providedActivationKey</a></code> | <code>java.lang.String</code> | Key used for establishing a connection with the remote transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.remoteAccountId">remoteAccountId</a></code> | <code>java.lang.String</code> | The user supplied account id for the CSP associated with the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.stackType">stackType</a></code> | <code>java.lang.String</code> | IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource, see google.aip.dev/122 for resource naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#name NetworkConnectivityTransport#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Resource URL of the Network that will be peered with this Transport.

This field must be provided during resource creation and cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#network NetworkConnectivityTransport#network}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of this resource.

This is required to construct the resource name, but is not sent to the API since the region is already contained in the parent field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#region NetworkConnectivityTransport#region}

---

##### `remoteProfile`<sup>Required</sup> <a name="remoteProfile" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.remoteProfile"></a>

- *Type:* java.lang.String

Resource URL of the remoteTransportProfile that this Transport is connecting to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#remote_profile NetworkConnectivityTransport#remote_profile}

---

##### `advertisedRoutes`<sup>Optional</sup> <a name="advertisedRoutes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.advertisedRoutes"></a>

- *Type:* java.util.List<java.lang.String>

List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#advertised_routes NetworkConnectivityTransport#advertised_routes}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.bandwidth"></a>

- *Type:* java.lang.String

Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#bandwidth NetworkConnectivityTransport#bandwidth}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#deletion_policy NetworkConnectivityTransport#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#description NetworkConnectivityTransport#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#labels NetworkConnectivityTransport#labels}

---

##### `mtuLimit`<sup>Optional</sup> <a name="mtuLimit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.mtuLimit"></a>

- *Type:* java.lang.Number

[Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#mtu_limit NetworkConnectivityTransport#mtu_limit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}.

---

##### `providedActivationKey`<sup>Optional</sup> <a name="providedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.providedActivationKey"></a>

- *Type:* java.lang.String

Key used for establishing a connection with the remote transport.

This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#provided_activation_key NetworkConnectivityTransport#provided_activation_key}

---

##### `remoteAccountId`<sup>Optional</sup> <a name="remoteAccountId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.remoteAccountId"></a>

- *Type:* java.lang.String

The user supplied account id for the CSP associated with the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#remote_account_id NetworkConnectivityTransport#remote_account_id}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.stackType"></a>

- *Type:* java.lang.String

IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#stack_type NetworkConnectivityTransport#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#timeouts NetworkConnectivityTransport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetAdvertisedRoutes">resetAdvertisedRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetMtuLimit">resetMtuLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProvidedActivationKey">resetProvidedActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetRemoteAccountId">resetRemoteAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts"></a>

```java
public void putTimeouts(NetworkConnectivityTransportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

---

##### `resetAdvertisedRoutes` <a name="resetAdvertisedRoutes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetAdvertisedRoutes"></a>

```java
public void resetAdvertisedRoutes()
```

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetBandwidth"></a>

```java
public void resetBandwidth()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMtuLimit` <a name="resetMtuLimit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetMtuLimit"></a>

```java
public void resetMtuLimit()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProject"></a>

```java
public void resetProject()
```

##### `resetProvidedActivationKey` <a name="resetProvidedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProvidedActivationKey"></a>

```java
public void resetProvidedActivationKey()
```

##### `resetRemoteAccountId` <a name="resetRemoteAccountId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetRemoteAccountId"></a>

```java
public void resetRemoteAccountId()
```

##### `resetStackType` <a name="resetStackType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetStackType"></a>

```java
public void resetStackType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkConnectivityTransport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct"></a>

```java
import io.cdktn.providers.google.network_connectivity_transport.NetworkConnectivityTransport;

NetworkConnectivityTransport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_connectivity_transport.NetworkConnectivityTransport;

NetworkConnectivityTransport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_connectivity_transport.NetworkConnectivityTransport;

NetworkConnectivityTransport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_connectivity_transport.NetworkConnectivityTransport;

NetworkConnectivityTransport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkConnectivityTransport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkConnectivityTransport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkConnectivityTransport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkConnectivityTransport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityTransport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.generatedActivationKey">generatedActivationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.peeringNetwork">peeringNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference">NetworkConnectivityTransportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutesInput">advertisedRoutesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidthInput">bandwidthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimitInput">mtuLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKeyInput">providedActivationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountIdInput">remoteAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfileInput">remoteProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackTypeInput">stackTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutes">advertisedRoutes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimit">mtuLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKey">providedActivationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountId">remoteAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfile">remoteProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `generatedActivationKey`<sup>Required</sup> <a name="generatedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.generatedActivationKey"></a>

```java
public java.lang.String getGeneratedActivationKey();
```

- *Type:* java.lang.String

---

##### `peeringNetwork`<sup>Required</sup> <a name="peeringNetwork" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.peeringNetwork"></a>

```java
public java.lang.String getPeeringNetwork();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeouts"></a>

```java
public NetworkConnectivityTransportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference">NetworkConnectivityTransportTimeoutsOutputReference</a>

---

##### `advertisedRoutesInput`<sup>Optional</sup> <a name="advertisedRoutesInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutesInput"></a>

```java
public java.util.List<java.lang.String> getAdvertisedRoutesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidthInput"></a>

```java
public java.lang.String getBandwidthInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mtuLimitInput`<sup>Optional</sup> <a name="mtuLimitInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimitInput"></a>

```java
public java.lang.Number getMtuLimitInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `providedActivationKeyInput`<sup>Optional</sup> <a name="providedActivationKeyInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKeyInput"></a>

```java
public java.lang.String getProvidedActivationKeyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `remoteAccountIdInput`<sup>Optional</sup> <a name="remoteAccountIdInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountIdInput"></a>

```java
public java.lang.String getRemoteAccountIdInput();
```

- *Type:* java.lang.String

---

##### `remoteProfileInput`<sup>Optional</sup> <a name="remoteProfileInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfileInput"></a>

```java
public java.lang.String getRemoteProfileInput();
```

- *Type:* java.lang.String

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackTypeInput"></a>

```java
public java.lang.String getStackTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeoutsInput"></a>

```java
public IResolvable|NetworkConnectivityTransportTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

---

##### `advertisedRoutes`<sup>Required</sup> <a name="advertisedRoutes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutes"></a>

```java
public java.util.List<java.lang.String> getAdvertisedRoutes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidth"></a>

```java
public java.lang.String getBandwidth();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mtuLimit`<sup>Required</sup> <a name="mtuLimit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimit"></a>

```java
public java.lang.Number getMtuLimit();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `providedActivationKey`<sup>Required</sup> <a name="providedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKey"></a>

```java
public java.lang.String getProvidedActivationKey();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `remoteAccountId`<sup>Required</sup> <a name="remoteAccountId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountId"></a>

```java
public java.lang.String getRemoteAccountId();
```

- *Type:* java.lang.String

---

##### `remoteProfile`<sup>Required</sup> <a name="remoteProfile" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfile"></a>

```java
public java.lang.String getRemoteProfile();
```

- *Type:* java.lang.String

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityTransportConfig <a name="NetworkConnectivityTransportConfig" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_connectivity_transport.NetworkConnectivityTransportConfig;

NetworkConnectivityTransportConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .network(java.lang.String)
    .region(java.lang.String)
    .remoteProfile(java.lang.String)
//  .advertisedRoutes(java.util.List<java.lang.String>)
//  .bandwidth(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mtuLimit(java.lang.Number)
//  .project(java.lang.String)
//  .providedActivationKey(java.lang.String)
//  .remoteAccountId(java.lang.String)
//  .stackType(java.lang.String)
//  .timeouts(NetworkConnectivityTransportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource, see google.aip.dev/122 for resource naming. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.network">network</a></code> | <code>java.lang.String</code> | Resource URL of the Network that will be peered with this Transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteProfile">remoteProfile</a></code> | <code>java.lang.String</code> | Resource URL of the remoteTransportProfile that this Transport is connecting to. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.advertisedRoutes">advertisedRoutes</a></code> | <code>java.util.List<java.lang.String></code> | List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.mtuLimit">mtuLimit</a></code> | <code>java.lang.Number</code> | [Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.providedActivationKey">providedActivationKey</a></code> | <code>java.lang.String</code> | Key used for establishing a connection with the remote transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteAccountId">remoteAccountId</a></code> | <code>java.lang.String</code> | The user supplied account id for the CSP associated with the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.stackType">stackType</a></code> | <code>java.lang.String</code> | IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource, see google.aip.dev/122 for resource naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#name NetworkConnectivityTransport#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Resource URL of the Network that will be peered with this Transport.

This field must be provided during resource creation and cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#network NetworkConnectivityTransport#network}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of this resource.

This is required to construct the resource name, but is not sent to the API since the region is already contained in the parent field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#region NetworkConnectivityTransport#region}

---

##### `remoteProfile`<sup>Required</sup> <a name="remoteProfile" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteProfile"></a>

```java
public java.lang.String getRemoteProfile();
```

- *Type:* java.lang.String

Resource URL of the remoteTransportProfile that this Transport is connecting to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#remote_profile NetworkConnectivityTransport#remote_profile}

---

##### `advertisedRoutes`<sup>Optional</sup> <a name="advertisedRoutes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.advertisedRoutes"></a>

```java
public java.util.List<java.lang.String> getAdvertisedRoutes();
```

- *Type:* java.util.List<java.lang.String>

List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#advertised_routes NetworkConnectivityTransport#advertised_routes}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.bandwidth"></a>

```java
public java.lang.String getBandwidth();
```

- *Type:* java.lang.String

Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#bandwidth NetworkConnectivityTransport#bandwidth}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#deletion_policy NetworkConnectivityTransport#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#description NetworkConnectivityTransport#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#labels NetworkConnectivityTransport#labels}

---

##### `mtuLimit`<sup>Optional</sup> <a name="mtuLimit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.mtuLimit"></a>

```java
public java.lang.Number getMtuLimit();
```

- *Type:* java.lang.Number

[Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#mtu_limit NetworkConnectivityTransport#mtu_limit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}.

---

##### `providedActivationKey`<sup>Optional</sup> <a name="providedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.providedActivationKey"></a>

```java
public java.lang.String getProvidedActivationKey();
```

- *Type:* java.lang.String

Key used for establishing a connection with the remote transport.

This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#provided_activation_key NetworkConnectivityTransport#provided_activation_key}

---

##### `remoteAccountId`<sup>Optional</sup> <a name="remoteAccountId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteAccountId"></a>

```java
public java.lang.String getRemoteAccountId();
```

- *Type:* java.lang.String

The user supplied account id for the CSP associated with the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#remote_account_id NetworkConnectivityTransport#remote_account_id}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#stack_type NetworkConnectivityTransport#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.timeouts"></a>

```java
public NetworkConnectivityTransportTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#timeouts NetworkConnectivityTransport#timeouts}

---

### NetworkConnectivityTransportTimeouts <a name="NetworkConnectivityTransportTimeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_connectivity_transport.NetworkConnectivityTransportTimeouts;

NetworkConnectivityTransportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#create NetworkConnectivityTransport#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#delete NetworkConnectivityTransport#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#update NetworkConnectivityTransport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#create NetworkConnectivityTransport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#delete NetworkConnectivityTransport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#update NetworkConnectivityTransport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityTransportTimeoutsOutputReference <a name="NetworkConnectivityTransportTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_connectivity_transport.NetworkConnectivityTransportTimeoutsOutputReference;

new NetworkConnectivityTransportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkConnectivityTransportTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

---



