# `networkSecuritySecurityProfile` Submodule <a name="`networkSecuritySecurityProfile` Submodule" id="@cdktn/provider-google.networkSecuritySecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecuritySecurityProfile <a name="NetworkSecuritySecurityProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile google_network_security_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfile;

NetworkSecuritySecurityProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .customInterceptProfile(NetworkSecuritySecurityProfileCustomInterceptProfile)
//  .customMirroringProfile(NetworkSecuritySecurityProfileCustomMirroringProfile)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .parent(java.lang.String)
//  .threatPreventionProfile(NetworkSecuritySecurityProfileThreatPreventionProfile)
//  .timeouts(NetworkSecuritySecurityProfileTimeouts)
//  .urlFilteringProfile(NetworkSecuritySecurityProfileUrlFilteringProfile)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the security profile resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of security profile. Possible values: ["THREAT_PREVENTION", "URL_FILTERING", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"]. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.customInterceptProfile">customInterceptProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | custom_intercept_profile block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.customMirroringProfile">customMirroringProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | custom_mirroring_profile block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of the security profile. The Max length is 512 characters. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the security profile. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this security profile belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.threatPreventionProfile">threatPreventionProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | threat_prevention_profile block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.urlFilteringProfile">urlFilteringProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a></code> | url_filtering_profile block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the security profile resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#name NetworkSecuritySecurityProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of security profile. Possible values: ["THREAT_PREVENTION", "URL_FILTERING", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#type NetworkSecuritySecurityProfile#type}

---

##### `customInterceptProfile`<sup>Optional</sup> <a name="customInterceptProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.customInterceptProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

custom_intercept_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#custom_intercept_profile NetworkSecuritySecurityProfile#custom_intercept_profile}

---

##### `customMirroringProfile`<sup>Optional</sup> <a name="customMirroringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.customMirroringProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

custom_mirroring_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#custom_mirroring_profile NetworkSecuritySecurityProfile#custom_mirroring_profile}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of the security profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#description NetworkSecuritySecurityProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#labels NetworkSecuritySecurityProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the security profile. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#location NetworkSecuritySecurityProfile#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The name of the parent this security profile belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#parent NetworkSecuritySecurityProfile#parent}

---

##### `threatPreventionProfile`<sup>Optional</sup> <a name="threatPreventionProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.threatPreventionProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

threat_prevention_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#threat_prevention_profile NetworkSecuritySecurityProfile#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#timeouts NetworkSecuritySecurityProfile#timeouts}

---

##### `urlFilteringProfile`<sup>Optional</sup> <a name="urlFilteringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.urlFilteringProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a>

url_filtering_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#url_filtering_profile NetworkSecuritySecurityProfile#url_filtering_profile}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomInterceptProfile">putCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomMirroringProfile">putCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile">putThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putUrlFilteringProfile">putUrlFilteringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomInterceptProfile">resetCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomMirroringProfile">resetCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetThreatPreventionProfile">resetThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetUrlFilteringProfile">resetUrlFilteringProfile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomInterceptProfile` <a name="putCustomInterceptProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomInterceptProfile"></a>

