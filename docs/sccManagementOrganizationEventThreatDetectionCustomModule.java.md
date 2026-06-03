# `sccManagementOrganizationEventThreatDetectionCustomModule` Submodule <a name="`sccManagementOrganizationEventThreatDetectionCustomModule` Submodule" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccManagementOrganizationEventThreatDetectionCustomModule <a name="SccManagementOrganizationEventThreatDetectionCustomModule" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module google_scc_management_organization_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer"></a>

```java
import io.cdktn.providers.google.scc_management_organization_event_threat_detection_custom_module.SccManagementOrganizationEventThreatDetectionCustomModule;

SccManagementOrganizationEventThreatDetectionCustomModule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organization(java.lang.String)
//  .config(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config">config</a></code> | <code>java.lang.String</code> | Config for the module. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#id SccManagementOrganizationEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#organization SccManagementOrganizationEventThreatDetectionCustomModule#organization}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* java.lang.String

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#config SccManagementOrganizationEventThreatDetectionCustomModule#config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#deletion_policy SccManagementOrganizationEventThreatDetectionCustomModule#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#display_name SccManagementOrganizationEventThreatDetectionCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* java.lang.String

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#enablement_state SccManagementOrganizationEventThreatDetectionCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#id SccManagementOrganizationEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#location SccManagementOrganizationEventThreatDetectionCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#timeouts SccManagementOrganizationEventThreatDetectionCustomModule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#type SccManagementOrganizationEventThreatDetectionCustomModule#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState">resetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts"></a>

```java
public void putTimeouts(SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnablementState` <a name="resetEnablementState" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState"></a>

```java
public void resetEnablementState()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isConstruct"></a>

```java
import io.cdktn.providers.google.scc_management_organization_event_threat_detection_custom_module.SccManagementOrganizationEventThreatDetectionCustomModule;

SccManagementOrganizationEventThreatDetectionCustomModule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement"></a>

```java
import io.cdktn.providers.google.scc_management_organization_event_threat_detection_custom_module.SccManagementOrganizationEventThreatDetectionCustomModule;

SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource"></a>

```java
import io.cdktn.providers.google.scc_management_organization_event_threat_detection_custom_module.SccManagementOrganizationEventThreatDetectionCustomModule;

SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.scc_management_organization_event_threat_detection_custom_module.SccManagementOrganizationEventThreatDetectionCustomModule;

SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SccManagementOrganizationEventThreatDetectionCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SccManagementOrganizationEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SccManagementOrganizationEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor">lastEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.configInput">configInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.config">config</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor"></a>

```java
public java.lang.String getLastEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts"></a>

```java
public SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.configInput"></a>

```java
public java.lang.String getConfigInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```java
public java.lang.String getEnablementStateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```java
public IResolvable|SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SccManagementOrganizationEventThreatDetectionCustomModuleConfig <a name="SccManagementOrganizationEventThreatDetectionCustomModuleConfig" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.Initializer"></a>

```java
import io.cdktn.providers.google.scc_management_organization_event_threat_detection_custom_module.SccManagementOrganizationEventThreatDetectionCustomModuleConfig;

SccManagementOrganizationEventThreatDetectionCustomModuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organization(java.lang.String)
//  .config(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config">config</a></code> | <code>java.lang.String</code> | Config for the module. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#id SccManagementOrganizationEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#organization SccManagementOrganizationEventThreatDetectionCustomModule#organization}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#config SccManagementOrganizationEventThreatDetectionCustomModule#config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#deletion_policy SccManagementOrganizationEventThreatDetectionCustomModule#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#display_name SccManagementOrganizationEventThreatDetectionCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#enablement_state SccManagementOrganizationEventThreatDetectionCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#id SccManagementOrganizationEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#location SccManagementOrganizationEventThreatDetectionCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```java
public SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#timeouts SccManagementOrganizationEventThreatDetectionCustomModule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#type SccManagementOrganizationEventThreatDetectionCustomModule#type}

---

### SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts <a name="SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.scc_management_organization_event_threat_detection_custom_module.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts;

SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#create SccManagementOrganizationEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#delete SccManagementOrganizationEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#update SccManagementOrganizationEventThreatDetectionCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#create SccManagementOrganizationEventThreatDetectionCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#delete SccManagementOrganizationEventThreatDetectionCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#update SccManagementOrganizationEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.scc_management_organization_event_threat_detection_custom_module.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference;

new SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---



