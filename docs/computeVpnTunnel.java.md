# `computeVpnTunnel` Submodule <a name="`computeVpnTunnel` Submodule" id="@cdktn/provider-google.computeVpnTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVpnTunnel <a name="ComputeVpnTunnel" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel google_compute_vpn_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnel;

ComputeVpnTunnel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .cipherSuite(ComputeVpnTunnelCipherSuite)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ikeVersion(java.lang.Number)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .localTrafficSelector(java.util.List<java.lang.String>)
//  .params(ComputeVpnTunnelParams)
//  .peerExternalGateway(java.lang.String)
//  .peerExternalGatewayInterface(java.lang.Number)
//  .peerGcpGateway(java.lang.String)
//  .peerIp(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .remoteTrafficSelector(java.util.List<java.lang.String>)
//  .router(java.lang.String)
//  .sharedSecret(java.lang.String)
//  .sharedSecretWo(java.lang.String)
//  .sharedSecretWoVersion(java.lang.String)
//  .targetVpnGateway(java.lang.String)
//  .timeouts(ComputeVpnTunnelTimeouts)
//  .vpnGateway(java.lang.String)
//  .vpnGatewayInterface(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.cipherSuite">cipherSuite</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a></code> | cipher_suite block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.ikeVersion">ikeVersion</a></code> | <code>java.lang.Number</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.localTrafficSelector">localTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGateway">peerExternalGateway</a></code> | <code>java.lang.String</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerGcpGateway">peerGcpGateway</a></code> | <code>java.lang.String</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerIp">peerIp</a></code> | <code>java.lang.String</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.router">router</a></code> | <code>java.lang.String</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.sharedSecretWo">sharedSecretWo</a></code> | <code>java.lang.String</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.sharedSecretWoVersion">sharedSecretWoVersion</a></code> | <code>java.lang.String</code> | Triggers update of 'shared_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.targetVpnGateway">targetVpnGateway</a></code> | <code>java.lang.String</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGateway">vpnGateway</a></code> | <code>java.lang.String</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#name ComputeVpnTunnel#name}

---

##### `cipherSuite`<sup>Optional</sup> <a name="cipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.cipherSuite"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

cipher_suite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#cipher_suite ComputeVpnTunnel#cipher_suite}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#description ComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeVersion`<sup>Optional</sup> <a name="ikeVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.ikeVersion"></a>

- *Type:* java.lang.Number

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#ike_version ComputeVpnTunnel#ike_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#labels ComputeVpnTunnel#labels}

---

##### `localTrafficSelector`<sup>Optional</sup> <a name="localTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.localTrafficSelector"></a>

- *Type:* java.util.List<java.lang.String>

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#params ComputeVpnTunnel#params}

---

##### `peerExternalGateway`<sup>Optional</sup> <a name="peerExternalGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGateway"></a>

- *Type:* java.lang.String

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}

---

##### `peerExternalGatewayInterface`<sup>Optional</sup> <a name="peerExternalGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGatewayInterface"></a>

- *Type:* java.lang.Number

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peerGcpGateway`<sup>Optional</sup> <a name="peerGcpGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerGcpGateway"></a>

- *Type:* java.lang.String

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}

---

##### `peerIp`<sup>Optional</sup> <a name="peerIp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerIp"></a>

- *Type:* java.lang.String

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#peer_ip ComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#region ComputeVpnTunnel#region}

---

##### `remoteTrafficSelector`<sup>Optional</sup> <a name="remoteTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.remoteTrafficSelector"></a>

- *Type:* java.util.List<java.lang.String>

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.router"></a>

- *Type:* java.lang.String

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#router ComputeVpnTunnel#router}

---

##### `sharedSecret`<sup>Optional</sup> <a name="sharedSecret" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.sharedSecret"></a>

- *Type:* java.lang.String

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#shared_secret ComputeVpnTunnel#shared_secret}

---

##### `sharedSecretWo`<sup>Optional</sup> <a name="sharedSecretWo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.sharedSecretWo"></a>

- *Type:* java.lang.String

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#shared_secret_wo ComputeVpnTunnel#shared_secret_wo}

---

##### `sharedSecretWoVersion`<sup>Optional</sup> <a name="sharedSecretWoVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.sharedSecretWoVersion"></a>

- *Type:* java.lang.String

Triggers update of 'shared_secret_wo' write-only.

Increment this value when an update to 'shared_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#shared_secret_wo_version ComputeVpnTunnel#shared_secret_wo_version}

---

##### `targetVpnGateway`<sup>Optional</sup> <a name="targetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.targetVpnGateway"></a>

- *Type:* java.lang.String

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#timeouts ComputeVpnTunnel#timeouts}

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGateway"></a>

- *Type:* java.lang.String

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#vpn_gateway ComputeVpnTunnel#vpn_gateway}

---

##### `vpnGatewayInterface`<sup>Optional</sup> <a name="vpnGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGatewayInterface"></a>

- *Type:* java.lang.Number

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putCipherSuite">putCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetCipherSuite">resetCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion">resetIkeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector">resetLocalTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway">resetPeerExternalGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface">resetPeerExternalGatewayInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway">resetPeerGcpGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp">resetPeerIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector">resetRemoteTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecret">resetSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecretWo">resetSharedSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecretWoVersion">resetSharedSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway">resetTargetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway">resetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface">resetVpnGatewayInterface</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCipherSuite` <a name="putCipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putCipherSuite"></a>

