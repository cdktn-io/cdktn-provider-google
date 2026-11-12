# `discoveryEngineProjectProvision` Submodule <a name="`discoveryEngineProjectProvision` Submodule" id="@cdktn/provider-google.discoveryEngineProjectProvision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineProjectProvision <a name="DiscoveryEngineProjectProvision" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision google_discovery_engine_project_provision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_project_provision.DiscoveryEngineProjectProvision;

DiscoveryEngineProjectProvision.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .acceptDataUseTerms(java.lang.Boolean|IResolvable)
//  .dataUseTermsVersion(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .saasParams(DiscoveryEngineProjectProvisionSaasParams)
//  .timeouts(DiscoveryEngineProjectProvisionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.acceptDataUseTerms">acceptDataUseTerms</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms). |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.dataUseTermsVersion">dataUseTermsVersion</a></code> | <code>java.lang.String</code> | The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#id DiscoveryEngineProjectProvision#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location in which to provision the project, such as 'global', 'us', or 'eu'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#project DiscoveryEngineProjectProvision#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.saasParams">saasParams</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a></code> | saas_params block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceptDataUseTerms`<sup>Optional</sup> <a name="acceptDataUseTerms" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.acceptDataUseTerms"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#accept_data_use_terms DiscoveryEngineProjectProvision#accept_data_use_terms}

---

##### `dataUseTermsVersion`<sup>Optional</sup> <a name="dataUseTermsVersion" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.dataUseTermsVersion"></a>

- *Type:* java.lang.String

The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#data_use_terms_version DiscoveryEngineProjectProvision#data_use_terms_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#id DiscoveryEngineProjectProvision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location in which to provision the project, such as 'global', 'us', or 'eu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#location DiscoveryEngineProjectProvision#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#project DiscoveryEngineProjectProvision#project}.

---

##### `saasParams`<sup>Optional</sup> <a name="saasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.saasParams"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

saas_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#saas_params DiscoveryEngineProjectProvision#saas_params}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#timeouts DiscoveryEngineProjectProvision#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putSaasParams">putSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetAcceptDataUseTerms">resetAcceptDataUseTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetDataUseTermsVersion">resetDataUseTermsVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetSaasParams">resetSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSaasParams` <a name="putSaasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putSaasParams"></a>

