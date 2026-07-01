# `lookerInstance` Submodule <a name="`lookerInstance` Submodule" id="@cdktn/provider-google.lookerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookerInstance <a name="LookerInstance" id="@cdktn/provider-google.lookerInstance.LookerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance google_looker_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstance;

LookerInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .oauthConfig(LookerInstanceOauthConfig)
//  .adminSettings(LookerInstanceAdminSettings)
//  .consumerNetwork(java.lang.String)
//  .controlledEgressConfig(LookerInstanceControlledEgressConfig)
//  .controlledEgressEnabled(java.lang.Boolean|IResolvable)
//  .customDomain(LookerInstanceCustomDomain)
//  .deletionPolicy(java.lang.String)
//  .denyMaintenancePeriod(LookerInstanceDenyMaintenancePeriod)
//  .encryptionConfig(LookerInstanceEncryptionConfig)
//  .fipsEnabled(java.lang.Boolean|IResolvable)
//  .geminiEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .maintenanceWindow(LookerInstanceMaintenanceWindow)
//  .periodicExportConfig(LookerInstancePeriodicExportConfig)
//  .platformEdition(java.lang.String)
//  .privateIpEnabled(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .pscConfig(LookerInstancePscConfig)
//  .pscEnabled(java.lang.Boolean|IResolvable)
//  .publicIpEnabled(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .reservedRange(java.lang.String)
//  .timeouts(LookerInstanceTimeouts)
//  .userMetadata(LookerInstanceUserMetadata)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.adminSettings">adminSettings</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.controlledEgressConfig">controlledEgressConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig">LookerInstanceControlledEgressConfig</a></code> | controlled_egress_config block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.controlledEgressEnabled">controlledEgressEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether controlled egress is enabled on the Looker instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.customDomain">customDomain</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/looker_instance.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | FIPS 140-2 Encryption enablement for Looker (Google Cloud Core). |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.geminiEnabled">geminiEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Gemini enablement for Looker (Google Cloud Core). |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#id LookerInstance#id}. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.periodicExportConfig">periodicExportConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig">LookerInstancePeriodicExportConfig</a></code> | periodic_export_config block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.platformEdition">platformEdition</a></code> | <code>java.lang.String</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.privateIpEnabled">privateIpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#project LookerInstance#project}. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.pscConfig">pscConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.pscEnabled">pscEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Public Service Connect (PSC) is enabled on the Looker instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.publicIpEnabled">publicIpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.reservedRange">reservedRange</a></code> | <code>java.lang.String</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.userMetadata">userMetadata</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#name LookerInstance#name}

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#oauth_config LookerInstance#oauth_config}

---

##### `adminSettings`<sup>Optional</sup> <a name="adminSettings" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.adminSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#admin_settings LookerInstance#admin_settings}

---

##### `consumerNetwork`<sup>Optional</sup> <a name="consumerNetwork" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.consumerNetwork"></a>

- *Type:* java.lang.String

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#consumer_network LookerInstance#consumer_network}

---

##### `controlledEgressConfig`<sup>Optional</sup> <a name="controlledEgressConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.controlledEgressConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig">LookerInstanceControlledEgressConfig</a>

controlled_egress_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#controlled_egress_config LookerInstance#controlled_egress_config}

---

##### `controlledEgressEnabled`<sup>Optional</sup> <a name="controlledEgressEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.controlledEgressEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether controlled egress is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#controlled_egress_enabled LookerInstance#controlled_egress_enabled}

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.customDomain"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#custom_domain LookerInstance#custom_domain}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/looker_instance.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#deletion_policy LookerInstance#deletion_policy}

---

##### `denyMaintenancePeriod`<sup>Optional</sup> <a name="denyMaintenancePeriod" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.denyMaintenancePeriod"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#deny_maintenance_period LookerInstance#deny_maintenance_period}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#encryption_config LookerInstance#encryption_config}

---

##### `fipsEnabled`<sup>Optional</sup> <a name="fipsEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.fipsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

FIPS 140-2 Encryption enablement for Looker (Google Cloud Core).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#fips_enabled LookerInstance#fips_enabled}

---

##### `geminiEnabled`<sup>Optional</sup> <a name="geminiEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.geminiEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Gemini enablement for Looker (Google Cloud Core).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#gemini_enabled LookerInstance#gemini_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#id LookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#maintenance_window LookerInstance#maintenance_window}

---

##### `periodicExportConfig`<sup>Optional</sup> <a name="periodicExportConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.periodicExportConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig">LookerInstancePeriodicExportConfig</a>

periodic_export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#periodic_export_config LookerInstance#periodic_export_config}

---

##### `platformEdition`<sup>Optional</sup> <a name="platformEdition" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.platformEdition"></a>

- *Type:* java.lang.String

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:

* LOOKER_CORE_TRIAL: trial instance (Currently Unavailable)
* LOOKER_CORE_STANDARD: pay as you go standard instance (Currently Unavailable)
* LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
* LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
* LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
* LOOKER_CORE_NONPROD_STANDARD_ANNUAL: nonprod subscription standard instance
* LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL: nonprod subscription enterprise instance
* LOOKER_CORE_NONPROD_EMBED_ANNUAL: nonprod subscription embed instance
* LOOKER_CORE_TRIAL_STANDARD: A standard trial edition of Looker (Google Cloud core) product.
* LOOKER_CORE_TRIAL_ENTERPRISE: An enterprise trial edition of Looker (Google Cloud core) product.
* LOOKER_CORE_TRIAL_EMBED: An embed trial edition of Looker (Google Cloud core) product. Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL", "LOOKER_CORE_NONPROD_STANDARD_ANNUAL", "LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL", "LOOKER_CORE_NONPROD_EMBED_ANNUAL", "LOOKER_CORE_TRIAL_STANDARD", "LOOKER_CORE_TRIAL_ENTERPRISE", "LOOKER_CORE_TRIAL_EMBED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#platform_edition LookerInstance#platform_edition}

---

##### `privateIpEnabled`<sup>Optional</sup> <a name="privateIpEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.privateIpEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#private_ip_enabled LookerInstance#private_ip_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#project LookerInstance#project}.

---

##### `pscConfig`<sup>Optional</sup> <a name="pscConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.pscConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#psc_config LookerInstance#psc_config}

---

##### `pscEnabled`<sup>Optional</sup> <a name="pscEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.pscEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Public Service Connect (PSC) is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#psc_enabled LookerInstance#psc_enabled}

---

##### `publicIpEnabled`<sup>Optional</sup> <a name="publicIpEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.publicIpEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#public_ip_enabled LookerInstance#public_ip_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#region LookerInstance#region}

---

##### `reservedRange`<sup>Optional</sup> <a name="reservedRange" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.reservedRange"></a>

- *Type:* java.lang.String

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#reserved_range LookerInstance#reserved_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#timeouts LookerInstance#timeouts}

---