```java
public void putCipherSuite(ComputeVpnTunnelCipherSuite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putCipherSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putParams"></a>

```java
public void putParams(ComputeVpnTunnelParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts"></a>

```java
public void putTimeouts(ComputeVpnTunnelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---

##### `resetCipherSuite` <a name="resetCipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetCipherSuite"></a>

```java
public void resetCipherSuite()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId"></a>

```java
public void resetId()
```

##### `resetIkeVersion` <a name="resetIkeVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion"></a>

```java
public void resetIkeVersion()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocalTrafficSelector` <a name="resetLocalTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector"></a>

```java
public void resetLocalTrafficSelector()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetParams"></a>

```java
public void resetParams()
```

##### `resetPeerExternalGateway` <a name="resetPeerExternalGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway"></a>

```java
public void resetPeerExternalGateway()
```

##### `resetPeerExternalGatewayInterface` <a name="resetPeerExternalGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface"></a>

```java
public void resetPeerExternalGatewayInterface()
```

##### `resetPeerGcpGateway` <a name="resetPeerGcpGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway"></a>

```java
public void resetPeerGcpGateway()
```

##### `resetPeerIp` <a name="resetPeerIp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp"></a>

```java
public void resetPeerIp()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRemoteTrafficSelector` <a name="resetRemoteTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector"></a>

```java
public void resetRemoteTrafficSelector()
```

##### `resetRouter` <a name="resetRouter" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter"></a>

```java
public void resetRouter()
```

##### `resetSharedSecret` <a name="resetSharedSecret" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecret"></a>

```java
public void resetSharedSecret()
```

##### `resetSharedSecretWo` <a name="resetSharedSecretWo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecretWo"></a>

```java
public void resetSharedSecretWo()
```

##### `resetSharedSecretWoVersion` <a name="resetSharedSecretWoVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetSharedSecretWoVersion"></a>

```java
public void resetSharedSecretWoVersion()
```

##### `resetTargetVpnGateway` <a name="resetTargetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway"></a>

```java
public void resetTargetVpnGateway()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpnGateway` <a name="resetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway"></a>

```java
public void resetVpnGateway()
```

##### `resetVpnGatewayInterface` <a name="resetVpnGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface"></a>

```java
public void resetVpnGatewayInterface()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeVpnTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnel;

ComputeVpnTunnel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnel;

ComputeVpnTunnel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnel;

ComputeVpnTunnel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnel;

ComputeVpnTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeVpnTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeVpnTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeVpnTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeVpnTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeVpnTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuite">cipherSuite</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference">ComputeVpnTunnelCipherSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus">detailedStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference">ComputeVpnTunnelParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash">sharedSecretHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuiteInput">cipherSuiteInput</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput">ikeVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput">localTrafficSelectorInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput">peerExternalGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput">peerExternalGatewayInterfaceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput">peerGcpGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput">peerIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput">remoteTrafficSelectorInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput">routerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput">sharedSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoInput">sharedSecretWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersionInput">sharedSecretWoVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput">targetVpnGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput">vpnGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput">vpnGatewayInterfaceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion">ikeVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector">localTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway">peerExternalGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway">peerGcpGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp">peerIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router">router</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWo">sharedSecretWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersion">sharedSecretWoVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway">targetVpnGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway">vpnGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cipherSuite`<sup>Required</sup> <a name="cipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuite"></a>

```java
public ComputeVpnTunnelCipherSuiteOutputReference getCipherSuite();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference">ComputeVpnTunnelCipherSuiteOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `detailedStatus`<sup>Required</sup> <a name="detailedStatus" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus"></a>

```java
public java.lang.String getDetailedStatus();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.params"></a>

```java
public ComputeVpnTunnelParamsOutputReference getParams();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference">ComputeVpnTunnelParamsOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `sharedSecretHash`<sup>Required</sup> <a name="sharedSecretHash" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash"></a>

```java
public java.lang.String getSharedSecretHash();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts"></a>

```java
public ComputeVpnTunnelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a>

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `cipherSuiteInput`<sup>Optional</sup> <a name="cipherSuiteInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cipherSuiteInput"></a>

```java
public ComputeVpnTunnelCipherSuite getCipherSuiteInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ikeVersionInput`<sup>Optional</sup> <a name="ikeVersionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput"></a>

```java
public java.lang.Number getIkeVersionInput();
```

- *Type:* java.lang.Number

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `localTrafficSelectorInput`<sup>Optional</sup> <a name="localTrafficSelectorInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput"></a>

```java
public java.util.List<java.lang.String> getLocalTrafficSelectorInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.paramsInput"></a>

```java
public ComputeVpnTunnelParams getParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

---

##### `peerExternalGatewayInput`<sup>Optional</sup> <a name="peerExternalGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput"></a>

```java
public java.lang.String getPeerExternalGatewayInput();
```

- *Type:* java.lang.String

---

##### `peerExternalGatewayInterfaceInput`<sup>Optional</sup> <a name="peerExternalGatewayInterfaceInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput"></a>

```java
public java.lang.Number getPeerExternalGatewayInterfaceInput();
```

- *Type:* java.lang.Number

---

##### `peerGcpGatewayInput`<sup>Optional</sup> <a name="peerGcpGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput"></a>

```java
public java.lang.String getPeerGcpGatewayInput();
```

- *Type:* java.lang.String

---

##### `peerIpInput`<sup>Optional</sup> <a name="peerIpInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput"></a>

```java
public java.lang.String getPeerIpInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `remoteTrafficSelectorInput`<sup>Optional</sup> <a name="remoteTrafficSelectorInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput"></a>

```java
public java.util.List<java.lang.String> getRemoteTrafficSelectorInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput"></a>

```java
public java.lang.String getRouterInput();
```

- *Type:* java.lang.String

---

##### `sharedSecretInput`<sup>Optional</sup> <a name="sharedSecretInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput"></a>

```java
public java.lang.String getSharedSecretInput();
```

- *Type:* java.lang.String

---

##### `sharedSecretWoInput`<sup>Optional</sup> <a name="sharedSecretWoInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoInput"></a>

```java
public java.lang.String getSharedSecretWoInput();
```

- *Type:* java.lang.String

---

##### `sharedSecretWoVersionInput`<sup>Optional</sup> <a name="sharedSecretWoVersionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersionInput"></a>

```java
public java.lang.String getSharedSecretWoVersionInput();
```

- *Type:* java.lang.String

---

##### `targetVpnGatewayInput`<sup>Optional</sup> <a name="targetVpnGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput"></a>

```java
public java.lang.String getTargetVpnGatewayInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput"></a>

```java
public IResolvable|ComputeVpnTunnelTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---

##### `vpnGatewayInput`<sup>Optional</sup> <a name="vpnGatewayInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput"></a>

```java
public java.lang.String getVpnGatewayInput();
```

- *Type:* java.lang.String

---

##### `vpnGatewayInterfaceInput`<sup>Optional</sup> <a name="vpnGatewayInterfaceInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput"></a>

```java
public java.lang.Number getVpnGatewayInterfaceInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion"></a>

```java
public java.lang.Number getIkeVersion();
```

- *Type:* java.lang.Number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `localTrafficSelector`<sup>Required</sup> <a name="localTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getLocalTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peerExternalGateway`<sup>Required</sup> <a name="peerExternalGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway"></a>

```java
public java.lang.String getPeerExternalGateway();
```

- *Type:* java.lang.String

---

##### `peerExternalGatewayInterface`<sup>Required</sup> <a name="peerExternalGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface"></a>

```java
public java.lang.Number getPeerExternalGatewayInterface();
```

- *Type:* java.lang.Number

---

##### `peerGcpGateway`<sup>Required</sup> <a name="peerGcpGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway"></a>

```java
public java.lang.String getPeerGcpGateway();
```

- *Type:* java.lang.String

---

##### `peerIp`<sup>Required</sup> <a name="peerIp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp"></a>

```java
public java.lang.String getPeerIp();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `remoteTrafficSelector`<sup>Required</sup> <a name="remoteTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getRemoteTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret"></a>

```java
public java.lang.String getSharedSecret();
```

- *Type:* java.lang.String

---

##### `sharedSecretWo`<sup>Required</sup> <a name="sharedSecretWo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWo"></a>

```java
public java.lang.String getSharedSecretWo();
```

- *Type:* java.lang.String

---

##### `sharedSecretWoVersion`<sup>Required</sup> <a name="sharedSecretWoVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretWoVersion"></a>

```java
public java.lang.String getSharedSecretWoVersion();
```

- *Type:* java.lang.String

---

##### `targetVpnGateway`<sup>Required</sup> <a name="targetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway"></a>

```java
public java.lang.String getTargetVpnGateway();
```

- *Type:* java.lang.String

---

##### `vpnGateway`<sup>Required</sup> <a name="vpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway"></a>

```java
public java.lang.String getVpnGateway();
```

- *Type:* java.lang.String

---

##### `vpnGatewayInterface`<sup>Required</sup> <a name="vpnGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface"></a>

```java
public java.lang.Number getVpnGatewayInterface();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVpnTunnelCipherSuite <a name="ComputeVpnTunnelCipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnelCipherSuite;

ComputeVpnTunnelCipherSuite.builder()
//  .phase1(ComputeVpnTunnelCipherSuitePhase1)
//  .phase2(ComputeVpnTunnelCipherSuitePhase2)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase1">phase1</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a></code> | phase1 block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase2">phase2</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a></code> | phase2 block. |

---

##### `phase1`<sup>Optional</sup> <a name="phase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase1"></a>

```java
public ComputeVpnTunnelCipherSuitePhase1 getPhase1();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

phase1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#phase1 ComputeVpnTunnel#phase1}

---

##### `phase2`<sup>Optional</sup> <a name="phase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite.property.phase2"></a>

```java
public ComputeVpnTunnelCipherSuitePhase2 getPhase2();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

phase2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#phase2 ComputeVpnTunnel#phase2}

---

### ComputeVpnTunnelCipherSuitePhase1 <a name="ComputeVpnTunnelCipherSuitePhase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnelCipherSuitePhase1;

ComputeVpnTunnelCipherSuitePhase1.builder()
//  .dh(java.util.List<java.lang.String>)
//  .encryption(java.util.List<java.lang.String>)
//  .integrity(java.util.List<java.lang.String>)
//  .prf(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.dh">dh</a></code> | <code>java.util.List<java.lang.String></code> | Diffie-Hellman groups. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.encryption">encryption</a></code> | <code>java.util.List<java.lang.String></code> | Encryption algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.integrity">integrity</a></code> | <code>java.util.List<java.lang.String></code> | Integrity algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.prf">prf</a></code> | <code>java.util.List<java.lang.String></code> | Pseudo-random functions. |

---

##### `dh`<sup>Optional</sup> <a name="dh" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.dh"></a>

```java
public java.util.List<java.lang.String> getDh();
```

- *Type:* java.util.List<java.lang.String>

Diffie-Hellman groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#dh ComputeVpnTunnel#dh}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.encryption"></a>

```java
public java.util.List<java.lang.String> getEncryption();
```

- *Type:* java.util.List<java.lang.String>

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#encryption ComputeVpnTunnel#encryption}

---

##### `integrity`<sup>Optional</sup> <a name="integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.integrity"></a>

```java
public java.util.List<java.lang.String> getIntegrity();
```

- *Type:* java.util.List<java.lang.String>

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#integrity ComputeVpnTunnel#integrity}

---

##### `prf`<sup>Optional</sup> <a name="prf" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1.property.prf"></a>

```java
public java.util.List<java.lang.String> getPrf();
```

- *Type:* java.util.List<java.lang.String>

Pseudo-random functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#prf ComputeVpnTunnel#prf}

---

### ComputeVpnTunnelCipherSuitePhase2 <a name="ComputeVpnTunnelCipherSuitePhase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnelCipherSuitePhase2;

ComputeVpnTunnelCipherSuitePhase2.builder()
//  .encryption(java.util.List<java.lang.String>)
//  .integrity(java.util.List<java.lang.String>)
//  .pfs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.encryption">encryption</a></code> | <code>java.util.List<java.lang.String></code> | Encryption algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.integrity">integrity</a></code> | <code>java.util.List<java.lang.String></code> | Integrity algorithms. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.pfs">pfs</a></code> | <code>java.util.List<java.lang.String></code> | Perfect forward secrecy groups. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.encryption"></a>

```java
public java.util.List<java.lang.String> getEncryption();
```

- *Type:* java.util.List<java.lang.String>

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#encryption ComputeVpnTunnel#encryption}

---

##### `integrity`<sup>Optional</sup> <a name="integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.integrity"></a>

```java
public java.util.List<java.lang.String> getIntegrity();
```

- *Type:* java.util.List<java.lang.String>

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#integrity ComputeVpnTunnel#integrity}

---

##### `pfs`<sup>Optional</sup> <a name="pfs" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2.property.pfs"></a>

```java
public java.util.List<java.lang.String> getPfs();
```

- *Type:* java.util.List<java.lang.String>

Perfect forward secrecy groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#pfs ComputeVpnTunnel#pfs}

---

### ComputeVpnTunnelConfig <a name="ComputeVpnTunnelConfig" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnelConfig;

ComputeVpnTunnelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .cipherSuite(ComputeVpnTunnelCipherSuite)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ikeVersion(java.lang.Number)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .localTrafficSelector(java.util.List<java.lang.String>)
//  .params(ComputeVpnTunnelParams)
//  .peerExternalGateway(java.lang.String)
//  .peerExternalGatewayInterface(java.lang.Number)
//  .peerGcpGateway(java.lang.String)
//  .peerIp(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .remoteTrafficSelector(java.util.List<java.lang.String>)
//  .router(java.lang.String)
//  .sharedSecret(java.lang.String)
//  .sharedSecretWo(java.lang.String)
//  .sharedSecretWoVersion(java.lang.String)
//  .targetVpnGateway(java.lang.String)
//  .timeouts(ComputeVpnTunnelTimeouts)
//  .vpnGateway(java.lang.String)
//  .vpnGatewayInterface(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.cipherSuite">cipherSuite</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a></code> | cipher_suite block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion">ikeVersion</a></code> | <code>java.lang.Number</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector">localTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway">peerExternalGateway</a></code> | <code>java.lang.String</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway">peerGcpGateway</a></code> | <code>java.lang.String</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp">peerIp</a></code> | <code>java.lang.String</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router">router</a></code> | <code>java.lang.String</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWo">sharedSecretWo</a></code> | <code>java.lang.String</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWoVersion">sharedSecretWoVersion</a></code> | <code>java.lang.String</code> | Triggers update of 'shared_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway">targetVpnGateway</a></code> | <code>java.lang.String</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway">vpnGateway</a></code> | <code>java.lang.String</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#name ComputeVpnTunnel#name}

---

##### `cipherSuite`<sup>Optional</sup> <a name="cipherSuite" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.cipherSuite"></a>

```java
public ComputeVpnTunnelCipherSuite getCipherSuite();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

cipher_suite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#cipher_suite ComputeVpnTunnel#cipher_suite}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#description ComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeVersion`<sup>Optional</sup> <a name="ikeVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion"></a>

```java
public java.lang.Number getIkeVersion();
```

- *Type:* java.lang.Number

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#ike_version ComputeVpnTunnel#ike_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#labels ComputeVpnTunnel#labels}

---

##### `localTrafficSelector`<sup>Optional</sup> <a name="localTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getLocalTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.params"></a>

```java
public ComputeVpnTunnelParams getParams();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#params ComputeVpnTunnel#params}

---

##### `peerExternalGateway`<sup>Optional</sup> <a name="peerExternalGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway"></a>

```java
public java.lang.String getPeerExternalGateway();
```

- *Type:* java.lang.String

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}

---

##### `peerExternalGatewayInterface`<sup>Optional</sup> <a name="peerExternalGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface"></a>

```java
public java.lang.Number getPeerExternalGatewayInterface();
```

- *Type:* java.lang.Number

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peerGcpGateway`<sup>Optional</sup> <a name="peerGcpGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway"></a>

```java
public java.lang.String getPeerGcpGateway();
```

- *Type:* java.lang.String

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}

