# `artifactRegistryRule` Submodule <a name="`artifactRegistryRule` Submodule" id="@cdktn/provider-google.artifactRegistryRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryRule <a name="ArtifactRegistryRule" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule google_artifact_registry_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryRule(Construct Scope, string Id, ArtifactRegistryRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig">ArtifactRegistryRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig">ArtifactRegistryRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetOperation">ResetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetPackageId">ResetPackageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putCondition"></a>

```csharp
private void PutCondition(ArtifactRegistryRuleCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ArtifactRegistryRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetOperation` <a name="ResetOperation" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetOperation"></a>

```csharp
private void ResetOperation()
```

##### `ResetPackageId` <a name="ResetPackageId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetPackageId"></a>

```csharp
private void ResetPackageId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ArtifactRegistryRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ArtifactRegistryRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ArtifactRegistryRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ArtifactRegistryRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ArtifactRegistryRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ArtifactRegistryRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArtifactRegistryRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArtifactRegistryRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference">ArtifactRegistryRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference">ArtifactRegistryRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.packageIdInput">PackageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.ruleIdInput">RuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.packageId">PackageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.condition"></a>

```csharp
public ArtifactRegistryRuleConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference">ArtifactRegistryRuleConditionOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.timeouts"></a>

```csharp
public ArtifactRegistryRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference">ArtifactRegistryRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.conditionInput"></a>

```csharp
public ArtifactRegistryRuleCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `PackageIdInput`<sup>Optional</sup> <a name="PackageIdInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.packageIdInput"></a>

```csharp
public string PackageIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.ruleIdInput"></a>

```csharp
public string RuleIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.timeoutsInput"></a>

```csharp
public IResolvable|ArtifactRegistryRuleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `PackageId`<sup>Required</sup> <a name="PackageId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.packageId"></a>

```csharp
public string PackageId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryRuleCondition <a name="ArtifactRegistryRuleCondition" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryRuleCondition {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.description">Description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.location">Location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.title">Title</a></code> | <code>string</code> | Optional. Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#expression ArtifactRegistryRule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which
describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#description ArtifactRegistryRule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Optional.

String indicating the location of the expression for error
reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#location ArtifactRegistryRule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Optional. Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#title ArtifactRegistryRule#title}

---

### ArtifactRegistryRuleConfig <a name="ArtifactRegistryRuleConfig" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RepositoryId,
    string RuleId,
    string Action = null,
    ArtifactRegistryRuleCondition Condition = null,
    string DeletionPolicy = null,
    string Id = null,
    string Location = null,
    string Operation = null,
    string PackageId = null,
    string Project = null,
    ArtifactRegistryRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.ruleId">RuleId</a></code> | <code>string</code> | The rule id to use for this repository. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.action">Action</a></code> | <code>string</code> | The action this rule takes. Possible values: ["ACTION_UNSPECIFIED", "ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#id ArtifactRegistryRule#id}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.location">Location</a></code> | <code>string</code> | The name of the repository's location. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.operation">Operation</a></code> | <code>string</code> | The operation the rule applies to. Possible values: ["OPERATION_UNSPECIFIED", "DOWNLOAD"]. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.packageId">PackageId</a></code> | <code>string</code> | The package ID the rule applies to. If empty, this rule applies to all packages inside the repository. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#project ArtifactRegistryRule#project}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#repository_id ArtifactRegistryRule#repository_id}

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.ruleId"></a>

```csharp
public string RuleId { get; set; }
```

- *Type:* string

The rule id to use for this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#rule_id ArtifactRegistryRule#rule_id}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The action this rule takes. Possible values: ["ACTION_UNSPECIFIED", "ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#action ArtifactRegistryRule#action}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.condition"></a>

```csharp
public ArtifactRegistryRuleCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#condition ArtifactRegistryRule#condition}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#deletion_policy ArtifactRegistryRule#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#id ArtifactRegistryRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the repository's location.

In addition to specific regions,
special values for multi-region locations are 'asia', 'europe', and 'us'.
See [here](https://cloud.google.com/artifact-registry/docs/repositories/repo-locations),
or use the
[google_artifact_registry_locations](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/artifact_registry_locations)
data source for possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#location ArtifactRegistryRule#location}

---

##### `Operation`<sup>Optional</sup> <a name="Operation" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

The operation the rule applies to. Possible values: ["OPERATION_UNSPECIFIED", "DOWNLOAD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#operation ArtifactRegistryRule#operation}

---

##### `PackageId`<sup>Optional</sup> <a name="PackageId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.packageId"></a>

```csharp
public string PackageId { get; set; }
```

- *Type:* string

The package ID the rule applies to. If empty, this rule applies to all packages inside the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#package_id ArtifactRegistryRule#package_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#project ArtifactRegistryRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.timeouts"></a>

```csharp
public ArtifactRegistryRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#timeouts ArtifactRegistryRule#timeouts}

---

### ArtifactRegistryRuleTimeouts <a name="ArtifactRegistryRuleTimeouts" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#create ArtifactRegistryRule#create}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#delete ArtifactRegistryRule#delete}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#update ArtifactRegistryRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#create ArtifactRegistryRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#delete ArtifactRegistryRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/artifact_registry_rule#update ArtifactRegistryRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryRuleConditionOutputReference <a name="ArtifactRegistryRuleConditionOutputReference" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.internalValue"></a>

```csharp
public ArtifactRegistryRuleCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a>

---


### ArtifactRegistryRuleTimeoutsOutputReference <a name="ArtifactRegistryRuleTimeoutsOutputReference" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ArtifactRegistryRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ArtifactRegistryRuleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a>

---