```java
public void putCustomInterceptProfile(NetworkSecuritySecurityProfileCustomInterceptProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomInterceptProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

---

##### `putCustomMirroringProfile` <a name="putCustomMirroringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomMirroringProfile"></a>

```java
public void putCustomMirroringProfile(NetworkSecuritySecurityProfileCustomMirroringProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomMirroringProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

---

##### `putThreatPreventionProfile` <a name="putThreatPreventionProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile"></a>

```java
public void putThreatPreventionProfile(NetworkSecuritySecurityProfileThreatPreventionProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts"></a>

```java
public void putTimeouts(NetworkSecuritySecurityProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

---

##### `putUrlFilteringProfile` <a name="putUrlFilteringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putUrlFilteringProfile"></a>

```java
public void putUrlFilteringProfile(NetworkSecuritySecurityProfileUrlFilteringProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putUrlFilteringProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a>

---

##### `resetCustomInterceptProfile` <a name="resetCustomInterceptProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomInterceptProfile"></a>

```java
public void resetCustomInterceptProfile()
```

##### `resetCustomMirroringProfile` <a name="resetCustomMirroringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomMirroringProfile"></a>

```java
public void resetCustomMirroringProfile()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetParent"></a>

```java
public void resetParent()
```

##### `resetThreatPreventionProfile` <a name="resetThreatPreventionProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetThreatPreventionProfile"></a>

```java
public void resetThreatPreventionProfile()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUrlFilteringProfile` <a name="resetUrlFilteringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetUrlFilteringProfile"></a>

```java
public void resetUrlFilteringProfile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecuritySecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfile;

NetworkSecuritySecurityProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfile;

NetworkSecuritySecurityProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfile;

NetworkSecuritySecurityProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfile;

NetworkSecuritySecurityProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkSecuritySecurityProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkSecuritySecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkSecuritySecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkSecuritySecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecuritySecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfile">customInterceptProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference">NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfile">customMirroringProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference">NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfile">threatPreventionProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference">NetworkSecuritySecurityProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.urlFilteringProfile">urlFilteringProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference">NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfileInput">customInterceptProfileInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfileInput">customMirroringProfileInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfileInput">threatPreventionProfileInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.urlFilteringProfileInput">urlFilteringProfileInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customInterceptProfile`<sup>Required</sup> <a name="customInterceptProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfile"></a>

```java
public NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference getCustomInterceptProfile();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference">NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference</a>

---

##### `customMirroringProfile`<sup>Required</sup> <a name="customMirroringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfile"></a>

```java
public NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference getCustomMirroringProfile();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference">NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `threatPreventionProfile`<sup>Required</sup> <a name="threatPreventionProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfile"></a>

```java
public NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference getThreatPreventionProfile();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeouts"></a>

```java
public NetworkSecuritySecurityProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference">NetworkSecuritySecurityProfileTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `urlFilteringProfile`<sup>Required</sup> <a name="urlFilteringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.urlFilteringProfile"></a>

```java
public NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference getUrlFilteringProfile();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference">NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference</a>

---

##### `customInterceptProfileInput`<sup>Optional</sup> <a name="customInterceptProfileInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfileInput"></a>

```java
public NetworkSecuritySecurityProfileCustomInterceptProfile getCustomInterceptProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

---

##### `customMirroringProfileInput`<sup>Optional</sup> <a name="customMirroringProfileInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfileInput"></a>

```java
public NetworkSecuritySecurityProfileCustomMirroringProfile getCustomMirroringProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `threatPreventionProfileInput`<sup>Optional</sup> <a name="threatPreventionProfileInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfileInput"></a>

```java
public NetworkSecuritySecurityProfileThreatPreventionProfile getThreatPreventionProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeoutsInput"></a>

```java
public IResolvable|NetworkSecuritySecurityProfileTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `urlFilteringProfileInput`<sup>Optional</sup> <a name="urlFilteringProfileInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.urlFilteringProfileInput"></a>

```java
public NetworkSecuritySecurityProfileUrlFilteringProfile getUrlFilteringProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecuritySecurityProfileConfig <a name="NetworkSecuritySecurityProfileConfig" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileConfig;

NetworkSecuritySecurityProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .customInterceptProfile(NetworkSecuritySecurityProfileCustomInterceptProfile)
//  .customMirroringProfile(NetworkSecuritySecurityProfileCustomMirroringProfile)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .parent(java.lang.String)
//  .threatPreventionProfile(NetworkSecuritySecurityProfileThreatPreventionProfile)
//  .timeouts(NetworkSecuritySecurityProfileTimeouts)
//  .urlFilteringProfile(NetworkSecuritySecurityProfileUrlFilteringProfile)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the security profile resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of security profile. Possible values: ["THREAT_PREVENTION", "URL_FILTERING", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"]. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customInterceptProfile">customInterceptProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | custom_intercept_profile block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customMirroringProfile">customMirroringProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | custom_mirroring_profile block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of the security profile. The Max length is 512 characters. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the security profile. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this security profile belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.threatPreventionProfile">threatPreventionProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | threat_prevention_profile block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.urlFilteringProfile">urlFilteringProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a></code> | url_filtering_profile block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the security profile resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#name NetworkSecuritySecurityProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of security profile. Possible values: ["THREAT_PREVENTION", "URL_FILTERING", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#type NetworkSecuritySecurityProfile#type}

---

##### `customInterceptProfile`<sup>Optional</sup> <a name="customInterceptProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customInterceptProfile"></a>

```java
public NetworkSecuritySecurityProfileCustomInterceptProfile getCustomInterceptProfile();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

custom_intercept_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#custom_intercept_profile NetworkSecuritySecurityProfile#custom_intercept_profile}

---

##### `customMirroringProfile`<sup>Optional</sup> <a name="customMirroringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customMirroringProfile"></a>

```java
public NetworkSecuritySecurityProfileCustomMirroringProfile getCustomMirroringProfile();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

custom_mirroring_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#custom_mirroring_profile NetworkSecuritySecurityProfile#custom_mirroring_profile}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of the security profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#description NetworkSecuritySecurityProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#labels NetworkSecuritySecurityProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the security profile. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#location NetworkSecuritySecurityProfile#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The name of the parent this security profile belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#parent NetworkSecuritySecurityProfile#parent}

---

##### `threatPreventionProfile`<sup>Optional</sup> <a name="threatPreventionProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.threatPreventionProfile"></a>

```java
public NetworkSecuritySecurityProfileThreatPreventionProfile getThreatPreventionProfile();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

threat_prevention_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#threat_prevention_profile NetworkSecuritySecurityProfile#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.timeouts"></a>

```java
public NetworkSecuritySecurityProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#timeouts NetworkSecuritySecurityProfile#timeouts}

---

##### `urlFilteringProfile`<sup>Optional</sup> <a name="urlFilteringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.urlFilteringProfile"></a>

```java
public NetworkSecuritySecurityProfileUrlFilteringProfile getUrlFilteringProfile();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a>

url_filtering_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#url_filtering_profile NetworkSecuritySecurityProfile#url_filtering_profile}

---

### NetworkSecuritySecurityProfileCustomInterceptProfile <a name="NetworkSecuritySecurityProfileCustomInterceptProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileCustomInterceptProfile;

NetworkSecuritySecurityProfileCustomInterceptProfile.builder()
    .interceptEndpointGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile.property.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>java.lang.String</code> | The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}. |

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile.property.interceptEndpointGroup"></a>

```java
public java.lang.String getInterceptEndpointGroup();
```

- *Type:* java.lang.String

The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#intercept_endpoint_group NetworkSecuritySecurityProfile#intercept_endpoint_group}

---

### NetworkSecuritySecurityProfileCustomMirroringProfile <a name="NetworkSecuritySecurityProfileCustomMirroringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileCustomMirroringProfile;

NetworkSecuritySecurityProfileCustomMirroringProfile.builder()
    .mirroringEndpointGroup(java.lang.String)
//  .mirroringDeploymentGroups(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringEndpointGroup">mirroringEndpointGroup</a></code> | <code>java.lang.String</code> | The target Mirroring Endpoint Group. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringDeploymentGroups">mirroringDeploymentGroups</a></code> | <code>java.util.List<java.lang.String></code> | The target downstream Mirroring Deployment Groups. |

---

##### `mirroringEndpointGroup`<sup>Required</sup> <a name="mirroringEndpointGroup" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringEndpointGroup"></a>

```java
public java.lang.String getMirroringEndpointGroup();
```

- *Type:* java.lang.String

The target Mirroring Endpoint Group.

When a mirroring rule with this security profile attached matches a packet,
a replica will be mirrored to the location-local target in this group.
Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#mirroring_endpoint_group NetworkSecuritySecurityProfile#mirroring_endpoint_group}

---

##### `mirroringDeploymentGroups`<sup>Optional</sup> <a name="mirroringDeploymentGroups" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringDeploymentGroups"></a>

```java
public java.util.List<java.lang.String> getMirroringDeploymentGroups();
```

- *Type:* java.util.List<java.lang.String>

The target downstream Mirroring Deployment Groups.

This field is used for Packet Broker mirroring endpoint groups to specify
the deployment groups that the packet should be mirrored to by the broker.
Format: projects/{project_id}/locations/global/mirroringDeploymentGroups/{deployment_group_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#mirroring_deployment_groups NetworkSecuritySecurityProfile#mirroring_deployment_groups}

---

### NetworkSecuritySecurityProfileThreatPreventionProfile <a name="NetworkSecuritySecurityProfileThreatPreventionProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileThreatPreventionProfile;

NetworkSecuritySecurityProfileThreatPreventionProfile.builder()
//  .antivirusOverrides(IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides>)
//  .severityOverrides(IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides>)
//  .threatOverrides(IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.antivirusOverrides">antivirusOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>></code> | antivirus_overrides block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides">severityOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>></code> | severity_overrides block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides">threatOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>></code> | threat_overrides block. |

---

##### `antivirusOverrides`<sup>Optional</sup> <a name="antivirusOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.antivirusOverrides"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides> getAntivirusOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>>

antivirus_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#antivirus_overrides NetworkSecuritySecurityProfile#antivirus_overrides}

---

##### `severityOverrides`<sup>Optional</sup> <a name="severityOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides> getSeverityOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>>

severity_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#severity_overrides NetworkSecuritySecurityProfile#severity_overrides}

---

##### `threatOverrides`<sup>Optional</sup> <a name="threatOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides> getThreatOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>>

threat_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#threat_overrides NetworkSecuritySecurityProfile#threat_overrides}

---

### NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides <a name="NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides;

NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.builder()
    .action(java.lang.String)
    .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.action">action</a></code> | <code>java.lang.String</code> | Threat action override. For some threat types, only a subset of actions applies. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Required protocol to match. Possible values: ["SMTP", "SMB", "POP3", "IMAP", "HTTP2", "HTTP", "FTP"]. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Threat action override. For some threat types, only a subset of actions applies. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Required protocol to match. Possible values: ["SMTP", "SMB", "POP3", "IMAP", "HTTP2", "HTTP", "FTP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#protocol NetworkSecuritySecurityProfile#protocol}

---

### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides;

NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.builder()
    .action(java.lang.String)
    .severity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action">action</a></code> | <code>java.lang.String</code> | Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity">severity</a></code> | <code>java.lang.String</code> | Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"]. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#severity NetworkSecuritySecurityProfile#severity}

---

### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides;

NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.builder()
    .action(java.lang.String)
    .threatId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action">action</a></code> | <code>java.lang.String</code> | Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId">threatId</a></code> | <code>java.lang.String</code> | Vendor-specific ID of a threat to override. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}

---

##### `threatId`<sup>Required</sup> <a name="threatId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId"></a>

```java
public java.lang.String getThreatId();
```

- *Type:* java.lang.String

Vendor-specific ID of a threat to override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#threat_id NetworkSecuritySecurityProfile#threat_id}

---

### NetworkSecuritySecurityProfileTimeouts <a name="NetworkSecuritySecurityProfileTimeouts" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileTimeouts;

NetworkSecuritySecurityProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#create NetworkSecuritySecurityProfile#create}. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#delete NetworkSecuritySecurityProfile#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#update NetworkSecuritySecurityProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#create NetworkSecuritySecurityProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#delete NetworkSecuritySecurityProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#update NetworkSecuritySecurityProfile#update}.

---

### NetworkSecuritySecurityProfileUrlFilteringProfile <a name="NetworkSecuritySecurityProfileUrlFilteringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileUrlFilteringProfile;

NetworkSecuritySecurityProfileUrlFilteringProfile.builder()
//  .urlFilters(IResolvable|java.util.List<NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile.property.urlFilters">urlFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>></code> | url_filters block. |

---

##### `urlFilters`<sup>Optional</sup> <a name="urlFilters" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile.property.urlFilters"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters> getUrlFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>>

url_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#url_filters NetworkSecuritySecurityProfile#url_filters}

---

### NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters <a name="NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters;

NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.builder()
    .filteringAction(java.lang.String)
    .priority(java.lang.Number)
//  .urls(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.filteringAction">filteringAction</a></code> | <code>java.lang.String</code> | The action to take when the filter is applied. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of the filter within the URL filtering profile. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | A list of domain matcher strings that a domain name gets compared with to determine if the filter is applicable. |

---

##### `filteringAction`<sup>Required</sup> <a name="filteringAction" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.filteringAction"></a>

```java
public java.lang.String getFilteringAction();
```

- *Type:* java.lang.String

The action to take when the filter is applied. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#filtering_action NetworkSecuritySecurityProfile#filtering_action}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of the filter within the URL filtering profile.

Must be an integer from 0 and 2147483647, inclusive. Lower integers indicate higher priorities.
The priority of a filter must be unique within a URL filtering profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#priority NetworkSecuritySecurityProfile#priority}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

A list of domain matcher strings that a domain name gets compared with to determine if the filter is applicable.

A domain name must match with at least one of the strings in the list for a filter to be applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_security_security_profile#urls NetworkSecuritySecurityProfile#urls}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference <a name="NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference;

new NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroupInput">interceptEndpointGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `interceptEndpointGroupInput`<sup>Optional</sup> <a name="interceptEndpointGroupInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroupInput"></a>

```java
public java.lang.String getInterceptEndpointGroupInput();
```

- *Type:* java.lang.String

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroup"></a>

```java
public java.lang.String getInterceptEndpointGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.internalValue"></a>

```java
public NetworkSecuritySecurityProfileCustomInterceptProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

---


### NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference <a name="NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference;

new NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resetMirroringDeploymentGroups">resetMirroringDeploymentGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMirroringDeploymentGroups` <a name="resetMirroringDeploymentGroups" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resetMirroringDeploymentGroups"></a>

```java
public void resetMirroringDeploymentGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupType">mirroringEndpointGroupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroupsInput">mirroringDeploymentGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupInput">mirroringEndpointGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroups">mirroringDeploymentGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroup">mirroringEndpointGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mirroringEndpointGroupType`<sup>Required</sup> <a name="mirroringEndpointGroupType" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupType"></a>

```java
public java.lang.String getMirroringEndpointGroupType();
```

- *Type:* java.lang.String

---

##### `mirroringDeploymentGroupsInput`<sup>Optional</sup> <a name="mirroringDeploymentGroupsInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroupsInput"></a>

```java
public java.util.List<java.lang.String> getMirroringDeploymentGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mirroringEndpointGroupInput`<sup>Optional</sup> <a name="mirroringEndpointGroupInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupInput"></a>

```java
public java.lang.String getMirroringEndpointGroupInput();
```

- *Type:* java.lang.String

---

##### `mirroringDeploymentGroups`<sup>Required</sup> <a name="mirroringDeploymentGroups" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroups"></a>

```java
public java.util.List<java.lang.String> getMirroringDeploymentGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mirroringEndpointGroup`<sup>Required</sup> <a name="mirroringEndpointGroup" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroup"></a>

```java
public java.lang.String getMirroringEndpointGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.internalValue"></a>

```java
public NetworkSecuritySecurityProfileCustomMirroringProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList <a name="NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList;

new NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get"></a>

```java
public NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference;

new NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference;

new NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides">putAntivirusOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides">putSeverityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides">putThreatOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetAntivirusOverrides">resetAntivirusOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides">resetSeverityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides">resetThreatOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAntivirusOverrides` <a name="putAntivirusOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides"></a>

```java
public void putAntivirusOverrides(IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>>

---

##### `putSeverityOverrides` <a name="putSeverityOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides"></a>

```java
public void putSeverityOverrides(IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>>

---

##### `putThreatOverrides` <a name="putThreatOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides"></a>

```java
public void putThreatOverrides(IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>>

---

##### `resetAntivirusOverrides` <a name="resetAntivirusOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetAntivirusOverrides"></a>

```java
public void resetAntivirusOverrides()
```

##### `resetSeverityOverrides` <a name="resetSeverityOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides"></a>

```java
public void resetSeverityOverrides()
```

##### `resetThreatOverrides` <a name="resetThreatOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides"></a>

```java
public void resetThreatOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverrides">antivirusOverrides</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides">severityOverrides</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides">threatOverrides</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverridesInput">antivirusOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput">severityOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput">threatOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `antivirusOverrides`<sup>Required</sup> <a name="antivirusOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverrides"></a>

```java
public NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList getAntivirusOverrides();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList</a>

---

##### `severityOverrides`<sup>Required</sup> <a name="severityOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides"></a>

```java
public NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList getSeverityOverrides();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a>

---

##### `threatOverrides`<sup>Required</sup> <a name="threatOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides"></a>

```java
public NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList getThreatOverrides();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a>

---

##### `antivirusOverridesInput`<sup>Optional</sup> <a name="antivirusOverridesInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverridesInput"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides> getAntivirusOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>>

---

##### `severityOverridesInput`<sup>Optional</sup> <a name="severityOverridesInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides> getSeverityOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>>

---

##### `threatOverridesInput`<sup>Optional</sup> <a name="threatOverridesInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides> getThreatOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue"></a>

```java
public NetworkSecuritySecurityProfileThreatPreventionProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList;

new NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get"></a>

```java
public NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference;

new NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList;

new NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get"></a>

```java
public NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference;

new NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput">threatIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId">threatId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `threatIdInput`<sup>Optional</sup> <a name="threatIdInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput"></a>

```java
public java.lang.String getThreatIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `threatId`<sup>Required</sup> <a name="threatId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId"></a>

```java
public java.lang.String getThreatId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>

---


### NetworkSecuritySecurityProfileTimeoutsOutputReference <a name="NetworkSecuritySecurityProfileTimeoutsOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileTimeoutsOutputReference;

new NetworkSecuritySecurityProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkSecuritySecurityProfileTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

---


### NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference <a name="NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference;

new NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.putUrlFilters">putUrlFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resetUrlFilters">resetUrlFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUrlFilters` <a name="putUrlFilters" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.putUrlFilters"></a>

```java
public void putUrlFilters(IResolvable|java.util.List<NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.putUrlFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>>

---

##### `resetUrlFilters` <a name="resetUrlFilters" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resetUrlFilters"></a>

```java
public void resetUrlFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFilters">urlFilters</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFiltersInput">urlFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urlFilters`<sup>Required</sup> <a name="urlFilters" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFilters"></a>

```java
public NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList getUrlFilters();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList</a>

---

##### `urlFiltersInput`<sup>Optional</sup> <a name="urlFiltersInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFiltersInput"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters> getUrlFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.internalValue"></a>

```java
public NetworkSecuritySecurityProfileUrlFilteringProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a>

---


### NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList <a name="NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList;

new NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.get"></a>

```java
public NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>>

---


### NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference <a name="NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_security_security_profile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference;

new NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resetUrls">resetUrls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrls` <a name="resetUrls" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resetUrls"></a>

```java
public void resetUrls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringActionInput">filteringActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urlsInput">urlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringAction">filteringAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filteringActionInput`<sup>Optional</sup> <a name="filteringActionInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringActionInput"></a>

```java
public java.lang.String getFilteringActionInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `urlsInput`<sup>Optional</sup> <a name="urlsInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urlsInput"></a>

```java
public java.util.List<java.lang.String> getUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filteringAction`<sup>Required</sup> <a name="filteringAction" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringAction"></a>

```java
public java.lang.String getFilteringAction();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>

---



