# `appEngineStandardAppVersion` Submodule <a name="`appEngineStandardAppVersion` Submodule" id="@cdktn/provider-google.appEngineStandardAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineStandardAppVersion <a name="AppEngineStandardAppVersion" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version google_app_engine_standard_app_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersion(Construct Scope, string Id, AppEngineStandardAppVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig">AppEngineStandardAppVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig">AppEngineStandardAppVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling">PutAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling">PutBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint">PutEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers">PutHandlers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries">PutLibraries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling">PutManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector">PutVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAppEngineApis">ResetAppEngineApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAutomaticScaling">ResetAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetBasicScaling">ResetBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetDeleteServiceOnDestroy">ResetDeleteServiceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetEnvVariables">ResetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetHandlers">ResetHandlers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInboundServices">ResetInboundServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInstanceClass">ResetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetLibraries">ResetLibraries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetManualScaling">ResetManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetNoopOnDestroy">ResetNoopOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetRuntimeApiVersion">ResetRuntimeApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetThreadsafe">ResetThreadsafe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVersionId">ResetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVpcAccessConnector">ResetVpcAccessConnector</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomaticScaling` <a name="PutAutomaticScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling"></a>

```csharp
private void PutAutomaticScaling(AppEngineStandardAppVersionAutomaticScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

---

##### `PutBasicScaling` <a name="PutBasicScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling"></a>

```csharp
private void PutBasicScaling(AppEngineStandardAppVersionBasicScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

---

##### `PutDeployment` <a name="PutDeployment" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment"></a>

```csharp
private void PutDeployment(AppEngineStandardAppVersionDeployment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

---

##### `PutEntrypoint` <a name="PutEntrypoint" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint"></a>

```csharp
private void PutEntrypoint(AppEngineStandardAppVersionEntrypoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

---

##### `PutHandlers` <a name="PutHandlers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers"></a>

```csharp
private void PutHandlers(IResolvable|AppEngineStandardAppVersionHandlers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]

---

##### `PutLibraries` <a name="PutLibraries" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries"></a>

```csharp
private void PutLibraries(IResolvable|AppEngineStandardAppVersionLibraries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]

---

##### `PutManualScaling` <a name="PutManualScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling"></a>

```csharp
private void PutManualScaling(AppEngineStandardAppVersionManualScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(AppEngineStandardAppVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

---

##### `PutVpcAccessConnector` <a name="PutVpcAccessConnector" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector"></a>

```csharp
private void PutVpcAccessConnector(AppEngineStandardAppVersionVpcAccessConnector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `ResetAppEngineApis` <a name="ResetAppEngineApis" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAppEngineApis"></a>

```csharp
private void ResetAppEngineApis()
```

##### `ResetAutomaticScaling` <a name="ResetAutomaticScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAutomaticScaling"></a>

```csharp
private void ResetAutomaticScaling()
```

##### `ResetBasicScaling` <a name="ResetBasicScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetBasicScaling"></a>

```csharp
private void ResetBasicScaling()
```

##### `ResetDeleteServiceOnDestroy` <a name="ResetDeleteServiceOnDestroy" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetDeleteServiceOnDestroy"></a>

```csharp
private void ResetDeleteServiceOnDestroy()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEnvVariables` <a name="ResetEnvVariables" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetEnvVariables"></a>

```csharp
private void ResetEnvVariables()
```

##### `ResetHandlers` <a name="ResetHandlers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetHandlers"></a>

```csharp
private void ResetHandlers()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInboundServices` <a name="ResetInboundServices" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInboundServices"></a>

```csharp
private void ResetInboundServices()
```

##### `ResetInstanceClass` <a name="ResetInstanceClass" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInstanceClass"></a>

```csharp
private void ResetInstanceClass()
```

##### `ResetLibraries` <a name="ResetLibraries" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetLibraries"></a>

```csharp
private void ResetLibraries()
```

##### `ResetManualScaling` <a name="ResetManualScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetManualScaling"></a>

```csharp
private void ResetManualScaling()
```

##### `ResetNoopOnDestroy` <a name="ResetNoopOnDestroy" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetNoopOnDestroy"></a>

```csharp
private void ResetNoopOnDestroy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRuntimeApiVersion` <a name="ResetRuntimeApiVersion" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetRuntimeApiVersion"></a>

```csharp
private void ResetRuntimeApiVersion()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetThreadsafe` <a name="ResetThreadsafe" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetThreadsafe"></a>

```csharp
private void ResetThreadsafe()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVersionId"></a>

```csharp
private void ResetVersionId()
```

##### `ResetVpcAccessConnector` <a name="ResetVpcAccessConnector" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVpcAccessConnector"></a>

```csharp
private void ResetVpcAccessConnector()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppEngineStandardAppVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

AppEngineStandardAppVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

AppEngineStandardAppVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

AppEngineStandardAppVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

AppEngineStandardAppVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppEngineStandardAppVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppEngineStandardAppVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppEngineStandardAppVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppEngineStandardAppVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference">AppEngineStandardAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScaling">BasicScaling</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference">AppEngineStandardAppVersionBasicScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deployment">Deployment</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference">AppEngineStandardAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference">AppEngineStandardAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlers">Handlers</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList">AppEngineStandardAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.libraries">Libraries</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList">AppEngineStandardAppVersionLibrariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference">AppEngineStandardAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference">AppEngineStandardAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference">AppEngineStandardAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApisInput">AppEngineApisInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScalingInput">AutomaticScalingInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScalingInput">BasicScalingInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroyInput">DeleteServiceOnDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypointInput">EntrypointInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariablesInput">EnvVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlersInput">HandlersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServicesInput">InboundServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClassInput">InstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.librariesInput">LibrariesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScalingInput">ManualScalingInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroyInput">NoopOnDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersionInput">RuntimeApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafeInput">ThreadsafeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnectorInput">VpcAccessConnectorInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApis">AppEngineApis</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariables">EnvVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServices">InboundServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClass">InstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafe">Threadsafe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutomaticScaling`<sup>Required</sup> <a name="AutomaticScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScaling"></a>

```csharp
public AppEngineStandardAppVersionAutomaticScalingOutputReference AutomaticScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference">AppEngineStandardAppVersionAutomaticScalingOutputReference</a>

---

##### `BasicScaling`<sup>Required</sup> <a name="BasicScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScaling"></a>

```csharp
public AppEngineStandardAppVersionBasicScalingOutputReference BasicScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference">AppEngineStandardAppVersionBasicScalingOutputReference</a>

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deployment"></a>

```csharp
public AppEngineStandardAppVersionDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference">AppEngineStandardAppVersionDeploymentOutputReference</a>

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypoint"></a>

```csharp
public AppEngineStandardAppVersionEntrypointOutputReference Entrypoint { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference">AppEngineStandardAppVersionEntrypointOutputReference</a>

---

##### `Handlers`<sup>Required</sup> <a name="Handlers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlers"></a>

```csharp
public AppEngineStandardAppVersionHandlersList Handlers { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList">AppEngineStandardAppVersionHandlersList</a>

---

##### `Libraries`<sup>Required</sup> <a name="Libraries" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.libraries"></a>

```csharp
public AppEngineStandardAppVersionLibrariesList Libraries { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList">AppEngineStandardAppVersionLibrariesList</a>

---

##### `ManualScaling`<sup>Required</sup> <a name="ManualScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScaling"></a>

```csharp
public AppEngineStandardAppVersionManualScalingOutputReference ManualScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference">AppEngineStandardAppVersionManualScalingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeouts"></a>

```csharp
public AppEngineStandardAppVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference">AppEngineStandardAppVersionTimeoutsOutputReference</a>

---

##### `VpcAccessConnector`<sup>Required</sup> <a name="VpcAccessConnector" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnector"></a>

```csharp
public AppEngineStandardAppVersionVpcAccessConnectorOutputReference VpcAccessConnector { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference">AppEngineStandardAppVersionVpcAccessConnectorOutputReference</a>

---

##### `AppEngineApisInput`<sup>Optional</sup> <a name="AppEngineApisInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApisInput"></a>

```csharp
public bool|IResolvable AppEngineApisInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutomaticScalingInput`<sup>Optional</sup> <a name="AutomaticScalingInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScalingInput"></a>

```csharp
public AppEngineStandardAppVersionAutomaticScaling AutomaticScalingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

---

##### `BasicScalingInput`<sup>Optional</sup> <a name="BasicScalingInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScalingInput"></a>

```csharp
public AppEngineStandardAppVersionBasicScaling BasicScalingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

---

##### `DeleteServiceOnDestroyInput`<sup>Optional</sup> <a name="DeleteServiceOnDestroyInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroyInput"></a>

```csharp
public bool|IResolvable DeleteServiceOnDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deploymentInput"></a>

```csharp
public AppEngineStandardAppVersionDeployment DeploymentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypointInput"></a>

```csharp
public AppEngineStandardAppVersionEntrypoint EntrypointInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

---

##### `EnvVariablesInput`<sup>Optional</sup> <a name="EnvVariablesInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HandlersInput`<sup>Optional</sup> <a name="HandlersInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlersInput"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionHandlers[] HandlersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InboundServicesInput`<sup>Optional</sup> <a name="InboundServicesInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServicesInput"></a>

```csharp
public string[] InboundServicesInput { get; }
```

- *Type:* string[]

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClassInput"></a>

```csharp
public string InstanceClassInput { get; }
```

- *Type:* string

---

##### `LibrariesInput`<sup>Optional</sup> <a name="LibrariesInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.librariesInput"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionLibraries[] LibrariesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]

---

##### `ManualScalingInput`<sup>Optional</sup> <a name="ManualScalingInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScalingInput"></a>

```csharp
public AppEngineStandardAppVersionManualScaling ManualScalingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

---

##### `NoopOnDestroyInput`<sup>Optional</sup> <a name="NoopOnDestroyInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroyInput"></a>

```csharp
public bool|IResolvable NoopOnDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuntimeApiVersionInput`<sup>Optional</sup> <a name="RuntimeApiVersionInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersionInput"></a>

```csharp
public string RuntimeApiVersionInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ThreadsafeInput`<sup>Optional</sup> <a name="ThreadsafeInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafeInput"></a>

```csharp
public bool|IResolvable ThreadsafeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeoutsInput"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `VpcAccessConnectorInput`<sup>Optional</sup> <a name="VpcAccessConnectorInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnectorInput"></a>

```csharp
public AppEngineStandardAppVersionVpcAccessConnector VpcAccessConnectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `AppEngineApis`<sup>Required</sup> <a name="AppEngineApis" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApis"></a>

```csharp
public bool|IResolvable AppEngineApis { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteServiceOnDestroy`<sup>Required</sup> <a name="DeleteServiceOnDestroy" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroy"></a>

```csharp
public bool|IResolvable DeleteServiceOnDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `EnvVariables`<sup>Required</sup> <a name="EnvVariables" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InboundServices`<sup>Required</sup> <a name="InboundServices" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServices"></a>

```csharp
public string[] InboundServices { get; }
```

- *Type:* string[]

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClass"></a>

```csharp
public string InstanceClass { get; }
```

- *Type:* string

---

##### `NoopOnDestroy`<sup>Required</sup> <a name="NoopOnDestroy" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroy"></a>

```csharp
public bool|IResolvable NoopOnDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `RuntimeApiVersion`<sup>Required</sup> <a name="RuntimeApiVersion" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersion"></a>

```csharp
public string RuntimeApiVersion { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Threadsafe`<sup>Required</sup> <a name="Threadsafe" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafe"></a>

```csharp
public bool|IResolvable Threadsafe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineStandardAppVersionAutomaticScaling <a name="AppEngineStandardAppVersionAutomaticScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionAutomaticScaling {
    double MaxConcurrentRequests = null,
    double MaxIdleInstances = null,
    string MaxPendingLatency = null,
    double MinIdleInstances = null,
    string MinPendingLatency = null,
    AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings StandardSchedulerSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>double</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>double</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>string</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances">MinIdleInstances</a></code> | <code>double</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency">MinPendingLatency</a></code> | <code>string</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings">StandardSchedulerSettings</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | standard_scheduler_settings block. |

---

##### `MaxConcurrentRequests`<sup>Optional</sup> <a name="MaxConcurrentRequests" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```csharp
public double MaxConcurrentRequests { get; set; }
```

- *Type:* double

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#max_concurrent_requests AppEngineStandardAppVersion#max_concurrent_requests}

---

##### `MaxIdleInstances`<sup>Optional</sup> <a name="MaxIdleInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```csharp
public double MaxIdleInstances { get; set; }
```

- *Type:* double

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#max_idle_instances AppEngineStandardAppVersion#max_idle_instances}

---

##### `MaxPendingLatency`<sup>Optional</sup> <a name="MaxPendingLatency" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```csharp
public string MaxPendingLatency { get; set; }
```

- *Type:* string

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#max_pending_latency AppEngineStandardAppVersion#max_pending_latency}

---

##### `MinIdleInstances`<sup>Optional</sup> <a name="MinIdleInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances"></a>

```csharp
public double MinIdleInstances { get; set; }
```

- *Type:* double

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#min_idle_instances AppEngineStandardAppVersion#min_idle_instances}

---

##### `MinPendingLatency`<sup>Optional</sup> <a name="MinPendingLatency" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency"></a>

```csharp
public string MinPendingLatency { get; set; }
```

- *Type:* string

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#min_pending_latency AppEngineStandardAppVersion#min_pending_latency}

---

##### `StandardSchedulerSettings`<sup>Optional</sup> <a name="StandardSchedulerSettings" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings"></a>

```csharp
public AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings StandardSchedulerSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

standard_scheduler_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#standard_scheduler_settings AppEngineStandardAppVersion#standard_scheduler_settings}

---

### AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings <a name="AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings {
    double MaxInstances = null,
    double MinInstances = null,
    double TargetCpuUtilization = null,
    double TargetThroughputUtilization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances">MaxInstances</a></code> | <code>double</code> | Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances">MinInstances</a></code> | <code>double</code> | Minimum number of instances to run for this version. Set to zero to disable minInstances configuration. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization">TargetCpuUtilization</a></code> | <code>double</code> | Target CPU utilization ratio to maintain when scaling. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization">TargetThroughputUtilization</a></code> | <code>double</code> | Target throughput utilization ratio to maintain when scaling. |

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances"></a>

```csharp
public double MaxInstances { get; set; }
```

- *Type:* double

Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.

**Note:** Starting from March 2025, App Engine sets the maxInstances default for standard environment deployments to 20. This change doesn't impact existing apps. To override the default, specify a new value between 0 and 2147483647, and deploy a new version or redeploy over an existing version. To disable the maxInstances default configuration setting, specify the maximum permitted value 2147483647.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#max_instances AppEngineStandardAppVersion#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances"></a>

```csharp
public double MinInstances { get; set; }
```

- *Type:* double

Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#min_instances AppEngineStandardAppVersion#min_instances}

---

##### `TargetCpuUtilization`<sup>Optional</sup> <a name="TargetCpuUtilization" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization"></a>

```csharp
public double TargetCpuUtilization { get; set; }
```

- *Type:* double

Target CPU utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#target_cpu_utilization AppEngineStandardAppVersion#target_cpu_utilization}

---

##### `TargetThroughputUtilization`<sup>Optional</sup> <a name="TargetThroughputUtilization" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization"></a>

```csharp
public double TargetThroughputUtilization { get; set; }
```

- *Type:* double

Target throughput utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#target_throughput_utilization AppEngineStandardAppVersion#target_throughput_utilization}

---

### AppEngineStandardAppVersionBasicScaling <a name="AppEngineStandardAppVersionBasicScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionBasicScaling {
    double MaxInstances,
    string IdleTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.maxInstances">MaxInstances</a></code> | <code>double</code> | Maximum number of instances to create for this version. Must be in the range [1.0, 200.0]. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | Duration of time after the last request that an instance must wait before the instance is shut down. |

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.maxInstances"></a>

```csharp
public double MaxInstances { get; set; }
```

- *Type:* double

Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#max_instances AppEngineStandardAppVersion#max_instances}

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; set; }
```

- *Type:* string

Duration of time after the last request that an instance must wait before the instance is shut down.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#idle_timeout AppEngineStandardAppVersion#idle_timeout}

---

### AppEngineStandardAppVersionConfig <a name="AppEngineStandardAppVersionConfig" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    AppEngineStandardAppVersionDeployment Deployment,
    AppEngineStandardAppVersionEntrypoint Entrypoint,
    string Runtime,
    string Service,
    bool|IResolvable AppEngineApis = null,
    AppEngineStandardAppVersionAutomaticScaling AutomaticScaling = null,
    AppEngineStandardAppVersionBasicScaling BasicScaling = null,
    bool|IResolvable DeleteServiceOnDestroy = null,
    string DeletionPolicy = null,
    System.Collections.Generic.IDictionary<string, string> EnvVariables = null,
    IResolvable|AppEngineStandardAppVersionHandlers[] Handlers = null,
    string Id = null,
    string[] InboundServices = null,
    string InstanceClass = null,
    IResolvable|AppEngineStandardAppVersionLibraries[] Libraries = null,
    AppEngineStandardAppVersionManualScaling ManualScaling = null,
    bool|IResolvable NoopOnDestroy = null,
    string Project = null,
    string RuntimeApiVersion = null,
    string ServiceAccount = null,
    bool|IResolvable Threadsafe = null,
    AppEngineStandardAppVersionTimeouts Timeouts = null,
    string VersionId = null,
    AppEngineStandardAppVersionVpcAccessConnector VpcAccessConnector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deployment">Deployment</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtime">Runtime</a></code> | <code>string</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.service">Service</a></code> | <code>string</code> | AppEngine service resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.appEngineApis">AppEngineApis</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Allows App Engine second generation runtimes to access the legacy bundled services. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.basicScaling">BasicScaling</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | basic_scaling block. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.envVariables">EnvVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables available to the application. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.handlers">Handlers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]</code> | handlers block. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#id AppEngineStandardAppVersion#id}. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.inboundServices">InboundServices</a></code> | <code>string[]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.instanceClass">InstanceClass</a></code> | <code>string</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.libraries">Libraries</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]</code> | libraries block. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#project AppEngineStandardAppVersion#project}. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>string</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.threadsafe">Threadsafe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether multiple requests can be dispatched to this version at once. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.versionId">VersionId</a></code> | <code>string</code> | Relative name of the version within the service. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deployment"></a>

```csharp
public AppEngineStandardAppVersionDeployment Deployment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#deployment AppEngineStandardAppVersion#deployment}

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.entrypoint"></a>

```csharp
public AppEngineStandardAppVersionEntrypoint Entrypoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#entrypoint AppEngineStandardAppVersion#entrypoint}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#runtime AppEngineStandardAppVersion#runtime}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

AppEngine service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#service AppEngineStandardAppVersion#service}

---

##### `AppEngineApis`<sup>Optional</sup> <a name="AppEngineApis" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.appEngineApis"></a>

```csharp
public bool|IResolvable AppEngineApis { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Allows App Engine second generation runtimes to access the legacy bundled services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#app_engine_apis AppEngineStandardAppVersion#app_engine_apis}

---

##### `AutomaticScaling`<sup>Optional</sup> <a name="AutomaticScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.automaticScaling"></a>

```csharp
public AppEngineStandardAppVersionAutomaticScaling AutomaticScaling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#automatic_scaling AppEngineStandardAppVersion#automatic_scaling}

---

##### `BasicScaling`<sup>Optional</sup> <a name="BasicScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.basicScaling"></a>

```csharp
public AppEngineStandardAppVersionBasicScaling BasicScaling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

basic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#basic_scaling AppEngineStandardAppVersion#basic_scaling}

---

##### `DeleteServiceOnDestroy`<sup>Optional</sup> <a name="DeleteServiceOnDestroy" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy"></a>

```csharp
public bool|IResolvable DeleteServiceOnDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#delete_service_on_destroy AppEngineStandardAppVersion#delete_service_on_destroy}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#deletion_policy AppEngineStandardAppVersion#deletion_policy}

---

##### `EnvVariables`<sup>Optional</sup> <a name="EnvVariables" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.envVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables available to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#env_variables AppEngineStandardAppVersion#env_variables}

---

##### `Handlers`<sup>Optional</sup> <a name="Handlers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.handlers"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionHandlers[] Handlers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#handlers AppEngineStandardAppVersion#handlers}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#id AppEngineStandardAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InboundServices`<sup>Optional</sup> <a name="InboundServices" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.inboundServices"></a>

```csharp
public string[] InboundServices { get; set; }
```

- *Type:* string[]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#inbound_services AppEngineStandardAppVersion#inbound_services}

---

##### `InstanceClass`<sup>Optional</sup> <a name="InstanceClass" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.instanceClass"></a>

```csharp
public string InstanceClass { get; set; }
```

- *Type:* string

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#instance_class AppEngineStandardAppVersion#instance_class}

---

##### `Libraries`<sup>Optional</sup> <a name="Libraries" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.libraries"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionLibraries[] Libraries { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#libraries AppEngineStandardAppVersion#libraries}

---

##### `ManualScaling`<sup>Optional</sup> <a name="ManualScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.manualScaling"></a>

```csharp
public AppEngineStandardAppVersionManualScaling ManualScaling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#manual_scaling AppEngineStandardAppVersion#manual_scaling}

---

##### `NoopOnDestroy`<sup>Optional</sup> <a name="NoopOnDestroy" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.noopOnDestroy"></a>

```csharp
public bool|IResolvable NoopOnDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#noop_on_destroy AppEngineStandardAppVersion#noop_on_destroy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#project AppEngineStandardAppVersion#project}.

---

##### `RuntimeApiVersion`<sup>Optional</sup> <a name="RuntimeApiVersion" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtimeApiVersion"></a>

```csharp
public string RuntimeApiVersion { get; set; }
```

- *Type:* string

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#runtime_api_version AppEngineStandardAppVersion#runtime_api_version}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#service_account AppEngineStandardAppVersion#service_account}

---

##### `Threadsafe`<sup>Optional</sup> <a name="Threadsafe" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.threadsafe"></a>

```csharp
public bool|IResolvable Threadsafe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether multiple requests can be dispatched to this version at once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#threadsafe AppEngineStandardAppVersion#threadsafe}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.timeouts"></a>

```csharp
public AppEngineStandardAppVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#timeouts AppEngineStandardAppVersion#timeouts}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#version_id AppEngineStandardAppVersion#version_id}

---

##### `VpcAccessConnector`<sup>Optional</sup> <a name="VpcAccessConnector" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.vpcAccessConnector"></a>

```csharp
public AppEngineStandardAppVersionVpcAccessConnector VpcAccessConnector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#vpc_access_connector AppEngineStandardAppVersion#vpc_access_connector}

---

### AppEngineStandardAppVersionDeployment <a name="AppEngineStandardAppVersionDeployment" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionDeployment {
    IResolvable|AppEngineStandardAppVersionDeploymentFiles[] Files = null,
    AppEngineStandardAppVersionDeploymentZip Zip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.files">Files</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]</code> | files block. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.zip">Zip</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | zip block. |

---

##### `Files`<sup>Optional</sup> <a name="Files" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.files"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionDeploymentFiles[] Files { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#files AppEngineStandardAppVersion#files}

---

##### `Zip`<sup>Optional</sup> <a name="Zip" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.zip"></a>

```csharp
public AppEngineStandardAppVersionDeploymentZip Zip { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#zip AppEngineStandardAppVersion#zip}

---

### AppEngineStandardAppVersionDeploymentFiles <a name="AppEngineStandardAppVersionDeploymentFiles" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionDeploymentFiles {
    string Name,
    string SourceUrl,
    string Sha1Sum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sha1Sum">Sha1Sum</a></code> | <code>string</code> | SHA1 checksum of the file. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}.

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; set; }
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#source_url AppEngineStandardAppVersion#source_url}

---

##### `Sha1Sum`<sup>Optional</sup> <a name="Sha1Sum" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sha1Sum"></a>

```csharp
public string Sha1Sum { get; set; }
```

- *Type:* string

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#sha1_sum AppEngineStandardAppVersion#sha1_sum}

---

### AppEngineStandardAppVersionDeploymentZip <a name="AppEngineStandardAppVersionDeploymentZip" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionDeploymentZip {
    string SourceUrl,
    double FilesCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.filesCount">FilesCount</a></code> | <code>double</code> | files count. |

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; set; }
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#source_url AppEngineStandardAppVersion#source_url}

---

##### `FilesCount`<sup>Optional</sup> <a name="FilesCount" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.filesCount"></a>

```csharp
public double FilesCount { get; set; }
```

- *Type:* double

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#files_count AppEngineStandardAppVersion#files_count}

---

### AppEngineStandardAppVersionEntrypoint <a name="AppEngineStandardAppVersionEntrypoint" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionEntrypoint {
    string Shell
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.property.shell">Shell</a></code> | <code>string</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.property.shell"></a>

```csharp
public string Shell { get; set; }
```

- *Type:* string

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#shell AppEngineStandardAppVersion#shell}

---

### AppEngineStandardAppVersionHandlers <a name="AppEngineStandardAppVersionHandlers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionHandlers {
    string AuthFailAction = null,
    string Login = null,
    string RedirectHttpResponseCode = null,
    AppEngineStandardAppVersionHandlersScript Script = null,
    string SecurityLevel = null,
    AppEngineStandardAppVersionHandlersStaticFiles StaticFiles = null,
    string UrlRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.authFailAction">AuthFailAction</a></code> | <code>string</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.login">Login</a></code> | <code>string</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>string</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.script">Script</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.urlRegex">UrlRegex</a></code> | <code>string</code> | URL prefix. |

---

##### `AuthFailAction`<sup>Optional</sup> <a name="AuthFailAction" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.authFailAction"></a>

```csharp
public string AuthFailAction { get; set; }
```

- *Type:* string

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#auth_fail_action AppEngineStandardAppVersion#auth_fail_action}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.login"></a>

```csharp
public string Login { get; set; }
```

- *Type:* string

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#login AppEngineStandardAppVersion#login}

---

##### `RedirectHttpResponseCode`<sup>Optional</sup> <a name="RedirectHttpResponseCode" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode"></a>

```csharp
public string RedirectHttpResponseCode { get; set; }
```

- *Type:* string

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#redirect_http_response_code AppEngineStandardAppVersion#redirect_http_response_code}

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.script"></a>

```csharp
public AppEngineStandardAppVersionHandlersScript Script { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#script AppEngineStandardAppVersion#script}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; set; }
```

- *Type:* string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#security_level AppEngineStandardAppVersion#security_level}

---

##### `StaticFiles`<sup>Optional</sup> <a name="StaticFiles" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.staticFiles"></a>

```csharp
public AppEngineStandardAppVersionHandlersStaticFiles StaticFiles { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#static_files AppEngineStandardAppVersion#static_files}

---

##### `UrlRegex`<sup>Optional</sup> <a name="UrlRegex" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.urlRegex"></a>

```csharp
public string UrlRegex { get; set; }
```

- *Type:* string

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#url_regex AppEngineStandardAppVersion#url_regex}

---

### AppEngineStandardAppVersionHandlersScript <a name="AppEngineStandardAppVersionHandlersScript" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionHandlersScript {
    string ScriptPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.property.scriptPath">ScriptPath</a></code> | <code>string</code> | Path to the script from the application root directory. |

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.property.scriptPath"></a>

```csharp
public string ScriptPath { get; set; }
```

- *Type:* string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#script_path AppEngineStandardAppVersion#script_path}

---

### AppEngineStandardAppVersionHandlersStaticFiles <a name="AppEngineStandardAppVersionHandlersStaticFiles" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionHandlersStaticFiles {
    bool|IResolvable ApplicationReadable = null,
    string Expiration = null,
    System.Collections.Generic.IDictionary<string, string> HttpHeaders = null,
    string MimeType = null,
    string Path = null,
    bool|IResolvable RequireMatchingFile = null,
    string UploadPathRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable">ApplicationReadable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.expiration">Expiration</a></code> | <code>string</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.mimeType">MimeType</a></code> | <code>string</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.path">Path</a></code> | <code>string</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex">UploadPathRegex</a></code> | <code>string</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `ApplicationReadable`<sup>Optional</sup> <a name="ApplicationReadable" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```csharp
public bool|IResolvable ApplicationReadable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#application_readable AppEngineStandardAppVersion#application_readable}

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.expiration"></a>

```csharp
public string Expiration { get; set; }
```

- *Type:* string

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#expiration AppEngineStandardAppVersion#expiration}

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#http_headers AppEngineStandardAppVersion#http_headers}

---

##### `MimeType`<sup>Optional</sup> <a name="MimeType" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.mimeType"></a>

```csharp
public string MimeType { get; set; }
```

- *Type:* string

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#mime_type AppEngineStandardAppVersion#mime_type}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#path AppEngineStandardAppVersion#path}

---

##### `RequireMatchingFile`<sup>Optional</sup> <a name="RequireMatchingFile" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```csharp
public bool|IResolvable RequireMatchingFile { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#require_matching_file AppEngineStandardAppVersion#require_matching_file}

---

##### `UploadPathRegex`<sup>Optional</sup> <a name="UploadPathRegex" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```csharp
public string UploadPathRegex { get; set; }
```

- *Type:* string

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#upload_path_regex AppEngineStandardAppVersion#upload_path_regex}

---

### AppEngineStandardAppVersionLibraries <a name="AppEngineStandardAppVersionLibraries" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionLibraries {
    string Name = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.name">Name</a></code> | <code>string</code> | Name of the library. Example "django". |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.version">Version</a></code> | <code>string</code> | Version of the library to select, or "latest". |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the library. Example "django".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Version of the library to select, or "latest".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#version AppEngineStandardAppVersion#version}

---

### AppEngineStandardAppVersionManualScaling <a name="AppEngineStandardAppVersionManualScaling" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionManualScaling {
    double Instances
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.property.instances">Instances</a></code> | <code>double</code> | Number of instances to assign to the service at the start. |

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.property.instances"></a>

```csharp
public double Instances { get; set; }
```

- *Type:* double

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#instances AppEngineStandardAppVersion#instances}

---

### AppEngineStandardAppVersionTimeouts <a name="AppEngineStandardAppVersionTimeouts" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#create AppEngineStandardAppVersion#create}. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#delete AppEngineStandardAppVersion#delete}. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#update AppEngineStandardAppVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#create AppEngineStandardAppVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#delete AppEngineStandardAppVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#update AppEngineStandardAppVersion#update}.

---

### AppEngineStandardAppVersionVpcAccessConnector <a name="AppEngineStandardAppVersionVpcAccessConnector" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionVpcAccessConnector {
    string Name,
    string EgressSetting = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.name">Name</a></code> | <code>string</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.egressSetting">EgressSetting</a></code> | <code>string</code> | The egress setting for the connector, controlling what traffic is diverted through it. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}

---

##### `EgressSetting`<sup>Optional</sup> <a name="EgressSetting" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.egressSetting"></a>

```csharp
public string EgressSetting { get; set; }
```

- *Type:* string

The egress setting for the connector, controlling what traffic is diverted through it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/app_engine_standard_app_version#egress_setting AppEngineStandardAppVersion#egress_setting}

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineStandardAppVersionAutomaticScalingOutputReference <a name="AppEngineStandardAppVersionAutomaticScalingOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionAutomaticScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings">PutStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">ResetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">ResetMaxIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">ResetMaxPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">ResetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">ResetMinPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings">ResetStandardSchedulerSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStandardSchedulerSettings` <a name="PutStandardSchedulerSettings" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings"></a>

```csharp
private void PutStandardSchedulerSettings(AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `ResetMaxConcurrentRequests` <a name="ResetMaxConcurrentRequests" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```csharp
private void ResetMaxConcurrentRequests()
```

##### `ResetMaxIdleInstances` <a name="ResetMaxIdleInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```csharp
private void ResetMaxIdleInstances()
```

##### `ResetMaxPendingLatency` <a name="ResetMaxPendingLatency" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```csharp
private void ResetMaxPendingLatency()
```

##### `ResetMinIdleInstances` <a name="ResetMinIdleInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```csharp
private void ResetMinIdleInstances()
```

##### `ResetMinPendingLatency` <a name="ResetMinPendingLatency" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```csharp
private void ResetMinPendingLatency()
```

##### `ResetStandardSchedulerSettings` <a name="ResetStandardSchedulerSettings" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings"></a>

```csharp
private void ResetStandardSchedulerSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings">StandardSchedulerSettings</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">MaxConcurrentRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">MaxIdleInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">MaxPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">MinIdleInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">MinPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput">StandardSchedulerSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances">MinIdleInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency">MinPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StandardSchedulerSettings`<sup>Required</sup> <a name="StandardSchedulerSettings" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings"></a>

```csharp
public AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference StandardSchedulerSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a>

---

##### `MaxConcurrentRequestsInput`<sup>Optional</sup> <a name="MaxConcurrentRequestsInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```csharp
public double MaxConcurrentRequestsInput { get; }
```

- *Type:* double

---

##### `MaxIdleInstancesInput`<sup>Optional</sup> <a name="MaxIdleInstancesInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```csharp
public double MaxIdleInstancesInput { get; }
```

- *Type:* double

---

##### `MaxPendingLatencyInput`<sup>Optional</sup> <a name="MaxPendingLatencyInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```csharp
public string MaxPendingLatencyInput { get; }
```

- *Type:* string

---

##### `MinIdleInstancesInput`<sup>Optional</sup> <a name="MinIdleInstancesInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```csharp
public double MinIdleInstancesInput { get; }
```

- *Type:* double

---

##### `MinPendingLatencyInput`<sup>Optional</sup> <a name="MinPendingLatencyInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```csharp
public string MinPendingLatencyInput { get; }
```

- *Type:* string

---

##### `StandardSchedulerSettingsInput`<sup>Optional</sup> <a name="StandardSchedulerSettingsInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput"></a>

```csharp
public AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings StandardSchedulerSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `MaxConcurrentRequests`<sup>Required</sup> <a name="MaxConcurrentRequests" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```csharp
public double MaxConcurrentRequests { get; }
```

- *Type:* double

---

##### `MaxIdleInstances`<sup>Required</sup> <a name="MaxIdleInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```csharp
public double MaxIdleInstances { get; }
```

- *Type:* double

---

##### `MaxPendingLatency`<sup>Required</sup> <a name="MaxPendingLatency" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```csharp
public string MaxPendingLatency { get; }
```

- *Type:* string

---

##### `MinIdleInstances`<sup>Required</sup> <a name="MinIdleInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```csharp
public double MinIdleInstances { get; }
```

- *Type:* double

---

##### `MinPendingLatency`<sup>Required</sup> <a name="MinPendingLatency" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```csharp
public string MinPendingLatency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```csharp
public AppEngineStandardAppVersionAutomaticScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

---


### AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference <a name="AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization">ResetTargetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization">ResetTargetThroughputUtilization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances"></a>

```csharp
private void ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances"></a>

```csharp
private void ResetMinInstances()
```

##### `ResetTargetCpuUtilization` <a name="ResetTargetCpuUtilization" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization"></a>

```csharp
private void ResetTargetCpuUtilization()
```

##### `ResetTargetThroughputUtilization` <a name="ResetTargetThroughputUtilization" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization"></a>

```csharp
private void ResetTargetThroughputUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput">MinInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput">TargetCpuUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput">TargetThroughputUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances">MinInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization">TargetCpuUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization">TargetThroughputUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput"></a>

```csharp
public double MaxInstancesInput { get; }
```

- *Type:* double

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput"></a>

```csharp
public double MinInstancesInput { get; }
```

- *Type:* double

---

##### `TargetCpuUtilizationInput`<sup>Optional</sup> <a name="TargetCpuUtilizationInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput"></a>

```csharp
public double TargetCpuUtilizationInput { get; }
```

- *Type:* double

---

##### `TargetThroughputUtilizationInput`<sup>Optional</sup> <a name="TargetThroughputUtilizationInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput"></a>

```csharp
public double TargetThroughputUtilizationInput { get; }
```

- *Type:* double

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances"></a>

```csharp
public double MinInstances { get; }
```

- *Type:* double

---

##### `TargetCpuUtilization`<sup>Required</sup> <a name="TargetCpuUtilization" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization"></a>

```csharp
public double TargetCpuUtilization { get; }
```

- *Type:* double

---

##### `TargetThroughputUtilization`<sup>Required</sup> <a name="TargetThroughputUtilization" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization"></a>

```csharp
public double TargetThroughputUtilization { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue"></a>

```csharp
public AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---


### AppEngineStandardAppVersionBasicScalingOutputReference <a name="AppEngineStandardAppVersionBasicScalingOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionBasicScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout"></a>

```csharp
private void ResetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput"></a>

```csharp
public string IdleTimeoutInput { get; }
```

- *Type:* string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput"></a>

```csharp
public double MaxInstancesInput { get; }
```

- *Type:* double

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; }
```

- *Type:* string

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue"></a>

```csharp
public AppEngineStandardAppVersionBasicScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

---


### AppEngineStandardAppVersionDeploymentFilesList <a name="AppEngineStandardAppVersionDeploymentFilesList" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionDeploymentFilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get"></a>

```csharp
private AppEngineStandardAppVersionDeploymentFilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.internalValue"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionDeploymentFiles[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]

---


### AppEngineStandardAppVersionDeploymentFilesOutputReference <a name="AppEngineStandardAppVersionDeploymentFilesOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionDeploymentFilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum">ResetSha1Sum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSha1Sum` <a name="ResetSha1Sum" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```csharp
private void ResetSha1Sum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput">Sha1SumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum">Sha1Sum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Sha1SumInput`<sup>Optional</sup> <a name="Sha1SumInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```csharp
public string Sha1SumInput { get; }
```

- *Type:* string

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```csharp
public string SourceUrlInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Sha1Sum`<sup>Required</sup> <a name="Sha1Sum" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```csharp
public string Sha1Sum { get; }
```

- *Type:* string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionDeploymentFiles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>

---


### AppEngineStandardAppVersionDeploymentOutputReference <a name="AppEngineStandardAppVersionDeploymentOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles">PutFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip">PutZip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetFiles">ResetFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetZip">ResetZip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFiles` <a name="PutFiles" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles"></a>

```csharp
private void PutFiles(IResolvable|AppEngineStandardAppVersionDeploymentFiles[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]

---

##### `PutZip` <a name="PutZip" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip"></a>

```csharp
private void PutZip(AppEngineStandardAppVersionDeploymentZip Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

---

##### `ResetFiles` <a name="ResetFiles" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetFiles"></a>

```csharp
private void ResetFiles()
```

##### `ResetZip` <a name="ResetZip" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetZip"></a>

```csharp
private void ResetZip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.files">Files</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList">AppEngineStandardAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zip">Zip</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference">AppEngineStandardAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.filesInput">FilesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zipInput">ZipInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.files"></a>

```csharp
public AppEngineStandardAppVersionDeploymentFilesList Files { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList">AppEngineStandardAppVersionDeploymentFilesList</a>

---

##### `Zip`<sup>Required</sup> <a name="Zip" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zip"></a>

```csharp
public AppEngineStandardAppVersionDeploymentZipOutputReference Zip { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference">AppEngineStandardAppVersionDeploymentZipOutputReference</a>

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.filesInput"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionDeploymentFiles[] FilesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>[]

---

##### `ZipInput`<sup>Optional</sup> <a name="ZipInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zipInput"></a>

```csharp
public AppEngineStandardAppVersionDeploymentZip ZipInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.internalValue"></a>

```csharp
public AppEngineStandardAppVersionDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

---


### AppEngineStandardAppVersionDeploymentZipOutputReference <a name="AppEngineStandardAppVersionDeploymentZipOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionDeploymentZipOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount">ResetFilesCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilesCount` <a name="ResetFilesCount" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```csharp
private void ResetFilesCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput">FilesCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount">FilesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilesCountInput`<sup>Optional</sup> <a name="FilesCountInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```csharp
public double FilesCountInput { get; }
```

- *Type:* double

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```csharp
public string SourceUrlInput { get; }
```

- *Type:* string

---

##### `FilesCount`<sup>Required</sup> <a name="FilesCount" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```csharp
public double FilesCount { get; }
```

- *Type:* double

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```csharp
public AppEngineStandardAppVersionDeploymentZip InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

---


### AppEngineStandardAppVersionEntrypointOutputReference <a name="AppEngineStandardAppVersionEntrypointOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionEntrypointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shellInput">ShellInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shell">Shell</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShellInput`<sup>Optional</sup> <a name="ShellInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shellInput"></a>

```csharp
public string ShellInput { get; }
```

- *Type:* string

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shell"></a>

```csharp
public string Shell { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.internalValue"></a>

```csharp
public AppEngineStandardAppVersionEntrypoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

---


### AppEngineStandardAppVersionHandlersList <a name="AppEngineStandardAppVersionHandlersList" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionHandlersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get"></a>

```csharp
private AppEngineStandardAppVersionHandlersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.internalValue"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionHandlers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>[]

---


### AppEngineStandardAppVersionHandlersOutputReference <a name="AppEngineStandardAppVersionHandlersOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionHandlersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript">PutScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles">PutStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction">ResetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">ResetRedirectHttpResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles">ResetStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex">ResetUrlRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScript` <a name="PutScript" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript"></a>

```csharp
private void PutScript(AppEngineStandardAppVersionHandlersScript Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

---

##### `PutStaticFiles` <a name="PutStaticFiles" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles"></a>

```csharp
private void PutStaticFiles(AppEngineStandardAppVersionHandlersStaticFiles Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `ResetAuthFailAction` <a name="ResetAuthFailAction" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```csharp
private void ResetAuthFailAction()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetLogin"></a>

```csharp
private void ResetLogin()
```

##### `ResetRedirectHttpResponseCode` <a name="ResetRedirectHttpResponseCode" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```csharp
private void ResetRedirectHttpResponseCode()
```

##### `ResetScript` <a name="ResetScript" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetScript"></a>

```csharp
private void ResetScript()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```csharp
private void ResetSecurityLevel()
```

##### `ResetStaticFiles` <a name="ResetStaticFiles" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles"></a>

```csharp
private void ResetStaticFiles()
```

##### `ResetUrlRegex` <a name="ResetUrlRegex" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex"></a>

```csharp
private void ResetUrlRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.script">Script</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference">AppEngineStandardAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference">AppEngineStandardAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput">AuthFailActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.loginInput">LoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">RedirectHttpResponseCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.scriptInput">ScriptInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput">StaticFilesInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput">UrlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailAction">AuthFailAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegex">UrlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.script"></a>

```csharp
public AppEngineStandardAppVersionHandlersScriptOutputReference Script { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference">AppEngineStandardAppVersionHandlersScriptOutputReference</a>

---

##### `StaticFiles`<sup>Required</sup> <a name="StaticFiles" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFiles"></a>

```csharp
public AppEngineStandardAppVersionHandlersStaticFilesOutputReference StaticFiles { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference">AppEngineStandardAppVersionHandlersStaticFilesOutputReference</a>

---

##### `AuthFailActionInput`<sup>Optional</sup> <a name="AuthFailActionInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```csharp
public string AuthFailActionInput { get; }
```

- *Type:* string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.loginInput"></a>

```csharp
public string LoginInput { get; }
```

- *Type:* string

---

##### `RedirectHttpResponseCodeInput`<sup>Optional</sup> <a name="RedirectHttpResponseCodeInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```csharp
public string RedirectHttpResponseCodeInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.scriptInput"></a>

```csharp
public AppEngineStandardAppVersionHandlersScript ScriptInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```csharp
public string SecurityLevelInput { get; }
```

- *Type:* string

---

##### `StaticFilesInput`<sup>Optional</sup> <a name="StaticFilesInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```csharp
public AppEngineStandardAppVersionHandlersStaticFiles StaticFilesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `UrlRegexInput`<sup>Optional</sup> <a name="UrlRegexInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```csharp
public string UrlRegexInput { get; }
```

- *Type:* string

---

##### `AuthFailAction`<sup>Required</sup> <a name="AuthFailAction" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailAction"></a>

```csharp
public string AuthFailAction { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `RedirectHttpResponseCode`<sup>Required</sup> <a name="RedirectHttpResponseCode" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```csharp
public string RedirectHttpResponseCode { get; }
```

- *Type:* string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; }
```

- *Type:* string

---

##### `UrlRegex`<sup>Required</sup> <a name="UrlRegex" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegex"></a>

```csharp
public string UrlRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionHandlers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>

---


### AppEngineStandardAppVersionHandlersScriptOutputReference <a name="AppEngineStandardAppVersionHandlersScriptOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionHandlersScriptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath">ScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```csharp
public string ScriptPathInput { get; }
```

- *Type:* string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```csharp
public string ScriptPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```csharp
public AppEngineStandardAppVersionHandlersScript InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

---


### AppEngineStandardAppVersionHandlersStaticFilesOutputReference <a name="AppEngineStandardAppVersionHandlersStaticFilesOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionHandlersStaticFilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">ResetApplicationReadable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType">ResetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">ResetRequireMatchingFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">ResetUploadPathRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationReadable` <a name="ResetApplicationReadable" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```csharp
private void ResetApplicationReadable()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```csharp
private void ResetHttpHeaders()
```

##### `ResetMimeType` <a name="ResetMimeType" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```csharp
private void ResetMimeType()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRequireMatchingFile` <a name="ResetRequireMatchingFile" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```csharp
private void ResetRequireMatchingFile()
```

##### `ResetUploadPathRegex` <a name="ResetUploadPathRegex" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```csharp
private void ResetUploadPathRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">ApplicationReadableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">RequireMatchingFileInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">UploadPathRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">ApplicationReadable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType">MimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">UploadPathRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationReadableInput`<sup>Optional</sup> <a name="ApplicationReadableInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```csharp
public bool|IResolvable ApplicationReadableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```csharp
public string ExpirationInput { get; }
```

- *Type:* string

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```csharp
public string MimeTypeInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RequireMatchingFileInput`<sup>Optional</sup> <a name="RequireMatchingFileInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```csharp
public bool|IResolvable RequireMatchingFileInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UploadPathRegexInput`<sup>Optional</sup> <a name="UploadPathRegexInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```csharp
public string UploadPathRegexInput { get; }
```

- *Type:* string

---

##### `ApplicationReadable`<sup>Required</sup> <a name="ApplicationReadable" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```csharp
public bool|IResolvable ApplicationReadable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```csharp
public string MimeType { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RequireMatchingFile`<sup>Required</sup> <a name="RequireMatchingFile" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```csharp
public bool|IResolvable RequireMatchingFile { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UploadPathRegex`<sup>Required</sup> <a name="UploadPathRegex" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```csharp
public string UploadPathRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```csharp
public AppEngineStandardAppVersionHandlersStaticFiles InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

---


### AppEngineStandardAppVersionLibrariesList <a name="AppEngineStandardAppVersionLibrariesList" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionLibrariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get"></a>

```csharp
private AppEngineStandardAppVersionLibrariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.internalValue"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionLibraries[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>[]

---


### AppEngineStandardAppVersionLibrariesOutputReference <a name="AppEngineStandardAppVersionLibrariesOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionLibrariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionLibraries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>

---


### AppEngineStandardAppVersionManualScalingOutputReference <a name="AppEngineStandardAppVersionManualScalingOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionManualScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput">InstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instances">Instances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput"></a>

```csharp
public double InstancesInput { get; }
```

- *Type:* double

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instances"></a>

```csharp
public double Instances { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.internalValue"></a>

```csharp
public AppEngineStandardAppVersionManualScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

---


### AppEngineStandardAppVersionTimeoutsOutputReference <a name="AppEngineStandardAppVersionTimeoutsOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppEngineStandardAppVersionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

---


### AppEngineStandardAppVersionVpcAccessConnectorOutputReference <a name="AppEngineStandardAppVersionVpcAccessConnectorOutputReference" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineStandardAppVersionVpcAccessConnectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting">ResetEgressSetting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEgressSetting` <a name="ResetEgressSetting" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting"></a>

```csharp
private void ResetEgressSetting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput">EgressSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting">EgressSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressSettingInput`<sup>Optional</sup> <a name="EgressSettingInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput"></a>

```csharp
public string EgressSettingInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EgressSetting`<sup>Required</sup> <a name="EgressSetting" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting"></a>

```csharp
public string EgressSetting { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```csharp
public AppEngineStandardAppVersionVpcAccessConnector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

---



