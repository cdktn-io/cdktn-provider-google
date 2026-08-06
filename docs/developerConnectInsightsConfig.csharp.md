# `developerConnectInsightsConfig` Submodule <a name="`developerConnectInsightsConfig` Submodule" id="@cdktn/provider-google.developerConnectInsightsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeveloperConnectInsightsConfig <a name="DeveloperConnectInsightsConfig" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config google_developer_connect_insights_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfig(Construct Scope, string Id, DeveloperConnectInsightsConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig">DeveloperConnectInsightsConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig">DeveloperConnectInsightsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.putArtifactConfigs">PutArtifactConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.putTargetProjects">PutTargetProjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetAppHubApplication">ResetAppHubApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetArtifactConfigs">ResetArtifactConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetTargetProjects">ResetTargetProjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArtifactConfigs` <a name="PutArtifactConfigs" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.putArtifactConfigs"></a>

```csharp
private void PutArtifactConfigs(IResolvable|DeveloperConnectInsightsConfigArtifactConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.putArtifactConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs">DeveloperConnectInsightsConfigArtifactConfigs</a>[]

---

##### `PutTargetProjects` <a name="PutTargetProjects" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.putTargetProjects"></a>

```csharp
private void PutTargetProjects(DeveloperConnectInsightsConfigTargetProjects Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.putTargetProjects.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjects">DeveloperConnectInsightsConfigTargetProjects</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(DeveloperConnectInsightsConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts">DeveloperConnectInsightsConfigTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAppHubApplication` <a name="ResetAppHubApplication" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetAppHubApplication"></a>

```csharp
private void ResetAppHubApplication()
```

##### `ResetArtifactConfigs` <a name="ResetArtifactConfigs" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetArtifactConfigs"></a>

```csharp
private void ResetArtifactConfigs()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTargetProjects` <a name="ResetTargetProjects" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetTargetProjects"></a>

```csharp
private void ResetTargetProjects()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DeveloperConnectInsightsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DeveloperConnectInsightsConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DeveloperConnectInsightsConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DeveloperConnectInsightsConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DeveloperConnectInsightsConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DeveloperConnectInsightsConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeveloperConnectInsightsConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeveloperConnectInsightsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DeveloperConnectInsightsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.artifactConfigs">ArtifactConfigs</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList">DeveloperConnectInsightsConfigArtifactConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList">DeveloperConnectInsightsConfigErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.reconciling">Reconciling</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.runtimeConfigs">RuntimeConfigs</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList">DeveloperConnectInsightsConfigRuntimeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.targetProjects">TargetProjects</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference">DeveloperConnectInsightsConfigTargetProjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference">DeveloperConnectInsightsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.appHubApplicationInput">AppHubApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.artifactConfigsInput">ArtifactConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs">DeveloperConnectInsightsConfigArtifactConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.insightsConfigIdInput">InsightsConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.targetProjectsInput">TargetProjectsInput</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjects">DeveloperConnectInsightsConfigTargetProjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts">DeveloperConnectInsightsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.appHubApplication">AppHubApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.insightsConfigId">InsightsConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ArtifactConfigs`<sup>Required</sup> <a name="ArtifactConfigs" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.artifactConfigs"></a>

```csharp
public DeveloperConnectInsightsConfigArtifactConfigsList ArtifactConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList">DeveloperConnectInsightsConfigArtifactConfigsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.errors"></a>

```csharp
public DeveloperConnectInsightsConfigErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList">DeveloperConnectInsightsConfigErrorsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RuntimeConfigs`<sup>Required</sup> <a name="RuntimeConfigs" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.runtimeConfigs"></a>

```csharp
public DeveloperConnectInsightsConfigRuntimeConfigsList RuntimeConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList">DeveloperConnectInsightsConfigRuntimeConfigsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetProjects`<sup>Required</sup> <a name="TargetProjects" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.targetProjects"></a>

```csharp
public DeveloperConnectInsightsConfigTargetProjectsOutputReference TargetProjects { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference">DeveloperConnectInsightsConfigTargetProjectsOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.timeouts"></a>

```csharp
public DeveloperConnectInsightsConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference">DeveloperConnectInsightsConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AppHubApplicationInput`<sup>Optional</sup> <a name="AppHubApplicationInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.appHubApplicationInput"></a>

```csharp
public string AppHubApplicationInput { get; }
```

- *Type:* string

---

##### `ArtifactConfigsInput`<sup>Optional</sup> <a name="ArtifactConfigsInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.artifactConfigsInput"></a>

```csharp
public IResolvable|DeveloperConnectInsightsConfigArtifactConfigs[] ArtifactConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs">DeveloperConnectInsightsConfigArtifactConfigs</a>[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsightsConfigIdInput`<sup>Optional</sup> <a name="InsightsConfigIdInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.insightsConfigIdInput"></a>

```csharp
public string InsightsConfigIdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TargetProjectsInput`<sup>Optional</sup> <a name="TargetProjectsInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.targetProjectsInput"></a>

```csharp
public DeveloperConnectInsightsConfigTargetProjects TargetProjectsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjects">DeveloperConnectInsightsConfigTargetProjects</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|DeveloperConnectInsightsConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts">DeveloperConnectInsightsConfigTimeouts</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AppHubApplication`<sup>Required</sup> <a name="AppHubApplication" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.appHubApplication"></a>

```csharp
public string AppHubApplication { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InsightsConfigId`<sup>Required</sup> <a name="InsightsConfigId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.insightsConfigId"></a>

```csharp
public string InsightsConfigId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeveloperConnectInsightsConfigArtifactConfigs <a name="DeveloperConnectInsightsConfigArtifactConfigs" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigArtifactConfigs {
    DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis GoogleArtifactAnalysis = null,
    DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry GoogleArtifactRegistry = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactAnalysis">GoogleArtifactAnalysis</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | google_artifact_analysis block. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactRegistry">GoogleArtifactRegistry</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | google_artifact_registry block. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs.property.uri">Uri</a></code> | <code>string</code> | The URI of the artifact that is deployed. |

---

##### `GoogleArtifactAnalysis`<sup>Optional</sup> <a name="GoogleArtifactAnalysis" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactAnalysis"></a>

```csharp
public DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis GoogleArtifactAnalysis { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

google_artifact_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#google_artifact_analysis DeveloperConnectInsightsConfig#google_artifact_analysis}

---

##### `GoogleArtifactRegistry`<sup>Optional</sup> <a name="GoogleArtifactRegistry" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactRegistry"></a>

```csharp
public DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry GoogleArtifactRegistry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

google_artifact_registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#google_artifact_registry DeveloperConnectInsightsConfig#google_artifact_registry}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI of the artifact that is deployed.

e.g. 'us-docker.pkg.dev/my-project/my-repo/image'.
The URI does not include the tag / digest because it captures a lineage of
artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#uri DeveloperConnectInsightsConfig#uri}

---

### DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis <a name="DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis {
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.property.projectId">ProjectId</a></code> | <code>string</code> | The project id of the project where the provenance is stored. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project id of the project where the provenance is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#project_id DeveloperConnectInsightsConfig#project_id}

---

### DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry <a name="DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry {
    string ArtifactRegistryPackage,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.artifactRegistryPackage">ArtifactRegistryPackage</a></code> | <code>string</code> | The name of the artifact registry package. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.projectId">ProjectId</a></code> | <code>string</code> | The host project of Artifact Registry. |

---

##### `ArtifactRegistryPackage`<sup>Required</sup> <a name="ArtifactRegistryPackage" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.artifactRegistryPackage"></a>

```csharp
public string ArtifactRegistryPackage { get; set; }
```

- *Type:* string

The name of the artifact registry package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#artifact_registry_package DeveloperConnectInsightsConfig#artifact_registry_package}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The host project of Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#project_id DeveloperConnectInsightsConfig#project_id}

---

### DeveloperConnectInsightsConfigConfig <a name="DeveloperConnectInsightsConfigConfig" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InsightsConfigId,
    string Location,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string AppHubApplication = null,
    IResolvable|DeveloperConnectInsightsConfigArtifactConfigs[] ArtifactConfigs = null,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    DeveloperConnectInsightsConfigTargetProjects TargetProjects = null,
    DeveloperConnectInsightsConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.insightsConfigId">InsightsConfigId</a></code> | <code>string</code> | ID of the requesting InsightsConfig. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.appHubApplication">AppHubApplication</a></code> | <code>string</code> | The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application}. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.artifactConfigs">ArtifactConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs">DeveloperConnectInsightsConfigArtifactConfigs</a>[]</code> | artifact_configs block. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#id DeveloperConnectInsightsConfig#id}. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of labels associated with an InsightsConfig. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#project DeveloperConnectInsightsConfig#project}. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.targetProjects">TargetProjects</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjects">DeveloperConnectInsightsConfigTargetProjects</a></code> | target_projects block. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts">DeveloperConnectInsightsConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InsightsConfigId`<sup>Required</sup> <a name="InsightsConfigId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.insightsConfigId"></a>

```csharp
public string InsightsConfigId { get; set; }
```

- *Type:* string

ID of the requesting InsightsConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#insights_config_id DeveloperConnectInsightsConfig#insights_config_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#location DeveloperConnectInsightsConfig#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#annotations DeveloperConnectInsightsConfig#annotations}

---

##### `AppHubApplication`<sup>Optional</sup> <a name="AppHubApplication" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.appHubApplication"></a>

```csharp
public string AppHubApplication { get; set; }
```

- *Type:* string

The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#app_hub_application DeveloperConnectInsightsConfig#app_hub_application}

---

##### `ArtifactConfigs`<sup>Optional</sup> <a name="ArtifactConfigs" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.artifactConfigs"></a>

```csharp
public IResolvable|DeveloperConnectInsightsConfigArtifactConfigs[] ArtifactConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs">DeveloperConnectInsightsConfigArtifactConfigs</a>[]

artifact_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#artifact_configs DeveloperConnectInsightsConfig#artifact_configs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#deletion_policy DeveloperConnectInsightsConfig#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#id DeveloperConnectInsightsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of labels associated with an InsightsConfig.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#labels DeveloperConnectInsightsConfig#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#project DeveloperConnectInsightsConfig#project}.

---

##### `TargetProjects`<sup>Optional</sup> <a name="TargetProjects" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.targetProjects"></a>

```csharp
public DeveloperConnectInsightsConfigTargetProjects TargetProjects { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjects">DeveloperConnectInsightsConfigTargetProjects</a>

target_projects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#target_projects DeveloperConnectInsightsConfig#target_projects}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigConfig.property.timeouts"></a>

```csharp
public DeveloperConnectInsightsConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts">DeveloperConnectInsightsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#timeouts DeveloperConnectInsightsConfig#timeouts}

---

### DeveloperConnectInsightsConfigErrors <a name="DeveloperConnectInsightsConfigErrors" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigErrors {

};
```


### DeveloperConnectInsightsConfigErrorsDetails <a name="DeveloperConnectInsightsConfigErrorsDetails" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigErrorsDetails {

};
```


### DeveloperConnectInsightsConfigRuntimeConfigs <a name="DeveloperConnectInsightsConfigRuntimeConfigs" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigRuntimeConfigs {

};
```


### DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload <a name="DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload {

};
```


### DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload <a name="DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload {

};
```


### DeveloperConnectInsightsConfigTargetProjects <a name="DeveloperConnectInsightsConfigTargetProjects" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjects.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigTargetProjects {
    string[] ProjectIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjects.property.projectIds">ProjectIds</a></code> | <code>string[]</code> | The project IDs. Format {project}. |

---

##### `ProjectIds`<sup>Optional</sup> <a name="ProjectIds" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjects.property.projectIds"></a>

```csharp
public string[] ProjectIds { get; set; }
```

- *Type:* string[]

The project IDs. Format {project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#project_ids DeveloperConnectInsightsConfig#project_ids}

---

### DeveloperConnectInsightsConfigTimeouts <a name="DeveloperConnectInsightsConfigTimeouts" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#create DeveloperConnectInsightsConfig#create}. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#delete DeveloperConnectInsightsConfig#delete}. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#update DeveloperConnectInsightsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#create DeveloperConnectInsightsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#delete DeveloperConnectInsightsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/developer_connect_insights_config#update DeveloperConnectInsightsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference <a name="DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

---


### DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference <a name="DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackageInput">ArtifactRegistryPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackage">ArtifactRegistryPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactRegistryPackageInput`<sup>Optional</sup> <a name="ArtifactRegistryPackageInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackageInput"></a>

```csharp
public string ArtifactRegistryPackageInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ArtifactRegistryPackage`<sup>Required</sup> <a name="ArtifactRegistryPackage" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackage"></a>

```csharp
public string ArtifactRegistryPackage { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

---


### DeveloperConnectInsightsConfigArtifactConfigsList <a name="DeveloperConnectInsightsConfigArtifactConfigsList" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigArtifactConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.get"></a>

```csharp
private DeveloperConnectInsightsConfigArtifactConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs">DeveloperConnectInsightsConfigArtifactConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsList.property.internalValue"></a>

```csharp
public IResolvable|DeveloperConnectInsightsConfigArtifactConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs">DeveloperConnectInsightsConfigArtifactConfigs</a>[]

---


### DeveloperConnectInsightsConfigArtifactConfigsOutputReference <a name="DeveloperConnectInsightsConfigArtifactConfigsOutputReference" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigArtifactConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis">PutGoogleArtifactAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry">PutGoogleArtifactRegistry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactAnalysis">ResetGoogleArtifactAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactRegistry">ResetGoogleArtifactRegistry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGoogleArtifactAnalysis` <a name="PutGoogleArtifactAnalysis" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis"></a>

```csharp
private void PutGoogleArtifactAnalysis(DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

---

##### `PutGoogleArtifactRegistry` <a name="PutGoogleArtifactRegistry" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry"></a>

```csharp
private void PutGoogleArtifactRegistry(DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

---

##### `ResetGoogleArtifactAnalysis` <a name="ResetGoogleArtifactAnalysis" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactAnalysis"></a>

```csharp
private void ResetGoogleArtifactAnalysis()
```

##### `ResetGoogleArtifactRegistry` <a name="ResetGoogleArtifactRegistry" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactRegistry"></a>

```csharp
private void ResetGoogleArtifactRegistry()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysis">GoogleArtifactAnalysis</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistry">GoogleArtifactRegistry</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysisInput">GoogleArtifactAnalysisInput</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistryInput">GoogleArtifactRegistryInput</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs">DeveloperConnectInsightsConfigArtifactConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoogleArtifactAnalysis`<sup>Required</sup> <a name="GoogleArtifactAnalysis" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysis"></a>

```csharp
public DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference GoogleArtifactAnalysis { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference</a>

---

##### `GoogleArtifactRegistry`<sup>Required</sup> <a name="GoogleArtifactRegistry" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistry"></a>

```csharp
public DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference GoogleArtifactRegistry { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference</a>

---

##### `GoogleArtifactAnalysisInput`<sup>Optional</sup> <a name="GoogleArtifactAnalysisInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysisInput"></a>

```csharp
public DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis GoogleArtifactAnalysisInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

---

##### `GoogleArtifactRegistryInput`<sup>Optional</sup> <a name="GoogleArtifactRegistryInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistryInput"></a>

```csharp
public DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry GoogleArtifactRegistryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeveloperConnectInsightsConfigArtifactConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigArtifactConfigs">DeveloperConnectInsightsConfigArtifactConfigs</a>

---


### DeveloperConnectInsightsConfigErrorsDetailsList <a name="DeveloperConnectInsightsConfigErrorsDetailsList" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigErrorsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.get"></a>

```csharp
private DeveloperConnectInsightsConfigErrorsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DeveloperConnectInsightsConfigErrorsDetailsOutputReference <a name="DeveloperConnectInsightsConfigErrorsDetailsOutputReference" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigErrorsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.detailMessage">DetailMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetails">DeveloperConnectInsightsConfigErrorsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DetailMessage`<sup>Required</sup> <a name="DetailMessage" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.detailMessage"></a>

```csharp
public string DetailMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectInsightsConfigErrorsDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetails">DeveloperConnectInsightsConfigErrorsDetails</a>

---


### DeveloperConnectInsightsConfigErrorsList <a name="DeveloperConnectInsightsConfigErrorsList" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.get"></a>

```csharp
private DeveloperConnectInsightsConfigErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DeveloperConnectInsightsConfigErrorsOutputReference <a name="DeveloperConnectInsightsConfigErrorsOutputReference" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList">DeveloperConnectInsightsConfigErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrors">DeveloperConnectInsightsConfigErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.details"></a>

```csharp
public DeveloperConnectInsightsConfigErrorsDetailsList Details { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsDetailsList">DeveloperConnectInsightsConfigErrorsDetailsList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrorsOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectInsightsConfigErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigErrors">DeveloperConnectInsightsConfigErrors</a>

---


### DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList <a name="DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get"></a>

```csharp
private DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference <a name="DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.criticality">Criticality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.workload">Workload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload">DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Criticality`<sup>Required</sup> <a name="Criticality" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.criticality"></a>

```csharp
public string Criticality { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Workload`<sup>Required</sup> <a name="Workload" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.workload"></a>

```csharp
public string Workload { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload">DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload</a>

---


### DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList <a name="DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get"></a>

```csharp
private DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference <a name="DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.deployment">Deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload">DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.deployment"></a>

```csharp
public string Deployment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload">DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload</a>

---


### DeveloperConnectInsightsConfigRuntimeConfigsList <a name="DeveloperConnectInsightsConfigRuntimeConfigsList" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigRuntimeConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.get"></a>

```csharp
private DeveloperConnectInsightsConfigRuntimeConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DeveloperConnectInsightsConfigRuntimeConfigsOutputReference <a name="DeveloperConnectInsightsConfigRuntimeConfigsOutputReference" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigRuntimeConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.appHubWorkload">AppHubWorkload</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList">DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.gkeWorkload">GkeWorkload</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList">DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigs">DeveloperConnectInsightsConfigRuntimeConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppHubWorkload`<sup>Required</sup> <a name="AppHubWorkload" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.appHubWorkload"></a>

```csharp
public DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList AppHubWorkload { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList">DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList</a>

---

##### `GkeWorkload`<sup>Required</sup> <a name="GkeWorkload" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.gkeWorkload"></a>

```csharp
public DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList GkeWorkload { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList">DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectInsightsConfigRuntimeConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigRuntimeConfigs">DeveloperConnectInsightsConfigRuntimeConfigs</a>

---


### DeveloperConnectInsightsConfigTargetProjectsOutputReference <a name="DeveloperConnectInsightsConfigTargetProjectsOutputReference" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigTargetProjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.resetProjectIds">ResetProjectIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectIds` <a name="ResetProjectIds" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.resetProjectIds"></a>

```csharp
private void ResetProjectIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.property.projectIdsInput">ProjectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.property.projectIds">ProjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjects">DeveloperConnectInsightsConfigTargetProjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectIdsInput`<sup>Optional</sup> <a name="ProjectIdsInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.property.projectIdsInput"></a>

```csharp
public string[] ProjectIdsInput { get; }
```

- *Type:* string[]

---

##### `ProjectIds`<sup>Required</sup> <a name="ProjectIds" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.property.projectIds"></a>

```csharp
public string[] ProjectIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjectsOutputReference.property.internalValue"></a>

```csharp
public DeveloperConnectInsightsConfigTargetProjects InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTargetProjects">DeveloperConnectInsightsConfigTargetProjects</a>

---


### DeveloperConnectInsightsConfigTimeoutsOutputReference <a name="DeveloperConnectInsightsConfigTimeoutsOutputReference" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DeveloperConnectInsightsConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts">DeveloperConnectInsightsConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeveloperConnectInsightsConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.developerConnectInsightsConfig.DeveloperConnectInsightsConfigTimeouts">DeveloperConnectInsightsConfigTimeouts</a>

---