##### `userMetadata`<sup>Optional</sup> <a name="userMetadata" id="@cdktn/provider-google.lookerInstance.LookerInstance.Initializer.parameter.userMetadata"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#user_metadata LookerInstance#user_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.putAdminSettings">putAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.putControlledEgressConfig">putControlledEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.putCustomDomain">putCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod">putDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.putPeriodicExportConfig">putPeriodicExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.putPscConfig">putPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.putUserMetadata">putUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetAdminSettings">resetAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetConsumerNetwork">resetConsumerNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetControlledEgressConfig">resetControlledEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetControlledEgressEnabled">resetControlledEgressEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetDenyMaintenancePeriod">resetDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetFipsEnabled">resetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetGeminiEnabled">resetGeminiEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetPeriodicExportConfig">resetPeriodicExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetPlatformEdition">resetPlatformEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetPrivateIpEnabled">resetPrivateIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetPscConfig">resetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetPscEnabled">resetPscEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetPublicIpEnabled">resetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetReservedRange">resetReservedRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.resetUserMetadata">resetUserMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.lookerInstance.LookerInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.lookerInstance.LookerInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.lookerInstance.LookerInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.lookerInstance.LookerInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.lookerInstance.LookerInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.lookerInstance.LookerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.lookerInstance.LookerInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.lookerInstance.LookerInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.lookerInstance.LookerInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.lookerInstance.LookerInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.lookerInstance.LookerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.lookerInstance.LookerInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.lookerInstance.LookerInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lookerInstance.LookerInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lookerInstance.LookerInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.lookerInstance.LookerInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lookerInstance.LookerInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.lookerInstance.LookerInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.lookerInstance.LookerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.lookerInstance.LookerInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.lookerInstance.LookerInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lookerInstance.LookerInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdminSettings` <a name="putAdminSettings" id="@cdktn/provider-google.lookerInstance.LookerInstance.putAdminSettings"></a>

