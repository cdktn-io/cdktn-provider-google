# `artifactRegistryProjectConfig` Submodule <a name="`artifactRegistryProjectConfig` Submodule" id="@cdktn/provider-google.artifactRegistryProjectConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryProjectConfig <a name="ArtifactRegistryProjectConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config google_artifact_registry_project_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryProjectConfig(Construct Scope, string Id, ArtifactRegistryProjectConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig">ArtifactRegistryProjectConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig">ArtifactRegistryProjectConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig">PutPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetPlatformLogsConfig">ResetPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPlatformLogsConfig` <a name="PutPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig"></a>

```csharp
private void PutPlatformLogsConfig(ArtifactRegistryProjectConfigPlatformLogsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(ArtifactRegistryProjectConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetPlatformLogsConfig` <a name="ResetPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetPlatformLogsConfig"></a>

```csharp
private void ResetPlatformLogsConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ArtifactRegistryProjectConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ArtifactRegistryProjectConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ArtifactRegistryProjectConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ArtifactRegistryProjectConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArtifactRegistryProjectConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArtifactRegistryProjectConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryProjectConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfig">PlatformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference">ArtifactRegistryProjectConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfigInput">PlatformLogsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlatformLogsConfig`<sup>Required</sup> <a name="PlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfig"></a>

```csharp
public ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference PlatformLogsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeouts"></a>

```csharp
public ArtifactRegistryProjectConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference">ArtifactRegistryProjectConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PlatformLogsConfigInput`<sup>Optional</sup> <a name="PlatformLogsConfigInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfigInput"></a>

```csharp
public ArtifactRegistryProjectConfigPlatformLogsConfig PlatformLogsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|ArtifactRegistryProjectConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryProjectConfigConfig <a name="ArtifactRegistryProjectConfigConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryProjectConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string Location = null,
    ArtifactRegistryProjectConfigPlatformLogsConfig PlatformLogsConfig = null,
    string Project = null,
    ArtifactRegistryProjectConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#id ArtifactRegistryProjectConfig#id}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this config is located in. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.platformLogsConfig">PlatformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | platform_logs_config block. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#project ArtifactRegistryProjectConfig#project}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#id ArtifactRegistryProjectConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this config is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#location ArtifactRegistryProjectConfig#location}

---

##### `PlatformLogsConfig`<sup>Optional</sup> <a name="PlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.platformLogsConfig"></a>

```csharp
public ArtifactRegistryProjectConfigPlatformLogsConfig PlatformLogsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

platform_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#platform_logs_config ArtifactRegistryProjectConfig#platform_logs_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#project ArtifactRegistryProjectConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.timeouts"></a>

```csharp
public ArtifactRegistryProjectConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#timeouts ArtifactRegistryProjectConfig#timeouts}

---

### ArtifactRegistryProjectConfigPlatformLogsConfig <a name="ArtifactRegistryProjectConfigPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryProjectConfigPlatformLogsConfig {
    string LoggingState = null,
    string SeverityLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState">LoggingState</a></code> | <code>string</code> | The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel">SeverityLevel</a></code> | <code>string</code> | The severity level for the logs. |

---

##### `LoggingState`<sup>Optional</sup> <a name="LoggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState"></a>

```csharp
public string LoggingState { get; set; }
```

- *Type:* string

The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#logging_state ArtifactRegistryProjectConfig#logging_state}

---

##### `SeverityLevel`<sup>Optional</sup> <a name="SeverityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel"></a>

```csharp
public string SeverityLevel { get; set; }
```

- *Type:* string

The severity level for the logs.

Logs will be generated if their
severity level is >= than the value of the severity level mentioned here. Possible values: ["DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#severity_level ArtifactRegistryProjectConfig#severity_level}

---

### ArtifactRegistryProjectConfigTimeouts <a name="ArtifactRegistryProjectConfigTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryProjectConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#create ArtifactRegistryProjectConfig#create}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#delete ArtifactRegistryProjectConfig#delete}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#update ArtifactRegistryProjectConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#create ArtifactRegistryProjectConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#delete ArtifactRegistryProjectConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/artifact_registry_project_config#update ArtifactRegistryProjectConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference <a name="ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState">ResetLoggingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel">ResetSeverityLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoggingState` <a name="ResetLoggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState"></a>

```csharp
private void ResetLoggingState()
```

##### `ResetSeverityLevel` <a name="ResetSeverityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel"></a>

```csharp
private void ResetSeverityLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput">LoggingStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput">SeverityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState">LoggingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel">SeverityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingStateInput`<sup>Optional</sup> <a name="LoggingStateInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput"></a>

```csharp
public string LoggingStateInput { get; }
```

- *Type:* string

---

##### `SeverityLevelInput`<sup>Optional</sup> <a name="SeverityLevelInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput"></a>

```csharp
public string SeverityLevelInput { get; }
```

- *Type:* string

---

##### `LoggingState`<sup>Required</sup> <a name="LoggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState"></a>

```csharp
public string LoggingState { get; }
```

- *Type:* string

---

##### `SeverityLevel`<sup>Required</sup> <a name="SeverityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel"></a>

```csharp
public string SeverityLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue"></a>

```csharp
public ArtifactRegistryProjectConfigPlatformLogsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---


### ArtifactRegistryProjectConfigTimeoutsOutputReference <a name="ArtifactRegistryProjectConfigTimeoutsOutputReference" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryProjectConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ArtifactRegistryProjectConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

---



