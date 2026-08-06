# `networkConnectivityGatewayAdvertisedRoute` Submodule <a name="`networkConnectivityGatewayAdvertisedRoute` Submodule" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityGatewayAdvertisedRoute <a name="NetworkConnectivityGatewayAdvertisedRoute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route google_network_connectivity_gateway_advertised_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer"></a>

```java
import io.cdktn.providers.google.network_connectivity_gateway_advertised_route.NetworkConnectivityGatewayAdvertisedRoute;

NetworkConnectivityGatewayAdvertisedRoute.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .spoke(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipRange(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .recipient(java.lang.String)
//  .timeouts(NetworkConnectivityGatewayAdvertisedRouteTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the gateway advertised route. Route names must be unique. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.spoke">spoke</a></code> | <code>java.lang.String</code> | The name of the spoke. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of the gateway advertised route. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#id NetworkConnectivityGatewayAdvertisedRoute#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.ipRange">ipRange</a></code> | <code>java.lang.String</code> | This route's advertised IP address range. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this advertised route. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#project NetworkConnectivityGatewayAdvertisedRoute#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.recipient">recipient</a></code> | <code>java.lang.String</code> | the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"]. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#location NetworkConnectivityGatewayAdvertisedRoute#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the gateway advertised route. Route names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#name NetworkConnectivityGatewayAdvertisedRoute#name}

---

##### `spoke`<sup>Required</sup> <a name="spoke" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.spoke"></a>

- *Type:* java.lang.String

The name of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#spoke NetworkConnectivityGatewayAdvertisedRoute#spoke}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#deletion_policy NetworkConnectivityGatewayAdvertisedRoute#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of the gateway advertised route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#description NetworkConnectivityGatewayAdvertisedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#id NetworkConnectivityGatewayAdvertisedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.ipRange"></a>

- *Type:* java.lang.String

This route's advertised IP address range.

Must be a valid CIDR-formatted prefix.
If an IP address is provided without a subnet mask, it is interpreted as, for IPv4, a /32 singular IP address range, and, for IPv6, /128

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#ip_range NetworkConnectivityGatewayAdvertisedRoute#ip_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#labels NetworkConnectivityGatewayAdvertisedRoute#labels}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

The priority of this advertised route.

You can choose a value from 0 to 65335.
If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#priority NetworkConnectivityGatewayAdvertisedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#project NetworkConnectivityGatewayAdvertisedRoute#project}.

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.recipient"></a>

- *Type:* java.lang.String

the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#recipient NetworkConnectivityGatewayAdvertisedRoute#recipient}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#timeouts NetworkConnectivityGatewayAdvertisedRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetIpRange">resetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetRecipient">resetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.putTimeouts"></a>

```java
public void putTimeouts(NetworkConnectivityGatewayAdvertisedRouteTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetId"></a>

```java
public void resetId()
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetIpRange"></a>

```java
public void resetIpRange()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetProject"></a>

```java
public void resetProject()
```

##### `resetRecipient` <a name="resetRecipient" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetRecipient"></a>

```java
public void resetRecipient()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkConnectivityGatewayAdvertisedRoute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isConstruct"></a>

```java
import io.cdktn.providers.google.network_connectivity_gateway_advertised_route.NetworkConnectivityGatewayAdvertisedRoute;

NetworkConnectivityGatewayAdvertisedRoute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_connectivity_gateway_advertised_route.NetworkConnectivityGatewayAdvertisedRoute;

NetworkConnectivityGatewayAdvertisedRoute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_connectivity_gateway_advertised_route.NetworkConnectivityGatewayAdvertisedRoute;

NetworkConnectivityGatewayAdvertisedRoute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_connectivity_gateway_advertised_route.NetworkConnectivityGatewayAdvertisedRoute;

NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkConnectivityGatewayAdvertisedRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkConnectivityGatewayAdvertisedRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkConnectivityGatewayAdvertisedRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityGatewayAdvertisedRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference">NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRangeInput">ipRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipientInput">recipientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spokeInput">spokeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipient">recipient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spoke">spoke</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeouts"></a>

```java
public NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference">NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRangeInput"></a>

```java
public java.lang.String getIpRangeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `recipientInput`<sup>Optional</sup> <a name="recipientInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipientInput"></a>

```java
public java.lang.String getRecipientInput();
```

- *Type:* java.lang.String

---

##### `spokeInput`<sup>Optional</sup> <a name="spokeInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spokeInput"></a>

```java
public java.lang.String getSpokeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeoutsInput"></a>

```java
public IResolvable|NetworkConnectivityGatewayAdvertisedRouteTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipient"></a>

```java
public java.lang.String getRecipient();
```

- *Type:* java.lang.String

---

##### `spoke`<sup>Required</sup> <a name="spoke" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spoke"></a>

```java
public java.lang.String getSpoke();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityGatewayAdvertisedRouteConfig <a name="NetworkConnectivityGatewayAdvertisedRouteConfig" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_connectivity_gateway_advertised_route.NetworkConnectivityGatewayAdvertisedRouteConfig;

NetworkConnectivityGatewayAdvertisedRouteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .spoke(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipRange(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .recipient(java.lang.String)
//  .timeouts(NetworkConnectivityGatewayAdvertisedRouteTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the gateway advertised route. Route names must be unique. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.spoke">spoke</a></code> | <code>java.lang.String</code> | The name of the spoke. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of the gateway advertised route. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#id NetworkConnectivityGatewayAdvertisedRoute#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | This route's advertised IP address range. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this advertised route. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#project NetworkConnectivityGatewayAdvertisedRoute#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.recipient">recipient</a></code> | <code>java.lang.String</code> | the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"]. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#location NetworkConnectivityGatewayAdvertisedRoute#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the gateway advertised route. Route names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#name NetworkConnectivityGatewayAdvertisedRoute#name}

---

##### `spoke`<sup>Required</sup> <a name="spoke" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.spoke"></a>

```java
public java.lang.String getSpoke();
```

- *Type:* java.lang.String

The name of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#spoke NetworkConnectivityGatewayAdvertisedRoute#spoke}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#deletion_policy NetworkConnectivityGatewayAdvertisedRoute#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of the gateway advertised route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#description NetworkConnectivityGatewayAdvertisedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#id NetworkConnectivityGatewayAdvertisedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

This route's advertised IP address range.

Must be a valid CIDR-formatted prefix.
If an IP address is provided without a subnet mask, it is interpreted as, for IPv4, a /32 singular IP address range, and, for IPv6, /128

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#ip_range NetworkConnectivityGatewayAdvertisedRoute#ip_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#labels NetworkConnectivityGatewayAdvertisedRoute#labels}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of this advertised route.

You can choose a value from 0 to 65335.
If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#priority NetworkConnectivityGatewayAdvertisedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#project NetworkConnectivityGatewayAdvertisedRoute#project}.

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.recipient"></a>

```java
public java.lang.String getRecipient();
```

- *Type:* java.lang.String

the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#recipient NetworkConnectivityGatewayAdvertisedRoute#recipient}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.timeouts"></a>

```java
public NetworkConnectivityGatewayAdvertisedRouteTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#timeouts NetworkConnectivityGatewayAdvertisedRoute#timeouts}

---

### NetworkConnectivityGatewayAdvertisedRouteTimeouts <a name="NetworkConnectivityGatewayAdvertisedRouteTimeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_connectivity_gateway_advertised_route.NetworkConnectivityGatewayAdvertisedRouteTimeouts;

NetworkConnectivityGatewayAdvertisedRouteTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#create NetworkConnectivityGatewayAdvertisedRoute#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#delete NetworkConnectivityGatewayAdvertisedRoute#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#update NetworkConnectivityGatewayAdvertisedRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#create NetworkConnectivityGatewayAdvertisedRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#delete NetworkConnectivityGatewayAdvertisedRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#update NetworkConnectivityGatewayAdvertisedRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference <a name="NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_connectivity_gateway_advertised_route.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference;

new NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkConnectivityGatewayAdvertisedRouteTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---



