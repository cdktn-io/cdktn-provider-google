# `vmwareengineNetworkPeering` Submodule <a name="`vmwareengineNetworkPeering` Submodule" id="@cdktn/provider-google.vmwareengineNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineNetworkPeering <a name="VmwareengineNetworkPeering" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering google_vmwareengine_network_peering}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_network_peering.VmwareengineNetworkPeering;

VmwareengineNetworkPeering.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .peerNetwork(java.lang.String)
    .peerNetworkType(java.lang.String)
    .vmwareEngineNetwork(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .exportCustomRoutes(java.lang.Boolean|IResolvable)
//  .exportCustomRoutesWithPublicIp(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .importCustomRoutes(java.lang.Boolean|IResolvable)
//  .importCustomRoutesWithPublicIp(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .timeouts(VmwareengineNetworkPeeringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the Network Peering. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.peerNetwork">peerNetwork</a></code> | <code>java.lang.String</code> | The relative resource name of the network to peer with a standard VMware Engine network. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.peerNetworkType">peerNetworkType</a></code> | <code>java.lang.String</code> | The type of the network to peer with the VMware Engine network. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>java.lang.String</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-provided description for this network peering. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if custom routes are exported to the peered network; false otherwise. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutesWithPublicIp">exportCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if all subnet routes with a public IP address range are exported; false otherwise. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#id VmwareengineNetworkPeering#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.importCustomRoutesWithPublicIp">importCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#project VmwareengineNetworkPeering#project}. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the Network Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#name VmwareengineNetworkPeering#name}

---

##### `peerNetwork`<sup>Required</sup> <a name="peerNetwork" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.peerNetwork"></a>

- *Type:* java.lang.String

The relative resource name of the network to peer with a standard VMware Engine network.

The provided network can be a consumer VPC network or another standard VMware Engine network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#peer_network VmwareengineNetworkPeering#peer_network}

---

##### `peerNetworkType`<sup>Required</sup> <a name="peerNetworkType" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.peerNetworkType"></a>

- *Type:* java.lang.String

The type of the network to peer with the VMware Engine network.

Possible values: ["STANDARD", "VMWARE_ENGINE_NETWORK", "PRIVATE_SERVICES_ACCESS", "NETAPP_CLOUD_VOLUMES", "THIRD_PARTY_SERVICE", "DELL_POWERSCALE", "GOOGLE_CLOUD_NETAPP_VOLUMES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#peer_network_type VmwareengineNetworkPeering#peer_network_type}

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.vmwareEngineNetwork"></a>

- *Type:* java.lang.String

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#vmware_engine_network VmwareengineNetworkPeering#vmware_engine_network}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#deletion_policy VmwareengineNetworkPeering#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-provided description for this network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#description VmwareengineNetworkPeering#description}

---

##### `exportCustomRoutes`<sup>Optional</sup> <a name="exportCustomRoutes" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutes"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if custom routes are exported to the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#export_custom_routes VmwareengineNetworkPeering#export_custom_routes}

---

##### `exportCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="exportCustomRoutesWithPublicIp" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.exportCustomRoutesWithPublicIp"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if all subnet routes with a public IP address range are exported; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#export_custom_routes_with_public_ip VmwareengineNetworkPeering#export_custom_routes_with_public_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#id VmwareengineNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importCustomRoutes`<sup>Optional</sup> <a name="importCustomRoutes" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.importCustomRoutes"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#import_custom_routes VmwareengineNetworkPeering#import_custom_routes}

---

##### `importCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="importCustomRoutesWithPublicIp" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.importCustomRoutesWithPublicIp"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#import_custom_routes_with_public_ip VmwareengineNetworkPeering#import_custom_routes_with_public_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#project VmwareengineNetworkPeering#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#timeouts VmwareengineNetworkPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetExportCustomRoutes">resetExportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetExportCustomRoutesWithPublicIp">resetExportCustomRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetImportCustomRoutes">resetImportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetImportCustomRoutesWithPublicIp">resetImportCustomRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.putTimeouts"></a>

```java
public void putTimeouts(VmwareengineNetworkPeeringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExportCustomRoutes` <a name="resetExportCustomRoutes" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetExportCustomRoutes"></a>

```java
public void resetExportCustomRoutes()
```

##### `resetExportCustomRoutesWithPublicIp` <a name="resetExportCustomRoutesWithPublicIp" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetExportCustomRoutesWithPublicIp"></a>

```java
public void resetExportCustomRoutesWithPublicIp()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetId"></a>

```java
public void resetId()
```

##### `resetImportCustomRoutes` <a name="resetImportCustomRoutes" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetImportCustomRoutes"></a>

```java
public void resetImportCustomRoutes()
```

##### `resetImportCustomRoutesWithPublicIp` <a name="resetImportCustomRoutesWithPublicIp" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetImportCustomRoutesWithPublicIp"></a>

```java
public void resetImportCustomRoutesWithPublicIp()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VmwareengineNetworkPeering resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isConstruct"></a>

```java
import io.cdktn.providers.google.vmwareengine_network_peering.VmwareengineNetworkPeering;

VmwareengineNetworkPeering.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vmwareengine_network_peering.VmwareengineNetworkPeering;

VmwareengineNetworkPeering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vmwareengine_network_peering.VmwareengineNetworkPeering;

VmwareengineNetworkPeering.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vmwareengine_network_peering.VmwareengineNetworkPeering;

VmwareengineNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VmwareengineNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VmwareengineNetworkPeering resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VmwareengineNetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VmwareengineNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VmwareengineNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.stateDetails">stateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference">VmwareengineNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical">vmwareEngineNetworkCanonical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesInput">exportCustomRoutesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIpInput">exportCustomRoutesWithPublicIpInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesInput">importCustomRoutesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesWithPublicIpInput">importCustomRoutesWithPublicIpInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkInput">peerNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkTypeInput">peerNetworkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetworkInput">vmwareEngineNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp">exportCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp">importCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetwork">peerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkType">peerNetworkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.stateDetails"></a>

```java
public java.lang.String getStateDetails();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.timeouts"></a>

```java
public VmwareengineNetworkPeeringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference">VmwareengineNetworkPeeringTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `vmwareEngineNetworkCanonical`<sup>Required</sup> <a name="vmwareEngineNetworkCanonical" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical"></a>

```java
public java.lang.String getVmwareEngineNetworkCanonical();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `exportCustomRoutesInput`<sup>Optional</sup> <a name="exportCustomRoutesInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesInput"></a>

```java
public java.lang.Boolean|IResolvable getExportCustomRoutesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exportCustomRoutesWithPublicIpInput`<sup>Optional</sup> <a name="exportCustomRoutesWithPublicIpInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIpInput"></a>

```java
public java.lang.Boolean|IResolvable getExportCustomRoutesWithPublicIpInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importCustomRoutesInput`<sup>Optional</sup> <a name="importCustomRoutesInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesInput"></a>

```java
public java.lang.Boolean|IResolvable getImportCustomRoutesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `importCustomRoutesWithPublicIpInput`<sup>Optional</sup> <a name="importCustomRoutesWithPublicIpInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesWithPublicIpInput"></a>

```java
public java.lang.Boolean|IResolvable getImportCustomRoutesWithPublicIpInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peerNetworkInput`<sup>Optional</sup> <a name="peerNetworkInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkInput"></a>

```java
public java.lang.String getPeerNetworkInput();
```

- *Type:* java.lang.String

---

##### `peerNetworkTypeInput`<sup>Optional</sup> <a name="peerNetworkTypeInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkTypeInput"></a>

```java
public java.lang.String getPeerNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.timeoutsInput"></a>

```java
public IResolvable|VmwareengineNetworkPeeringTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a>

---

##### `vmwareEngineNetworkInput`<sup>Optional</sup> <a name="vmwareEngineNetworkInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetworkInput"></a>

```java
public java.lang.String getVmwareEngineNetworkInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `exportCustomRoutes`<sup>Required</sup> <a name="exportCustomRoutes" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutes"></a>

```java
public java.lang.Boolean|IResolvable getExportCustomRoutes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exportCustomRoutesWithPublicIp`<sup>Required</sup> <a name="exportCustomRoutesWithPublicIp" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp"></a>

```java
public java.lang.Boolean|IResolvable getExportCustomRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importCustomRoutes`<sup>Required</sup> <a name="importCustomRoutes" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutes"></a>

```java
public java.lang.Boolean|IResolvable getImportCustomRoutes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `importCustomRoutesWithPublicIp`<sup>Required</sup> <a name="importCustomRoutesWithPublicIp" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp"></a>

```java
public java.lang.Boolean|IResolvable getImportCustomRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peerNetwork`<sup>Required</sup> <a name="peerNetwork" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetwork"></a>

```java
public java.lang.String getPeerNetwork();
```

- *Type:* java.lang.String

---

##### `peerNetworkType`<sup>Required</sup> <a name="peerNetworkType" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.peerNetworkType"></a>

```java
public java.lang.String getPeerNetworkType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.vmwareEngineNetwork"></a>

```java
public java.lang.String getVmwareEngineNetwork();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineNetworkPeeringConfig <a name="VmwareengineNetworkPeeringConfig" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_network_peering.VmwareengineNetworkPeeringConfig;

VmwareengineNetworkPeeringConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .peerNetwork(java.lang.String)
    .peerNetworkType(java.lang.String)
    .vmwareEngineNetwork(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .exportCustomRoutes(java.lang.Boolean|IResolvable)
//  .exportCustomRoutesWithPublicIp(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .importCustomRoutes(java.lang.Boolean|IResolvable)
//  .importCustomRoutesWithPublicIp(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .timeouts(VmwareengineNetworkPeeringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the Network Peering. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.peerNetwork">peerNetwork</a></code> | <code>java.lang.String</code> | The relative resource name of the network to peer with a standard VMware Engine network. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.peerNetworkType">peerNetworkType</a></code> | <code>java.lang.String</code> | The type of the network to peer with the VMware Engine network. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>java.lang.String</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-provided description for this network peering. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if custom routes are exported to the peered network; false otherwise. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.exportCustomRoutesWithPublicIp">exportCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if all subnet routes with a public IP address range are exported; false otherwise. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#id VmwareengineNetworkPeering#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.importCustomRoutes">importCustomRoutes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.importCustomRoutesWithPublicIp">importCustomRoutesWithPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#project VmwareengineNetworkPeering#project}. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the Network Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#name VmwareengineNetworkPeering#name}

---

##### `peerNetwork`<sup>Required</sup> <a name="peerNetwork" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.peerNetwork"></a>

```java
public java.lang.String getPeerNetwork();
```

- *Type:* java.lang.String

The relative resource name of the network to peer with a standard VMware Engine network.

The provided network can be a consumer VPC network or another standard VMware Engine network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#peer_network VmwareengineNetworkPeering#peer_network}

---

##### `peerNetworkType`<sup>Required</sup> <a name="peerNetworkType" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.peerNetworkType"></a>

```java
public java.lang.String getPeerNetworkType();
```

- *Type:* java.lang.String

The type of the network to peer with the VMware Engine network.

Possible values: ["STANDARD", "VMWARE_ENGINE_NETWORK", "PRIVATE_SERVICES_ACCESS", "NETAPP_CLOUD_VOLUMES", "THIRD_PARTY_SERVICE", "DELL_POWERSCALE", "GOOGLE_CLOUD_NETAPP_VOLUMES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#peer_network_type VmwareengineNetworkPeering#peer_network_type}

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.vmwareEngineNetwork"></a>

```java
public java.lang.String getVmwareEngineNetwork();
```

- *Type:* java.lang.String

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#vmware_engine_network VmwareengineNetworkPeering#vmware_engine_network}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#deletion_policy VmwareengineNetworkPeering#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-provided description for this network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#description VmwareengineNetworkPeering#description}

---

##### `exportCustomRoutes`<sup>Optional</sup> <a name="exportCustomRoutes" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.exportCustomRoutes"></a>

```java
public java.lang.Boolean|IResolvable getExportCustomRoutes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if custom routes are exported to the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#export_custom_routes VmwareengineNetworkPeering#export_custom_routes}

---

##### `exportCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="exportCustomRoutesWithPublicIp" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.exportCustomRoutesWithPublicIp"></a>

```java
public java.lang.Boolean|IResolvable getExportCustomRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if all subnet routes with a public IP address range are exported; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#export_custom_routes_with_public_ip VmwareengineNetworkPeering#export_custom_routes_with_public_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#id VmwareengineNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importCustomRoutes`<sup>Optional</sup> <a name="importCustomRoutes" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.importCustomRoutes"></a>

```java
public java.lang.Boolean|IResolvable getImportCustomRoutes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#import_custom_routes VmwareengineNetworkPeering#import_custom_routes}

---

##### `importCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="importCustomRoutesWithPublicIp" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.importCustomRoutesWithPublicIp"></a>

```java
public java.lang.Boolean|IResolvable getImportCustomRoutesWithPublicIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#import_custom_routes_with_public_ip VmwareengineNetworkPeering#import_custom_routes_with_public_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#project VmwareengineNetworkPeering#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringConfig.property.timeouts"></a>

```java
public VmwareengineNetworkPeeringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#timeouts VmwareengineNetworkPeering#timeouts}

---

### VmwareengineNetworkPeeringTimeouts <a name="VmwareengineNetworkPeeringTimeouts" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_network_peering.VmwareengineNetworkPeeringTimeouts;

VmwareengineNetworkPeeringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#create VmwareengineNetworkPeering#create}. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#delete VmwareengineNetworkPeering#delete}. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#update VmwareengineNetworkPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#create VmwareengineNetworkPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#delete VmwareengineNetworkPeering#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_network_peering#update VmwareengineNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineNetworkPeeringTimeoutsOutputReference <a name="VmwareengineNetworkPeeringTimeoutsOutputReference" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_network_peering.VmwareengineNetworkPeeringTimeoutsOutputReference;

new VmwareengineNetworkPeeringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VmwareengineNetworkPeeringTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vmwareengineNetworkPeering.VmwareengineNetworkPeeringTimeouts">VmwareengineNetworkPeeringTimeouts</a>

---