---

##### `peerIp`<sup>Optional</sup> <a name="peerIp" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp"></a>

```java
public java.lang.String getPeerIp();
```

- *Type:* java.lang.String

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#peer_ip ComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#region ComputeVpnTunnel#region}

---

##### `remoteTrafficSelector`<sup>Optional</sup> <a name="remoteTrafficSelector" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getRemoteTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#router ComputeVpnTunnel#router}

---

##### `sharedSecret`<sup>Optional</sup> <a name="sharedSecret" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret"></a>

```java
public java.lang.String getSharedSecret();
```

- *Type:* java.lang.String

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#shared_secret ComputeVpnTunnel#shared_secret}

---

##### `sharedSecretWo`<sup>Optional</sup> <a name="sharedSecretWo" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWo"></a>

```java
public java.lang.String getSharedSecretWo();
```

- *Type:* java.lang.String

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#shared_secret_wo ComputeVpnTunnel#shared_secret_wo}

---

##### `sharedSecretWoVersion`<sup>Optional</sup> <a name="sharedSecretWoVersion" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecretWoVersion"></a>

```java
public java.lang.String getSharedSecretWoVersion();
```

- *Type:* java.lang.String

Triggers update of 'shared_secret_wo' write-only.

Increment this value when an update to 'shared_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#shared_secret_wo_version ComputeVpnTunnel#shared_secret_wo_version}