```java
public void putSaasParams(DiscoveryEngineProjectProvisionSaasParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putSaasParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putTimeouts"></a>

```java
public void putTimeouts(DiscoveryEngineProjectProvisionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

---

##### `resetAcceptDataUseTerms` <a name="resetAcceptDataUseTerms" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetAcceptDataUseTerms"></a>

```java
public void resetAcceptDataUseTerms()
```

##### `resetDataUseTermsVersion` <a name="resetDataUseTermsVersion" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetDataUseTermsVersion"></a>

```java
public void resetDataUseTermsVersion()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetProject"></a>

```java
public void resetProject()
```

##### `resetSaasParams` <a name="resetSaasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetSaasParams"></a>

```java
public void resetSaasParams()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isConstruct"></a>

```java
import io.cdktn.providers.google.discovery_engine_project_provision.DiscoveryEngineProjectProvision;

DiscoveryEngineProjectProvision.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformElement"></a>

```java
import io.cdktn.providers.google.discovery_engine_project_provision.DiscoveryEngineProjectProvision;

DiscoveryEngineProjectProvision.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformResource"></a>

```java
import io.cdktn.providers.google.discovery_engine_project_provision.DiscoveryEngineProjectProvision;

DiscoveryEngineProjectProvision.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.discovery_engine_project_provision.DiscoveryEngineProjectProvision;

DiscoveryEngineProjectProvision.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DiscoveryEngineProjectProvision.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DiscoveryEngineProjectProvision to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DiscoveryEngineProjectProvision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineProjectProvision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParams">saasParams</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference">DiscoveryEngineProjectProvisionSaasParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference">DiscoveryEngineProjectProvisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTermsInput">acceptDataUseTermsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersionInput">dataUseTermsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParamsInput">saasParamsInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTerms">acceptDataUseTerms</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersion">dataUseTermsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `saasParams`<sup>Required</sup> <a name="saasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParams"></a>

```java
public DiscoveryEngineProjectProvisionSaasParamsOutputReference getSaasParams();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference">DiscoveryEngineProjectProvisionSaasParamsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeouts"></a>

```java
public DiscoveryEngineProjectProvisionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference">DiscoveryEngineProjectProvisionTimeoutsOutputReference</a>

---

##### `acceptDataUseTermsInput`<sup>Optional</sup> <a name="acceptDataUseTermsInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTermsInput"></a>

```java
public java.lang.Boolean|IResolvable getAcceptDataUseTermsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataUseTermsVersionInput`<sup>Optional</sup> <a name="dataUseTermsVersionInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersionInput"></a>

```java
public java.lang.String getDataUseTermsVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `saasParamsInput`<sup>Optional</sup> <a name="saasParamsInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParamsInput"></a>

```java
public DiscoveryEngineProjectProvisionSaasParams getSaasParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeoutsInput"></a>

```java
public IResolvable|DiscoveryEngineProjectProvisionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

---

##### `acceptDataUseTerms`<sup>Required</sup> <a name="acceptDataUseTerms" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTerms"></a>

```java
public java.lang.Boolean|IResolvable getAcceptDataUseTerms();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataUseTermsVersion`<sup>Required</sup> <a name="dataUseTermsVersion" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersion"></a>

```java
public java.lang.String getDataUseTermsVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineProjectProvisionConfig <a name="DiscoveryEngineProjectProvisionConfig" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_project_provision.DiscoveryEngineProjectProvisionConfig;

DiscoveryEngineProjectProvisionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .acceptDataUseTerms(java.lang.Boolean|IResolvable)
//  .dataUseTermsVersion(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .saasParams(DiscoveryEngineProjectProvisionSaasParams)
//  .timeouts(DiscoveryEngineProjectProvisionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms">acceptDataUseTerms</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms). |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion">dataUseTermsVersion</a></code> | <code>java.lang.String</code> | The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#id DiscoveryEngineProjectProvision#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location in which to provision the project, such as 'global', 'us', or 'eu'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#project DiscoveryEngineProjectProvision#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.saasParams">saasParams</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a></code> | saas_params block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceptDataUseTerms`<sup>Optional</sup> <a name="acceptDataUseTerms" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms"></a>

```java
public java.lang.Boolean|IResolvable getAcceptDataUseTerms();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#accept_data_use_terms DiscoveryEngineProjectProvision#accept_data_use_terms}

---

##### `dataUseTermsVersion`<sup>Optional</sup> <a name="dataUseTermsVersion" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion"></a>

```java
public java.lang.String getDataUseTermsVersion();
```

- *Type:* java.lang.String

The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#data_use_terms_version DiscoveryEngineProjectProvision#data_use_terms_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#id DiscoveryEngineProjectProvision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location in which to provision the project, such as 'global', 'us', or 'eu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#location DiscoveryEngineProjectProvision#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#project DiscoveryEngineProjectProvision#project}.

---

##### `saasParams`<sup>Optional</sup> <a name="saasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.saasParams"></a>

```java
public DiscoveryEngineProjectProvisionSaasParams getSaasParams();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

saas_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#saas_params DiscoveryEngineProjectProvision#saas_params}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.timeouts"></a>

```java
public DiscoveryEngineProjectProvisionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#timeouts DiscoveryEngineProjectProvision#timeouts}

---

### DiscoveryEngineProjectProvisionSaasParams <a name="DiscoveryEngineProjectProvisionSaasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_project_provision.DiscoveryEngineProjectProvisionSaasParams;

DiscoveryEngineProjectProvisionSaasParams.builder()
//  .acceptBizQos(java.lang.Boolean|IResolvable)
//  .isBiz(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos">acceptBizQos</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.isBiz">isBiz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the current request is for Business edition ('true') or not ('false'). |

---

##### `acceptBizQos`<sup>Optional</sup> <a name="acceptBizQos" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos"></a>

```java
public java.lang.Boolean|IResolvable getAcceptBizQos();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#accept_biz_qos DiscoveryEngineProjectProvision#accept_biz_qos}

---

##### `isBiz`<sup>Optional</sup> <a name="isBiz" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.isBiz"></a>

```java
public java.lang.Boolean|IResolvable getIsBiz();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the current request is for Business edition ('true') or not ('false').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#is_biz DiscoveryEngineProjectProvision#is_biz}

---

### DiscoveryEngineProjectProvisionTimeouts <a name="DiscoveryEngineProjectProvisionTimeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_project_provision.DiscoveryEngineProjectProvisionTimeouts;

DiscoveryEngineProjectProvisionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#create DiscoveryEngineProjectProvision#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#delete DiscoveryEngineProjectProvision#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#create DiscoveryEngineProjectProvision#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#delete DiscoveryEngineProjectProvision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineProjectProvisionSaasParamsOutputReference <a name="DiscoveryEngineProjectProvisionSaasParamsOutputReference" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_project_provision.DiscoveryEngineProjectProvisionSaasParamsOutputReference;

new DiscoveryEngineProjectProvisionSaasParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos">resetAcceptBizQos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz">resetIsBiz</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceptBizQos` <a name="resetAcceptBizQos" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos"></a>

```java
public void resetAcceptBizQos()
```

##### `resetIsBiz` <a name="resetIsBiz" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz"></a>

```java
public void resetIsBiz()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput">acceptBizQosInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput">isBizInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos">acceptBizQos</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz">isBiz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceptBizQosInput`<sup>Optional</sup> <a name="acceptBizQosInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput"></a>

```java
public java.lang.Boolean|IResolvable getAcceptBizQosInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isBizInput`<sup>Optional</sup> <a name="isBizInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput"></a>

```java
public java.lang.Boolean|IResolvable getIsBizInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `acceptBizQos`<sup>Required</sup> <a name="acceptBizQos" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos"></a>

```java
public java.lang.Boolean|IResolvable getAcceptBizQos();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isBiz`<sup>Required</sup> <a name="isBiz" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz"></a>

```java
public java.lang.Boolean|IResolvable getIsBiz();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineProjectProvisionSaasParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

---


### DiscoveryEngineProjectProvisionTimeoutsOutputReference <a name="DiscoveryEngineProjectProvisionTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_project_provision.DiscoveryEngineProjectProvisionTimeoutsOutputReference;

new DiscoveryEngineProjectProvisionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineProjectProvisionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

---