```java
public void putAdminSettings(LookerInstanceAdminSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.putAdminSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

---

##### `putControlledEgressConfig` <a name="putControlledEgressConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.putControlledEgressConfig"></a>

```java
public void putControlledEgressConfig(LookerInstanceControlledEgressConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.putControlledEgressConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig">LookerInstanceControlledEgressConfig</a>

---

##### `putCustomDomain` <a name="putCustomDomain" id="@cdktn/provider-google.lookerInstance.LookerInstance.putCustomDomain"></a>

```java
public void putCustomDomain(LookerInstanceCustomDomain value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

---

##### `putDenyMaintenancePeriod` <a name="putDenyMaintenancePeriod" id="@cdktn/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod"></a>

```java
public void putDenyMaintenancePeriod(LookerInstanceDenyMaintenancePeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(LookerInstanceEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktn/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(LookerInstanceMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.putOauthConfig"></a>

```java
public void putOauthConfig(LookerInstanceOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

---

##### `putPeriodicExportConfig` <a name="putPeriodicExportConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.putPeriodicExportConfig"></a>

```java
public void putPeriodicExportConfig(LookerInstancePeriodicExportConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.putPeriodicExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig">LookerInstancePeriodicExportConfig</a>

---

##### `putPscConfig` <a name="putPscConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.putPscConfig"></a>

```java
public void putPscConfig(LookerInstancePscConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.lookerInstance.LookerInstance.putTimeouts"></a>

```java
public void putTimeouts(LookerInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

---

##### `putUserMetadata` <a name="putUserMetadata" id="@cdktn/provider-google.lookerInstance.LookerInstance.putUserMetadata"></a>

```java
public void putUserMetadata(LookerInstanceUserMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstance.putUserMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

---

##### `resetAdminSettings` <a name="resetAdminSettings" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetAdminSettings"></a>

```java
public void resetAdminSettings()
```

##### `resetConsumerNetwork` <a name="resetConsumerNetwork" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetConsumerNetwork"></a>

```java
public void resetConsumerNetwork()
```

##### `resetControlledEgressConfig` <a name="resetControlledEgressConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetControlledEgressConfig"></a>

```java
public void resetControlledEgressConfig()
```

##### `resetControlledEgressEnabled` <a name="resetControlledEgressEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetControlledEgressEnabled"></a>

```java
public void resetControlledEgressEnabled()
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetCustomDomain"></a>

```java
public void resetCustomDomain()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDenyMaintenancePeriod` <a name="resetDenyMaintenancePeriod" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetDenyMaintenancePeriod"></a>

```java
public void resetDenyMaintenancePeriod()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetFipsEnabled` <a name="resetFipsEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetFipsEnabled"></a>

```java
public void resetFipsEnabled()
```

##### `resetGeminiEnabled` <a name="resetGeminiEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetGeminiEnabled"></a>

```java
public void resetGeminiEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetPeriodicExportConfig` <a name="resetPeriodicExportConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetPeriodicExportConfig"></a>

```java
public void resetPeriodicExportConfig()
```

##### `resetPlatformEdition` <a name="resetPlatformEdition" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetPlatformEdition"></a>

```java
public void resetPlatformEdition()
```

##### `resetPrivateIpEnabled` <a name="resetPrivateIpEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetPrivateIpEnabled"></a>

```java
public void resetPrivateIpEnabled()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetPscConfig` <a name="resetPscConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetPscConfig"></a>

```java
public void resetPscConfig()
```

##### `resetPscEnabled` <a name="resetPscEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetPscEnabled"></a>

```java
public void resetPscEnabled()
```

##### `resetPublicIpEnabled` <a name="resetPublicIpEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetPublicIpEnabled"></a>

```java
public void resetPublicIpEnabled()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReservedRange` <a name="resetReservedRange" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetReservedRange"></a>

```java
public void resetReservedRange()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserMetadata` <a name="resetUserMetadata" id="@cdktn/provider-google.lookerInstance.LookerInstance.resetUserMetadata"></a>

```java
public void resetUserMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LookerInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.lookerInstance.LookerInstance.isConstruct"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstance;

LookerInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.lookerInstance.LookerInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.lookerInstance.LookerInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstance;

LookerInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.lookerInstance.LookerInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstance;

LookerInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.lookerInstance.LookerInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.lookerInstance.LookerInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstance;

LookerInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LookerInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LookerInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LookerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LookerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LookerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.adminSettings">adminSettings</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference">LookerInstanceAdminSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.controlledEgressConfig">controlledEgressConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference">LookerInstanceControlledEgressConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.customDomain">customDomain</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference">LookerInstanceCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference">LookerInstanceDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.egressPublicIp">egressPublicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference">LookerInstanceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.ingressPrivateIp">ingressPrivateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.ingressPublicIp">ingressPublicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.lookerUri">lookerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.lookerVersion">lookerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference">LookerInstanceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference">LookerInstanceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.periodicExportConfig">periodicExportConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference">LookerInstancePeriodicExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference">LookerInstancePscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference">LookerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.userMetadata">userMetadata</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference">LookerInstanceUserMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.adminSettingsInput">adminSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.consumerNetworkInput">consumerNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.controlledEgressConfigInput">controlledEgressConfigInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig">LookerInstanceControlledEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.controlledEgressEnabledInput">controlledEgressEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.customDomainInput">customDomainInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriodInput">denyMaintenancePeriodInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.fipsEnabledInput">fipsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.geminiEnabledInput">geminiEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.periodicExportConfigInput">periodicExportConfigInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig">LookerInstancePeriodicExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.platformEditionInput">platformEditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.privateIpEnabledInput">privateIpEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.pscConfigInput">pscConfigInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.pscEnabledInput">pscEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.publicIpEnabledInput">publicIpEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.reservedRangeInput">reservedRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.userMetadataInput">userMetadataInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.controlledEgressEnabled">controlledEgressEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.geminiEnabled">geminiEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.platformEdition">platformEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.privateIpEnabled">privateIpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.pscEnabled">pscEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.publicIpEnabled">publicIpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.reservedRange">reservedRange</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `adminSettings`<sup>Required</sup> <a name="adminSettings" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.adminSettings"></a>

```java
public LookerInstanceAdminSettingsOutputReference getAdminSettings();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference">LookerInstanceAdminSettingsOutputReference</a>

---

##### `controlledEgressConfig`<sup>Required</sup> <a name="controlledEgressConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.controlledEgressConfig"></a>

```java
public LookerInstanceControlledEgressConfigOutputReference getControlledEgressConfig();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference">LookerInstanceControlledEgressConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.customDomain"></a>

```java
public LookerInstanceCustomDomainOutputReference getCustomDomain();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference">LookerInstanceCustomDomainOutputReference</a>

---

##### `denyMaintenancePeriod`<sup>Required</sup> <a name="denyMaintenancePeriod" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriod"></a>

```java
public LookerInstanceDenyMaintenancePeriodOutputReference getDenyMaintenancePeriod();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference">LookerInstanceDenyMaintenancePeriodOutputReference</a>

---

##### `egressPublicIp`<sup>Required</sup> <a name="egressPublicIp" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.egressPublicIp"></a>

```java
public java.lang.String getEgressPublicIp();
```

- *Type:* java.lang.String

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.encryptionConfig"></a>

```java
public LookerInstanceEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference">LookerInstanceEncryptionConfigOutputReference</a>

---

##### `ingressPrivateIp`<sup>Required</sup> <a name="ingressPrivateIp" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.ingressPrivateIp"></a>

```java
public java.lang.String getIngressPrivateIp();
```

- *Type:* java.lang.String

---

##### `ingressPublicIp`<sup>Required</sup> <a name="ingressPublicIp" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.ingressPublicIp"></a>

```java
public java.lang.String getIngressPublicIp();
```

- *Type:* java.lang.String

---

##### `lookerUri`<sup>Required</sup> <a name="lookerUri" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.lookerUri"></a>

```java
public java.lang.String getLookerUri();
```

- *Type:* java.lang.String

---

##### `lookerVersion`<sup>Required</sup> <a name="lookerVersion" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.lookerVersion"></a>

```java
public java.lang.String getLookerVersion();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.maintenanceWindow"></a>

```java
public LookerInstanceMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference">LookerInstanceMaintenanceWindowOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.oauthConfig"></a>

```java
public LookerInstanceOauthConfigOutputReference getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference">LookerInstanceOauthConfigOutputReference</a>

---

##### `periodicExportConfig`<sup>Required</sup> <a name="periodicExportConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.periodicExportConfig"></a>

```java
public LookerInstancePeriodicExportConfigOutputReference getPeriodicExportConfig();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference">LookerInstancePeriodicExportConfigOutputReference</a>

---

##### `pscConfig`<sup>Required</sup> <a name="pscConfig" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.pscConfig"></a>

```java
public LookerInstancePscConfigOutputReference getPscConfig();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference">LookerInstancePscConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.timeouts"></a>

```java
public LookerInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference">LookerInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `userMetadata`<sup>Required</sup> <a name="userMetadata" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.userMetadata"></a>

```java
public LookerInstanceUserMetadataOutputReference getUserMetadata();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference">LookerInstanceUserMetadataOutputReference</a>

---

##### `adminSettingsInput`<sup>Optional</sup> <a name="adminSettingsInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.adminSettingsInput"></a>

```java
public LookerInstanceAdminSettings getAdminSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

---

##### `consumerNetworkInput`<sup>Optional</sup> <a name="consumerNetworkInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.consumerNetworkInput"></a>

```java
public java.lang.String getConsumerNetworkInput();
```

- *Type:* java.lang.String

---

##### `controlledEgressConfigInput`<sup>Optional</sup> <a name="controlledEgressConfigInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.controlledEgressConfigInput"></a>

```java
public LookerInstanceControlledEgressConfig getControlledEgressConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig">LookerInstanceControlledEgressConfig</a>

---

##### `controlledEgressEnabledInput`<sup>Optional</sup> <a name="controlledEgressEnabledInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.controlledEgressEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getControlledEgressEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.customDomainInput"></a>

```java
public LookerInstanceCustomDomain getCustomDomainInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `denyMaintenancePeriodInput`<sup>Optional</sup> <a name="denyMaintenancePeriodInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriodInput"></a>

```java
public LookerInstanceDenyMaintenancePeriod getDenyMaintenancePeriodInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.encryptionConfigInput"></a>

```java
public LookerInstanceEncryptionConfig getEncryptionConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

---

##### `fipsEnabledInput`<sup>Optional</sup> <a name="fipsEnabledInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.fipsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getFipsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `geminiEnabledInput`<sup>Optional</sup> <a name="geminiEnabledInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.geminiEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGeminiEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.maintenanceWindowInput"></a>

```java
public LookerInstanceMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.oauthConfigInput"></a>

```java
public LookerInstanceOauthConfig getOauthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

---

##### `periodicExportConfigInput`<sup>Optional</sup> <a name="periodicExportConfigInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.periodicExportConfigInput"></a>

```java
public LookerInstancePeriodicExportConfig getPeriodicExportConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig">LookerInstancePeriodicExportConfig</a>

---

##### `platformEditionInput`<sup>Optional</sup> <a name="platformEditionInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.platformEditionInput"></a>

```java
public java.lang.String getPlatformEditionInput();
```

- *Type:* java.lang.String

---

##### `privateIpEnabledInput`<sup>Optional</sup> <a name="privateIpEnabledInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.privateIpEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIpEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pscConfigInput`<sup>Optional</sup> <a name="pscConfigInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.pscConfigInput"></a>

```java
public LookerInstancePscConfig getPscConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

---

##### `pscEnabledInput`<sup>Optional</sup> <a name="pscEnabledInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.pscEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPscEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `publicIpEnabledInput`<sup>Optional</sup> <a name="publicIpEnabledInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.publicIpEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicIpEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `reservedRangeInput`<sup>Optional</sup> <a name="reservedRangeInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.reservedRangeInput"></a>

```java
public java.lang.String getReservedRangeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.timeoutsInput"></a>

```java
public IResolvable|LookerInstanceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

---

##### `userMetadataInput`<sup>Optional</sup> <a name="userMetadataInput" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.userMetadataInput"></a>

```java
public LookerInstanceUserMetadata getUserMetadataInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.consumerNetwork"></a>

```java
public java.lang.String getConsumerNetwork();
```

- *Type:* java.lang.String

---

##### `controlledEgressEnabled`<sup>Required</sup> <a name="controlledEgressEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.controlledEgressEnabled"></a>

```java
public java.lang.Boolean|IResolvable getControlledEgressEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `fipsEnabled`<sup>Required</sup> <a name="fipsEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.fipsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFipsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `geminiEnabled`<sup>Required</sup> <a name="geminiEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.geminiEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGeminiEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platformEdition`<sup>Required</sup> <a name="platformEdition" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.platformEdition"></a>

```java
public java.lang.String getPlatformEdition();
```

- *Type:* java.lang.String

---

##### `privateIpEnabled`<sup>Required</sup> <a name="privateIpEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.privateIpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pscEnabled`<sup>Required</sup> <a name="pscEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.pscEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPscEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `publicIpEnabled`<sup>Required</sup> <a name="publicIpEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.publicIpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicIpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `reservedRange`<sup>Required</sup> <a name="reservedRange" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.reservedRange"></a>

```java
public java.lang.String getReservedRange();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.lookerInstance.LookerInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LookerInstanceAdminSettings <a name="LookerInstanceAdminSettings" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceAdminSettings;

LookerInstanceAdminSettings.builder()
//  .allowedEmailDomains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | Email domain allowlist for the instance. |

---

##### `allowedEmailDomains`<sup>Optional</sup> <a name="allowedEmailDomains" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings.property.allowedEmailDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomains();
```

- *Type:* java.util.List<java.lang.String>

Email domain allowlist for the instance.

Define the email domains to which your users can deliver Looker (Google Cloud core) content.
Updating this list will restart the instance. Updating the allowed email domains from terraform
means the value provided will be considered as the entire list and not an amendment to the
existing list of allowed email domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#allowed_email_domains LookerInstance#allowed_email_domains}

---

### LookerInstanceConfig <a name="LookerInstanceConfig" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceConfig;

LookerInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .oauthConfig(LookerInstanceOauthConfig)
//  .adminSettings(LookerInstanceAdminSettings)
//  .consumerNetwork(java.lang.String)
//  .controlledEgressConfig(LookerInstanceControlledEgressConfig)
//  .controlledEgressEnabled(java.lang.Boolean|IResolvable)
//  .customDomain(LookerInstanceCustomDomain)
//  .deletionPolicy(java.lang.String)
//  .denyMaintenancePeriod(LookerInstanceDenyMaintenancePeriod)
//  .encryptionConfig(LookerInstanceEncryptionConfig)
//  .fipsEnabled(java.lang.Boolean|IResolvable)
//  .geminiEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .maintenanceWindow(LookerInstanceMaintenanceWindow)
//  .periodicExportConfig(LookerInstancePeriodicExportConfig)
//  .platformEdition(java.lang.String)
//  .privateIpEnabled(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .pscConfig(LookerInstancePscConfig)
//  .pscEnabled(java.lang.Boolean|IResolvable)
//  .publicIpEnabled(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .reservedRange(java.lang.String)
//  .timeouts(LookerInstanceTimeouts)
//  .userMetadata(LookerInstanceUserMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.adminSettings">adminSettings</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.controlledEgressConfig">controlledEgressConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig">LookerInstanceControlledEgressConfig</a></code> | controlled_egress_config block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.controlledEgressEnabled">controlledEgressEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether controlled egress is enabled on the Looker instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.customDomain">customDomain</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/looker_instance.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | FIPS 140-2 Encryption enablement for Looker (Google Cloud Core). |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.geminiEnabled">geminiEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Gemini enablement for Looker (Google Cloud Core). |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#id LookerInstance#id}. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.periodicExportConfig">periodicExportConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig">LookerInstancePeriodicExportConfig</a></code> | periodic_export_config block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.platformEdition">platformEdition</a></code> | <code>java.lang.String</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.privateIpEnabled">privateIpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#project LookerInstance#project}. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.pscEnabled">pscEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Public Service Connect (PSC) is enabled on the Looker instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.publicIpEnabled">publicIpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.reservedRange">reservedRange</a></code> | <code>java.lang.String</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.userMetadata">userMetadata</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#name LookerInstance#name}

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.oauthConfig"></a>

```java
public LookerInstanceOauthConfig getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#oauth_config LookerInstance#oauth_config}

---

##### `adminSettings`<sup>Optional</sup> <a name="adminSettings" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.adminSettings"></a>

```java
public LookerInstanceAdminSettings getAdminSettings();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#admin_settings LookerInstance#admin_settings}

---

##### `consumerNetwork`<sup>Optional</sup> <a name="consumerNetwork" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.consumerNetwork"></a>

```java
public java.lang.String getConsumerNetwork();
```

- *Type:* java.lang.String

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#consumer_network LookerInstance#consumer_network}

---

##### `controlledEgressConfig`<sup>Optional</sup> <a name="controlledEgressConfig" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.controlledEgressConfig"></a>

```java
public LookerInstanceControlledEgressConfig getControlledEgressConfig();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig">LookerInstanceControlledEgressConfig</a>

controlled_egress_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#controlled_egress_config LookerInstance#controlled_egress_config}

---

##### `controlledEgressEnabled`<sup>Optional</sup> <a name="controlledEgressEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.controlledEgressEnabled"></a>

```java
public java.lang.Boolean|IResolvable getControlledEgressEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether controlled egress is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#controlled_egress_enabled LookerInstance#controlled_egress_enabled}

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.customDomain"></a>

```java
public LookerInstanceCustomDomain getCustomDomain();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#custom_domain LookerInstance#custom_domain}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/looker_instance.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#deletion_policy LookerInstance#deletion_policy}

---

##### `denyMaintenancePeriod`<sup>Optional</sup> <a name="denyMaintenancePeriod" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.denyMaintenancePeriod"></a>

```java
public LookerInstanceDenyMaintenancePeriod getDenyMaintenancePeriod();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#deny_maintenance_period LookerInstance#deny_maintenance_period}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.encryptionConfig"></a>

```java
public LookerInstanceEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#encryption_config LookerInstance#encryption_config}

---

##### `fipsEnabled`<sup>Optional</sup> <a name="fipsEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.fipsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFipsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

FIPS 140-2 Encryption enablement for Looker (Google Cloud Core).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#fips_enabled LookerInstance#fips_enabled}

---

##### `geminiEnabled`<sup>Optional</sup> <a name="geminiEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.geminiEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGeminiEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Gemini enablement for Looker (Google Cloud Core).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#gemini_enabled LookerInstance#gemini_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#id LookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.maintenanceWindow"></a>

```java
public LookerInstanceMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#maintenance_window LookerInstance#maintenance_window}

---

##### `periodicExportConfig`<sup>Optional</sup> <a name="periodicExportConfig" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.periodicExportConfig"></a>

```java
public LookerInstancePeriodicExportConfig getPeriodicExportConfig();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig">LookerInstancePeriodicExportConfig</a>

periodic_export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#periodic_export_config LookerInstance#periodic_export_config}

---

##### `platformEdition`<sup>Optional</sup> <a name="platformEdition" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.platformEdition"></a>

```java
public java.lang.String getPlatformEdition();
```

- *Type:* java.lang.String

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:

* LOOKER_CORE_TRIAL: trial instance (Currently Unavailable)
* LOOKER_CORE_STANDARD: pay as you go standard instance (Currently Unavailable)
* LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
* LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
* LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
* LOOKER_CORE_NONPROD_STANDARD_ANNUAL: nonprod subscription standard instance
* LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL: nonprod subscription enterprise instance
* LOOKER_CORE_NONPROD_EMBED_ANNUAL: nonprod subscription embed instance
* LOOKER_CORE_TRIAL_STANDARD: A standard trial edition of Looker (Google Cloud core) product.
* LOOKER_CORE_TRIAL_ENTERPRISE: An enterprise trial edition of Looker (Google Cloud core) product.
* LOOKER_CORE_TRIAL_EMBED: An embed trial edition of Looker (Google Cloud core) product. Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL", "LOOKER_CORE_NONPROD_STANDARD_ANNUAL", "LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL", "LOOKER_CORE_NONPROD_EMBED_ANNUAL", "LOOKER_CORE_TRIAL_STANDARD", "LOOKER_CORE_TRIAL_ENTERPRISE", "LOOKER_CORE_TRIAL_EMBED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#platform_edition LookerInstance#platform_edition}

---

##### `privateIpEnabled`<sup>Optional</sup> <a name="privateIpEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.privateIpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#private_ip_enabled LookerInstance#private_ip_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#project LookerInstance#project}.

---

##### `pscConfig`<sup>Optional</sup> <a name="pscConfig" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.pscConfig"></a>

```java
public LookerInstancePscConfig getPscConfig();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#psc_config LookerInstance#psc_config}

---

##### `pscEnabled`<sup>Optional</sup> <a name="pscEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.pscEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPscEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Public Service Connect (PSC) is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#psc_enabled LookerInstance#psc_enabled}

---

##### `publicIpEnabled`<sup>Optional</sup> <a name="publicIpEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.publicIpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicIpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#public_ip_enabled LookerInstance#public_ip_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#region LookerInstance#region}

---

##### `reservedRange`<sup>Optional</sup> <a name="reservedRange" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.reservedRange"></a>

```java
public java.lang.String getReservedRange();
```

- *Type:* java.lang.String

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#reserved_range LookerInstance#reserved_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.timeouts"></a>

```java
public LookerInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#timeouts LookerInstance#timeouts}

---

##### `userMetadata`<sup>Optional</sup> <a name="userMetadata" id="@cdktn/provider-google.lookerInstance.LookerInstanceConfig.property.userMetadata"></a>

```java
public LookerInstanceUserMetadata getUserMetadata();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#user_metadata LookerInstance#user_metadata}

---

### LookerInstanceControlledEgressConfig <a name="LookerInstanceControlledEgressConfig" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceControlledEgressConfig;

LookerInstanceControlledEgressConfig.builder()
//  .egressFqdns(java.util.List<java.lang.String>)
//  .marketplaceEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig.property.egressFqdns">egressFqdns</a></code> | <code>java.util.List<java.lang.String></code> | List of fully qualified domain names to be added to the allowlist for outbound traffic. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig.property.marketplaceEnabled">marketplaceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the Looker Marketplace is enabled. |

---

##### `egressFqdns`<sup>Optional</sup> <a name="egressFqdns" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig.property.egressFqdns"></a>

```java
public java.util.List<java.lang.String> getEgressFqdns();
```

- *Type:* java.util.List<java.lang.String>

List of fully qualified domain names to be added to the allowlist for outbound traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#egress_fqdns LookerInstance#egress_fqdns}

---

##### `marketplaceEnabled`<sup>Optional</sup> <a name="marketplaceEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig.property.marketplaceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMarketplaceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the Looker Marketplace is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#marketplace_enabled LookerInstance#marketplace_enabled}

---

### LookerInstanceCustomDomain <a name="LookerInstanceCustomDomain" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceCustomDomain;

LookerInstanceCustomDomain.builder()
//  .domain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain.property.domain">domain</a></code> | <code>java.lang.String</code> | Domain name. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#domain LookerInstance#domain}

---

### LookerInstanceDenyMaintenancePeriod <a name="LookerInstanceDenyMaintenancePeriod" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceDenyMaintenancePeriod;

LookerInstanceDenyMaintenancePeriod.builder()
    .endDate(LookerInstanceDenyMaintenancePeriodEndDate)
    .startDate(LookerInstanceDenyMaintenancePeriodStartDate)
    .time(LookerInstanceDenyMaintenancePeriodTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.endDate">endDate</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.startDate">startDate</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.time">time</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | time block. |

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.endDate"></a>

```java
public LookerInstanceDenyMaintenancePeriodEndDate getEndDate();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#end_date LookerInstance#end_date}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.startDate"></a>

```java
public LookerInstanceDenyMaintenancePeriodStartDate getStartDate();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#start_date LookerInstance#start_date}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.time"></a>

```java
public LookerInstanceDenyMaintenancePeriodTime getTime();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#time LookerInstance#time}

---

### LookerInstanceDenyMaintenancePeriodEndDate <a name="LookerInstanceDenyMaintenancePeriodEndDate" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceDenyMaintenancePeriodEndDate;

LookerInstanceDenyMaintenancePeriodEndDate.builder()
//  .day(java.lang.Number)
//  .month(java.lang.Number)
//  .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#day LookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#month LookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#year LookerInstance#year}

---

### LookerInstanceDenyMaintenancePeriodStartDate <a name="LookerInstanceDenyMaintenancePeriodStartDate" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceDenyMaintenancePeriodStartDate;

LookerInstanceDenyMaintenancePeriodStartDate.builder()
//  .day(java.lang.Number)
//  .month(java.lang.Number)
//  .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#day LookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#month LookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#year LookerInstance#year}

---

### LookerInstanceDenyMaintenancePeriodTime <a name="LookerInstanceDenyMaintenancePeriodTime" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceDenyMaintenancePeriodTime;

LookerInstanceDenyMaintenancePeriodTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#hours LookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#minutes LookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#nanos LookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#seconds LookerInstance#seconds}

---

### LookerInstanceEncryptionConfig <a name="LookerInstanceEncryptionConfig" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceEncryptionConfig;

LookerInstanceEncryptionConfig.builder()
//  .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Name of the customer managed encryption key (CMEK) in KMS. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Name of the customer managed encryption key (CMEK) in KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#kms_key_name LookerInstance#kms_key_name}

---

### LookerInstanceMaintenanceWindow <a name="LookerInstanceMaintenanceWindow" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceMaintenanceWindow;

LookerInstanceMaintenanceWindow.builder()
    .dayOfWeek(java.lang.String)
    .startTime(LookerInstanceMaintenanceWindowStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Required. Day of the week for this MaintenanceWindow (in UTC). |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Required. Day of the week for this MaintenanceWindow (in UTC).

* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#day_of_week LookerInstance#day_of_week}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.startTime"></a>

```java
public LookerInstanceMaintenanceWindowStartTime getStartTime();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#start_time LookerInstance#start_time}

---

### LookerInstanceMaintenanceWindowStartTime <a name="LookerInstanceMaintenanceWindowStartTime" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceMaintenanceWindowStartTime;

LookerInstanceMaintenanceWindowStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#hours LookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#minutes LookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#nanos LookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#seconds LookerInstance#seconds}

---

### LookerInstanceOauthConfig <a name="LookerInstanceOauthConfig" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceOauthConfig;

LookerInstanceOauthConfig.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID for the Oauth config. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret for the Oauth config. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#client_id LookerInstance#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client secret for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#client_secret LookerInstance#client_secret}

---

### LookerInstancePeriodicExportConfig <a name="LookerInstancePeriodicExportConfig" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstancePeriodicExportConfig;

LookerInstancePeriodicExportConfig.builder()
    .gcsUri(java.lang.String)
    .kmsKey(java.lang.String)
    .startTime(LookerInstancePeriodicExportConfigStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig.property.gcsUri">gcsUri</a></code> | <code>java.lang.String</code> | Cloud Storage bucket URI for periodic export. Format: gs://{bucket_name}. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Name of the CMEK key in KMS. Format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime">LookerInstancePeriodicExportConfigStartTime</a></code> | start_time block. |

---

##### `gcsUri`<sup>Required</sup> <a name="gcsUri" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig.property.gcsUri"></a>

```java
public java.lang.String getGcsUri();
```

- *Type:* java.lang.String

Cloud Storage bucket URI for periodic export. Format: gs://{bucket_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#gcs_uri LookerInstance#gcs_uri}

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Name of the CMEK key in KMS. Format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#kms_key LookerInstance#kms_key}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig.property.startTime"></a>

```java
public LookerInstancePeriodicExportConfigStartTime getStartTime();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime">LookerInstancePeriodicExportConfigStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#start_time LookerInstance#start_time}

---

### LookerInstancePeriodicExportConfigStartTime <a name="LookerInstancePeriodicExportConfigStartTime" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstancePeriodicExportConfigStartTime;

LookerInstancePeriodicExportConfigStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#hours LookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#minutes LookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#nanos LookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#seconds LookerInstance#seconds}

---

### LookerInstancePscConfig <a name="LookerInstancePscConfig" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfig.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstancePscConfig;

LookerInstancePscConfig.builder()
//  .allowedVpcs(java.util.List<java.lang.String>)
//  .serviceAttachments(IResolvable|java.util.List<LookerInstancePscConfigServiceAttachments>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfig.property.allowedVpcs">allowedVpcs</a></code> | <code>java.util.List<java.lang.String></code> | List of VPCs that are allowed ingress into the Looker instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfig.property.serviceAttachments">serviceAttachments</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>></code> | service_attachments block. |

---

##### `allowedVpcs`<sup>Optional</sup> <a name="allowedVpcs" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfig.property.allowedVpcs"></a>

```java
public java.util.List<java.lang.String> getAllowedVpcs();
```

- *Type:* java.util.List<java.lang.String>

List of VPCs that are allowed ingress into the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#allowed_vpcs LookerInstance#allowed_vpcs}

---

##### `serviceAttachments`<sup>Optional</sup> <a name="serviceAttachments" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfig.property.serviceAttachments"></a>

```java
public IResolvable|java.util.List<LookerInstancePscConfigServiceAttachments> getServiceAttachments();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>>

service_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#service_attachments LookerInstance#service_attachments}

---

### LookerInstancePscConfigServiceAttachments <a name="LookerInstancePscConfigServiceAttachments" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstancePscConfigServiceAttachments;

LookerInstancePscConfigServiceAttachments.builder()
//  .localFqdn(java.lang.String)
//  .targetServiceAttachmentUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.localFqdn">localFqdn</a></code> | <code>java.lang.String</code> | Fully qualified domain name that will be used in the private DNS record created for the service attachment. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri">targetServiceAttachmentUri</a></code> | <code>java.lang.String</code> | URI of the service attachment to connect to. |

---

##### `localFqdn`<sup>Optional</sup> <a name="localFqdn" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.localFqdn"></a>

```java
public java.lang.String getLocalFqdn();
```

- *Type:* java.lang.String

Fully qualified domain name that will be used in the private DNS record created for the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#local_fqdn LookerInstance#local_fqdn}

---

##### `targetServiceAttachmentUri`<sup>Optional</sup> <a name="targetServiceAttachmentUri" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri"></a>

```java
public java.lang.String getTargetServiceAttachmentUri();
```

- *Type:* java.lang.String

URI of the service attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#target_service_attachment_uri LookerInstance#target_service_attachment_uri}

---

### LookerInstanceTimeouts <a name="LookerInstanceTimeouts" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceTimeouts;

LookerInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#create LookerInstance#create}. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#delete LookerInstance#delete}. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#update LookerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#create LookerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#delete LookerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#update LookerInstance#update}.

---

### LookerInstanceUserMetadata <a name="LookerInstanceUserMetadata" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceUserMetadata;

LookerInstanceUserMetadata.builder()
//  .additionalDeveloperUserCount(java.lang.Number)
//  .additionalStandardUserCount(java.lang.Number)
//  .additionalViewerUserCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalDeveloperUserCount">additionalDeveloperUserCount</a></code> | <code>java.lang.Number</code> | Number of additional Developer Users to allocate to the Looker Instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalStandardUserCount">additionalStandardUserCount</a></code> | <code>java.lang.Number</code> | Number of additional Standard Users to allocate to the Looker Instance. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalViewerUserCount">additionalViewerUserCount</a></code> | <code>java.lang.Number</code> | Number of additional Viewer Users to allocate to the Looker Instance. |

---

##### `additionalDeveloperUserCount`<sup>Optional</sup> <a name="additionalDeveloperUserCount" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalDeveloperUserCount"></a>

```java
public java.lang.Number getAdditionalDeveloperUserCount();
```

- *Type:* java.lang.Number

Number of additional Developer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#additional_developer_user_count LookerInstance#additional_developer_user_count}

---

##### `additionalStandardUserCount`<sup>Optional</sup> <a name="additionalStandardUserCount" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalStandardUserCount"></a>

```java
public java.lang.Number getAdditionalStandardUserCount();
```

- *Type:* java.lang.Number

Number of additional Standard Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#additional_standard_user_count LookerInstance#additional_standard_user_count}

---

##### `additionalViewerUserCount`<sup>Optional</sup> <a name="additionalViewerUserCount" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalViewerUserCount"></a>

```java
public java.lang.Number getAdditionalViewerUserCount();
```

- *Type:* java.lang.Number

Number of additional Viewer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/looker_instance#additional_viewer_user_count LookerInstance#additional_viewer_user_count}

---

## Classes <a name="Classes" id="Classes"></a>

### LookerInstanceAdminSettingsOutputReference <a name="LookerInstanceAdminSettingsOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceAdminSettingsOutputReference;

new LookerInstanceAdminSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains">resetAllowedEmailDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedEmailDomains` <a name="resetAllowedEmailDomains" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains"></a>

```java
public void resetAllowedEmailDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput">allowedEmailDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedEmailDomainsInput`<sup>Optional</sup> <a name="allowedEmailDomainsInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEmailDomains`<sup>Required</sup> <a name="allowedEmailDomains" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.internalValue"></a>

```java
public LookerInstanceAdminSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

---


### LookerInstanceControlledEgressConfigOutputReference <a name="LookerInstanceControlledEgressConfigOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceControlledEgressConfigOutputReference;

new LookerInstanceControlledEgressConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.resetEgressFqdns">resetEgressFqdns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.resetMarketplaceEnabled">resetMarketplaceEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEgressFqdns` <a name="resetEgressFqdns" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.resetEgressFqdns"></a>

```java
public void resetEgressFqdns()
```

##### `resetMarketplaceEnabled` <a name="resetMarketplaceEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.resetMarketplaceEnabled"></a>

```java
public void resetMarketplaceEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.egressFqdnsInput">egressFqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.marketplaceEnabledInput">marketplaceEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.egressFqdns">egressFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.marketplaceEnabled">marketplaceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig">LookerInstanceControlledEgressConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressFqdnsInput`<sup>Optional</sup> <a name="egressFqdnsInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.egressFqdnsInput"></a>

```java
public java.util.List<java.lang.String> getEgressFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `marketplaceEnabledInput`<sup>Optional</sup> <a name="marketplaceEnabledInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.marketplaceEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMarketplaceEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `egressFqdns`<sup>Required</sup> <a name="egressFqdns" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.egressFqdns"></a>

```java
public java.util.List<java.lang.String> getEgressFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `marketplaceEnabled`<sup>Required</sup> <a name="marketplaceEnabled" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.marketplaceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMarketplaceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfigOutputReference.property.internalValue"></a>

```java
public LookerInstanceControlledEgressConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceControlledEgressConfig">LookerInstanceControlledEgressConfig</a>

---


### LookerInstanceCustomDomainOutputReference <a name="LookerInstanceCustomDomainOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceCustomDomainOutputReference;

new LookerInstanceCustomDomainOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resetDomain">resetDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resetDomain"></a>

```java
public void resetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.internalValue"></a>

```java
public LookerInstanceCustomDomain getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

---


### LookerInstanceDenyMaintenancePeriodEndDateOutputReference <a name="LookerInstanceDenyMaintenancePeriodEndDateOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference;

new LookerInstanceDenyMaintenancePeriodEndDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear"></a>

```java
public void resetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue"></a>

```java
public LookerInstanceDenyMaintenancePeriodEndDate getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

---


### LookerInstanceDenyMaintenancePeriodOutputReference <a name="LookerInstanceDenyMaintenancePeriodOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceDenyMaintenancePeriodOutputReference;

new LookerInstanceDenyMaintenancePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime">putTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndDate` <a name="putEndDate" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate"></a>

```java
public void putEndDate(LookerInstanceDenyMaintenancePeriodEndDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate"></a>

```java
public void putStartDate(LookerInstanceDenyMaintenancePeriodStartDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `putTime` <a name="putTime" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime"></a>

```java
public void putTime(LookerInstanceDenyMaintenancePeriodTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDate">endDate</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference">LookerInstanceDenyMaintenancePeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDate">startDate</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference">LookerInstanceDenyMaintenancePeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference">LookerInstanceDenyMaintenancePeriodTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput">timeInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDate"></a>

```java
public LookerInstanceDenyMaintenancePeriodEndDateOutputReference getEndDate();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference">LookerInstanceDenyMaintenancePeriodEndDateOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDate"></a>

```java
public LookerInstanceDenyMaintenancePeriodStartDateOutputReference getStartDate();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference">LookerInstanceDenyMaintenancePeriodStartDateOutputReference</a>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.time"></a>

```java
public LookerInstanceDenyMaintenancePeriodTimeOutputReference getTime();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference">LookerInstanceDenyMaintenancePeriodTimeOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```java
public LookerInstanceDenyMaintenancePeriodEndDate getEndDateInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```java
public LookerInstanceDenyMaintenancePeriodStartDate getStartDateInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```java
public LookerInstanceDenyMaintenancePeriodTime getTimeInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```java
public LookerInstanceDenyMaintenancePeriod getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

---


### LookerInstanceDenyMaintenancePeriodStartDateOutputReference <a name="LookerInstanceDenyMaintenancePeriodStartDateOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference;

new LookerInstanceDenyMaintenancePeriodStartDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear"></a>

```java
public void resetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue"></a>

```java
public LookerInstanceDenyMaintenancePeriodStartDate getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

---


### LookerInstanceDenyMaintenancePeriodTimeOutputReference <a name="LookerInstanceDenyMaintenancePeriodTimeOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceDenyMaintenancePeriodTimeOutputReference;

new LookerInstanceDenyMaintenancePeriodTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue"></a>

```java
public LookerInstanceDenyMaintenancePeriodTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

---


### LookerInstanceEncryptionConfigOutputReference <a name="LookerInstanceEncryptionConfigOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceEncryptionConfigOutputReference;

new LookerInstanceEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion">kmsKeyNameVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyState">kmsKeyState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameVersion`<sup>Required</sup> <a name="kmsKeyNameVersion" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion"></a>

```java
public java.lang.String getKmsKeyNameVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyState`<sup>Required</sup> <a name="kmsKeyState" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyState"></a>

```java
public java.lang.String getKmsKeyState();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.internalValue"></a>

```java
public LookerInstanceEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

---


### LookerInstanceMaintenanceWindowOutputReference <a name="LookerInstanceMaintenanceWindowOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceMaintenanceWindowOutputReference;

new LookerInstanceMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime"></a>

```java
public void putStartTime(LookerInstanceMaintenanceWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference">LookerInstanceMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTime"></a>

```java
public LookerInstanceMaintenanceWindowStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference">LookerInstanceMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTimeInput"></a>

```java
public LookerInstanceMaintenanceWindowStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public LookerInstanceMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

---


### LookerInstanceMaintenanceWindowStartTimeOutputReference <a name="LookerInstanceMaintenanceWindowStartTimeOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceMaintenanceWindowStartTimeOutputReference;

new LookerInstanceMaintenanceWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```java
public LookerInstanceMaintenanceWindowStartTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

---


### LookerInstanceOauthConfigOutputReference <a name="LookerInstanceOauthConfigOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceOauthConfigOutputReference;

new LookerInstanceOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.internalValue"></a>

```java
public LookerInstanceOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

---


### LookerInstancePeriodicExportConfigOutputReference <a name="LookerInstancePeriodicExportConfigOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstancePeriodicExportConfigOutputReference;

new LookerInstancePeriodicExportConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.putStartTime"></a>

```java
public void putStartTime(LookerInstancePeriodicExportConfigStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime">LookerInstancePeriodicExportConfigStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference">LookerInstancePeriodicExportConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.gcsUriInput">gcsUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime">LookerInstancePeriodicExportConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.gcsUri">gcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig">LookerInstancePeriodicExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.startTime"></a>

```java
public LookerInstancePeriodicExportConfigStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference">LookerInstancePeriodicExportConfigStartTimeOutputReference</a>

---

##### `gcsUriInput`<sup>Optional</sup> <a name="gcsUriInput" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.gcsUriInput"></a>

```java
public java.lang.String getGcsUriInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.startTimeInput"></a>

```java
public LookerInstancePeriodicExportConfigStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime">LookerInstancePeriodicExportConfigStartTime</a>

---

##### `gcsUri`<sup>Required</sup> <a name="gcsUri" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.gcsUri"></a>

```java
public java.lang.String getGcsUri();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigOutputReference.property.internalValue"></a>

```java
public LookerInstancePeriodicExportConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfig">LookerInstancePeriodicExportConfig</a>

---


### LookerInstancePeriodicExportConfigStartTimeOutputReference <a name="LookerInstancePeriodicExportConfigStartTimeOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstancePeriodicExportConfigStartTimeOutputReference;

new LookerInstancePeriodicExportConfigStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime">LookerInstancePeriodicExportConfigStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTimeOutputReference.property.internalValue"></a>

```java
public LookerInstancePeriodicExportConfigStartTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePeriodicExportConfigStartTime">LookerInstancePeriodicExportConfigStartTime</a>

---


### LookerInstancePscConfigOutputReference <a name="LookerInstancePscConfigOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstancePscConfigOutputReference;

new LookerInstancePscConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.putServiceAttachments">putServiceAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetAllowedVpcs">resetAllowedVpcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetServiceAttachments">resetServiceAttachments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceAttachments` <a name="putServiceAttachments" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.putServiceAttachments"></a>

```java
public void putServiceAttachments(IResolvable|java.util.List<LookerInstancePscConfigServiceAttachments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.putServiceAttachments.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>>

---

##### `resetAllowedVpcs` <a name="resetAllowedVpcs" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetAllowedVpcs"></a>

```java
public void resetAllowedVpcs()
```

##### `resetServiceAttachments` <a name="resetServiceAttachments" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetServiceAttachments"></a>

```java
public void resetServiceAttachments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri">lookerServiceAttachmentUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachments">serviceAttachments</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList">LookerInstancePscConfigServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcsInput">allowedVpcsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachmentsInput">serviceAttachmentsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcs">allowedVpcs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lookerServiceAttachmentUri`<sup>Required</sup> <a name="lookerServiceAttachmentUri" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri"></a>

```java
public java.lang.String getLookerServiceAttachmentUri();
```

- *Type:* java.lang.String

---

##### `serviceAttachments`<sup>Required</sup> <a name="serviceAttachments" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachments"></a>

```java
public LookerInstancePscConfigServiceAttachmentsList getServiceAttachments();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList">LookerInstancePscConfigServiceAttachmentsList</a>

---

##### `allowedVpcsInput`<sup>Optional</sup> <a name="allowedVpcsInput" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedVpcsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAttachmentsInput`<sup>Optional</sup> <a name="serviceAttachmentsInput" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachmentsInput"></a>

```java
public IResolvable|java.util.List<LookerInstancePscConfigServiceAttachments> getServiceAttachmentsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>>

---

##### `allowedVpcs`<sup>Required</sup> <a name="allowedVpcs" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcs"></a>

```java
public java.util.List<java.lang.String> getAllowedVpcs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.internalValue"></a>

```java
public LookerInstancePscConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

---


### LookerInstancePscConfigServiceAttachmentsList <a name="LookerInstancePscConfigServiceAttachmentsList" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstancePscConfigServiceAttachmentsList;

new LookerInstancePscConfigServiceAttachmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.get"></a>

```java
public LookerInstancePscConfigServiceAttachmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LookerInstancePscConfigServiceAttachments> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>>

---


### LookerInstancePscConfigServiceAttachmentsOutputReference <a name="LookerInstancePscConfigServiceAttachmentsOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstancePscConfigServiceAttachmentsOutputReference;

new LookerInstancePscConfigServiceAttachmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn">resetLocalFqdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri">resetTargetServiceAttachmentUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalFqdn` <a name="resetLocalFqdn" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn"></a>

```java
public void resetLocalFqdn()
```

##### `resetTargetServiceAttachmentUri` <a name="resetTargetServiceAttachmentUri" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri"></a>

```java
public void resetTargetServiceAttachmentUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus">connectionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput">localFqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput">targetServiceAttachmentUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn">localFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri">targetServiceAttachmentUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionStatus`<sup>Required</sup> <a name="connectionStatus" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus"></a>

```java
public java.lang.String getConnectionStatus();
```

- *Type:* java.lang.String

---

##### `localFqdnInput`<sup>Optional</sup> <a name="localFqdnInput" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput"></a>

```java
public java.lang.String getLocalFqdnInput();
```

- *Type:* java.lang.String

---

##### `targetServiceAttachmentUriInput`<sup>Optional</sup> <a name="targetServiceAttachmentUriInput" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput"></a>

```java
public java.lang.String getTargetServiceAttachmentUriInput();
```

- *Type:* java.lang.String

---

##### `localFqdn`<sup>Required</sup> <a name="localFqdn" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn"></a>

```java
public java.lang.String getLocalFqdn();
```

- *Type:* java.lang.String

---

##### `targetServiceAttachmentUri`<sup>Required</sup> <a name="targetServiceAttachmentUri" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri"></a>

```java
public java.lang.String getTargetServiceAttachmentUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue"></a>

```java
public IResolvable|LookerInstancePscConfigServiceAttachments getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>

---


### LookerInstanceTimeoutsOutputReference <a name="LookerInstanceTimeoutsOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceTimeoutsOutputReference;

new LookerInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|LookerInstanceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

---


### LookerInstanceUserMetadataOutputReference <a name="LookerInstanceUserMetadataOutputReference" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.looker_instance.LookerInstanceUserMetadataOutputReference;

new LookerInstanceUserMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount">resetAdditionalDeveloperUserCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount">resetAdditionalStandardUserCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount">resetAdditionalViewerUserCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalDeveloperUserCount` <a name="resetAdditionalDeveloperUserCount" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount"></a>

```java
public void resetAdditionalDeveloperUserCount()
```

##### `resetAdditionalStandardUserCount` <a name="resetAdditionalStandardUserCount" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount"></a>

```java
public void resetAdditionalStandardUserCount()
```

##### `resetAdditionalViewerUserCount` <a name="resetAdditionalViewerUserCount" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount"></a>

```java
public void resetAdditionalViewerUserCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput">additionalDeveloperUserCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput">additionalStandardUserCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput">additionalViewerUserCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount">additionalDeveloperUserCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount">additionalStandardUserCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount">additionalViewerUserCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalDeveloperUserCountInput`<sup>Optional</sup> <a name="additionalDeveloperUserCountInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput"></a>

```java
public java.lang.Number getAdditionalDeveloperUserCountInput();
```

- *Type:* java.lang.Number

---

##### `additionalStandardUserCountInput`<sup>Optional</sup> <a name="additionalStandardUserCountInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput"></a>

```java
public java.lang.Number getAdditionalStandardUserCountInput();
```

- *Type:* java.lang.Number

---

##### `additionalViewerUserCountInput`<sup>Optional</sup> <a name="additionalViewerUserCountInput" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput"></a>

```java
public java.lang.Number getAdditionalViewerUserCountInput();
```

- *Type:* java.lang.Number

---

##### `additionalDeveloperUserCount`<sup>Required</sup> <a name="additionalDeveloperUserCount" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount"></a>

```java
public java.lang.Number getAdditionalDeveloperUserCount();
```

- *Type:* java.lang.Number

---

##### `additionalStandardUserCount`<sup>Required</sup> <a name="additionalStandardUserCount" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount"></a>

```java
public java.lang.Number getAdditionalStandardUserCount();
```

- *Type:* java.lang.Number

---

##### `additionalViewerUserCount`<sup>Required</sup> <a name="additionalViewerUserCount" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount"></a>

```java
public java.lang.Number getAdditionalViewerUserCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.internalValue"></a>

```java
public LookerInstanceUserMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

---