---

##### `targetVpnGateway`<sup>Optional</sup> <a name="targetVpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway"></a>

```java
public java.lang.String getTargetVpnGateway();
```

- *Type:* java.lang.String

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts"></a>

```java
public ComputeVpnTunnelTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#timeouts ComputeVpnTunnel#timeouts}

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway"></a>

```java
public java.lang.String getVpnGateway();
```

- *Type:* java.lang.String

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#vpn_gateway ComputeVpnTunnel#vpn_gateway}

---

##### `vpnGatewayInterface`<sup>Optional</sup> <a name="vpnGatewayInterface" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface"></a>

```java
public java.lang.Number getVpnGatewayInterface();
```

- *Type:* java.lang.Number

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}

---

### ComputeVpnTunnelParams <a name="ComputeVpnTunnelParams" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnelParams;

ComputeVpnTunnelParams.builder()
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags to be bound to the Vpn Tunnel. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags to be bound to the Vpn Tunnel.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#resource_manager_tags ComputeVpnTunnel#resource_manager_tags}

---

### ComputeVpnTunnelTimeouts <a name="ComputeVpnTunnelTimeouts" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnelTimeouts;

ComputeVpnTunnelTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVpnTunnelCipherSuiteOutputReference <a name="ComputeVpnTunnelCipherSuiteOutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnelCipherSuiteOutputReference;

new ComputeVpnTunnelCipherSuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase1">putPhase1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase2">putPhase2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resetPhase1">resetPhase1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resetPhase2">resetPhase2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPhase1` <a name="putPhase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase1"></a>

```java
public void putPhase1(ComputeVpnTunnelCipherSuitePhase1 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

---

##### `putPhase2` <a name="putPhase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase2"></a>

```java
public void putPhase2(ComputeVpnTunnelCipherSuitePhase2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.putPhase2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

---

##### `resetPhase1` <a name="resetPhase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resetPhase1"></a>

```java
public void resetPhase1()
```

##### `resetPhase2` <a name="resetPhase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.resetPhase2"></a>

```java
public void resetPhase2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1">phase1</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference">ComputeVpnTunnelCipherSuitePhase1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2">phase2</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference">ComputeVpnTunnelCipherSuitePhase2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input">phase1Input</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input">phase2Input</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `phase1`<sup>Required</sup> <a name="phase1" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1"></a>

```java
public ComputeVpnTunnelCipherSuitePhase1OutputReference getPhase1();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference">ComputeVpnTunnelCipherSuitePhase1OutputReference</a>

---

##### `phase2`<sup>Required</sup> <a name="phase2" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2"></a>

```java
public ComputeVpnTunnelCipherSuitePhase2OutputReference getPhase2();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference">ComputeVpnTunnelCipherSuitePhase2OutputReference</a>

---

##### `phase1Input`<sup>Optional</sup> <a name="phase1Input" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input"></a>

```java
public ComputeVpnTunnelCipherSuitePhase1 getPhase1Input();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

---

##### `phase2Input`<sup>Optional</sup> <a name="phase2Input" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input"></a>

```java
public ComputeVpnTunnelCipherSuitePhase2 getPhase2Input();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuiteOutputReference.property.internalValue"></a>

```java
public ComputeVpnTunnelCipherSuite getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuite">ComputeVpnTunnelCipherSuite</a>

---


### ComputeVpnTunnelCipherSuitePhase1OutputReference <a name="ComputeVpnTunnelCipherSuitePhase1OutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference;

new ComputeVpnTunnelCipherSuitePhase1OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetDh">resetDh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetIntegrity">resetIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetPrf">resetPrf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDh` <a name="resetDh" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetDh"></a>

```java
public void resetDh()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetIntegrity` <a name="resetIntegrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetIntegrity"></a>

```java
public void resetIntegrity()
```

##### `resetPrf` <a name="resetPrf" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.resetPrf"></a>

```java
public void resetPrf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput">dhInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput">encryptionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput">integrityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput">prfInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh">dh</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption">encryption</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity">integrity</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf">prf</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dhInput`<sup>Optional</sup> <a name="dhInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput"></a>

```java
public java.util.List<java.lang.String> getDhInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput"></a>

```java
public java.util.List<java.lang.String> getEncryptionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrityInput`<sup>Optional</sup> <a name="integrityInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput"></a>

```java
public java.util.List<java.lang.String> getIntegrityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prfInput`<sup>Optional</sup> <a name="prfInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput"></a>

```java
public java.util.List<java.lang.String> getPrfInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dh`<sup>Required</sup> <a name="dh" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh"></a>

```java
public java.util.List<java.lang.String> getDh();
```

- *Type:* java.util.List<java.lang.String>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption"></a>

```java
public java.util.List<java.lang.String> getEncryption();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrity`<sup>Required</sup> <a name="integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity"></a>

```java
public java.util.List<java.lang.String> getIntegrity();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prf`<sup>Required</sup> <a name="prf" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf"></a>

```java
public java.util.List<java.lang.String> getPrf();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue"></a>

```java
public ComputeVpnTunnelCipherSuitePhase1 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase1">ComputeVpnTunnelCipherSuitePhase1</a>

---


### ComputeVpnTunnelCipherSuitePhase2OutputReference <a name="ComputeVpnTunnelCipherSuitePhase2OutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference;

new ComputeVpnTunnelCipherSuitePhase2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetIntegrity">resetIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetPfs">resetPfs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetIntegrity` <a name="resetIntegrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetIntegrity"></a>

```java
public void resetIntegrity()
```

##### `resetPfs` <a name="resetPfs" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.resetPfs"></a>

```java
public void resetPfs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput">encryptionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput">integrityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput">pfsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption">encryption</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity">integrity</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs">pfs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput"></a>

```java
public java.util.List<java.lang.String> getEncryptionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrityInput`<sup>Optional</sup> <a name="integrityInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput"></a>

```java
public java.util.List<java.lang.String> getIntegrityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pfsInput`<sup>Optional</sup> <a name="pfsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput"></a>

```java
public java.util.List<java.lang.String> getPfsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption"></a>

```java
public java.util.List<java.lang.String> getEncryption();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrity`<sup>Required</sup> <a name="integrity" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity"></a>

```java
public java.util.List<java.lang.String> getIntegrity();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pfs`<sup>Required</sup> <a name="pfs" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs"></a>

```java
public java.util.List<java.lang.String> getPfs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue"></a>

```java
public ComputeVpnTunnelCipherSuitePhase2 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelCipherSuitePhase2">ComputeVpnTunnelCipherSuitePhase2</a>

---


### ComputeVpnTunnelParamsOutputReference <a name="ComputeVpnTunnelParamsOutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnelParamsOutputReference;

new ComputeVpnTunnelParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParamsOutputReference.property.internalValue"></a>

```java
public ComputeVpnTunnelParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelParams">ComputeVpnTunnelParams</a>

---


### ComputeVpnTunnelTimeoutsOutputReference <a name="ComputeVpnTunnelTimeoutsOutputReference" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_vpn_tunnel.ComputeVpnTunnelTimeoutsOutputReference;

new ComputeVpnTunnelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeVpnTunnelTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---



